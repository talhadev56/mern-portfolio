import { useState } from 'react'

export default function SkillCard({ name, note }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative border border-[var(--color-line)] px-5 py-5 transition-colors duration-300 hover:border-[var(--color-slate-dim)] focus-within:border-[var(--color-signal)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <span
        className="absolute top-0 left-0 h-px bg-[var(--color-signal)] transition-all duration-300 ease-out"
        style={{ width: hovered ? '100%' : '0%' }}
        aria-hidden="true"
      />
      <div className="flex items-center justify-between mb-2.5">
        <h3 className="font-display text-base font-medium text-[var(--color-paper)]">
          {name}
        </h3>
        <span
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-line)] transition-all duration-300"
          style={{
            backgroundColor: hovered ? 'var(--color-signal)' : 'var(--color-line)',
            transform: hovered ? 'scale(1.3)' : 'scale(1)',
          }}
          aria-hidden="true"
        />
      </div>
      <p
        className="text-sm text-[var(--color-slate)] leading-relaxed transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0.7 }}
      >
        {note}
      </p>
    </div>
  )
}
