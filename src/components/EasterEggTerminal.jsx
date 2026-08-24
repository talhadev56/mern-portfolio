import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Terminal, X } from 'lucide-react'

const STATUS_LINES = [
  { label: 'Frontend', value: 'Ready' },
  { label: 'Backend', value: 'Ready' },
  { label: 'Database', value: 'Connected' },
  { label: 'Coffee', value: 'Required' },
]

export default function EasterEggTerminal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open system status terminal"
        className="fixed bottom-6 right-6 z-40 p-3 border border-[var(--color-line)] bg-[var(--color-bg)]/90 backdrop-blur text-[var(--color-slate-dim)] hover:text-[var(--color-signal)] hover:border-[var(--color-slate-dim)] transition-colors duration-300"
      >
        <Terminal size={16} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="System status"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm border border-[var(--color-line)] bg-[var(--color-bg-raised)] font-mono text-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-line)]">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)]">
                  system.status
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="text-[var(--color-slate-dim)] hover:text-[var(--color-paper)] transition-colors duration-300"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-[var(--color-signal)]">
                  &gt; system.status
                </p>
                {STATUS_LINES.map((line) => (
                  <div key={line.label} className="flex justify-between">
                    <span className="text-[var(--color-slate)]">{line.label}:</span>
                    <span
                      className={
                        line.label === 'Coffee'
                          ? 'text-[var(--color-brass)]'
                          : 'text-[var(--color-signal)]'
                      }
                    >
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
