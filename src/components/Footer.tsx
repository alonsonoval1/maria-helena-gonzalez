export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-16 px-6"
      style={{ background: '#1A1A1A', color: '#EDE8DD' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Ornamental rule */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div style={{ width: '3rem', height: '1px', background: '#8B7355' }} />
          <span style={{ color: '#8B7355', fontSize: '0.5rem', letterSpacing: '0.4em' }}>◆</span>
          <div style={{ width: '3rem', height: '1px', background: '#8B7355' }} />
        </div>

        {/* Quote */}
        <blockquote
          className="mb-8 italic"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#C9B99A',
            maxWidth: '38rem',
            margin: '0 auto 2rem',
          }}
        >
          "Lo que yo quiero darle a entender a la gente es que el museo es comunidad.
          Nosotros somos comunidad."
        </blockquote>

        {/* Name */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.1rem',
            letterSpacing: '0.1em',
            color: '#EDE8DD',
            marginBottom: '0.5rem',
          }}
        >
          María Helena González López
        </p>
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#6A6A6A',
            marginBottom: '2.5rem',
          }}
        >
          Historiadora del Arte · Curadora · Gestora Cultural
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 flex-wrap mb-8">
          {[
            {
              label: 'Blog: Arte y Cultura',
              href: 'https://helenagonzalezarteycultura.blogspot.com',
            },
            {
              label: '"Vas a ver" — Diario de Morelos',
              href: '#',
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8B7355',
                textDecoration: 'none',
                borderBottom: '1px solid #8B7355',
                paddingBottom: '1px',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#3A3A3A',
          }}
        >
          © {year} · Todos los derechos reservados
        </p>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid #2A2A2A',
          marginTop: '3rem',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          maxWidth: '72rem',
          margin: '3rem auto 0',
          padding: '1.25rem 1.5rem 0',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: '#7A7A7A',
          }}
        >
          Esta página es operada por Sensepot Smart Technologies&#174;
        </p>
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: '#7A7A7A',
            textAlign: 'right',
          }}
        >
          Este sitio web fue creado por Webfficient Smart Services
        </p>
      </div>
    </footer>
  )
}
