# 🚀 Sandeep Muhal — Data Scientist & AI Engineer Portfolio

A world-class, ultra-premium personal portfolio website built with **React 19**, **Vite 6**, **Lucide Icons**, and an organic luxury design system (**Warm Linen Parchment & Deep Caviar Obsidian**). Tailored specifically to showcase high-performance Machine Learning systems, production LLM/RAG pipelines, on-device AI apps, and enterprise data science projects.

---

## Project structure

```text
sandeep-portfolio-website/
├── public/                         # Static files copied as-is by Vite
├── src/
│   ├── assets/                     # Imported and fingerprinted media
│   ├── components/
│   │   ├── layout/                 # Navigation and footer
│   │   ├── sections/               # Portfolio page sections
│   │   └── ui/                     # Reusable visual primitives
│   ├── constants/                  # Shared, stable application constants
│   ├── context/                    # App-wide state providers
│   ├── data/                       # Portfolio content
│   ├── hooks/                      # Reusable React hooks
│   ├── services/                   # UI-independent business operations
│   ├── styles/                     # Global design tokens and component styles
│   ├── App.jsx                     # Page composition and scroll state
│   └── main.jsx                    # React entry point and error boundary
├── index.html
├── package.json
└── vite.config.js
```

Keep section-specific markup in `components/sections`, reusable presentation in
`components/ui`, and non-visual work in `services`. Shared navigation data belongs
in `constants`; resume and portfolio content belongs in `data`.

## Design system

The design tokens live at the top of `src/styles/portfolio.css`. Light and dark
themes share component styles and override the same CSS variables through
`data-theme`; avoid adding page-specific color literals when a token exists.

## State, errors, and API boundaries

- Theme preference is app-wide state owned by `ThemeProvider`. It persists under
  `portfolio-theme`; unavailable browser storage is logged and does not stop rendering.
- Contact form validation and `mailto:` URL creation are in `src/services/contact.js`,
  separate from the form component.
- A root error boundary logs unexpected rendering errors and offers a reload action.
- This portfolio currently has no backend API. When one is added, keep shared HTTP
  transport and response/error handling under `src/api/client.js`, with feature
  endpoint modules (for example `src/api/projects.js`) calling that client. Keep
  API base URLs in Vite `VITE_` environment variables; never put secrets in client
  environment variables. Do not call `fetch` directly from UI components.
- Keep dependencies focused: prefer the existing React, Vite, and Lucide packages
  over adding another state or styling framework for isolated features.

---

## Tech stack

- **Framework:** React 19 (`react`, `react-dom`)
- **Build Tool:** Vite 6 (`vite`, `@vitejs/plugin-react`)
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** Custom CSS, browser APIs, and Framer Motion (`framer-motion`)
- **Analytics:** `@vercel/analytics`
- **Routing:** React Router DOM (`react-router-dom`)
- **Styling:** Custom Luxury CSS Design System (`portfolio.css`)

---

## Getting started

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