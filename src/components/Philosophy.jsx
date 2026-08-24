import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

const steps = [
  { n: '01', label: 'Understand', desc: 'Read the brief twice. Ask what’s actually being asked for before opening an editor.' },
  { n: '02', label: 'Design', desc: 'Plan the structure, data, and layout on paper — or in this case, before touching JSX.' },
  { n: '03', label: 'Build', desc: 'Component by component, data-driven where it matters, no duplicated markup.' },
  { n: '04', label: 'Refine', desc: 'Check it at every breakpoint. Cut what doesn’t earn its place.' },
  { n: '05', label: 'Deploy', desc: 'Ship it in a state I’d actually put on my own CV.' },
]

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="07 / How I Build" title="Five steps, no shortcuts." align="center" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 0.1} className="bg-[var(--color-bg)] p-6 text-center">
              <span className="font-mono text-xs text-[var(--color-brass)]">{step.n}</span>
              <h3 className="mt-3 font-display text-lg font-medium text-[var(--color-paper)]">
                {step.label}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-slate)] leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
