# Portfolio Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Free)
1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Set Environment Variables** in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your email password
   - `NODE_ENV`: production

5. **Get your permanent URL**: `https://your-portfolio.vercel.app`

### Option 2: Netlify (Frontend Only - Free)
1. **Build the project**:
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `client/build` folder to Netlify
   - Or use Netlify CLI

3. **Get your permanent URL**: `https://your-portfolio.netlify.app`

### Option 3: Railway (Full Stack - Free Tier)
1. **Connect your GitHub repository**
2. **Set environment variables**
3. **Deploy automatically**

### Option 4: Render (Full Stack - Free Tier)
1. **Connect your GitHub repository**
2. **Set environment variables**
3. **Deploy automatically**

## Environment Variables Required

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
NODE_ENV=production
```

## Database Setup

1. **MongoDB Atlas** (Free):
   - Create account at mongodb.com
   - Create a new cluster
   - Get connection string
   - Add to environment variables

2. **Local MongoDB** (Development only):
   - Install MongoDB locally
   - Use connection string: `mongodb://localhost:27017/portfolio`

## Email Setup

For Gmail:
1. Enable 2-factor authentication
2. Generate App Password
3. Use App Password in `EMAIL_PASS`

## Custom Domain (Optional)

After deployment:
1. Purchase domain from Namecheap, GoDaddy, etc.
2. Configure DNS settings
3. Add custom domain in deployment platform

## Recommended: Vercel Deployment

Vercel is the best option because:
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Full-stack support
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Global CDN
- ✅ Easy environment variable management

Your permanent URL will be: `https://your-portfolio.vercel.app` 