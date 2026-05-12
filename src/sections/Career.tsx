import SectionTitle from '@/components/SectionTitle'
import TimelineItem from '@/components/TimelineItem'
import FadeIn from '@/components/FadeIn'
import { timeline } from '@/data/timeline'

export default function Career() {
  return (
    <section
      id="trayectoria"
      style={{
        padding: '7rem 0',
        background: '#F5F0E8',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
          }}
        >
          {/* Left: Section title (sticky on desktop) */}
          <div
            className="col-span-12 lg:col-span-4"
            style={{ position: 'relative' }}
          >
            <FadeIn>
              <div className="lg:sticky" style={{ top: '6rem' }}>
                <SectionTitle
                  label="Trayectoria"
                  title="Treinta años al servicio de la cultura"
                  subtitle="Una carrera construida en la gestión, la crítica y la divulgación del arte mexicano."
                />

                {/* Small decorative quote */}
                <div
                  style={{
                    marginTop: '3rem',
                    paddingLeft: '1.25rem',
                    borderLeft: '2px solid #C9B99A',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1.1rem',
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

          {/* Right: Timeline */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {timeline.map((entry, i) => (
                <FadeIn key={entry.years} delay={i * 0.07}>
                  <TimelineItem entry={entry} isLast={i === timeline.length - 1} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
