# Portfolio Website Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install --legacy-peer-deps
```

### 2. Environment Setup

Create a `.env` file in the `server` directory with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_email_password
PORT=5000
NODE_ENV=development
```

### 3. Database Setup

Install MongoDB locally or use MongoDB Atlas:
- For local MongoDB: Install MongoDB Community Edition
- For MongoDB Atlas: Create a free cluster and get your connection string

### 4. Email Setup (Optional)

For contact form functionality:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in EMAIL_PASS

### 5. Start Development Servers

```bash
# From the root directory
npm run dev
```

This will start both:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Project Structure

```
Portfolio/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js Backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **client/src/pages/Home.js** - Update name, description, social links
2. **client/src/pages/About.js** - Update personal info, story, timeline
3. **client/src/pages/Resume.js** - Update experience, education, skills
4. **client/src/pages/Projects.js** - Add your projects
5. **client/src/pages/Reviews.js** - Add client testimonials
6. **client/src/pages/Companies.js** - Add companies you've worked with
7. **client/src/pages/Skills.js** - Update your skills and certifications

### Styling
- Colors: Update `client/tailwind.config.js` for custom colors
- Fonts: Update Google Fonts in `client/public/index.html`
- Animations: Modify Framer Motion animations in components

### Content
- Blog posts: Add through the backend API or update sample data
- Projects: Update the projects array in the backend
- Contact form: Configure email settings in `.env`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
```

### Backend (Heroku/Railway)
```bash
cd server
# Set production environment variables
npm start
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start both frontend and backend
npm run server       # Start only backend
npm run client       # Start only frontend

# Production
npm run build        # Build frontend for production
npm run install-all  # Install all dependencies
```

## 📱 Features

✅ **Home Page** - Hero section with animations
✅ **Resume Page** - Downloadable resume with skills
✅ **Projects Page** - Project showcase with filtering
✅ **Reviews Page** - Client testimonials
✅ **Experience Page** - Charts and statistics
✅ **Companies Page** - Companies worked with
✅ **About Page** - Personal information and timeline
✅ **Skills Page** - Technical skills with progress bars
✅ **Contact Page** - Contact form with backend
✅ **Blog Page** - Blog posts with backend
✅ **Responsive Design** - Mobile-friendly
✅ **Animations** - Framer Motion animations
✅ **Modern UI** - Tailwind CSS styling

## 🛠️ Tech Stack

### Frontend
- React.js 18
- Framer Motion (Animations)
- Tailwind CSS (Styling)
- React Router (Navigation)
- Axios (API calls)
- React Icons
- Recharts (Charts)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- Nodemailer (Email)
- Multer (File uploads)
- Helmet (Security)
- CORS

## 📞 Support

If you encounter any issues:
1. Check that all dependencies are installed
2. Verify MongoDB is running
3. Check environment variables are set correctly
4. Ensure ports 3000 and 5000 are available

## 🎯 Next Steps

1. Customize content with your information
2. Add your own projects and experiences
3. Configure email settings for contact form
4. Deploy to your preferred hosting platform
5. Add custom domain
6. Set up analytics and SEO

Happy coding! 🚀 