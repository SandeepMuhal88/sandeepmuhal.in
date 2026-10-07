import React, { useState, useEffect, useRef } from 'react'
import { Terminal, Zap, Code2, BarChart3, ExternalLink, Github } from 'lucide-react'
import { projects, personalInfo } from '../../data/resumeData'

/* ── Interactive Terminal Card ── */
const TERMINAL_COMMANDS = {
  'npm run about': {
    output: [
      '> Sandeep Muhal — AI & Data Science Engineer',
      '> Location: Kishangarh, Rajasthan 🇮🇳',
      '> Status:   ✅ Open to Opportunities',
      '> Focus:    LLMs, RAG, On-Device AI',
    ],
  },
  contact: {
    output: [
      `> Email:    sandeepmuhal8840@gmail.com`,
      `> LinkedIn: linkedin.com/in/sandeep-muhal-5672aa285`,
      `> GitHub:   github.com/SandeepMuhal88`,
    ],
  },
  skills: {
    output: [
      '> Python · PyTorch · TensorFlow · FastAPI',
      '> LangChain · FAISS · Docker · Flutter',
      '> RAG Pipelines · LLaMA · GGUF · RLHF',
    ],
  },
  help: {
    output: [
      '> Available commands:',
      '>   npm run about  — who am I?',
      '>   contact        — get in touch',
      '>   skills         — my tech stack',
      '>   clear          — clear terminal',
    ],
  },
}

const TYPEWRITER_SEQUENCE = [
  { text: 'npm run about', delay: 800 },
  { text: 'skills', delay: 4000 },
  { text: 'contact', delay: 7500 },
]

