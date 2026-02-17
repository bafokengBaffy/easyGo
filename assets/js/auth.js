// @ts-nocheck
// auth.js - Authentication handling
let users = JSON.parse(localStorage.getItem('users')) || [];

// Demo admin credentials
const adminCredentials = {
    email: 'admin@easygo.co.za',
    password: 'admin123',
    name: 'Bongani Mkhize',
    role: 'admin'
};

// Initialize demo users if none exist
if (users.length === 0) {
    const demoUsers = [
        {
            id: 1,
            name: 'Thabo Nkosi',
            email: 'thabo.nkosi@gmail.com',
            phone: '+27 71 234 5678',
            password: 'password123',
            role: 'rider',
            city: 'Johannesburg',
            joined: '2024-01-15',
            trips: 45,
            rating: 4.9
        },
        {
            id: 2,
            name: 'Lerato Molefe',
            email: 'lerato.molefe@gmail.com',
            phone: '+27 83 456 7890',
            password: 'password123',
            role: 'rider',
            city: 'Durban',
            joined: '2024-02-20',
            trips: 23,
            rating: 4.7
        },
        {
            id: 3,
            name: 'Sipho Dlamini',
            email: 'sipho.dlamini@gmail.com',
            phone: '+27 82 345 6789',
            password: 'driver123',
            role: 'driver',
            city: 'Johannesburg',
            joined: '2024-01-10',
            trips: 890,
            rating: 4.8,
            vehicle: 'Toyota Corolla',
            license: 'GP 123-456'
        },
        {
            id: 4,
            name: 'Nomsa Zwane',
            email: 'nomsa.zwane@gmail.com',
            phone: '+27 72 567 8901',
            password: 'driver123',
            role: 'driver',
            city: 'Cape Town',
            joined: '2024-02-05',
            trips: 567,
            rating: 4.9,
            vehicle: 'Hyundai i20',
            license: 'CA 789-012'
        }
    ];
    
    localStorage.setItem('users', JSON.stringify(demoUsers));
    localStorage.setItem('admin', JSON.stringify(adminCredentials));
}

function validateEmail(email) {
    return email.includes('@gmail.com');
}

function validatePassword(password) {
    return password.length >= 8;
}

function showAlert(message, type) {
    // Remove any existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.textContent = message;
    alertDiv.style.marginBottom = '20px';
    alertDiv.style.padding = '12px 20px';
    alertDiv.style.borderRadius = '8px';
    
    if (type === 'success') {
        alertDiv.style.background = '#d4edda';
        alertDiv.style.color = '#155724';
        alertDiv.style.border = '1px solid #c3e6cb';
    } else if (type === 'danger') {
        alertDiv.style.background = '#f8d7da';
        alertDiv.style.color = '#721c24';
        alertDiv.style.border = '1px solid #f5c6cb';
    }
    
    const container = document.querySelector('.login-card') || document.querySelector('.signup-card') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    setTimeout(function() {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 3000);
}

function login(email, password, role) {
    console.log('Login attempt:', email, password, role);
    
    // Check admin login
    if (role === 'admin') {
        const admin = JSON.parse(localStorage.getItem('admin'));
        if (admin && email === admin.email && password === admin.password) {
            localStorage.setItem('currentUser', JSON.stringify({
                name: admin.name,
                email: admin.email,
                role: 'admin'
            }));
            window.location.href = 'admin-panel.html';
            return true;
        }
        showAlert('Invalid admin credentials', 'danger');
        return false;
    }
    
    // Check regular users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(function(u) { 
        return u.email === email && u.password === password && u.role === role; 
    });
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        if (role === 'rider') {
            window.location.href = 'rider-dashboard.html';
        } else if (role === 'driver') {
            window.location.href = 'driver-dashboard.html';
        }
        return true;
    }
    
    showAlert('Invalid email or password', 'danger');
    return false;
}

function signup(userData) {
    console.log('Signup attempt:', userData);
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === userData.email) {
            showAlert('Email already registered', 'danger');
            return false;
        }
    }
    
    // Validate email
    if (!validateEmail(userData.email)) {
        showAlert('Email must be a Gmail address', 'danger');
        return false;
    }
    
    // Validate password
    if (!validatePassword(userData.password)) {
        showAlert('Password must be at least 8 characters', 'danger');
        return false;
    }
    
    // Create new user
    var newUser = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        city: userData.city,
        password: userData.password,
        role: userData.role,
        joined: new Date().toISOString().split('T')[0],
        trips: 0,
        rating: 5.0
    };
    
    // Add driver-specific fields
    if (userData.role === 'driver') {
        newUser.vehicle = userData.vehicle;
        newUser.license = userData.license;
    }
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    showAlert('Account created successfully! Redirecting...', 'success');
    
    setTimeout(function() {
        if (userData.role === 'rider') {
            window.location.href = 'rider-dashboard.html';
        } else {
            window.location.href = 'driver-dashboard.html';
        }
    }, 1500);
    
    return true;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function checkAuth() {
    const user = getCurrentUser();
    const currentPage = window.location.pathname.split('/').pop();
    
    // Public pages that don't require authentication
    const publicPages = ['index.html', 'login.html', 'signup.html', 'about.html', 'contact.html', 'safety.html', 'terms.html', 'privacy.html'];
    
    // Check if current page is public
    for (let i = 0; i < publicPages.length; i++) {
        if (currentPage === publicPages[i]) {
            return true;
        }
    }
    
    // If no user and page is not public, redirect to login
    if (!user) {
        window.location.href = 'login.html';
        return false;
    }
    
    return true;
}
