import SectionTitle from '@/components/SectionTitle'
import BookCard from '@/components/BookCard'
import FadeIn from '@/components/FadeIn'
import { books, academicPublications } from '@/data/books'

export default function Publications() {
  return (
    <section
      id="publicaciones"
      style={{
        padding: '7rem 0',
        background: '#1A1A1A',
        color: '#EDE8DD',
        position: 'relative',
      }}
    >
      {/* Subtle top border */}
      <div style={{ height: '1px', background: '#8B7355', opacity: 0.3, marginBottom: '7rem', marginTop: '-7rem' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionTitle
            label="Publicaciones"
            title="Obra escrita"
            subtitle="Libros, catálogos y textos sobre el arte y la cultura mexicana."
            light
          />
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '4rem',
            marginTop: '1rem',
          }}
        >
          {/* Books */}
          <div className="col-span-12 lg:col-span-7">
            <FadeIn delay={0.1}>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '2rem',
                }}
              >
                Libros
              </p>
            </FadeIn>

            <div>
              {books.map((book, i) => (
                <FadeIn key={book.title} delay={0.1 + i * 0.08}>
                  <div
                    style={{
                      borderBottom: '1px solid #3A3A3A',
                      paddingBottom: '1.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      {/* Book cover placeholder */}
                      <div
                        style={{
                          flexShrink: 0,
                          width: '64px',
                          height: '88px',
                          background: '#2A2A2A',
                          boxShadow: 'inset 0 0 0 5px #1A1A1A, inset 0 0 0 6px #8B7355',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-cormorant), Georgia, serif',
                            fontSize: '0.45rem',
                            fontStyle: 'italic',
                            color: '#8B7355',
                            textAlign: 'center',
                            padding: '0 4px',
                          }}
                        >
                          portada
                        </span>
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '5px',
                            background: 'linear-gradient(to right, #8B7355, transparent)',
                            opacity: 0.3,
                          }}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-cormorant), Georgia, serif',
                            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            color: '#EDE8DD',
                            lineHeight: 1.3,
                            marginBottom: '0.2rem',
                          }}
                        >
                          {book.title}
                          {book.subtitle && (
                            <span style={{ color: '#C9B99A', fontWeight: 300 }}>
                              . {book.subtitle}
                            </span>
                          )}
                        </h3>
                        {book.coauthors && (
                          <p
                            style={{
                              fontFamily: 'var(--font-inter), system-ui, sans-serif',
                              fontSize: '0.7rem',
                              color: '#8B7355',
                              marginBottom: '0.3rem',
                            }}
                          >
                            {book.coauthors}
                          </p>
                        )}
                        <p
                          style={{
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontSize: '0.7rem',
                            color: '#6A6A6A',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {book.publisher}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-cormorant), Georgia, serif',
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                            color: '#8B7355',
                            marginTop: '0.25rem',
                          }}
                        >
                          {book.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Academic publications */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <FadeIn delay={0.15}>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '2rem',
                }}
              >
                Publicaciones académicas y periodísticas
              </p>
            </FadeIn>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {academicPublications.map((pub, i) => (
                <FadeIn key={pub.title} delay={0.2 + i * 0.07}>
                  <div
                    style={{
                      paddingLeft: '1rem',
                      borderLeft: '1px solid #3A3A3A',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        color: '#EDE8DD',
                        marginBottom: '0.2rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {pub.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.7rem',
                        color: '#6A6A6A',
                        marginBottom: '0.15rem',
                      }}
                    >
                      {pub.venue}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: '#8B7355',
                      }}
                    >
                      {pub.date}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Media note */}
            <FadeIn delay={0.4}>
              <div
                style={{
                  marginTop: '3rem',
                  padding: '1.5rem',
                  border: '1px solid #3A3A3A',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#8B7355',
                    marginBottom: '0.75rem',
                  }}
                >
                  Medios impresos
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.78rem',
                    color: '#6A6A6A',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  El Búho (Excélsior), Réplica 21, Arena (Excélsior), El Financiero,
                  El Sol de Cuernavaca, La Unión de Morelos, Diario de Morelos,
                  Artes de México, Saber Ver, Día Siete, Elle, Destino Morelos, Arte y Artes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
