# 🚀 Render Deployment Guide

This guide will help you deploy your portfolio to Render in less than 5 minutes.

## Prerequisites

- GitHub account (free at https://github.com)
- Render account (free at https://render.com)
- Your portfolio code pushed to GitHub

## Step-by-Step Deployment

### 1️⃣ Prepare Your GitHub Repository

```bash
# Navigate to your portfolio directory
cd ~/Lakshmeesh\ Shet/VS\ Code/Portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Rename branch to main
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### 2️⃣ Connect Render to GitHub

1. Go to https://render.com
2. Sign up or log in with your GitHub account
3. Click **"New +"** button → Select **"Web Service"**
4. Click **"Connect account"** to authorize GitHub
5. Select your portfolio repository

### 3️⃣ Configure Deployment Settings

Fill in the following fields:

| Field | Value |
|-------|-------|
| **Name** | `portfolio` (or your preferred name) |
| **Environment** | `Node` |
| **Region** | `Oregon` (or closest to you) |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | `20.11.0` |
| **Plan** | `Free` |

### 4️⃣ Set Environment Variables (Optional)

Render usually detects `.env` files automatically. If needed:

1. Click **Environment** tab
2. Add any custom environment variables:
   ```
   NODE_ENV = production
   ```

### 5️⃣ Deploy!

1. Click **"Create Web Service"**
2. Render will automatically start building and deploying
3. Wait 2-3 minutes for the build to complete
4. You'll see a live URL like: `https://portfolio-xxxxx.onrender.com`
5. Click the URL to view your deployed portfolio

## 📋 Post-Deployment Checklist

✅ Test all pages load correctly
✅ Dark/Light mode toggle works
✅ Project filtering works
✅ Contact form is functional
✅ GitHub links open correctly
✅ Resume downloads properly
✅ Mobile responsive on all devices

## 🔄 Updating Your Portfolio

After deployment, updates are automatic:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. Render automatically redeploys within 1-2 minutes

## 🌍 Add a Custom Domain (Optional)

To connect your own domain:

1. Go to your Render dashboard
2. Select your deployed service
3. Go to **Settings** → **Custom Domain**
4. Enter your domain (e.g., `lakshmeesh.com`)
5. Follow Render's DNS instructions
6. Update domain DNS records as shown

## ⚡ Performance Tips

- Keep images optimized (use PNG/WebP under 500KB)
- Use the Free plan for personal portfolios
- Monitor build times in dashboard
- Check logs for any errors

## 🆘 Troubleshooting

### Build Fails
- Check logs: Render Dashboard → Your Service → Logs
- Verify `npm run build` works locally
- Check Node version compatibility

### Site is Slow
- Use Next.js Image Optimization
- Reduce bundle size by removing unused packages
- Consider upgrading to paid plan for better performance

### Domain Not Working
- Wait 24 hours for DNS propagation
- Check DNS settings match Render requirements
- Verify no DNS conflicts

## 📞 Support

- **Render Docs:** https://render.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Community Help:** Check GitHub Issues

## 🎉 Success!

Your portfolio is now live! Share your Render URL:
```
https://portfolio-xxxxx.onrender.com
```

---

**Happy deploying! 🚀**
