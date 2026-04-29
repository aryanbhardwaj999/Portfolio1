# 🚀 Portfolio Project - VS Code Me Run Karne Ka Complete Guide

## 📋 Prerequisites
- ✅ Node.js (version 16+)
- ✅ VS Code
- ✅ Git (optional)

## 🎯 Quick Start (3 Steps)

### Step 1: VS Code Me Project Open
```bash
# VS Code open karein
# File > Open Folder > Portfolio folder select karein
```

### Step 2: Terminal Open
```bash
# VS Code me: View > Terminal
# Ya Ctrl + ` (backtick) press karein
```

### Step 3: Project Run
```bash
# Root directory me ye command run karein:
npm run dev
```

## 🌐 Access Links
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

---

## 🔧 Detailed Steps

### 1. VS Code Setup
1. **VS Code open karein**
2. **File > Open Folder** click karein
3. **Portfolio folder** select karein
4. **Select Folder** click karein

### 2. Terminal Setup
1. **View > Terminal** click karein
2. **Ya `Ctrl + `` press karein**
3. **Terminal bottom me open ho jayega**

### 3. Dependencies Install
```bash
# Root directory me ye command run karein:
npm run install-all
```

### 4. Project Start
```bash
# Full stack (Frontend + Backend) run karne ke liye:
npm run dev
```

### 5. Browser Me Dekhein
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

---

## 🌙 Dark Mode Features

### Toggle Button Location
- **Desktop**: Navbar me right side me moon/sun icon
- **Mobile**: Navbar me hamburger menu ke sath moon/sun icon

### Features
- ✅ **One Click Toggle**: Ek click se sare pages dark/light ho jate hain
- ✅ **Auto Save**: Dark mode preference save hoti hai
- ✅ **Smooth Transitions**: Beautiful animations
- ✅ **Responsive**: Mobile aur desktop dono me work karta hai

---

## 🛠️ Troubleshooting

### Error: "command not found: npm"
```bash
# Node.js install karein: https://nodejs.org/
```

### Error: "port already in use"
```bash
# Windows me:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux me:
lsof -ti:3000 | xargs kill -9
```

### Error: "module not found"
```bash
# Dependencies reinstall karein:
rm -rf node_modules package-lock.json
npm install
```

### Error: "react-typed" compatibility
```bash
# Client directory me:
cd client
npm install --legacy-peer-deps
```

---

## 📁 Project Structure
```
Portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Navbar, Footer
│   │   ├── pages/         # Home, Projects, etc.
│   │   ├── context/       # DarkModeContext
│   │   └── App.js         # Main app
│   └── package.json
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   └── index.js          # Server file
└── package.json          # Root dependencies
```

---

## 🎨 Available Pages
- **Home**: http://localhost:3000/
- **Projects**: http://localhost:3000/projects
- **Resume**: http://localhost:3000/resume
- **About**: http://localhost:3000/about
- **Skills**: http://localhost:3000/skills
- **Experience**: http://localhost:3000/experience
- **Contact**: http://localhost:3000/contact
- **Blog**: http://localhost:3000/blog

---

## 🔄 Quick Commands

### Development
```bash
# Full stack run
npm run dev

# Sirf frontend
cd client && npm start

# Sirf backend
cd server && npm run dev
```

### Production
```bash
# Build for production
npm run build

# Install dependencies
npm run install-all
```

---

## 🌟 Features Available
- ✅ **Dark/Light Mode Toggle** (One click se sare pages)
- ✅ **Responsive Design** (Mobile + Desktop)
- ✅ **Smooth Animations** (Framer Motion)
- ✅ **Contact Form** (Backend integration)
- ✅ **Blog System** (MongoDB)
- ✅ **Project Showcase** (Filterable)
- ✅ **Skills Display** (Interactive)
- ✅ **Experience Timeline** (Animated)

---

## 📱 Mobile View
- **Toggle Button**: Hamburger menu ke sath moon/sun icon
- **Responsive**: Sare pages mobile friendly
- **Touch Friendly**: Buttons aur interactions touch optimized

---

## 🎯 Success Indicators
✅ **Terminal me ye messages dikhein:**
- `Server running on port 5000`
- `MongoDB connected successfully`
- `Starting the development server...`
- `Compiled with warnings.`

✅ **Browser me ye dikhein:**
- Portfolio website load ho jaye
- Navbar me moon/sun icon visible ho
- Dark mode toggle work kare

---

## 🚀 Next Steps
1. **Customize Content**: Apna name, projects, skills add karein
2. **Add Images**: Profile photo, project screenshots
3. **Deploy**: Vercel/Netlify par deploy karein
4. **Domain**: Custom domain connect karein

---

**🎉 Congratulations! Aapka dark mode portfolio ready hai!**

**Quick Access: http://localhost:3000** 