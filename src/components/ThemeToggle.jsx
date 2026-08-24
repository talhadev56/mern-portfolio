import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={!isDark}
      className={`relative inline-flex items-center justify-center w-9 h-9 border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-slate-dim)] transition-colors duration-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="inline-flex"
        >
          {isDark ? <Moon size={15} /> : <Sun size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
