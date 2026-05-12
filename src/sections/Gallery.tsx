'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import FadeIn from '@/components/FadeIn'

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'retratos', label: 'Retratos' },
  { id: 'museos', label: 'En museos' },
  { id: 'exposiciones', label: 'Exposiciones' },
  { id: 'publicaciones', label: 'Publicaciones' },
]

const galleryItems = [
  { id: 1,  category: 'retratos',       aspectRatio: '4/5',  label: 'Imagen próximamente' },
  { id: 2,  category: 'museos',         aspectRatio: '1/1',  label: 'Imagen próximamente' },
  { id: 3,  category: 'exposiciones',   aspectRatio: '1/1',  label: 'Imagen próximamente' },
  { id: 4,  category: 'publicaciones',  aspectRatio: '16/9', label: 'Imagen próximamente' },
  { id: 5,  category: 'retratos',       aspectRatio: '1/1',  label: 'Imagen próximamente' },
  { id: 6,  category: 'museos',         aspectRatio: '4/5',  label: 'Imagen próximamente' },
  { id: 7,  category: 'exposiciones',   aspectRatio: '1/1',  label: 'Imagen próximamente' },
  { id: 8,  category: 'retratos',       aspectRatio: '16/9', label: 'Imagen próximamente' },
  { id: 9,  category: 'museos',         aspectRatio: '1/1',  label: 'Imagen próximamente' },
  { id: 10, category: 'exposiciones',   aspectRatio: '4/5',  label: 'Imagen próximamente' },
  { id: 11, category: 'publicaciones',  aspectRatio: '1/1',  label: 'Imagen próximamente' },
  { id: 12, category: 'retratos',       aspectRatio: '1/1',  label: 'Imagen próximamente' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered =
    active === 'all' ? galleryItems : galleryItems.filter((item) => item.category === active)

  return (
    <section
      id="galeria"
      style={{
        padding: '7rem 0',
        background: '#EDE8DD',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionTitle
            label="Galería"
            title="Imágenes"
            subtitle="Retratos, momentos en museos, exposiciones y publicaciones."
          />
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.25rem',
                  border: '1px solid',
                  borderColor: active === cat.id ? '#8B7355' : '#D8CDB8',
                  background: active === cat.id ? '#8B7355' : 'transparent',
                  color: active === cat.id ? '#F5F0E8' : '#6A6A6A',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Gallery grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 18rem), 1fr))',
            gap: '1rem',
          }}
        >
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04}>
              <div
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setLightbox(item.id)}
              >
                <div
                  className="hover-lift"
                  style={{
                    aspectRatio: item.aspectRatio,
                    background: '#E3DDD2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow:
                      'inset 0 0 0 12px #EDE8DD, inset 0 0 0 13px #C9B99A',
                    position: 'relative',
                  }}
                >
                  <div className="text-center">
                    <div
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        border: '1px solid #C9B99A',
                        margin: '0 auto 0.5rem',
                        opacity: 0.5,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '0.72rem',
                        fontStyle: 'italic',
                        color: '#A0895C',
                      }}
                    >
                      Imagen próximamente
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: '#6A6A6A',
              textAlign: 'center',
              padding: '4rem 0',
            }}
          >
            No hay imágenes en esta categoría aún.
          </p>
        )}
      </div>

      {/* Lightbox (placeholder) */}
      {lightbox !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(26, 26, 26, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            style={{
              width: 'min(90vw, 640px)',
              aspectRatio: '4/3',
              background: '#2A2A2A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 0 16px #1A1A1A, inset 0 0 0 17px #8B7355',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#8B7355',
              }}
            >
              Imagen próximamente
            </p>
          </div>

          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: '#C9B99A',
              fontSize: '1.5rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              letterSpacing: '0.05em',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
