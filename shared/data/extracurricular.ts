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
          full: "Member and captain of the Universidad de los Andes Swimming Team, earning 24 gold, 10 silver, and 7 bronze medals; four-time member of the Bogotá City Swimming Team, competing in 12 National Swimming Championships",
          short: "Uniandes Swimming Team Captain (24 gold, 10 silver, 7 bronze medals); four-time Bogotá City Team member (12 National Championships)"
        },
        es: {
          full: "Miembro y capitán de la Selección de Natación de la Universidad de los Andes, obteniendo 24 medallas de oro, 10 de plata y 7 de bronce; cuatro veces miembro de la Selección Bogotá de Natación, compitiendo en 12 Campeonatos Nacionales de Natación",
          short: "Capitán de la Selección de Natación de Uniandes (24 medallas de oro, 10 de plata y 7 de bronce); cuatro veces miembro de la Selección Bogotá de Natación (12 Campeonatos Nacionales)"
        }
      }
    ],
  },
];
