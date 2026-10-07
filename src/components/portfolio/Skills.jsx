import React, { useState, useRef } from 'react'
import { skillCategories } from '../../data/resumeData'
import {
  Code,
  Brain,
  Cpu,
  Sparkles,
  Layers,
  Server,
  Smartphone,
  BarChart3,
  Terminal,
  Boxes
} from 'lucide-react'
import { useScrollReveal } from '../../hooks/useAnimations.js'

const CATEGORY_ICONS = {
  'Programming':            <Code size={22} />,
  'Machine Learning':       <Brain size={22} />,
  'Deep Learning':          <Cpu size={22} />,
  'LLMs & NLP':             <Sparkles size={22} />,
  'Frameworks & Libraries': <Layers size={22} />,
  'Backend & Deployment':   <Server size={22} />,
  'Mobile Development':     <Smartphone size={22} />,
  'Tools & Visualization':  <BarChart3 size={22} />,
}

const PROFICIENCY = {
  'Programming':            94,
  'Machine Learning':       90,
  'Deep Learning':          88,
  'LLMs & NLP':             86,
  'Frameworks & Libraries': 92,
  'Backend & Deployment':   84,
  'Mobile Development':     78,
  'Tools & Visualization':  88,
}

const TECH_LOGOS = [
  { name: 'Python',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PyTorch',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Docker',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'FastAPI',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Flutter',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Git',          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'C++',          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Jupyter',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'VS Code',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'NumPy',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Pandas',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'OpenCV',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'SQLite',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  { name: 'Linux',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
]

function SkillCard({ cat, index, visible }) {
  const cardRef = useRef(null)
  const pct = PROFICIENCY[cat.category] || 82
  const icon = CATEGORY_ICONS[cat.category] || <Boxes size={22} />

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 16
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      className={`skill-card-3d ${visible ? 'reveal' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card-top">
        <div className="skill-icon-badge">
          {icon}
        </div>
        <div className="skill-cat-info">
          <h3 className="skill-cat-name">{cat.category}</h3>
          <p className="skill-cat-count">{cat.skills.length} Core Competencies</p>
        </div>
        <div className="skill-pct-label">{pct}%</div>
      </div>

      <div className="skill-progress-track">
        <div className="skill-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="skill-tags-3d">
        {cat.skills.map((s) => (
          <span key={s} className="skill-tag-3d">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [headRef, headVis] = useScrollReveal()
  const [logosRef, logosVis] = useScrollReveal()
  const [gridRef, gridVis] = useScrollReveal()

  return (
    <section id="skills" className="section ds-section">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headRef} className={`section-header ${headVis ? 'reveal' : ''}`}>
          <span className="ds-label"><Terminal size={13} /> TECHNICAL ARSENAL</span>
          <h2 className="ds-title">Core Technical Areas &amp; Tools</h2>
          <p className="section-subtitle">
            Enterprise-grade proficiency across Data Science, Machine Learning, LLMs, and MLOps.
          </p>
        </div>

        {/* Tech Logos Row */}
        <div ref={logosRef} className={`skill-logos-section ${logosVis ? 'reveal' : ''}`}>
          <div className="skill-logos-title">PRIMARY TECHNOLOGIES &amp; FRAMEWORKS</div>
          <div className="skill-logos-grid">
            {TECH_LOGOS.map((tech, i) => (
              <div
                key={tech.name}
                className="skill-logo-item"
                style={{ animationDelay: `${i * 0.04}s` }}
                title={tech.name}
              >
                <div className="logo-img-wrap">
                  <img
                    src={tech.url}
                    alt={tech.name}
                    loading="lazy"
                    onError={e => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <span className="skill-logo-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Category Skill Cards */}
        <div ref={gridRef} className="skills-grid-3d">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.category} cat={cat} index={i} visible={gridVis} />
          ))}
        </div>
      </div>
    </section>
  )
}
