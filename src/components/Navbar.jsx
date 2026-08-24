import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-line)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={handleNavClick('home')}
            className="font-display font-semibold text-sm tracking-wide text-[var(--color-paper)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)] signal-dot" aria-hidden="true" />
            Talha Akram
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={`relative font-mono text-xs tracking-[0.08em] uppercase py-2 transition-colors duration-300 ${
                    active === link.id
                      ? 'text-[var(--color-paper)]'
                      : 'text-[var(--color-slate)] hover:text-[var(--color-paper-dim)]'
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-signal)]"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={handleNavClick('contact')}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase px-4 py-2 border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors duration-300"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className="text-[var(--color-paper)] p-2 -mr-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[45] bg-[var(--color-bg)]/98 backdrop-blur-sm md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-1 px-8 pt-28"
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
                  className="w-full"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={handleNavClick(link.id)}
                    className={`block py-4 font-display text-3xl border-b border-[var(--color-line-soft)] w-full ${
                      active === link.id
                        ? 'text-[var(--color-signal)]'
                        : 'text-[var(--color-paper)]'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
