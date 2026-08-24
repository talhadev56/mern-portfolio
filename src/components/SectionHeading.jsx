import ScrollReveal from './ScrollReveal'

/**
 * eyebrow: small mono label, e.g. "02 / SKILLS"
 * title: the large display heading
 * description: optional supporting line
 * align: 'left' | 'center'
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}) {
  const isCenter = align === 'center'

  return (
    <ScrollReveal
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-brass)]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[var(--color-line)]" />
        </div>
      )}
      <h2
        id={id}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--color-paper)] leading-[1.1] tracking-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-slate)] text-base sm:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
