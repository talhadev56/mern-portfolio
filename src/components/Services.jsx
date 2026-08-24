import { Code2, Layers, Smartphone, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces built with React and a component structure that’s actually maintainable.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description: 'Complete MERN applications — REST APIs, database modeling, and the frontend that talks to them.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Layouts designed for desktop, tablet, and mobile from the start — not a shrunk desktop site.',
  },
  {
    icon: Sparkles,
    title: 'Interactive UI',
    description: 'Purposeful motion with Framer Motion — scroll reveals and micro-interactions that support the design.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="06 / Services"
          title="What I can build for you."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line-soft)] border border-[var(--color-line-soft)]">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} className="bg-[var(--color-bg)] p-7">
              <service.icon
                size={22}
                strokeWidth={1.5}
                className="text-[var(--color-signal)]"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg font-medium text-[var(--color-paper)]">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm text-[var(--color-slate)] leading-relaxed">
                {service.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
