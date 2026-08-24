import { useEffect, useState } from 'react'

function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark'
  // The inline script in index.html already set this before first paint --
  // read it back so React's state matches what's on screen with no flash.
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be unavailable (private browsing, disabled cookies) --
      // theme still works for the session, it just won't persist.
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
