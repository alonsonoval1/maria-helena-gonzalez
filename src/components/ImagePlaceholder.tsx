interface ImagePlaceholderProps {
  width?: string
  height?: string
  label?: string
  aspectRatio?: string
  frame?: 'gallery' | 'simple' | 'book'
  className?: string
}

export default function ImagePlaceholder({
  label = 'Imagen próximamente',
  aspectRatio = '4/3',
  frame = 'gallery',
  className = '',
}: ImagePlaceholderProps) {
  const frameStyle =
    frame === 'gallery'
      ? {
          boxShadow:
            'inset 0 0 0 14px #F5F0E8, inset 0 0 0 15px #C9B99A',
        }
      : frame === 'book'
      ? {
          boxShadow:
            'inset 0 0 0 6px #F5F0E8, inset 0 0 0 7px #C9B99A',
        }
      : {
          boxShadow: 'inset 0 0 0 1px #C9B99A',
        }

  return (
    <div
      className={className}
      style={{
        aspectRatio,
        background: '#EDE8DD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        ...frameStyle,
      }}
    >
      <div className="text-center px-4">
        {/* Placeholder icon — a simple frame outline */}
        <div
          style={{
            width: '2rem',
            height: '2rem',
            border: '1px solid #C9B99A',
            margin: '0 auto 0.75rem',
            opacity: 0.6,
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            color: '#A0895C',
            letterSpacing: '0.04em',
          }}
        >
          {label}
        </p>
      </div>
    </div>
  )
}
