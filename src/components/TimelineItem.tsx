import type { TimelineEntry } from '@/types'

interface TimelineItemProps {
  entry: TimelineEntry
  isLast?: boolean
}

export default function TimelineItem({ entry, isLast = false }: TimelineItemProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '7rem 1fr',
        gap: '2rem',
        paddingBottom: isLast ? 0 : '2.5rem',
      }}
    >
      {/* Year column */}
      <div style={{ textAlign: 'right', paddingTop: '0.15rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: '#8B7355',
            whiteSpace: 'nowrap',
          }}
        >
          {entry.years}
        </span>
      </div>

      {/* Content column */}
      <div
        style={{
          paddingLeft: '2rem',
          borderLeft: '1px solid #D8CDB8',
          position: 'relative',
        }}
      >
        {/* Dot */}
        <div
          style={{
            position: 'absolute',
            left: '-4px',
            top: '0.45rem',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#8B7355',
            border: '2px solid #F5F0E8',
          }}
        />

        <h3
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            fontWeight: 500,
            color: '#1A1A1A',
            lineHeight: 1.25,
            marginBottom: '0.2rem',
          }}
        >
          {entry.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#A0895C',
            marginBottom: '0.6rem',
          }}
        >
          {entry.institution}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.85rem',
            color: '#6A6A6A',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {entry.description}
        </p>
      </div>
    </div>
  )
}
