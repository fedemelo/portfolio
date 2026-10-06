import type { Extracurricular } from "../schemas/extracurricular";

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    showInCV: true,
    showInResume: true,
    description: {
      en: {
        full: "National-level swimmer",
      },
      es: {
        full: "Nadador de nivel nacional",
      }
    },
    events: [
      {
        en: {
          full: "1st place, men's 20–29, 2 km open water, OCEANMAN San Andrés 2026",
        },
        es: {
          full: "1.er puesto, hombres 20–29, 2 km en aguas abiertas, OCEANMAN San Andrés 2026",
        }
      },
      {
        en: {
          full: "Member and captain of the Universidad de los Andes Swimming Team, earning 24 gold, 10 silver, and 7 bronze medals",
          short: "Uniandes Swimming Team Captain (24 gold, 10 silver, 7 bronze medals)"
        },
        es: {
          full: "Miembro y capitán de la Selección de Natación de la Universidad de los Andes, obteniendo 24 medallas de oro, 10 de plata y 7 de bronce",
          short: "Capitán de la Selección de Natación de Uniandes (24 medallas de oro, 10 de plata y 7 de bronce)"
        }
      },
      {
        en: {
          full: "Four-time member of the Bogotá City Swimming Team, competing in 12 National Swimming Championships",
          short: "Four-time Bogotá City Team member (12 National Championships)"
        },
        es: {
          full: "Cuatro veces miembro de la Selección Bogotá de Natación, compitiendo en 12 Campeonatos Nacionales de Natación",
          short: "Cuatro veces miembro de la Selección Bogotá de Natación (12 Campeonatos Nacionales)"
        }
      }
    ],
  },
];
