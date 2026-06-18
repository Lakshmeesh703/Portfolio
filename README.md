# Lakshmeesh Shet - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, experience, and professional background with a sleek dark/light mode interface and smooth animations.

## 🚀 Tech Stack

- **Framework:** Next.js 15.5 with App Router
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 3.4 with CSS variables for theming
- **Animations:** Framer Motion 12.23
- **UI Icons:** Lucide React 0.542
- **Theme Management:** next-themes 0.4
- **PDF Generation:** jsPDF 3.0 (for resume download)
- **Utilities:** clsx, tailwind-merge

## ✨ Features

✅ **Dark/Light Mode** - Class-based theme switching with system preference detection
✅ **Responsive Design** - Mobile-first approach with breakpoints for all devices
✅ **Smooth Animations** - Staggered fade-up effects with Framer Motion
✅ **Project Filtering** - Filter projects by category (Web, AI/ML, Data)
✅ **Resume Download** - Direct PDF download with real resume file
✅ **Profile Image Viewer** - Click to open full-screen/modal image view
✅ **Contact Form** - Client-side validation with email integration
✅ **SEO Optimized** - Metadata, robots.txt, sitemap.xml
✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # CSS variables, themes, animations
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── hero-section.tsx           # Hero with profile card & image modal
│   ├── about-section.tsx          # Education & coursework
│   ├── skills-section.tsx         # 6-category skill grid
│   ├── projects-section.tsx       # Filterable project cards
│   ├── experience-section.tsx     # Timeline with GitHub/demo links
│   ├── testimonials-section.tsx   # Quote cards
│   ├── contact-section.tsx        # Contact form
│   ├── site-header.tsx            # Sticky navigation
│   ├── site-footer.tsx            # Footer nav links
│   ├── theme-provider.tsx         # Next-themes wrapper
│   ├── theme-toggle.tsx           # Dark/light mode button
│   ├── section-heading.tsx        # Reusable section header
│   └── resume-download.ts         # PDF download handler
├── data/
│   └── portfolio.ts        # Centralized content data
└── lib/
    └── utils.ts            # Utility functions (cn, clsx+merge)
public/
├── profile.png             # Profile picture
├── resume.pdf              # Resume file
├── favicon.svg             # LS badge favicon
└── og-image.svg            # Social sharing image
```

## 🎨 Customization

### Update Your Content
Edit `/src/data/portfolio.ts`:
- Update `siteConfig` with your name, role, email, phone
- Modify `highlights`, `skills`, `projects`, `experiences`
- Update `education`, `testimonials`, `socialLinks`

### Update Styling
- **Colors:** Modify CSS variables in `/src/app/globals.css`
- **Fonts:** Change font imports in `/src/app/layout.tsx` (currently Manrope + Cormorant)
- **Animations:** Adjust Framer Motion variants in component files

### Add Your Profile Picture
1. Replace `/public/profile.png` with your image
2. Supported formats: PNG, JPG, WEBP

### Update Resume
1. Replace `/public/resume.pdf` with your actual resume
2. The download button will automatically serve the new file

## 🏃 Getting Started

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production
```bash
# Create optimized build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🚀 Deploy on Render

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Render
1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in deployment settings:
   - **Name:** portfolio (or your preferred name)
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Click "Create Web Service"

### Step 3: Configure Environment (if needed)
- **Node Version:** 20.x (recommended)
- **Environment Variables:** Add any custom vars if needed
- **Custom Domain:** Go to Settings → Custom Domain to add your own domain

### Step 4: Deploy
Render will automatically deploy after pushing to GitHub. View logs in the Render dashboard.

## 🔧 Build Details

- **Main Route:** ~196 kB, 299 kB First Load JS
- **Static Export:** Yes (all pages prerendered)
- **Build Time:** ~10-12 seconds
- **Output:** `.next/` directory

## 📊 SEO

- Metadata configured with Open Graph tags
- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt configured at `/robots.txt`
- Mobile-friendly responsive design

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Content Sections

1. **Hero** - Introduction with profile image, stats, highlights
2. **About** - Education, coursework, skill categories
3. **Skills** - 6 categories with 40+ technologies
4. **Projects** - 4 featured projects with filtering
5. **Experience** - Hackathons, focus groups with GitHub links
6. **Testimonials** - 3 professional quotes
7. **Contact** - Email contact form
8. **Footer** - Navigation links

## ✅ Deployment Checklist

- [ ] Update all content in `/src/data/portfolio.ts`
- [ ] Replace profile picture at `/public/profile.png`
- [ ] Replace resume at `/public/resume.pdf`
- [ ] Update social links (GitHub, LinkedIn, Email)
- [ ] Test dark/light mode switching
- [ ] Test mobile responsiveness
- [ ] Test project filtering
- [ ] Verify all GitHub links work
- [ ] Run `npm run build` locally to verify
- [ ] Push to GitHub and deploy on Render

## 📄 License

This portfolio template is open for personal use. Feel free to customize and deploy!

## 🤝 Support

For questions or issues:
- Check the code comments in component files
- Review Next.js documentation: https://nextjs.org/docs
- Check Render deployment docs: https://render.com/docs

---

**Built with ❤️ using Next.js, React, and TypeScript**
