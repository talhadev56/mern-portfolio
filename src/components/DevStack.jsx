import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'
import { stackLayers } from '../data/stack'

export default function DevStack() {
  const [activeId, setActiveId] = useState(stackLayers[0].id)
  const active = stackLayers.find((l) => l.id === activeId)

  return (
    <section className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="04 / The Stack"
          title="What happens between a click and a response."
          description="This is the actual path a request takes through a MERN app I build — hover or tap a layer to see what it's responsible for."
        />

        <div className="mt-14 grid lg:grid-cols-[0.55fr_0.45fr] gap-12 items-start">
          {/* Pipeline */}
          <div>
            {stackLayers.map((layer, i) => (
              <ScrollReveal key={layer.id} delay={i * 0.06}>
                <div>
                  <button
                    onMouseEnter={() => setActiveId(layer.id)}
                    onFocus={() => setActiveId(layer.id)}
                    onClick={() => setActiveId(layer.id)}
                    className={`w-full flex items-center gap-5 py-4 px-5 border transition-colors duration-300 text-left ${
                      activeId === layer.id
                        ? 'border-[var(--color-signal)] bg-[var(--color-bg-raised)]'
                        : 'border-[var(--color-line)] hover:border-[var(--color-slate-dim)]'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs w-6 shrink-0 transition-colors duration-300 ${
                        activeId === layer.id
                          ? 'text-[var(--color-signal)]'
                          : 'text-[var(--color-slate-dim)]'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-base sm:text-lg font-medium text-[var(--color-paper)]">
                        {layer.label}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-[var(--color-slate)]">
                      {layer.tech}
                    </span>
                  </button>
                  {i < stackLayers.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <ArrowDown size={14} className="text-[var(--color-line)]" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Detail panel */}
          <ScrollReveal delay={0.2}>
            <div className="border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-7 sm:p-8 min-h-[220px] lg:sticky lg:top-28">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-brass)]">
                Layer detail
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="mt-4"
                >
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-paper)]">
                    {active.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--color-signal)]">
                    {active.tech}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-[var(--color-slate)] leading-relaxed">
                    {active.detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
