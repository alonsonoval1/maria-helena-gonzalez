interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''}`}>
      {/* Section label */}
      <p
        className="section-label mb-4"
        style={{ color: light ? '#C9B99A' : '#8B7355' }}
      >
        {label}
      </p>

      {/* Ornamental rule */}
      <div
        className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}
      >
        <div
          style={{
            width: '2.5rem',
            height: '1px',
            background: '#C9B99A',
          }}
        />
        <span
          style={{
            color: '#C9B99A',
            fontSize: '0.4rem',
            letterSpacing: '0.3em',
          }}
        >
          ◆
        </span>
      </div>

      {/* Main title */}
      <h2
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          color: light ? '#EDE8DD' : '#1A1A1A',
          marginBottom: subtitle ? '0.75rem' : 0,
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: light ? '#C9B99A' : '#6A6A6A',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
