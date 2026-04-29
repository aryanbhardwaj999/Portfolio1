# Portfolio Website

A modern and responsive portfolio website featuring animations and backend functionality.

## Features

- 🏠 **Home Page** - Welcome section with hero animation
- 📄 **Resume Page** - Downloadable resume with skills
- 🚀 **Projects Page** - Showcase of completed projects
- ⭐ **Reviews Page** - Client testimonials and reviews
- 📊 **Experience Page** - Experience charts and statistics
- 🏢 **Companies Page** - Companies worked with
- 👤 **About Page** - Personal information
- 💻 **Skills Page** - Technical skills showcase
- 📞 **Contact Page** - Contact form with backend
- 📝 **Blog Page** - Blog posts with backend

## Tech Stack

### Frontend
- React.js
- Framer Motion (Animations)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Multer (File uploads)
- Nodemailer (Email)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Start development servers:
   ```bash
   npm run dev
   ```

## Environment Variables

Create `.env` file in server directory:
```
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
PORT=5000
```

## Usage

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## Build for Production

```bash
npm run build
``` 
