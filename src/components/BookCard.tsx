import type { Book } from '@/types'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div
      className="hover-lift"
      style={{
        display: 'flex',
        gap: '1.5rem',
        padding: '1.5rem 0',
        borderBottom: '1px solid #E3DDD2',
      }}
    >
      {/* Book spine / cover placeholder */}
      <div
        style={{
          flexShrink: 0,
          width: '70px',
          height: '96px',
          background: '#EDE8DD',
          boxShadow: 'inset 0 0 0 5px #F5F0E8, inset 0 0 0 6px #C9B99A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '0.5rem',
            fontStyle: 'italic',
            color: '#A0895C',
            textAlign: 'center',
            padding: '0 4px',
            lineHeight: 1.3,
          }}
        >
          portada
        </span>
        {/* Spine shadow */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '6px',
            background: 'linear-gradient(to right, #C9B99A, transparent)',
            opacity: 0.4,
          }}
        />
      </div>

      {/* Book info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#1A1A1A',
            lineHeight: 1.35,
            marginBottom: '0.25rem',
          }}
        >
          {book.title}
          {book.subtitle && (
            <span style={{ fontWeight: 300, color: '#6A6A6A' }}>
              . {book.subtitle}
            </span>
          )}
        </h3>

        {book.coauthors && (
          <p
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.72rem',
              color: '#8B7355',
              marginBottom: '0.4rem',
              letterSpacing: '0.02em',
            }}
          >
            {book.coauthors}
          </p>
        )}

        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.72rem',
            color: '#6A6A6A',
            letterSpacing: '0.03em',
          }}
        >
          {book.publisher}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '0.95rem',
            color: '#A0895C',
            marginTop: '0.3rem',
            fontStyle: 'italic',
          }}
        >
          {book.year}
        </p>
      </div>
    </div>
  )
}
