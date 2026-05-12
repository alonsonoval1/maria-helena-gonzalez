import type { Book, AcademicPublication } from '@/types'

export const books: Book[] = [
  {
    title: 'Manuel González Serrano',
    subtitle: 'Un monólogo apasionado',
    publisher: 'CONACULTA, Colección Círculo de Arte',
    year: '1998',
  },
  {
    title: 'Jorge Cázares',
    subtitle: 'El retrato de la tierra',
    publisher: 'Ayuntamiento de Cuernavaca / EDIMSA',
    year: '1999',
  },
  {
    title: 'Zapata en Morelos',
    publisher: 'Ed. Lunwerg-Planeta / Gobierno del Estado de Morelos, Barcelona',
    year: '2009',
    coauthors: 'Con Salvador Rueda Smithers y Adalberto Ríos Szalay',
  },
  {
    title: 'Cuauhnáhuac, miradas en el tiempo-espacio',
    publisher: 'CONACULTA',
    year: '2015',
  },
  {
    title: 'Entre líneas',
    subtitle: 'Catálogo de la Primera Bienal de los Volcanes',
    publisher: 'CONACULTA',
    year: '2015',
  },
]

export const academicPublications: AcademicPublication[] = [
  {
    title: 'Semblanza',
    venue: 'Revista MEC-EDUPAZ, Facultad de Psicología, UNAM',
    date: '2023',
  },
  {
    title: 'El Jardín Borda en el imaginario colectivo',
    venue: 'Gaceta de Museos, INAH',
    date: 'Diciembre 2025',
  },
  {
    title: 'Columna "Vas a ver"',
    venue: 'Diario de Morelos',
    date: 'Permanente',
  },
  {
    title: 'Artículos de crítica y cultura',
    venue: 'La Jornada Morelos, La Jornada Zacatecas, Reforma',
    date: 'Varios años',
  },
]
