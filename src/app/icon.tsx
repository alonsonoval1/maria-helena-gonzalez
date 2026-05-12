import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: '#F5F0E8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid #8B7355',
          fontFamily: 'Georgia, serif',
          fontSize: 18,
          color: '#1A1A1A',
          letterSpacing: 2,
        }}
      >
        MHG
      </div>
    ),
    { ...size }
  )
}
