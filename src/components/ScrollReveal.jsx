import { motion } from 'framer-motion'

/**
 * Consistent viewport reveal used across every section.
 * Opacity 0 -> 1, Y 30 -> 0. No directional variation site-wide, by design.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  once = true,
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}
