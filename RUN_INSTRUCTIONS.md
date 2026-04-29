# Portfolio Project - VS Code Par Run Karne Ka Tarika

## Prerequisites
- Node.js installed (version 16 ya usse upar)
- VS Code installed
- Git (optional)

## Step 1: VS Code Me Project Open Karein
1. VS Code open karein
2. `File > Open Folder` click karein
3. Portfolio folder select karein
4. Folder open ho jayega

## Step 2: Terminal Open Karein
1. VS Code me `View > Terminal` click karein
2. Ya `Ctrl + `` (backtick) press karein
3. Terminal bottom me open ho jayega

## Step 3: Dependencies Install Karein
Terminal me ye commands run karein:

```bash
# Root directory me
npm run install-all
```

Ya individually:
```bash
# Root dependencies
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd ../client
npm install
```

## Step 4: Environment Variables Setup (Optional)
Agar backend features use karne hain to:

1. `server` folder me `.env` file banayein
2. Isme ye add karein:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

## Step 5: Project Run Karein

### Option 1: Full Stack (Frontend + Backend)
```bash
# Root directory me
npm run dev
```

### Option 2: Sirf Frontend
```bash
cd client
npm start
```

### Option 3: Sirf Backend
```bash
cd server
npm run dev
```

## Step 6: Browser Me Dekhein
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Dark Mode Features
✅ **Toggle Button**: Navbar me moon/sun icon hai
✅ **Auto Save**: Dark mode preference save hoti hai
✅ **Smooth Transitions**: Theme change me smooth animation
✅ **Responsive**: Mobile aur desktop dono me work karta hai

## Troubleshooting

### Error: "command not found: npm"
- Node.js install karein: https://nodejs.org/

### Error: "port already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Error: "module not found"
```bash
# Dependencies reinstall karein
rm -rf node_modules package-lock.json
npm install
```

## VS Code Extensions (Recommended)
1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **Auto Rename Tag**
5. **Bracket Pair Colorizer**

## Quick Commands Reference
```bash
# Install all dependencies
npm run install-all

# Run full stack
npm run dev

# Build for production
npm run build

# Run only frontend
cd client && npm start

# Run only backend
cd server && npm run dev
```

## Project Structure
```
Portfolio/
├── client/          # React frontend
├── server/          # Node.js backend
├── package.json     # Root dependencies
└── README.md        # Project info
```

## Features Available
- ✅ Dark/Light Mode Toggle
- ✅ Responsive Design
- ✅ Smooth Animations
- ✅ Contact Form
- ✅ Blog System
- ✅ Project Showcase
- ✅ Skills Display
- ✅ Experience Timeline

**Happy Coding! 🚀** 