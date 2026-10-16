import { useCallback, useEffect, useMemo, useState } from 'react'
import ThemeContext from './themeContext.js'

const THEME_STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME = 'light'

function readStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : DEFAULT_THEME
  } catch (error) {
    console.error('Unable to read the saved theme preference.', error)
    return DEFAULT_THEME
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch (error) {
      console.error('Unable to save the theme preference.', error)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
