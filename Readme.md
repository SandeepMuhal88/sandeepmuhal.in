# 🚀 Sandeep Muhal — Data Scientist & AI Engineer Portfolio

A world-class, ultra-premium personal portfolio website built with **React 19**, **Vite 6**, **Lucide Icons**, and an organic luxury design system (**Warm Linen Parchment & Deep Caviar Obsidian**). Tailored specifically to showcase high-performance Machine Learning systems, production LLM/RAG pipelines, on-device AI apps, and enterprise data science projects.

---

## 📂 Project Folder Structure

```text
sandeep-portfolio-website/
├── public/                               # Static assets served directly
│   ├── .nojekyll                         # Bypasses Jekyll on GitHub Pages
│   ├── favicon.png                       # Site browser favicon
│   ├── assets/                           # Static public media
│   └── images/                           # Static project & company logos
│
├── src/                                  # Source code
│   ├── assets/                           # Local media assets
│   │   └── sandeep.jpg                   # Profile portrait
│   │
│   ├── components/                       # UI Components
│   │   ├── AnimatedBackground.jsx        # Ambient particle background
│   │   └── portfolio/                    # Core portfolio sections
│   │       ├── Navbar.jsx                # Floating luxury pill navbar with theme toggle
│   │       ├── Hero.jsx                  # 3D Hero with macOS code studio & floating tech tiles
│   │       ├── BentoGrid.jsx             # 3D Bento dashboard (Terminal, radar, metrics, showcase)
│   │       ├── About.jsx                 # Professional narrative & 3D circular progress stats
│   │       ├── Skills.jsx                # Technical arsenal & primary framework logo chips
│   │       ├── Projects.jsx              # Filterable 3D project cards with live demo & code links
│   │       ├── Experience.jsx            # Career timeline with glowing milestone nodes
│   │       ├── Education.jsx             # Academic history & B.Tech CSE coursework
│   │       ├── Achievements.jsx          # Milestones, competitions & open-source achievements
│   │       ├── Contact.jsx               # Interactive contact form & connection cards
│   │       ├── Footer.jsx                # Clean luxury footer with back-to-top cue
│   │       └── NeuralBackground.jsx      # Interactive canvas particle network
│   │
│   ├── data/                             # Centralized data sources
│   │   └── resumeData.js                 # Complete resume info, projects, skills, and experience
│   │
│   ├── hooks/                            # Custom React hooks
│   │   └── useAnimations.js              # Scroll reveal, animated counter, and intersection hooks
│   │
│   ├── App.jsx                           # Root component, theme state & active section tracking
│   ├── App.css                           # App level utility rules
│   ├── main.jsx                          # React application entry point
│   └── portfolio.css                     # Master Luxury Design System (Parchment & Obsidian)
│
├── .gitignore                            # Git ignore configuration
├── eslint.config.js                      # ESLint rules and configuration
├── index.html                            # HTML entry document & metadata
├── jsconfig.json                         # JavaScript path aliases & config
├── package.json                          # Project scripts, dependencies & manifest
├── package-lock.json                     # Locked dependency tree
├── vercel.json                           # Vercel deployment & SPA routing configuration
├── vite.config.js                        # Vite bundler configuration & React plugins
└── Readme.md                             # Comprehensive project documentation
```

---

## 🎨 Master Design System

- **Light Mode (Default)**:
  - **Canvas Background:** `#F6F2EB` (Warm Silk Linen Sand) with subtle radial geometric matrix.
  - **Cards & Surfaces:** `#FDFAF5` (Crisp Alabaster) with fine dimensional shadows.
  - **Luxury Accents:** `#9E6E3E` (Caramel Bronze), `#B5824C` (Champagne Bronze), `#1B4D4F` (Deep Spruce Teal).
  - **Typography:** `Outfit` (Headlines) & `Plus Jakarta Sans` (Body).
- **Dark Mode (Toggleable)**:
  - **Canvas Background:** `#090A0F` (Deep Space Caviar Obsidian).
  - **Cards & Surfaces:** `#141724` (Translucent Obsidian Glass).
  - **Luxury Accents:** `#D4A359` (Champagne Gold) & `#E8B86D` (Caramel Gold).

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** React 19 (`react`, `react-dom`)
- **Build Tool:** Vite 6 (`vite`, `@vitejs/plugin-react`)
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** Custom 3D perspective parallax & Framer Motion (`framer-motion`)
- **Analytics:** `@vercel/analytics`
- **Routing:** React Router DOM (`react-router-dom`)
- **Styling:** Custom Luxury CSS Design System (`portfolio.css`)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) installed on your machine.

### 2. Installation
Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/SandeepMuhal88/sandeep-portfolio-website.git

# Navigate to the project directory
cd sandeep-portfolio-website

# Install packages
npm install
```

### 3. Development Server
Start the local Vite dev server:

```bash
npm run dev
```

The app will be accessible at:
```text
http://localhost:5173/sandeep-portfolio-website/
```

### 4. Production Build
Compile and bundle for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 👨‍💻 Author

**Sandeep Muhal**  
*Data Scientist & AI Architect*  
- **Portfolio:** [sandeepmuhalin.vercel.app](https://sandeepmuhalin.vercel.app/)  
- **GitHub:** [@SandeepMuhal88](https://github.com/SandeepMuhal88)  
- **LinkedIn:** [sandeep-muhal](https://www.linkedin.com/in/sandeep-muhal-5672aa285/)  
- **Kaggle:** [sandeepmuhal88](https://www.kaggle.com/sandeepmuhal88)  
- **Email:** sandeepmuhal8840@gmail.com