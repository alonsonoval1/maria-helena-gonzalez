'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: 'easeOut' as const },
  })

  return (
    <section
      id="inicio"
      style={{
        background: '#F5F0E8',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 20% 50%, rgba(139,115,85,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(107,45,62,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Mobile: photo on top, then text. Desktop: side by side */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* Photo — shown on all sizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div style={{ width: '100%', maxWidth: '340px' }}>
              <div
                style={{
                  aspectRatio: '3/4',
                  position: 'relative',
                  boxShadow:
                    'inset 0 0 0 16px #F5F0E8, inset 0 0 0 18px #C9B99A, 0 20px 60px rgba(26,26,26,0.12)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/maria-helena-hero.jpg"
                  alt="María Helena González López"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="w-full lg:w-7/12 order-last lg:order-first">
            <motion.p {...fadeUp(0.1)} className="section-label mb-6">
              Historiadora del Arte · Curadora · Gestora Cultural
            </motion.p>

            <motion.div
              {...fadeUp(0.2)}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
            >
              <div style={{ width: '3rem', height: '1px', background: '#C9B99A' }} />
              <span style={{ color: '#C9B99A', fontSize: '0.45rem', letterSpacing: '0.3em' }}>◆</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.3)}
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.8rem, 6vw, 6.5rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: '#1A1A1A',
                marginBottom: '0.3em',
              }}
            >
              María Helena
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>González López</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.45)}
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#A0895C',
                marginBottom: '2.5rem',
              }}
            >
              Ciudad de México, 1965
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              style={{ height: '1px', background: '#D8CDB8', marginBottom: '2rem', maxWidth: '28rem' }}
            />

            <motion.blockquote
              {...fadeUp(0.6)}
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.05rem, 2vw, 1.45rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.65,
                color: '#3A3A3A',
                maxWidth: '36rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid #C9B99A',
              }}
            >
              "Los museos, estos lugares donde el tiempo se suspende y la percepción se enciende,
              pueden ser también hogares de esperanza."
            </motion.blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}