function TerminalCard() {
  const [history, setHistory] = useState([{ type: 'info', text: '> Type a command or watch the demo…' }])
  const [input, setInput] = useState('')
  const [autoText, setAutoText] = useState('')
  const [autoIdx, setAutoIdx] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Auto-typing sequence
  useEffect(() => {
    if (autoIdx >= TYPEWRITER_SEQUENCE.length) return
    const { text, delay } = TYPEWRITER_SEQUENCE[autoIdx]
    const startTimer = setTimeout(() => {
      setIsTyping(true)
      let i = 0
      const typeInterval = setInterval(() => {
        setAutoText(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(typeInterval)
          setTimeout(() => {
            runCommand(text)
            setAutoText('')
            setIsTyping(false)
            setAutoIdx(prev => prev + 1)
          }, 500)
        }
      }, 55)
    }, delay)
    return () => clearTimeout(startTimer)
  }, [autoIdx])

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (trimmed === 'clear') {
      setHistory([])
      return
    }
    const result = TERMINAL_COMMANDS[trimmed]
    const newLines = [
      { type: 'cmd', text: `$ ${cmd}` },
      ...(result
        ? result.output.map(t => ({ type: 'out', text: t }))
        : [{ type: 'err', text: `> Command not found: "${cmd}". Type "help".` }]),
    ]
    setHistory(prev => [...prev, ...newLines])
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      runCommand(input)
      setInput('')
    }
  }

  return (
    <div className="bento-card bento-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="bento-card-glow" />
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--yellow" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-title">sandeep@portfolio ~ </span>
        <Terminal size={13} className="terminal-icon" />
      </div>
      <div className="terminal-body">
        {history.map((line, i) => (
          <div key={i} className={`terminal-line terminal-line--${line.type}`}>{line.text}</div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="terminal-input-row">
        <span className="terminal-prompt">$&nbsp;</span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={isTyping ? autoText : input}
          onChange={e => !isTyping && setInput(e.target.value)}
          onKeyDown={!isTyping ? handleKey : undefined}
          placeholder="Type a command…"
          aria-label="Terminal input"
        />
        <span className="terminal-cursor-blink" aria-hidden="true" />
      </div>
    </div>
  )
}

/* ── Tech Stack Radar ── */
const TECH_ICONS = [
  { name: 'Python',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',       glow: '#3b82f6' },
  { name: 'PyTorch',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',     glow: '#f97316' },
  { name: 'TensorFlow',url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',glow: '#fbbf24' },
  { name: 'Docker',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',       glow: '#06b6d4' },
  { name: 'FastAPI',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',     glow: '#34d399' },
  { name: 'Flutter',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',     glow: '#06b6d4' },
  { name: 'React',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',         glow: '#38bdf8' },
  { name: 'Git',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',             glow: '#f97316' },
  { name: 'Linux',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',         glow: '#fbbf24' },
]

function RadarCard() {
  const [hovered, setHovered] = useState(null)
  return (
    <div className="bento-card bento-radar">
      <div className="bento-card-glow" />
      <div className="bento-card-header">
        <Code2 size={16} className="bento-header-icon" />
        <span className="bento-header-label">Tech Stack Radar</span>
      </div>
      <div className="radar-icons-grid">
        {TECH_ICONS.map((t) => (
          <div
            key={t.name}
            className={`radar-icon-item ${hovered === t.name ? 'radar-icon-item--hovered' : ''}`}
            style={{ '--tech-glow': t.glow }}
            onMouseEnter={() => setHovered(t.name)}
            onMouseLeave={() => setHovered(null)}
            title={t.name}
          >
            <img src={t.url} alt={t.name} loading="lazy" onError={e => { e.target.style.display = 'none' }} />
            <span className="radar-icon-name">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Performance Metrics Card ── */
const METRICS = [
  { label: 'AI Projects Built',    value: 15,  suffix: '+', accent: '#6366f1' },
  { label: 'API Avg Response',     value: 48,  suffix: 'ms',accent: '#06b6d4' },
  { label: 'GitHub Contributions', value: 340, suffix: '+', accent: '#34d399' },
  { label: 'ML Models Deployed',   value: 8,   suffix: '+', accent: '#a78bfa' },
]

function useCountUp(target, active) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / 60
    const interval = setInterval(() => {
      start = Math.min(start + step, target)
      setVal(Math.round(start))
      if (start >= target) clearInterval(interval)
    }, 16)
    return () => clearInterval(interval)
  }, [target, active])
  return val
}

function MetricItem({ metric, active }) {
  const val = useCountUp(metric.value, active)
  return (
    <div className="metric-item" style={{ '--metric-accent': metric.accent }}>
      <div className="metric-value">
        <span className="metric-number">{val}</span>
        <span className="metric-suffix">{metric.suffix}</span>
      </div>
      <div className="metric-label">{metric.label}</div>
      <div className="metric-bar">
        <div className="metric-bar-fill" style={{ width: active ? `${Math.min((metric.value / (metric.value * 1.2)) * 100, 100)}%` : '0%' }} />
      </div>
    </div>
  )
}

function MetricsCard() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="bento-card bento-metrics">
      <div className="bento-card-glow" />
      <div className="bento-card-header">
        <BarChart3 size={16} className="bento-header-icon" />
        <span className="bento-header-label">Performance & Proof</span>
      </div>
      <div className="metrics-grid">
        {METRICS.map(m => <MetricItem key={m.label} metric={m} active={visible} />)}
      </div>
    </div>
  )
}

/* ── Featured Project Card ── */
function ShowcaseCard() {
  const featured = projects.find(p => p.featured) || projects[0]
  const accent = '#6366f1'

  return (
    <div className="bento-card bento-showcase">
      <div className="bento-card-glow" />
      <div className="showcase-stripe" style={{ background: `linear-gradient(90deg, ${accent}, #06b6d4, transparent)` }} />
      <div className="bento-card-header">
        <Zap size={16} className="bento-header-icon" style={{ color: accent }} />
        <span className="bento-header-label">Featured Project</span>
        <span className="showcase-badge">★ FEATURED</span>
      </div>
      <h3 className="showcase-title">{featured.title}</h3>
      <p className="showcase-desc">{featured.description.slice(0, 160)}…</p>
      <div className="showcase-tags">
        {featured.tech.slice(0, 5).map(t => (
          <span key={t} className="showcase-tag" style={{ borderColor: `${accent}55`, color: accent }}>{t}</span>
        ))}
      </div>
      <div className="showcase-actions">
        <a
          href={featured.github}
          target="_blank" rel="noopener noreferrer"
          className="showcase-btn showcase-btn--outline"
        >
          <Github size={14} /> Code
        </a>
        {featured.demo && (
          <a
            href={featured.demo}
            target="_blank" rel="noopener noreferrer"
            className="showcase-btn showcase-btn--primary"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

/* ── Main Export ── */
export default function BentoGrid() {
  return (
    <section className="bento-section" aria-label="Highlights">
      {/* Ambient radial glow */}
      <div className="bento-ambient-glow" aria-hidden="true" />
      <div className="bento-container">
        <div className="bento-label">
          <span className="bento-label-dot" />
          Quick Highlights
        </div>
        <div className="bento-grid">
          <ShowcaseCard />
          <TerminalCard />
          <RadarCard />
          <MetricsCard />
        </div>
      </div>
    </section>
  )
}
