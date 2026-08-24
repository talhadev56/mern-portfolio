import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

/**
 * variant: 'primary' | 'ghost' | 'text'
 * as: 'a' | 'button'
 */
export default function Button({
  children,
  variant = 'primary',
  icon = true,
  as = 'a',
  href,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  const base =
    'group inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] focus-visible:outline-offset-4'

  const variants = {
    primary:
      'px-6 py-3.5 bg-[var(--color-paper)] text-[var(--color-bg)] hover:bg-[var(--color-signal)]',
    ghost:
      'px-6 py-3.5 border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-slate)]',
    text: 'text-[var(--color-paper)] hover:text-[var(--color-signal)]',
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 2, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        </motion.span>
      )}
    </>
  )

  const classes = `${base} ${variants[variant]} ${className}`

  if (as === 'a') {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
