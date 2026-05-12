'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#semblanza', label: 'Semblanza' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#publicaciones', label: 'Publicaciones' },
  { href: '#curaduria', label: 'Curaduría' },
  { href: '#galeria', label: 'Galería' },
  { href: '#investigacion', label: 'Investigación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm border-b border-gold-subtle/40 py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ borderBottomColor: scrolled ? '#D8CDB8' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Monogram / Name */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleLink('#inicio') }}
            className="font-serif text-ink tracking-widest text-sm opacity-80 hover:opacity-100 transition-opacity"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.18em' }}
          >
            MHG
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="font-serif text-ink-muted hover:text-gold text-sm transition-colors duration-200 tracking-wide cursor-pointer"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '0.95rem',
                  letterSpacing: '0.04em',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#6A6A6A',
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span
              className="block transition-all duration-300"
              style={{
                width: '22px',
                height: '1px',
                background: '#1A1A1A',
                transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
              }}
            />
            <span
              className="block transition-all duration-300"
              style={{
                width: '22px',
                height: '1px',
                background: '#1A1A1A',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block transition-all duration-300"
              style={{
                width: '22px',
                height: '1px',
                background: '#1A1A1A',
                transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: '#F5F0E8',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <p
            className="section-label mb-6"
            style={{ color: '#C9B99A' }}
          >
            Navegación
          </p>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="font-serif text-ink text-3xl hover:text-gold transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300,
                fontStyle: 'italic',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#1A1A1A',
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
