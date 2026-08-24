import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from './Button'

const RESPONSE_LINES = [
  { key: '"name"', value: '"Talha Akram"' },
  { key: '"role"', value: '"MERN Stack Developer"' },
  { key: '"stack"', value: '["React", "Node", "Express", "MongoDB"]' },
  { key: '"status"', value: '"available"' },
  { key: '"responseTime"', value: '"~2 hrs"' },
]

function RequestConsole() {
  const [phase, setPhase] = useState('idle') // idle -> requesting -> streaming -> done
  const [visibleLines, setVisibleLines] = useState(0)

  // Drives the whole sequence from one effect: two fixed delays to move
  // through idle -> requesting -> streaming, then a single interval that
  // reveals one response line at a time until the body is complete.
  useEffect(() => {
    const toRequesting = setTimeout(() => setPhase('requesting'), 500)
    const toStreaming = setTimeout(() => setPhase('streaming'), 1400)

    const streamStart = setTimeout(() => {
      let count = 0
      const interval = setInterval(() => {
        count += 1
        setVisibleLines(count)
        if (count >= RESPONSE_LINES.length) {
          clearInterval(interval)
          setPhase('done')
        }
      }, 180)
    }, 1400)

    return () => {
      clearTimeout(toRequesting)
      clearTimeout(toStreaming)
      clearTimeout(streamStart)
    }
  }, [])

  return (
    <div className="w-full max-w-md border border-[var(--color-line)] bg-[var(--color-bg-raised)] font-mono text-[13px] leading-relaxed shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-line)]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--color-line)]" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-line)]" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-line)]" />
        </div>
        <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)]">
          request.console
        </span>
      </div>

      <div className="p-4 space-y-3">
        {/* Request line */}
        <div className="flex items-baseline gap-2">
          <span className="text-[var(--color-brass)]">GET</span>
          <span className="text-[var(--color-paper-dim)]">/api/developer</span>
        </div>

        <div className="hr-line" />

        {/* Status line */}
        <div className="flex items-center gap-2 min-h-[18px]">
          {phase === 'idle' && (
            <span className="text-[var(--color-slate-dim)]">connecting</span>
          )}
          {phase === 'requesting' && (
            <span className="text-[var(--color-slate)]">awaiting response</span>
          )}
          {(phase === 'streaming' || phase === 'done') && (
            <>
              <span className="text-[var(--color-signal)]">200 OK</span>
              <span className="text-[var(--color-slate-dim)]">· 24ms</span>
            </>
          )}
        </div>

        {/* Response body */}
        <div className="min-h-[130px]">
          <span className="text-[var(--color-slate-dim)]">{'{'}</span>
          <div className="pl-4 space-y-1 py-1">
            {RESPONSE_LINES.map((line, i) => (
              <div
                key={line.key}
                className="grid grid-cols-[auto_1fr] gap-2 transition-opacity duration-300"
                style={{ opacity: i < visibleLines ? 1 : 0 }}
              >
                <span className="text-[var(--color-paper-dim)]">{line.key}:</span>
                <span className="text-[var(--color-signal)] truncate">{line.value}</span>
              </div>
            ))}
          </div>
          <span className="text-[var(--color-slate-dim)]">{'}'}</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle fine grid, fades toward content */}
      <div
        className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-brass)]">
              MERN Stack Developer
            </span>
            <span className="h-px w-8 bg-[var(--color-line)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--color-paper)]"
          >
            I build digital experiences that feel as good as they work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[var(--color-slate)] text-base sm:text-lg leading-relaxed max-w-lg"
          >
            I'm Talha Akram, a MERN stack developer focused on building modern,
            responsive, and scalable web applications — from client-facing
            portfolios to full Django systems built from the ground up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              as="a"
              href="#projects"
              variant="primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="ghost"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] uppercase text-[var(--color-slate)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="signal-dot absolute inline-flex h-full w-full rounded-full bg-[var(--color-signal)]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-signal)]" />
            </span>
            Open to freelance &amp; full-time opportunities
          </motion.div>
        </div>

        {/* Right: signature interactive element */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <RequestConsole />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative flex flex-col items-center gap-3 mt-16"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-slate-dim)]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-[var(--color-slate-dim)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
