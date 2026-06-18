# 🏗️ Portfolio Architecture & How It Works

This document explains how your portfolio is built and organized to help you understand the codebase.

## 📊 Architecture Overview

```
User Browser (Dark/Light Mode)
         ↓
   Next.js App Router
         ↓
   Server/Client Components
         ↓
   8 Feature Sections (Hero, About, Skills, etc.)
         ↓
   Centralized Data (portfolio.ts)
         ↓
   Styling (Tailwind CSS + CSS Variables)
```

## 🔄 Data Flow

### Single Source of Truth: `src/data/portfolio.ts`

Your portfolio has **ONE** data file that controls all content:

```typescript
// Centralized config
siteConfig {
  name, role, email, phone, profileImage, summary, socialLinks
}

// Navigation links
navLinks = ["About", "Skills", "Projects", ...]

// Sections
skills = [6 categories with items]
projects = [4 featured projects]
experiences = [4 professional roles]
education = [3 institutions]
testimonials = [3 quotes]
```

### Content Flow

```
portfolio.ts (data)
    ↓
Components import data
    ↓
Components render sections
    ↓
User sees sections
```

## 🎨 Component Structure

### Page Layout (`src/app/page.tsx`)
```
<HeroSection />        ← Profile intro + image + stats
<AboutSection />       ← Education + coursework
<SkillsSection />      ← 6 skill categories grid
<ProjectsSection />    ← 4 projects with filtering
<ExperienceSection />  ← Timeline with links
<TestimonialsSection />← 3 quote cards
<ContactSection />     ← Email form
<SiteFooter />         ← Footer links
```

### Component Architecture

**Server Components:**
- `SectionHeading` - Reusable header (eyebrow + title + description)
- `SiteHeader` - Sticky navigation with scroll detection
- `SiteFooter` - Navigation footer

**Client Components (need "use client"):**
- `HeroSection` - Framer Motion animations + image modal
- `SkillsSection` - Grid with hover effects
- `ProjectsSection` - Filtering with AnimatePresence
- `ExperienceSection` - Links to GitHub/demos
- `ContactSection` - Form validation
- `ThemeProvider` - Dark/light mode

## 🎬 Key Features Explained

### 1️⃣ Dark/Light Mode

**Files involved:**
- `/src/app/globals.css` - CSS variable definitions
- `/src/components/theme-provider.tsx` - next-themes wrapper
- `/src/components/theme-toggle.tsx` - Toggle button

**How it works:**
```css
/* Light theme */
--primary: 6 186 227   /* Cyan */
--background: 255 255 255 /* White */

/* Dark theme */
--primary: 14 165 233  /* Sky blue */
--background: 15 23 42 /* Navy */
```

The `ThemeProvider` automatically detects system preference and saves to localStorage.

### 2️⃣ Project Filtering

**Component:** `ProjectsSection`

**Filter logic:**
```typescript
const [activeFilter, setActiveFilter] = useState("All");

filteredProjects = projects.filter(p => 
  activeFilter === "All" || p.category === activeFilter
);
```

**Categories:** All, Web, AI/ML, Data

### 3️⃣ Profile Image Modal

**Component:** `HeroSection`

**State management:**
```typescript
const [imageExpanded, setImageExpanded] = useState(false);

// Click button → setImageExpanded(true) → Modal appears
// On mobile: Full-screen overlay
// On desktop: Centered modal card
```

### 4️⃣ Animations

**Framework:** Framer Motion

**Common patterns:**

```typescript
// Staggered fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.09 } }
  }}
>
  {/* Children animate sequentially */}
</motion.div>
```

### 5️⃣ Resume Download

**File:** `src/components/resume-download.ts`

**How it works:**
```typescript
export function generateResumePdf() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";  // Points to public/resume.pdf
  link.download = "Lakshmeesh_Shet_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

Simply downloads your PDF from the public folder.

## 🎨 Styling System

### CSS Variables (`globals.css`)

```css
:root {
  /* Light mode colors */
  --primary: 6 186 227;
  --background: 255 255 255;
  --muted: 107 114 128;
}

[data-theme="dark"] {
  /* Dark mode colors */
  --primary: 14 165 233;
  --background: 15 23 42;
  --muted: 156 163 175;
}
```

### Tailwind Utilities

```typescript
// Class-based approach
className="text-primary" // Uses CSS variable
className="bg-background"
className="text-muted-foreground"
```

### Custom Animations

```css
@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float-slow {
  animation: float-slow 7s ease-in-out infinite;
}
```

## 🔍 SEO & Metadata

### Files involved:
- `src/app/layout.tsx` - Global metadata
- `src/app/robots.ts` - SEO robots.txt
- `src/app/sitemap.ts` - SEO sitemap

### Metadata generated:
```typescript
export const metadata: Metadata = {
  title: "Lakshmeesh Shet - AI/ML Portfolio",
  description: "Building polished web experiences...",
  metadataBase: new URL("https://yoursite.com"),
  openGraph: { /* OG tags */ },
  twitter: { /* Twitter tags */ }
};
```

This helps with Google indexing and social media sharing.

## 📱 Responsive Breakpoints

```typescript
// Tailwind breakpoints used throughout
sm: 640px   // Mobile landscape
lg: 1024px  // Tablet
xl: 1280px  // Desktop

// Usage in components
className="grid grid-cols-1 lg:grid-cols-2"
// 1 column on mobile, 2 columns on desktop
```

## 🚀 Build & Deployment Process

### Local Build
```bash
npm run build
# Generates .next/ folder with optimized code
```

### Render Deployment
```
Your code on GitHub
       ↓
Render detects push
       ↓
Runs: npm install && npm run build
       ↓
Runs: npm start
       ↓
Live on https://portfolio-xxx.onrender.com
```

## 📦 Bundle Optimization

**Current size:**
- Main route: ~196 kB
- First Load JS: ~299 kB
- All pages prerendered (static export)

**Why it's optimized:**
- Next.js code splitting
- Tree-shaking unused code
- CSS minification
- Image optimization

## 🔧 Common Customizations

### Change Colors
Edit `/src/app/globals.css` CSS variables

### Add New Section
1. Create `/src/components/new-section.tsx`
2. Import in `page.tsx`
3. Add data to `portfolio.ts`
4. Add scroll link in `navLinks`

### Update Social Links
Edit `siteConfig.socialLinks` in `portfolio.ts`

### Add More Projects
```typescript
// In portfolio.ts
projects.push({
  title: "My New Project",
  category: "Web",
  description: "...",
  stack: ["React", "TypeScript"],
  href: "https://github.com/..."
});
```

## 🧪 Testing Checklist

Before deployment:
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` starts server
- [ ] All sections load
- [ ] Dark/light mode toggles
- [ ] Project filtering works
- [ ] Links open correctly
- [ ] Mobile responsive
- [ ] Resume downloads
- [ ] Contact form submits

## 📚 File Size Reference

```
Key files:
- portfolio.ts: ~8 KB
- hero-section.tsx: ~4 KB
- components/: ~25 KB total
- globals.css: ~2 KB
- package.json: dependencies
```

## 🎓 Learning Resources

To understand this better:
- **Next.js App Router:** https://nextjs.org/docs/app
- **React Hooks:** https://react.dev/reference/react
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **TypeScript:** https://www.typescriptlang.org/docs

---

**Now you understand how your portfolio works! 🎉**
