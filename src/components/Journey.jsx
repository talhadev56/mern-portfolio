import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'
import { journey, education } from '../data/experience'

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="05 / Journey"
          title="Development journey, not a resume."
          description="No fabricated job titles — just what I've actually built and when, year by year."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_0.5fr] gap-14">
          {/* Timeline */}
          <div className="relative pl-8 sm:pl-10">
            <div
              className="absolute left-[3px] sm:left-[5px] top-2 bottom-2 w-px bg-[var(--color-line)]"
              aria-hidden="true"
            />
            <div className="space-y-12">
              {journey.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.08}>
                  <div className="relative">
                    <span
                      className="absolute -left-8 sm:-left-10 top-1.5 w-2 h-2 rounded-full bg-[var(--color-signal)]"
                      aria-hidden="true"
                    />
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-mono text-sm text-[var(--color-brass)]">
                        {item.year}
                      </span>
                      <span className="h-px flex-1 bg-[var(--color-line-soft)]" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-medium text-[var(--color-paper)]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-[var(--color-slate-dim)]">
                      {item.place}
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-[var(--color-slate)] leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] text-[var(--color-slate-dim)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <ScrollReveal delay={0.15}>
            <div className="border border-[var(--color-line)] p-6 sm:p-7 lg:sticky lg:top-28">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-brass)]">
                Education
              </span>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[var(--color-paper)]">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-slate)]">
                {education.institution}
              </p>

              <div className="hr-line my-5" />

              <div className="space-y-4">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)] mb-1">
                    Focus
                  </div>
                  <div className="text-sm text-[var(--color-paper-dim)]">
                    {education.focus}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)] mb-1">
                    Student ID
                  </div>
                  <div className="font-mono text-sm text-[var(--color-paper-dim)]">
                    {education.id}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
