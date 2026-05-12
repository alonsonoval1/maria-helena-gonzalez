'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'none'
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  const initial =
    direction === 'up'
      ? { opacity: 0, y: 24 }
      : direction === 'left'
      ? { opacity: 0, x: -20 }
      : { opacity: 0 }

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0 }
    : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.85, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
