import SectionTitle from '@/components/SectionTitle'
import PullQuote from '@/components/PullQuote'
import FadeIn from '@/components/FadeIn'

const activities = [
  {
    year: '2025',
    title: '"El Jardín Borda en el imaginario colectivo"',
    context: 'Gaceta de Museos, INAH — Diciembre 2025',
    description: 'Publicación académica que analiza la construcción histórica e imaginaria del Jardín Borda como espacio cultural de referencia para la ciudad de Cuernavaca.',
  },
  {
    year: '2025',
    title: 'Presentación de "Siqueiros Documentado"',
    context: 'El Colegio Nacional — 2025',
    description: 'Participó en la presentación de esta obra fundamental sobre el muralista David Alfaro Siqueiros, en una de las instituciones académicas más relevantes de México.',
  },
  {
    year: '2025',
    title: '"Percepción, arte y bienestar: miradas desde las ciencias cognitivas"',
    context: 'Conversatorio en El Colegio Nacional — 2025',
    description: 'Mesa de discusión interdisciplinaria sobre los vínculos entre la neurociencia, la experiencia estética y el bienestar emocional en contextos museísticos.',
  },
  {
    year: '2024',
    title: '"Metafísica, cognición y representaciones del Yo"',
    context: 'Mesa en El Colegio Nacional — 2024',
    description: 'Participación en este conversatorio de alto nivel sobre cognición, identidad y representación, en el cruce entre filosofía y ciencias cognitivas.',
  },
]

export default function Research() {
  return (
    <section
      id="investigacion"
      style={{
        padding: '7rem 0',
        background: '#F5F0E8',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionTitle
            label="Investigación actual"
            title="Ciencias cognitivas y bienestar museístico"
            subtitle="Doctorado en el CINCCO, UAEM · Actividades académicas en El Colegio Nacional"
          />
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '4rem',
          }}
        >
          {/* Main text */}
          <div className="col-span-12 lg:col-span-7">
            <FadeIn delay={0.1}>
              <p
                className="text-editorial"
                style={{ marginBottom: '1.5rem' }}
              >
                Actualmente cursa el doctorado en Ciencias Cognitivas en el Centro de Investigación
                en Ciencias Cognitivas (CINCCO) de la Universidad Autónoma del Estado de Morelos,
                donde investiga la relación entre la experiencia estética museística y el bienestar
                emocional y fisiológico.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p
                className="text-editorial"
                style={{ marginBottom: '1.5rem' }}
              >
                Ha participado en actividades públicas de El Colegio Nacional, incluyendo la mesa
                "Metafísica, cognición y representaciones del Yo" (2024), la presentación del libro
                "Siqueiros Documentado" (2025) y el conversatorio "Percepción, arte y bienestar:
                miradas desde las ciencias cognitivas" (2025).
              </p>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div
                style={{
                  padding: '2rem',
                  border: '1px solid #D8CDB8',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#8B7355',
                    marginBottom: '0.75rem',
                  }}
                >
                  Tesis central
                </p>
                <p
                  className="text-editorial"
                  style={{ fontStyle: 'normal' }}
                >
                  La evidencia científica confirma efectos medibles en el bienestar emocional,
                  el aprendizaje y la regulación fisiológica que produce la visita museística.
                  Los museos no son solo contenedores de arte, sino dispositivos de bienestar
                  y comunidad.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.34}>
              <PullQuote
                text="Los museos, estos lugares donde el tiempo se suspende y la percepción se enciende, pueden ser también hogares de esperanza, lugares donde los cuerpos encuentran calma, las mentes se oxigenan, las emociones se organizan y las historias personales se reconcilian con algo más grande que nosotros mismos."
                context="Sobre la experiencia museística y el bienestar"
              />
            </FadeIn>
          </div>

          {/* Activities list */}
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
                Actividades recientes
              </p>
            </FadeIn>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {activities.map((act, i) => (
                <FadeIn key={act.title} delay={0.2 + i * 0.08}>
                  <div
                    style={{
                      paddingLeft: '1.25rem',
                      borderLeft: '2px solid #C9B99A',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        color: '#8B7355',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {act.year}
                    </p>
                    <h4
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        color: '#1A1A1A',
                        lineHeight: 1.3,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {act.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.65rem',
                        color: '#A0895C',
                        letterSpacing: '0.05em',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {act.context}
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
                      {act.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Institution logos placeholder */}
            <FadeIn delay={0.5}>
              <div
                style={{
                  marginTop: '3rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                {['CINCCO · UAEM', 'El Colegio Nacional', 'INAH'].map((inst) => (
                  <div
                    key={inst}
                    style={{
                      padding: '0.4rem 0.75rem',
                      border: '1px solid #D8CDB8',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.58rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#6A6A6A',
                    }}
                  >
                    {inst}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
