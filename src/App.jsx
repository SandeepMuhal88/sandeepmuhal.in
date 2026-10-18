import { useState, useEffect, useCallback } from 'react'

// Layout
import { Navbar, Footer } from './components/layout'

// Sections
import {
  Hero,
  BentoGrid,
  About,
  Skills,
  Projects,
  Experience,
  Education,
  Achievements,
  Contact,
} from './components/sections'

// Styles
import './styles/portfolio.css'

// Analytics
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { SECTION_IDS } from './constants/navigation.js'

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setProgress(docHeight > 0 ? (scrolled / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}

function LoadingScreen() {
  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-logo">SM</div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
      <div className="loading-text">Initializing…</div>
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [loaded, setLoaded] = useState(false)

  // Hide loading screen after 2s
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(t)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 100
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <ThemeProvider>
      <div className="portfolio-root">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {!loaded && <LoadingScreen />}
        <ScrollProgressBar />
        <Navbar activeSection={activeSection} onNav={scrollTo} />
        <main id="main-content">
          <Hero onNav={scrollTo} />
          <BentoGrid />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer onNav={scrollTo} />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}
