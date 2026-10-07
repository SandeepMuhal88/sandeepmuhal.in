import React, { useState, useEffect, useRef } from 'react'
import { personalInfo } from '../../data/resumeData'
import NeuralBackground from '../ui/NeuralBackground.jsx'
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, Sparkles, Code, CheckCircle2, ArrowRight } from 'lucide-react'
import profileImg from '../../assets/sandeep.jpg'

const ROLES = [
  'Data Scientist & AI Architect',
  'LLM & RAG Pipeline Engineer',
  'Deep Learning Specialist',
  'FastAPI & MLOps Developer',
  'On-Device AI & Flutter Builder',
]

export default function Hero({ onNav }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const cardRef = useRef(null)
  const sectionRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex]
    let t
    if (!deleting && charIndex <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c + 1) }, 45)
    } else if (!deleting && charIndex > current.length) {
      t = setTimeout(() => setDeleting(true), 2500)
    } else if (deleting && charIndex > 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }, 22)
    } else {
      setDeleting(false)
      setRoleIndex(r => (r + 1) % ROLES.length)
    }
    return () => clearTimeout(t)
  }, [charIndex, deleting, roleIndex])

  // Mouse 3D Parallax Tilt
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateY(${dx * 5}deg) rotateX(${-dy * 4}deg)`
      }
    }
    const onLeave = () => {
      if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    }
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      {/* Background dot grid pattern */}
      <div className="hero-canvas-grid" aria-hidden="true" />
      
      {/* Interactive Neural Background Canvas */}
      <NeuralBackground />

      <div className="hero-container">
        {/* TOP / MAIN CONTENT GRID */}
        <div className="hero-main-grid">
          
          {/* LEFT COLUMN: Editorial Headline & Value Proposition */}
          <div className="hero-left-col">
            
            {/* Profile Avatar */}
            <div className="hero-avatar-wrapper">
              <img src={profileImg} alt="Sandeep Muhal" className="hero-avatar" />
              <div className="hero-avatar-ring"></div>
            </div>

            {/* Status Pill Badge */}
            <div className="hero-status-pill">
              <span className="status-pill-dot" />
              <span className="status-pill-text">OPEN FOR OPPORTUNITIES</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="hero-editorial-title">
              CRAFTING HIGH-PERFORMANCE <br />
              <span className="title-serif-highlight">AI &amp; DATA SOLUTIONS.</span>
            </h1>

            {/* Typewriter Role Bar */}
            <div className="hero-role-bar" aria-live="polite">
              <span className="role-prefix">&gt;&nbsp;</span>
              <span className="role-text">{displayed}</span>
              <span className="role-cursor" aria-hidden="true">█</span>
            </div>

            {/* Value Proposition Description */}
            <p className="hero-description">
              I unlock enterprise value with tailored machine learning models, production-ready
              RAG pipelines, and intelligent data systems. Let's build something exceptional.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <button
                className="hero-btn hero-btn--secondary"
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                  else onNav('projects')
                }}
                id="hero-explore-btn"
              >
                View Projects
              </button>

              <a
                className="hero-btn hero-btn--primary"
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-resume-btn"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social-row">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-social-orb" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-orb" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hero-social-orb" aria-label="Email">
                <Mail size={17} />
              </a>
              <a href={`tel:${personalInfo.phone}`} className="hero-social-orb" aria-label="Phone">
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D macOS Interactive Code Studio */}
          <div className="hero-right-col">
            <div className="hero-mac-window" ref={cardRef}>
              
              {/* Window Header */}
              <div className="mac-window-header">
                <div className="mac-dots">
                  <span className="mac-dot mac-dot--red" />
                  <span className="mac-dot mac-dot--yellow" />
                  <span className="mac-dot mac-dot--green" />
                </div>
                <div className="mac-tab-title">sandeep_ai_architect.py</div>
                <Code size={14} className="mac-icon" />
              </div>

              {/* Code Body */}
              <div className="mac-code-body">
                <pre>
                  <code>
                    <span className="code-kw">class</span> <span className="code-class">AIDataScientist</span>:<br />
                    {'    '}<span className="code-kw">def</span> <span className="code-func">__init__</span>(<span className="code-self">self</span>):<br />
                    {'        '}<span className="code-self">self</span>.name = <span className="code-str">"Sandeep Muhal"</span><br />
                    {'        '}<span className="code-self">self</span>.role = <span className="code-str">"Data Scientist & AI Architect"</span><br />
                    {'        '}<span className="code-self">self</span>.stack = [<br />
                    {'            '}<span className="code-str">"PyTorch"</span>, <span className="code-str">"Transformers"</span>,<br />
                    {'            '}<span className="code-str">"FastAPI"</span>, <span className="code-str">"Docker"</span>, <span className="code-str">"RAG"</span><br />
                    {'        ]'}<br /><br />
                    {'    '}<span className="code-kw">async def</span> <span className="code-func">deploy_solution</span>(<span className="code-self">self</span>):<br />
                    {'        '}<span className="code-kw">return</span> <span className="code-str">"Status: Production Live 🚀"</span><br /><br />
                    <span className="code-comment"># Executive AI System Loaded</span><br />
                    ai = <span className="code-class">AIDataScientist</span>()<br />
                    <span className="code-func">print</span>(<span className="code-str">f"Engine: &#123;ai.name&#125; Ready!"</span>)
                  </code>
                </pre>
              </div>

              {/* Floating 3D Tech Tiles */}
              {/* Tile 1: Python / PyTorch */}
              <div className="floating-tech-tile tile-python">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                  className="tile-img"
                />
                <span className="tile-text">Python 3.11</span>
              </div>

              {/* Tile 2: PyTorch / Deep Learning */}
              <div className="floating-tech-tile tile-pytorch">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                  alt="PyTorch"
                  className="tile-img"
                />
                <span className="tile-text">PyTorch</span>
              </div>

              {/* Tile 3: Docker / MLOps */}
              <div className="floating-tech-tile tile-docker">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="tile-img"
                />
                <span className="tile-text">Docker MLOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURED & PROOF BANNER */}
        <div className="hero-featured-banner">
          <div className="banner-left">
            <span className="banner-label">FEATURED SPECIALIZATIONS &amp; DOMAINS</span>
            <div className="banner-chips">
              <span className="banner-chip">Deep Learning</span>
              <span className="banner-chip">LLMs &amp; RAG</span>
              <span className="banner-chip">Computer Vision</span>
              <span className="banner-chip">FastAPI &amp; Docker</span>
              <span className="banner-chip">Flutter AI</span>
            </div>
          </div>

          <div className="banner-right">
            <div className="banner-stat-title">15+ Large-Scale Systems Delivered</div>
            <div className="banner-stat-sub">★ 5.0/5 Engineering Excellence</div>
          </div>
        </div>

        {/* Scroll Cue */}
        <button className="hero-scroll-cue" onClick={() => onNav('about')} aria-label="Scroll to About">
          <span className="scroll-label">EXPLORE MORE</span>
          <ChevronDown size={16} className="scroll-arrow" />
        </button>
      </div>
    </section>
  )
}
