import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'María Helena González López — Historiadora del Arte, Curadora y Gestora Cultural',
  description:
    'Sitio oficial de María Helena González López, historiadora del arte, periodista cultural, curadora y gestora cultural mexicana. Doctorado en Ciencias Cognitivas, UAEM.',
  keywords: [
    'María Helena González López',
    'historiadora del arte',
    'curadora',
    'gestora cultural',
    'México',
    'Morelos',
    'MMAC',
    'museología',
    'arte mexicano',
  ],
  authors: [{ name: 'María Helena González López' }],
  openGraph: {
    title: 'María Helena González López — Historiadora del Arte, Curadora y Gestora Cultural',
    description:
      'Historiadora del arte, curadora, gestora cultural y crítica de arte mexicana.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
