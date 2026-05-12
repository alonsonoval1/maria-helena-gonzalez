import type { Exhibition } from '@/types'

interface ExhibitionCardProps {
  exhibition: Exhibition
}

export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <article
      className="hover-lift"
      style={{
        border: '1px solid #D8CDB8',
        padding: '1.75rem',
        background: '#F5F0E8',
        position: 'relative',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Featured marker */}
      {exhibition.featured && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: '#8B7355',
          }}
        />
      )}

      {/* Placeholder image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: '#EDE8DD',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset 0 0 0 8px #F5F0E8, inset 0 0 0 9px #C9B99A',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '0.78rem',
            fontStyle: 'italic',
            color: '#A0895C',
          }}
        >
          Imagen próximamente
        </p>
      </div>

      {/* Year */}
      <p
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '0.9rem',
          color: '#8B7355',
          fontStyle: 'italic',
          marginBottom: '0.4rem',
        }}
      >
        {exhibition.years}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#1A1A1A',
          lineHeight: 1.3,
          marginBottom: '0.5rem',
        }}
      >
        {exhibition.title}
      </h3>

      {/* Venue */}
      <p
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontSize: '0.68rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#6A6A6A',
          marginBottom: '0.75rem',
        }}
      >
        {exhibition.venue}
      </p>

      {/* Fine rule */}
      <div style={{ height: '1px', background: '#D8CDB8', marginBottom: '0.75rem' }} />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontSize: '0.82rem',
          color: '#6A6A6A',
          lineHeight: 1.65,
          fontWeight: 300,
        }}
      >
        {exhibition.description}
      </p>
    </article>
  )
}
