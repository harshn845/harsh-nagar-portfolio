import { motion, type Transition } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  duration?: number
  x?: number
  y?: number
}

const EASE: Transition['ease'] = [0.25, 0.1, 0.25, 1]

export default function FadeIn({
  children,
  className,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const Component = motion.create(as as ElementType)

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </Component>
  )
}
