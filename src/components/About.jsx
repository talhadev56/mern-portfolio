import ScrollReveal from './ScrollReveal'

const facts = [
  { label: 'Focus', value: 'MERN + Django' },
  { label: 'Projects shipped', value: '5+' },
  { label: 'Currently', value: 'Full-stack builds' },
  { label: 'Studying since', value: '2023' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          {/* Left: eyebrow + heading */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-brass)]">
                  01 / About
                </span>
                <span className="h-px w-8 bg-[var(--color-line)]" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-[var(--color-paper)]">
                Building interfaces with logic, curiosity, and attention to
                detail.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right: copy + facts */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-[var(--color-slate)] text-base sm:text-lg leading-relaxed max-w-xl">
                I'm a Computer Science student who spends more time building
                than the coursework strictly requires. My work moves between
                two stacks — React on the frontend paired with Node and
                Express, and Django when a project calls for Python —
                which means I end up thinking about a problem from both the
                client and the server side before I write a line of UI.
              </p>
              <p className="mt-5 text-[var(--color-slate)] text-base sm:text-lg leading-relaxed max-w-xl">
                Client work has taught me the part that's easy to skip when
                you're only building for yourself: matching a brief, hitting a
                deadline, and shipping something the person on the other end
                actually wanted — not just something that works.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px mt-10 bg-[var(--color-line-soft)] border border-[var(--color-line-soft)] max-w-xl">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-[var(--color-bg)] px-5 py-5"
                  >
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)] mb-1.5">
                      {fact.label}
                    </div>
                    <div className="font-display text-lg sm:text-xl font-medium text-[var(--color-paper)]">
                      {fact.value}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
