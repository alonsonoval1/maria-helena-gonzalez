import SectionTitle from '@/components/SectionTitle'
import ContactForm from '@/components/ContactForm'
import FadeIn from '@/components/FadeIn'

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: '7rem 0',
        background: '#EDE8DD',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact info */}
          <div className="col-span-12 lg:col-span-4">
            <FadeIn>
              <SectionTitle
                label="Contacto"
                title="Escribir"
                subtitle="Para colaboraciones, invitaciones académicas o consultas curatoriales."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
                {/* Blog */}
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#8B7355',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Blog personal
                  </p>
                  <a
                    href="https://helenagonzalezarteycultura.blogspot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: '#1A1A1A',
                      borderBottom: '1px solid #C9B99A',
                      paddingBottom: '1px',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    Arte y Cultura — Blogspot
                  </a>
                </div>

                {/* Column */}
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#8B7355',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Columna
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: '#1A1A1A',
                    }}
                  >
                    "Vas a ver" — Diario de Morelos
                  </p>
                </div>

                {/* Separator */}
                <div style={{ height: '1px', background: '#D8CDB8' }} />

                {/* Affiliation */}
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#8B7355',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Afiliación académica
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.82rem',
                      color: '#6A6A6A',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    CINCCO, Universidad Autónoma del Estado de Morelos
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.82rem',
                      color: '#6A6A6A',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      marginTop: '0.3rem',
                    }}
                  >
                    Seminario de Cultura Mexicana, Cuernavaca
                  </p>
                </div>

                {/* Decorative quote */}
                <div
                  style={{
                    paddingLeft: '1rem',
                    borderLeft: '2px solid #C9B99A',
                    marginTop: '1rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: '#6A6A6A',
                      lineHeight: 1.65,
                    }}
                  >
                    "Los museos son capaces de innovarse en todos sus contenidos y vocaciones."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <FadeIn delay={0.15}>
              <div
                style={{
                  background: '#F5F0E8',
                  padding: '3rem',
                  border: '1px solid #D8CDB8',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: '#1A1A1A',
                    marginBottom: '2rem',
                    lineHeight: 1.3,
                  }}
                >
                  ¿Tiene algo que decir o proponer?
                </p>

                <div style={{ height: '1px', background: '#D8CDB8', marginBottom: '2.5rem' }} />

                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
