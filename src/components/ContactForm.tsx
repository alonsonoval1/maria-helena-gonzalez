'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Visual feedback only — no backend connected yet
    setSent(true)
  }

  const fieldStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #D8CDB8',
    padding: '0.75rem 0',
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontSize: '0.9rem',
    color: '#1A1A1A',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  } as React.CSSProperties

  const labelStyle = {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontSize: '0.6rem',
    fontWeight: 500,
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    color: '#8B7355',
    display: 'block',
    marginBottom: '0.25rem',
  }

  if (sent) {
    return (
      <div className="py-12 text-center">
        <div
          style={{
            width: '2rem',
            height: '2rem',
            border: '1px solid #8B7355',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#8B7355', fontSize: '0.9rem' }}>✓</span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: '#1A1A1A',
            marginBottom: '0.5rem',
          }}
        >
          Mensaje recibido
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.82rem',
            color: '#6A6A6A',
          }}
        >
          Gracias por escribir. Habrá respuesta a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <label htmlFor="name" style={labelStyle}>Nombre</label>
        <input
          id="name"
          type="text"
          required
          placeholder="Su nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Correo electrónico</label>
        <input
          id="email"
          type="email"
          required
          placeholder="correo@ejemplo.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Mensaje</label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Colaboraciones, invitaciones académicas, consultas curatoriales..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{
            ...fieldStyle,
            resize: 'none',
            lineHeight: 1.7,
          }}
        />
      </div>

      <div>
        <button
          type="submit"
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#F5F0E8',
            background: '#1A1A1A',
            border: 'none',
            padding: '1rem 2.5rem',
            cursor: 'pointer',
            transition: 'background 0.25s ease',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = '#8B7355'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = '#1A1A1A'
          }}
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  )
}
