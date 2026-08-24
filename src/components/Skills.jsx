import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'
import ScrollReveal from './ScrollReveal'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const current = skillCategories.find((c) => c.id === activeCategory)

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="02 / Skills"
            title="What I reach for, and why."
          />

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 font-mono text-xs tracking-[0.08em] uppercase border transition-colors duration-300 ${
                    activeCategory === cat.id
                      ? 'border-[var(--color-signal)] text-[var(--color-signal)]'
                      : 'border-[var(--color-line)] text-[var(--color-slate)] hover:text-[var(--color-paper-dim)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current.skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} note={skill.note} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
