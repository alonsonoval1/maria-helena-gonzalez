import SectionTitle from '@/components/SectionTitle'
import FadeIn from '@/components/FadeIn'

const programs = [
  {
    title: 'AcercArte',
    description:
      'Programa de divulgación artística dedicado a acercar el arte contemporáneo al público morelense, con entrevistas a artistas, visitas a estudios y análisis de obra.',
    years: '2016–2018',
    format: 'Programa televisivo semanal',
  },
  {
    title: 'Helenarte',
    description:
      'Espacio personal de reflexión sobre el arte y la cultura mexicana desde la perspectiva de la historiadora, con énfasis en el arte morelense y los procesos creativos.',
    years: '2016–2018',
    format: 'Programa televisivo',
  },
  {
    title: '¿Cómo vemos México?',
    description:
      'Programa que explora la relación entre la identidad mexicana y sus expresiones culturales, visuales y patrimoniales, desde una mirada contemporánea y crítica.',
    years: '2016–2018',
    format: 'Programa televisivo',
  },
]

export default function Media() {
  return (
    <section
      id="medios"
      style={{
        padding: '7rem 0',
        background: '#3D4A3C',
        color: '#EDE8DD',
        position: 'relative',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionTitle
            label="Medios y Televisión"
            title="Divulgación televisiva"
            subtitle="Tres programas culturales producidos y conducidos en el Instituto Morelense de Radio y Televisión."
            light
          />
        </FadeIn>

        {/* Programs grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {programs.map((prog, i) => (
            <FadeIn key={prog.title} delay={0.1 + i * 0.1}>
              <article
                style={{
                  border: '1px solid rgba(201,185,154,0.25)',
                  padding: '2rem',
                  background: 'rgba(26, 26, 26, 0.25)',
                  height: '100%',
                }}
              >
                {/* Video placeholder */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'rgba(26, 26, 26, 0.5)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    border: '1px solid rgba(139, 115, 85, 0.3)',
                  }}
                >
                  {/* Play button placeholder */}
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      border: '1px solid #8B7355',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0.6,
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        borderWidth: '6px 0 6px 10px',
                        borderColor: 'transparent transparent transparent #8B7355',
                        marginLeft: '2px',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: 0,
                      right: 0,
                      textAlign: 'center',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#8B7355',
                    }}
                  >
                    Video próximamente
                  </p>
                </div>

                {/* Year / format */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#8B7355',
                    marginBottom: '0.5rem',
                  }}
                >
                  {prog.years} · {prog.format}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: '#EDE8DD',
                    lineHeight: 1.2,
                    marginBottom: '0.75rem',
                  }}
                >
                  {prog.title}
                </h3>

                {/* Rule */}
                <div style={{ height: '1px', background: 'rgba(201,185,154,0.2)', marginBottom: '0.75rem' }} />

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.82rem',
                    color: '#C9B99A',
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {prog.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Blog mention */}
        <FadeIn delay={0.4}>
          <div
            style={{
              borderTop: '1px solid rgba(201,185,154,0.2)',
              paddingTop: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#8B7355',
              }}
            >
              Blog personal
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontStyle: 'italic',
                color: '#C9B99A',
                maxWidth: '30rem',
              }}
            >
              Reflexiones sobre arte, museos y cultura en su blog personal desde 2008.
            </p>
            <a
              href="https://helenagonzalezarteycultura.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8B7355',
                borderBottom: '1px solid #8B7355',
                paddingBottom: '1px',
                transition: 'color 0.2s ease',
              }}
            >
              helenagonzalezarteycultura.blogspot.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
