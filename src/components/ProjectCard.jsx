import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

/**
 * size: 'large' | 'medium' | 'small' -- controls layout composition, not just scale
 */
export default function ProjectCard({ project, delay = 0 }) {
  const { number, title, tagline, description, stack, role, links, size } = project

  const isLarge = size === 'large'
  const isMedium = size === 'medium'

  return (
    <ScrollReveal delay={delay}>
      <motion.article
        whileHover="hover"
        initial="rest"
        animate="rest"
        className={`group relative border border-[var(--color-line)] overflow-hidden ${
          isLarge ? 'grid md:grid-cols-2' : ''
        }`}
      >
        {/* Visual panel -- procedurally composed, not a photo, since these are backend-heavy academic/client builds */}
        <div
          className={`relative bg-[var(--color-bg-inset)] overflow-hidden ${
            isLarge ? 'aspect-[4/3] md:aspect-auto' : 'aspect-[16/10]'
          }`}
        >
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-grid opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[5rem] sm:text-[7rem] font-semibold text-[var(--color-line)] select-none">
              {number}
            </span>
          </div>
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[var(--color-bg)]/60"
          />
          <motion.div
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate)]">
              {role}
            </span>
            <motion.span
              variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
              transition={{ duration: 0.25 }}
              className="text-[var(--color-signal)]"
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </motion.span>
          </motion.div>
        </div>

        {/* Content panel */}
        <div className={`p-6 sm:p-8 ${isLarge ? 'flex flex-col justify-center' : ''}`}>
          <div className="flex items-baseline justify-between gap-4 mb-1">
            <span className="font-mono text-xs text-[var(--color-brass)]">
              {number}
            </span>
          </div>
          <h3
            className={`font-display font-semibold text-[var(--color-paper)] tracking-tight leading-tight ${
              isLarge ? 'text-2xl sm:text-3xl' : isMedium ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-[var(--color-slate)]">{tagline}</p>

          <p
            className={`mt-4 text-[var(--color-paper-dim)] leading-relaxed ${
              isLarge ? 'text-sm sm:text-base' : 'text-sm'
            } ${isLarge ? '' : 'line-clamp-3'}`}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wide text-[var(--color-slate-dim)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 mt-6 pt-5 border-t border-[var(--color-line-soft)]">
            <a
              href={links.live || '#'}
              className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-300 ${
                links.live
                  ? 'text-[var(--color-paper)] hover:text-[var(--color-signal)]'
                  : 'text-[var(--color-slate-dim)] pointer-events-none'
              }`}
            >
              Live Project
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href={links.github}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-paper)] hover:text-[var(--color-signal)] transition-colors duration-300"
            >
              <GitBranch size={12} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}
