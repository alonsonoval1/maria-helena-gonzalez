import SectionTitle from '@/components/SectionTitle'
import ExhibitionCard from '@/components/ExhibitionCard'
import FadeIn from '@/components/FadeIn'
import { exhibitions } from '@/data/exhibitions'

export default function Exhibitions() {
  const featured = exhibitions.filter((e) => e.featured)
  const rest = exhibitions.filter((e) => !e.featured)

  return (
    <section
      id="curaduria"
      style={{
        padding: '7rem 0',
        background: '#F5F0E8',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionTitle
            label="Curaduría y Exposiciones"
            title="Proyectos curatoriales"
            subtitle="Una selección de exposiciones concebidas, dirigidas o coordinadas a lo largo de su trayectoria."
          />
        </FadeIn>

        {/* Featured exhibitions */}
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
            Exposiciones destacadas
          </p>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {featured.map((ex, i) => (
            <FadeIn key={ex.title} delay={0.1 + i * 0.08}>
              <ExhibitionCard exhibition={ex} />
            </FadeIn>
          ))}
        </div>

        {/* Fine rule */}
        <FadeIn delay={0.3}>
          <div style={{ height: '1px', background: '#D8CDB8', marginBottom: '3rem' }} />
        </FadeIn>

        {/* Other exhibitions — more compact */}
        <FadeIn delay={0.35}>
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
            Otras exposiciones
          </p>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
            gap: '1.5rem',
          }}
        >
          {rest.map((ex, i) => (
            <FadeIn key={ex.title} delay={0.35 + i * 0.06}>
              <article
                style={{
                  border: '1px solid #D8CDB8',
                  padding: '1.5rem',
                  background: '#F5F0E8',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: '#8B7355',
                    marginBottom: '0.35rem',
                  }}
                >
                  {ex.years}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#1A1A1A',
                    lineHeight: 1.3,
                    marginBottom: '0.4rem',
                  }}
                >
                  {ex.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.66rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6A6A6A',
                    marginBottom: '0.5rem',
                  }}
                >
                  {ex.venue}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.8rem',
                    color: '#6A6A6A',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {ex.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
