# Suryansh Sharma — Personal Portfolio

A brutalist, street-grunge developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Featuring the signature **Vinyl Record Album Jacket hover interaction**, authentic analog noise and texture layers, raw distressed typography, and complete mobile-first responsiveness.

---

## ⚡ Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
* **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**:
  * Display: *Road Rage* (raw distressed grunge typeface)
  * Body & UI: *JetBrains Mono* (monospace)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Personalization & Content Management

All profile details, bio, projects, services, experience, and socials are centralized in one single file:

📁 **`src/data/portfolio.ts`**

* **Personal Info**: Name, tagline, bio, email, location, and social links.
* **Projects**: Title, slug, category, client, year, description, images, live demo URL, and GitHub repository.
* **Services & Skills**: Frontend, Backend, and Database & Tools matrices.
* **Experience & Education**: Timeline items for roles, achievements, and degree details.
* **FAQ**: Collapsible accordion items for prospective clients and collaborators.

---

## 📂 Project Structure

```
portf/
├── public/
│   ├── assets/
│   │   ├── images/      # Background texture & portraits
│   │   ├── projects/    # Project artifact images
│   │   ├── ui/          # Barcode, symbols, and stamps
│   │   └── work-card/   # Vinyl disc & texture graphics
│   └── fonts/           # Local Road Rage & JetBrains Mono woff2 fonts
├── src/
│   ├── app/
│   │   ├── about/       # /about route
│   │   ├── contact/     # /contact route
│   │   ├── works/       # /works & /works/[slug] routes
│   │   ├── globals.css  # Global styles, noise overlay & fonts
│   │   ├── layout.tsx   # Root layout with navigation & footer
│   │   ├── not-found.tsx# Custom 404 page
│   │   └── page.tsx     # Home landing page
│   ├── components/      # Navigation, WorkCard, Hero, Services, FAQ, Footer
│   └── data/
│       └── portfolio.ts # Centralized portfolio data
├── tailwind.config.ts   # Custom OKLCH color scale & font definitions
└── next.config.mjs
```

---

## 🌐 One-Click Deployment

### Vercel (Recommended)
1. Push this repository to your GitHub account: `https://github.com/Suryansh10-ctrl/<repo-name>`.
2. Go to [vercel.com](https://vercel.com/) and import your repository.
3. Keep default settings (`Framework: Next.js`).
4. Click **Deploy**.

---

© 2026 Suryansh Sharma. All Rights Reserved.
