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
          full: "Universidad de los Andes Swimming Team member and Captain, 4-time Bogotá City Swimming Team member, 12 National Swimming Championships",
          short: "Uniandes Swimming Team Captain, 4-time Bogotá City Team member, 12 National Championships"
        },
        es: {
          full: "Miembro de la Selección de Natación de la Universidad de los Andes, 4 veces miembro de la Selección Bogotá de Natación, 12 campeonatos nacionales de Natación",
          short: "Capitán Selección de Natación Uniandes, 4 veces Selección Bogotá de Natación, 12 campeonatos nacionales"
        }
      }
    ],
  },
];
