import { UNIANDES } from "./constants";
import { MIN_EDUCACION_COLOMBIA } from "./organizations";
import type { Award } from "../schemas/award";

export const AWARDS: Award[] = [
  {
    title: {
      en: "Award for Outstanding Saber Pro and TyT Scores 2024",
      es: "Reconocimiento Mejores Saber Pro y TyT 2024",
    },
    description: {
      en: {
        full: "Awarded to students with the highest nationwide results in the previous year’s Saber Pro and TyT university-level exams."  // Ranked third nationally in my major and seventeenth in engineering.
      },
      es: {
        full: "Reconocimiento otorgado a los estudiantes con los mejores resultados nacionales en el año inmediatamente anterior en las Pruebas Saber Pro y TyT del nivel universitario",
      },
    },
    date: new Date("2025-11-23T20:00:00-05:00"),
    certificateUrl: "/awards/certificates/reconocimiento-mejores-saber-pro-y-tyt-2024.png",
    showInCV: true,
    showInResume: false,
    organization: MIN_EDUCACION_COLOMBIA,
    city: "Bogotá",
    country: "Colombia",
  },
  {
    title: {
      en: "Summa Cum Laude",
    },
    description: {
      en: {
        full: `Summa Cum Laude is the highest undergraduate academic honor. Eligibility requires a cumulative GPA within the top 1% of graduates from the faculty over the past five years, and demonstrated integral merits in an interview before a commission appointed by the Academic Council.`,
      },
    },
    date: new Date("2025-04-07T20:00:00-05:00"),
    certificateUrl: "/awards/certificates/summa-cum-laude.png",
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Athletic Career Distinction",
      es: "Distinción a la Trayectoria Deportiva"
    },
    description: {
      en: {
        full: `The Athletic Career Distinction is awarded to a single student in the graduating class for exemplary leadership, commitment, and ethics in sports. Awarded citing 41 swimming medals, including 24 gold, and two years as elected team captain.`,
      },
    },
    date: new Date("2025-04-07T20:00:00-05:00"),
    certificateUrl: "/awards/certificates/distincion-trayectoria-deportiva.png",
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Ramón de Zubiría Award",
      es: "Distinción Ramón de Zubiría"
    },
    description: {
      en: {
        full: `Recognition awarded annually to the undergraduate student with the highest cumulative GPA among all students in their major.`,
      },
    },
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
    instances: [
      {
        description: {
          en: {
            full: `Cumulative GPA of 4.90 / 5.00 in Systems and Computing Engineering.`,
          },
        },
        date: new Date("2023-11-15T20:00:00-05:00"),
        certificateUrl: "/awards/certificates/distincion-ramon-zubiria-2023.png",
      }, 
      {
        description: {
          en: {
            full: `Cumulative GPA of 4.91 / 5.00 in Systems and Computing Engineering.`,
          },
        },
        date: new Date("2024-11-13T20:00:00-05:00"),
        certificateUrl: "/awards/certificates/distincion-ramon-zubiria-2024.png",
      }, 
    ],
  },
  {
    title: {
      en: "Semester Excellence Award",
      es: "Premio a la Excelencia Semestral"
    },
    description: {
      en: {
        full: `Recognition awarded to the student who achieved the highest semester GPA in their undergraduate program during the immediately preceding semester.`,
      },
    },
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
    instances: [
      {
        description: {
          en: {
            full: `Semester GPA of 4.90 / 5.00 in Physics.`,
          },
        },
        date: new Date("2021-06-30T20:00:00-05:00"),
        certificateUrl: "/awards/certificates/distincion-excelencia-semesral-2020-20.png",
      },
      {
        description: {
          en: {
            full: `Semester GPA of 4.86 / 5.00 in Physics.`,
          },
        },
        date: new Date("2021-11-30T20:00:00-05:00"),
        certificateUrl: "/awards/certificates/distincion-excelencia-semesral-2021-10.png",
      },
      {
        description: {
          en: {
            full: `Semester GPA of 4.97 / 5.00 in Systems and Computing Engineering.`,
          },
        },
        date: new Date("2023-11-15T20:00:00-05:00"),
        certificateUrl: "/awards/certificates/distincion-excelencia-semesral-2023-10.png",
      },
    ],
  },
];
