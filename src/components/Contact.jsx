import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, GitBranch, Link2, Mail, X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Say a little more — at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      // Simulated network request -- swap for a real endpoint (e.g. Formspree, a Node/Express route) when deployed
      await new Promise((resolve, reject) =>
        setTimeout(() => (Math.random() > 0.08 ? resolve() : reject()), 1400)
      )
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[var(--color-line-soft)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          {/* Left: CTA copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-brass)]">
                  08 / Contact
                </span>
                <span className="h-px w-8 bg-[var(--color-line)]" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-[var(--color-paper)]">
                Have an idea worth building?
              </h2>
              <p className="mt-5 text-[var(--color-slate)] text-base sm:text-lg leading-relaxed max-w-md">
                Let's turn it into something people actually enjoy using. Tell
                me what you're working on and I'll get back to you within a
                day or two.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-5 mt-10">
                <a
                  href="mailto:talha@example.com"
                  aria-label="Email"
                  className="p-2.5 border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors duration-300"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="p-2.5 border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors duration-300"
                >
                  <GitBranch size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2.5 border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors duration-300"
                >
                  <Link2 size={18} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)] mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  disabled={isSending}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full bg-transparent border-b border-[var(--color-line)] py-3 text-[var(--color-paper)] placeholder:text-[var(--color-slate-dim)] focus:border-[var(--color-signal)] outline-none transition-colors duration-300 disabled:opacity-50"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-[var(--color-error)]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  disabled={isSending}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full bg-transparent border-b border-[var(--color-line)] py-3 text-[var(--color-paper)] placeholder:text-[var(--color-slate-dim)] focus:border-[var(--color-signal)] outline-none transition-colors duration-300 disabled:opacity-50"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-[var(--color-error)]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-slate-dim)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  disabled={isSending}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full bg-transparent border-b border-[var(--color-line)] py-3 text-[var(--color-paper)] placeholder:text-[var(--color-slate-dim)] focus:border-[var(--color-signal)] outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                  placeholder="What are you building?"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-[var(--color-error)]">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-paper)] text-[var(--color-bg)] font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-300 hover:bg-[var(--color-signal)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[var(--color-paper)]"
              >
                <AnimatePresence mode="wait">
                  {status === 'sending' && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        className="w-3 h-3 border-2 border-[var(--color-bg)] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={14} /> Message Sent
                    </motion.span>
                  )}
                  {(status === 'idle' || status === 'error') && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1.5 text-xs text-[var(--color-error)]"
                  role="alert"
                >
                  <X size={13} /> Something went wrong — try again, or email
                  directly.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
