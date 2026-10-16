import React, { useState, useEffect } from 'react'
import { personalInfo } from '../../data/resumeData'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/useTheme.js'
import { NAV_LINKS } from '../../constants/navigation.js'

export default function Navbar({ activeSection, onNav }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  const handleNav = (id) => {
    onNav(id)
    setOpen(false)
  }

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-container">
        {/* Brand */}
        <button type="button" className="nav-brand" onClick={() => handleNav('home')} aria-label="Go to home">
          <span className="brand-name-serif">SANDEEP MUHAL</span>
          <span className="brand-pipe">|</span>
          <span className="brand-subtitle">AI ENGINEER</span>
        </button>

        {/* Desktop links */}
        <div className="nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              role="listitem"
              className={`nav-link ${activeSection === link.id ? 'nav-link--active' : ''}`}
              onClick={() => handleNav(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          {/* Theme toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            id="theme-toggle-btn"
          >
            {theme === 'dark'
              ? <Sun size={16} className="theme-icon theme-icon--sun" />
              : <Moon size={16} className="theme-icon theme-icon--moon" />
            }
          </button>

          {/* Action pill buttons matching reference */}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action-btn nav-action-btn--outline"
            id="nav-resume-btn"
          >
            View Resume
          </a>

          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="nav-action-btn nav-action-btn--primary"
            id="nav-hire-btn"
          >
            Hire Me
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile full-overlay drawer */}
      {open && (
        <div id="mobile-navigation" className="nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`nav-drawer-link ${activeSection === link.id ? 'nav-drawer-link--active' : ''}`}
              onClick={() => handleNav(link.id)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
