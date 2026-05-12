import SectionTitle from '@/components/SectionTitle'
import PullQuote from '@/components/PullQuote'
import FadeIn from '@/components/FadeIn'

export default function Biography() {
  return (
    <section
      id="semblanza"
      style={{
        padding: '7rem 0',
        background: '#EDE8DD',
        position: 'relative',
      }}
    >
      {/* Fine top rule */}
      <div style={{ height: '1px', background: '#C9B99A', opacity: 0.4, marginBottom: '7rem', marginTop: '-7rem' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <SectionTitle
            label="Semblanza"
            title="Una vida entre el arte y la comunidad"
            subtitle="Historiadora · Periodista cultural · Curadora · Investigadora"
          />
        </FadeIn>

        {/* Two-column biographical text */}
        <FadeIn delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
              gap: '3rem',
              marginBottom: '4rem',
            }}
          >
            <div>
              <p
                className="text-editorial"
                style={{ marginBottom: '1.5rem' }}
              >
                María Helena González López (Ciudad de México, 10 de febrero de 1965) es historiadora del arte,
                periodista cultural, curadora y gestora cultural mexicana. Sobrina del pintor surrealista
                Manuel González Serrano, su trabajo articula crítica de arte, curaduría, divulgación
                televisiva y gestión museística desde una mirada que hoy integra las ciencias cognitivas
                y el bienestar comunitario.
              </p>

              <p className="text-editorial">
                Licenciada en Historia del Arte por el Centro de Arte Mexicano —con tesis de
                mención honorífica sobre la vida y obra de Manuel González Serrano— y licenciada
                en Periodismo por la SEP, posee también una maestría en Desarrollo Cognitivo.
              </p>
            </div>

            <div>
              <p
                className="text-editorial"
                style={{ marginBottom: '1.5rem' }}
              >
                Actualmente cursa el doctorado en Ciencias Cognitivas en el CINCCO de la
                Universidad Autónoma del Estado de Morelos, donde investiga la experiencia
                estética y el bienestar en espacios museísticos.
              </p>

              <p className="text-editorial">
                Es integrante del Seminario de Cultura Mexicana como corresponsal del municipio
                de Cuernavaca desde el año 2000, y fundadora de la Fundación Noval para el
                Fomento de la Cultura y las Artes A.C. desde 2006. Su trayectoria abarca más
                de tres décadas de dedicación ininterrumpida a la cultura mexicana.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={0.25}>
          <div style={{ maxWidth: '48rem' }}>
            <PullQuote
              text="Lo que yo quiero darle a entender a la gente es que el museo es comunidad. Nosotros somos comunidad."
              context="Sobre la función social del museo"
            />
          </div>
        </FadeIn>

        {/* Academic credentials */}
        <FadeIn delay={0.35}>
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid #D8CDB8',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                label: 'Formación',
                items: [
                  'Lic. Historia del Arte — Centro de Arte Mexicano',
                  'Lic. Periodismo — SEP',
                  'Maestría en Desarrollo Cognitivo',
                  'Doctorado en Ciencias Cognitivas (en curso) — UAEM',
                ],
              },
              {
                label: 'Membresías',
                items: [
                  'Seminario de Cultura Mexicana (desde 2000)',
                  'Fundadora: Fundación Noval para el Fomento de la Cultura y las Artes A.C. (2006)',
                ],
              },
              {
                label: 'Especialidades',
                items: [
                  'Historia del arte mexicano contemporáneo',
                  'Museología y gestión cultural',
                  'Ciencias cognitivas aplicadas al arte',
                  'Crítica y periodismo cultural',
                ],
              },
            ].map((col) => (
              <div key={col.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#8B7355',
                    marginBottom: '1rem',
                  }}
                >
                  {col.label}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.8rem',
                        color: '#3A3A3A',
                        lineHeight: 1.5,
                        fontWeight: 300,
                        paddingLeft: '0.75rem',
                        borderLeft: '1px solid #C9B99A',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
