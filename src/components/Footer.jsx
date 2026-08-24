import { ArrowUp, GitBranch, Link2, Mail } from 'lucide-react'

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-[var(--color-line-soft)] py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-medium text-[var(--color-paper)]">
            Talha Akram
          </p>
          <p className="mt-1 text-xs text-[var(--color-slate-dim)]">
            MERN stack developer, built one request at a time.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:talha@example.com"
            aria-label="Email"
            className="text-[var(--color-slate)] hover:text-[var(--color-signal)] transition-colors duration-300"
          >
            <Mail size={16} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="text-[var(--color-slate)] hover:text-[var(--color-signal)] transition-colors duration-300"
          >
            <GitBranch size={16} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-[var(--color-slate)] hover:text-[var(--color-signal)] transition-colors duration-300"
          >
            <Link2 size={16} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="font-mono text-[11px] text-[var(--color-slate-dim)]">
            © 2026 Talha Akram
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="p-2 border border-[var(--color-line)] text-[var(--color-slate)] hover:text-[var(--color-signal)] hover:border-[var(--color-slate-dim)] transition-colors duration-300"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
