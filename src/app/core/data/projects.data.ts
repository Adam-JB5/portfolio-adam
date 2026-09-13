export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  skills: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Traductor y generador de menús',
    description: 'Este proyecto consiste en una aplicación web alojada en GitHub que permite traducir platos y generar menús a partir de los datos introducidos por el usuario. La aplicación está diseñada para facilitar el proceso de actualización diaria de los menús del Hotel Las Rocas en Castro Urdiales, evitando la traducción manual de cada uno de los platos y del menú completo. Hago uso de la API de DeepL para las traducciones y las librerías “Docx” y “FileSaver” para exportar ambos menús tanto en inglés como en español simultáneamente.',
    images: ['/traductor_1.png', '/traductor_2.png', '/traductor_3.png'],
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'DeepL API', 'Docx', 'FileSaver', 'Vite', 'Git'],
    link: 'https://adam-jb5.github.io/TraduccionMenu/'
  },
  {
    id: 2,
    name: 'Mapa interactivo para Zunibal',
    description: 'En Irontec trabajé en un proyecto para Zunibal (empresa de soluciones marítimas), el cual consistía en el desarrollo de un mapa interactivo que muestra: boyas, trazas, capas entre otra información marítima. Me ocupé de la creación de menús, filtrado de datos de boyas/barcos, muestreo de trazas y límites de mapa, exportaciones, entre otras tareas. El proyecto fue creado en Angular y después traspasado a React, por lo que tuve que adaptar muchos componentes y funcionalidades a un distinto framework.',
    images: ['/mapa_1.png', '/mapa_2.png'],
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Deck.gl', 'APIs', 'Git', 'Docker', 'Figma'],
  },
  {
    id: 3,
    name: 'Sistema de gestión de establecimientos',
    description: 'Este segundo proyecto en el que trabajé en Irontec fue una migración completa de un sistema de gestión obsoleto que usaba el Ayto. de Bilbao. Mi primer trabajo fue analizar la base de datos completa y sacar relaciones, significados y un sentido a todas las tablas y columnas que eran bastante crípticas. Después del análisis, un compañero creó la base del proyecto usando Angular en el frontend y Java Springboot en el backend, tal como pidió el cliente. Yo me dediqué a desarrollar las distinas pantallas, menús, modales, enrutamientos y funcionalidades del frontend de Angular como pueden ser las exportaciones, las vistas y ordenaciones de tablas, consumo de APIs, etc.',
    images: ['/sistema_1.png'],
    skills: ['JavaScript', 'TypeScript', 'Angular', 'Docker', 'Java', 'APIs', 'SQL Server', 'Git', 'Figma'],
  },
  {
    id: 4,
    name: 'Juego interactivo de navegador',
    description: 'El proyecto consiste en un juego interactivo de búsqueda del tesoro desarrollado para navegador. El jugador podrá introducir su nombre, elegir el color de su personaje y recorrer un tablero de 10×10 casillas hasta llegar al cofre situado en la última posición. El movimiento se realiza mediante un dado virtual que indica las casillas disponibles en las cuatro direcciones cardinales. El tablero y sus texturas se generan dinámicamente, y las casillas posibles se resaltan para facilitar la interacción. Al finalizar la partida, se muestra el número de tiradas realizadas y se compara la puntuación con los récords almacenados en el navegador. La interfaz también se adapta a diferentes tamaños de pantalla y orientaciones de dispositivo, incluyendo móviles (cabe denotar que se fuerza la vista en horizontal o apaisada en dispositivos móviles).',
    images: ['/juego_1.png', '/juego_2.png', '/juego_3.png'],
    skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'Pixel Art'],
    link: 'https://adam-jb5.github.io/JuegoInteractivo/'
  }
]