export interface TimelineEntry {
  years: string
  title: string
  institution: string
  description: string
}

export interface Book {
  title: string
  subtitle?: string
  publisher: string
  year: string
  coauthors?: string
}

export interface AcademicPublication {
  title: string
  venue: string
  date: string
  url?: string
}

export interface Exhibition {
  title: string
  venue: string
  years: string
  description: string
  featured?: boolean
}

export interface Quote {
  text: string
  context?: string
}

export interface GalleryCategory {
  id: string
  label: string
  count: number
}

export interface MediaProgram {
  title: string
  description: string
  network: string
  years: string
}
