# 🚗 EasyGo - South Africa's Smart Transportation Platform

![EasyGo Banner](https://img.shields.io/badge/EasyGo-Transportation%20Platform-orange?style=for-the-badge&logo=uber)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-prototype-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

<p align="center">
  <img src="https://img.icons8.com/fluency/96/000000/car.png" alt="EasyGo Logo" width="120" height="120">
</p>

<h3 align="center">Safe • Reliable • Affordable • South African</h3>

<p align="center">
  A modern, responsive web application prototype for a smart transportation platform 
  <br />
  operating throughout South Africa.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-demo-credentials">Demo Credentials</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage-guide">Usage</a>
</p>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Demo Credentials](#-demo-credentials)
- [User Roles](#-user-roles)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Technologies Used](#-technologies-used)
- [South African Integration](#-south-african-integration)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🎯 About The Project

**EasyGo** is a comprehensive frontend prototype for a ride-hailing platform specifically designed for the South African market. The application demonstrates a complete user journey for three distinct user types with a modern, responsive interface.

### Why EasyGo?
- 🇿🇦 **South African Focus** - Built with local cities, currency (ZAR), and payment methods
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile devices
- 🔐 **Authentication Ready** - Complete login/signup flow with validation
- 🚀 **Demo Ready** - Pre-configured with realistic mock data

## ✨ Features

### 👤 For Riders
| Feature | Description |
|---------|-------------|
| 📍 **Book Rides** | Easy ride booking with pickup/dropoff locations |
| 🗺️ **Popular Routes** | Quick select for common routes |
| 💰 **Fare Estimates** | Real-time fare calculation |
| 📊 **Dashboard** | View ride history and statistics |
| ⭐ **Driver Ratings** | Rate your ride experience |
| 🎫 **Promo Codes** | Apply discount codes |

### 🚘 For Drivers
| Feature | Description |
|---------|-------------|
| 📈 **Earnings Tracker** | Daily, weekly, and monthly earnings |
| 🚦 **Status Toggle** | Go online/offline |
| 🚗 **Ride Requests** | Accept or decline ride requests |
| 🗺️ **Trip Progress** | Track current trip progress |
| ⭐ **Rating System** | View your driver rating |
| 📍 **Location Updates** | Real-time location sharing |

### 👨‍💼 For Administrators
| Feature | Description |
|---------|-------------|
| 📊 **Analytics Dashboard** | Platform statistics and metrics |
| 👥 **User Management** | Manage riders and drivers |
| 🚗 **Trip Monitoring** | Track all rides in real-time |
| 💰 **Revenue Reports** | Financial overview |
| 📈 **Charts & Graphs** | Visual data representation |
| 🔍 **Search & Filter** | Advanced filtering options |

## 🔑 Demo Credentials

Use these pre-configured accounts to explore the platform:

### 👤 Rider Accounts
| Name | Email | Password | City | Stats |
|------|-------|----------|------|-------|
| Thabo Nkosi | thabo.nkosi@gmail.com | password123 | Johannesburg | 45 trips • 4.9⭐ |
| Lerato Molefe | lerato.molefe@gmail.com | password123 | Durban | 23 trips • 4.7⭐ |

### 🚘 Driver Accounts
| Name | Email | Password | Vehicle | Stats |
|------|-------|----------|---------|-------|
| Sipho Dlamini | sipho.dlamini@gmail.com | driver123 | Toyota Corolla (GP 123-456) | 890 trips • 4.8⭐ |
| Nomsa Zwane | nomsa.zwane@gmail.com | driver123 | Hyundai i20 (CA 789-012) | 567 trips • 4.9⭐ |

### 👨‍💼 Admin Account
| Name | Email | Password | Role |
|------|-------|----------|------|
| Bongani Mkhize | admin@easygo.co.za | admin123 | Operations Manager |

> **Note**: These are demo accounts. In a production environment, proper authentication would be implemented.

## 👥 User Roles

### Rider
- Book rides to any location
- View ride history
- Rate drivers
- Track rides in real-time
- Manage payment methods
- Apply promo codes

### Driver
- Go online/offline
- Accept ride requests
- Navigate to pickups
- Track earnings
- View trip history
- Receive ratings

### Admin
- Monitor platform activity
- Manage users and drivers
- View analytics
- Generate reports
- Handle disputes
- Configure settings

## 📁 Project Structure

```
easygo-webapp/
│
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── main.css           # Main stylesheet
│   │   ├── sidebar.css        # Sidebar styles
│   │   ├── responsive.css     # Responsive design
│   │   ├── forms.css          # Form styles
│   │   ├── chat-interface.css # Chat styles
│   │   └── animations.css     # Animation styles
│   │
│   ├── 📂 js/
│   │   ├── main.js            # Core functionality
│   │   ├── auth.js            # Authentication
│   │   ├── sidebar.js         # Sidebar controls
│   │   ├── demo-data.js       # Mock data
│   │   ├── ride-booking.js    # Booking logic
│   │   ├── form-validation.js # Form validation
│   │   └── utils.js           # Utility functions
│   │
│   └── 📂 images/
│       ├── logo.svg
│       ├── avatar-placeholder.svg
│       ├── car-icon.svg
│       ├── driver-icon.svg
│       └── 📂 icons/
│           ├── home.svg
│           ├── ride.svg
│           ├── delivery.svg
│           ├── history.svg
│           ├── profile.svg
│           ├── settings.svg
│           └── logout.svg
│
├── 📂 data/
│   ├── mock-users.json         # User mock data
│   ├── mock-rides.json         # Ride mock data
│   └── mock-drivers.json       # Driver mock data
│
├── 📂 pages/
│   ├── 📂 about/
│   │   ├── about.html
│   │   ├── careers.html
│   │   ├── blog.html
│   │   └── press.html
│   │
│   ├── 📂 support/
│   │   ├── contact.html
│   │   ├── faq.html
│   │   ├── help.html
│   │   └── report.html
│   │
│   └── 📂 legal/
│       ├── terms.html
│       ├── privacy.html
│       └── cookies.html
│
├── 📄 index.html               # Landing page
├── 📄 login.html               # Login page
├── 📄 signup.html              # Registration page
├── 📄 dashboard.html           # Rider dashboard
├── 📄 driver-dashboard.html    # Driver dashboard
├── 📄 admin-panel.html         # Admin panel
├── 📄 ride-booking.html        # Ride booking
├── 📄 admin-credentials.txt    # Admin credentials
├── 📄 README.md                 # This file
└── 📄 .gitignore                # Git ignore rules
```

## 📄 Pages Overview

### Public Pages
| Page | Description | Features |
|------|-------------|----------|
| `index.html` | Landing page | Hero section, features, stats, cities |
| `login.html` | User login | Role-based tabs, demo credentials |
| `signup.html` | Registration | Rider/driver selection, validation |

### Rider Pages
| Page | Description | Features |
|------|-------------|----------|
| `dashboard.html` | Rider home | Stats, quick actions, recent rides |
| `ride-booking.html` | Book a ride | Location input, fare estimates, vehicle selection |

### Driver Pages
| Page | Description | Features |
|------|-------------|----------|
| `driver-dashboard.html` | Driver home | Status toggle, earnings, ride requests |

### Admin Pages
| Page | Description | Features |
|------|-------------|----------|
| `admin-panel.html` | Admin dashboard | Analytics, user management, reports |

### Information Pages
| Page | Description |
|------|-------------|
| `pages/about/about.html` | Company information |
| `pages/support/contact.html` | Contact form |
| `pages/legal/terms.html` | Terms of service |

## 💻 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)
- Basic understanding of HTML/CSS/JavaScript

### Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/easygo-webapp.git
cd easygo-webapp
```

2. **Open with VS Code** (optional but recommended)
```bash
code .
```

3. **Launch the application**
   - Option A: Double-click `index.html`
   - Option B: Use Live Server in VS Code
   - Option C: Serve with Python
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`

4. **Explore the platform**
   - Navigate to `login.html`
   - Use demo credentials to access different dashboards

## 🚀 Usage Guide

### 1. First Time Users
1. Open `index.html` in your browser
2. Click "Sign Up" or "Login"
3. Choose your role (Rider/Driver)
4. Create an account or use demo credentials

### 2. As a Rider
1. Login with rider credentials
2. Click "Book a Ride" on the dashboard
3. Enter pickup and dropoff locations
4. Select vehicle type
5. Click "Find a Driver"
6. Track your ride in real-time

### 3. As a Driver
1. Login with driver credentials
2. Toggle status to "Online"
3. Accept ride requests
4. Navigate to pickup location
5. Complete trip and earn

### 4. As an Admin
1. Login with admin credentials
2. View platform statistics
3. Monitor active trips
4. Manage users and drivers

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Structure and content
- **CSS3** - Styling and animations
  - Flexbox & Grid layouts
  - CSS Variables
  - Media queries for responsiveness
  - Gradient backgrounds
- **JavaScript (ES6+)** - Interactivity
  - Local Storage for data persistence
  - Form validation
  - Event handling
  - Dynamic content loading

### Icons & Fonts
- **Font Awesome 6** - Icon library
- **Google Fonts** - Typography
- **Random User API** - Profile pictures

### Development Tools
- **VS Code** - Code editor
- **Live Server** - Development server
- **Git** - Version control

## 🇿🇦 South African Integration

### Cities Covered
- Johannesburg
- Cape Town
- Durban
- Pretoria
- Port Elizabeth
- Bloemfontein
- East London
- Pietermaritzburg
- Polokwane
- Nelspruit
- Rustenburg
- Kimberley

### Local Payment Methods
- **SnapScan** - QR code payments
- **Zapper** - Mobile payments
- **Credit/Debit Cards** - Standard card payments
- **Cash** - Cash on delivery

### Currency
- **ZAR** (South African Rand) formatting throughout
- Example: R 350.00

### Local Names & Data
- Authentic South African names (Thabo, Lerato, Sipho, Nomsa)
- South African phone numbers (+27 format)
- Local landmarks and routes

## 📸 Screenshots

### Landing Page
```
┌─────────────────────────────────────┐
│  🚗 EasyGo                          │
│  South Africa's Smart Transportation│
│  [Ride with Us] [Drive with Us]     │
├─────────────────────────────────────┤
│  Features │ Stats │ Cities          │
└─────────────────────────────────────┘
```

### Rider Dashboard
```
┌─────────────────────────────────────┐
│ 👋 Welcome back, Thabo!             │
├─────────────────────────────────────┤
│ 📊 Stats Cards                      │
│ [Book Ride] [Schedule] [Offers]     │
├─────────────────────────────────────┤
│ Recent Rides                        │
│ • Sandton → Airport (Completed)     │
│ • Melrose → Fourways (Completed)    │
└─────────────────────────────────────┘
```

### Driver Dashboard
```
┌─────────────────────────────────────┐
│ 🚘 Driver Status: [ONLINE]🟢        │
├─────────────────────────────────────┤
│ Earnings: R 850 (Today)             │
├─────────────────────────────────────┤
│ 🚗 New Ride Request                  │
│ From: Sandton City                  │
│ To: OR Tambo Airport                │
│ Fare: R 290                         │
│ [Accept] [Decline]                  │
└─────────────────────────────────────┘
```

### Admin Panel
```
┌─────────────────────────────────────┐
│ 📊 Admin Dashboard                   │
├─────────────────────────────────────┤
│ Total Users: 24,567 ↑12%            │
│ Active Drivers: 1,234 ↑8%           │
│ Total Trips: 89,456 ↑15%            │
├─────────────────────────────────────┤
│ [Charts and Graphs]                 │
├─────────────────────────────────────┤
│ Recent Trips Table                  │
└─────────────────────────────────────┘
```

## 🗺️ Roadmap

### Phase 1: MVP (Current) ✅
- [x] User authentication flow
- [x] Rider dashboard
- [x] Driver dashboard
- [x] Admin panel
- [x] Ride booking interface
- [x] South African mock data

### Phase 2: Enhanced Features (Planned)
- [ ] Real-time tracking with maps
- [ ] Payment integration
- [ ] Ride history with filters
- [ ] Driver earnings reports
- [ ] Rating system
- [ ] Push notifications

### Phase 3: Advanced Features (Future)
- [ ] Multi-language support (English, Afrikaans, Zulu, Xhosa)
- [ ] In-app chat
- [ ] Scheduled rides
- [ ] Ride sharing
- [ ] Corporate accounts
- [ ] Analytics dashboard

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Guidelines
- Follow existing code style
- Test thoroughly
- Update documentation
- Use meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2024 EasyGo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

**Project Maintainer:** Bafokeng Khoali
- 📧 Email: bafokeng.khoali@easygo.co.za
- 💼 LinkedIn: [Bafokeng Khoali](https://linkedin.com/in/bafokeng-khoali)
- 🐦 Twitter: [@EasyGoSA](https://twitter.com/EasyGoSA)

**Company:**
- 🌐 Website: [www.easygo.co.za](https://www.easygo.co.za)
- 📍 Address: 123 Maude Street, Sandton, Johannesburg, 2196
- 📞 Phone: +27 (0) 11 234 5678

## 🙏 Acknowledgments

- **Font Awesome** for the amazing icons
- **Random User API** for profile pictures
- **Icons8** for transportation icons
- All contributors and testers
- The South African tech community

---

## ⭐ Support

If you find this project useful, please consider:
- Giving it a star ⭐
- Sharing it with others 🔄
- Contributing to its development 🤝

---

<p align="center">
  Made with ❤️ in South Africa
  <br>
  © 2024 EasyGo. All rights reserved.
</p>

<p align="center">
  <a href="#-table-of-contents">Back to Top</a>
</p>
"@ | Out-File -FilePath "README.md" -Encoding UTF8

# Also create a .gitignore file
@"
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
*.log
*.tmp
*.temp

# IDE files
.vscode/
.idea/
*.swo
*.swp
*.swn
*.swm
*.swl
*.swv
.project
.classpath
.settings/

# Node modules (if any)
node_modules/
npm-debug.log
yarn-debug.log
yarn-error.log
package-lock.json

# Environment files
.env
.env.local
.env.development
.env.production

# Build files
dist/
build/
*.css.map
*.js.map

# Testing
coverage/
.nyc_output/

# Backup files
*.bak
backup/

# Project specific
admin-credentials.txt
*-structure.txt
*-details.txt
*-tree.txt
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8

Write-Host "✅ README.md and .gitignore have been created successfully!" -ForegroundColor Green
Write-Host "📁 Location: C:\Users\liteboho\easygo-webapp" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review README.md in your browser or text editor" -ForegroundColor White
Write-Host "2. Initialize git repository:" -ForegroundColor White
Write-Host "   git init" -ForegroundColor Gray
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Initial commit: EasyGo prototype'" -ForegroundColor Gray
Write-Host "3. Create repository on GitHub and push:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/yourusername/easygo-webapp.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
```

This comprehensive README.md includes:

1. **Complete project documentation** with all sections
2. **Visual elements** with emojis and badges
3. **Detailed feature lists** for each user type
4. **Demo credentials** table
5. **Complete project structure** tree
6. **Installation instructions**
7. **Usage guide** with step-by-step instructions
8. **South African integration** details
9. **Screenshots** in ASCII art
10. **Roadmap** with future plans
11. **License** information
12. **Contact** details
13. **Contributing guidelines**

The README is designed to be both informative and visually appealing, making it perfect for a GitHub repository!
