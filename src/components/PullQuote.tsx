interface PullQuoteProps {
  text: string
  context?: string
  variant?: 'default' | 'dark' | 'wide'
}

export default function PullQuote({ text, context, variant = 'default' }: PullQuoteProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`py-12 px-6 md:px-16 ${variant === 'wide' ? 'md:px-24' : ''}`}
      style={{
        borderLeft: `2px solid ${isDark ? '#8B7355' : '#C9B99A'}`,
        marginLeft: variant === 'wide' ? 0 : '2rem',
      }}
    >
      {/* Opening quote mark */}
      <div
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '5rem',
          lineHeight: 1,
          color: '#C9B99A',
          opacity: 0.5,
          marginBottom: '-1.5rem',
          fontWeight: 300,
        }}
      >
        &#8220;
      </div>

      <blockquote
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.65,
          color: isDark ? '#EDE8DD' : '#1A1A1A',
          maxWidth: '42rem',
        }}
      >
        {text}
      </blockquote>

      {context && (
        <p
          className="mt-4"
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B7355',
          }}
        >
          — {context}
        </p>
      )}
    </div>
  )
}
