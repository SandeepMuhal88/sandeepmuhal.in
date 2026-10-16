import React, { useEffect, useState } from 'react'

const PROGRAMMING_CHARS = ['0', '1', '{', '}', '<', '>', '/', '\\', '(', ')', '[', ']', ';', ':', '=', '+', '-', '*', '%', '&', '|', '^', '~', '!', '?', '#', '$', '@']
const TECH_ICONS = ['⚡', '🚀', '💻', '🔧', '⚙️', '🔬', '📊', '🎯', '💡', '🔥', '⭐', '🌟', '💎', '🎨', '🔮']

const AnimatedBackground = () => {
  const [codeChars, setCodeChars] = useState([])
  const [floatingIcons, setFloatingIcons] = useState([])

  useEffect(() => {
    // Generate code rain characters
    const generateCodeChars = () => {
      const chars = []
      for (let i = 0; i < 50; i++) {
        chars.push({
          id: i,
          char: PROGRAMMING_CHARS[Math.floor(Math.random() * PROGRAMMING_CHARS.length)],
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          animationDelay: Math.random() * 5
        })
      }
      setCodeChars(chars)
    }

    // Generate floating tech icons
    const generateFloatingIcons = () => {
      const icons = []
      for (let i = 0; i < 15; i++) {
        icons.push({
          id: i,
          icon: TECH_ICONS[Math.floor(Math.random() * TECH_ICONS.length)],
          left: Math.random() * 100,
          animationDuration: 10 + Math.random() * 10,
          animationDelay: Math.random() * 8
        })
      }
      setFloatingIcons(icons)
    }

    generateCodeChars()
    generateFloatingIcons()

    // Regenerate periodically for variety
    const interval = setInterval(() => {
      generateCodeChars()
      generateFloatingIcons()
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Code Rain Effect */}
      <div className="code-rain">
        {codeChars.map((char) => (
          <div
            key={char.id}
            className="code-char"
            style={{
              left: `${char.left}%`,
              animationDuration: `${char.animationDuration}s`,
              animationDelay: `${char.animationDelay}s`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="floating-icon"
            style={{
              left: `${icon.left}%`,
              animationDuration: `${icon.animationDuration}s`,
              animationDelay: `${icon.animationDelay}s`
            }}
          >
            {icon.icon}
          </div>
        ))}
      </div>

      {/* Matrix Sweep Effect */}
      <div className="matrix-bg"></div>

      {/* Circuit Lines */}
      <div className="circuit-lines"></div>
    </>
  )
}

export default AnimatedBackground
