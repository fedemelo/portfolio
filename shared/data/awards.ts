import { UNIANDES } from "./constants";
import { MIN_EDUCACION_COLOMBIA } from "./organizations";
import type { Award } from "../schemas/award";

export const AWARDS: Award[] = [
  {
    title: {
      en: "Dejar Huella Award",
      es: "Premio Dejar Huella",
    },
    description: {
      en: {
        full: "Universidad de los Andes recognition for team impact on the university community. Awarded for \"No Estás Solx,\" a student-built peer-support platform serving 56,000+ active students with ~1,000 daily connections to institutional support.",
        short: "Uniandes internal impact award, for a peer-support platform serving 56,000+ students",
      },
      es: {
        full: "Reconocimiento de la Universidad de los Andes al impacto de equipos en la comunidad universitaria. Otorgado por \"No estás solx\", una plataforma de apoyo entre pares construida por estudiantes, con más de 56.000 estudiantes activos y ~1.000 conexiones diarias con la red de apoyo institucional.",
        short: "Premio de la Universidad de los Andes al impacto de equipos, por una plataforma de apoyo entre pares con más de 56.000 estudiantes",
      },
    },
    date: new Date("2026-08-13T20:00:00-05:00"),
    // certificateUrl: TODO: Add when available
    // REF: https://www.uniandes.edu.co/investigacioncreacion/es/noticias/investigacion-creacion/dejar-huella-2026-quienes-construyen-el-impacto-de-uniandes
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
  },
  {
    title: {
      en: "Award for Outstanding Saber Pro and TyT Scores 2024",
      es: "Reconocimiento Mejores Saber Pro y TyT 2024",
    },
    description: {
      en: {
        full: "Awarded to top-performing students on Colombia’s official national standardized higher-education examinations (Saber Pro and TyT)", // Ranked third nationally in my major and seventeenth nationally in engineering.
        short: "Colombia's mandatory national exit exam for graduating university students",
      },
      es: {
        full: "Reconocimiento otorgado a los estudiantes con los mejores resultados nacionales en el año inmediatamente anterior en las Pruebas Saber Pro y TyT del nivel universitario",
        short: "Examen nacional obligatorio para estudiantes universitarios que se gradúan",
      },
    },
    date: new Date("2025-11-23T20:00:00-05:00"),
    certificateUrl:
      "/awards/certificates/reconocimiento-mejores-saber-pro-y-tyt-2024.png",
    showInCV: true,
    showInResume: true,
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
        short: "Highest undergraduate honor; top 1% cumulative GPA among graduates of the faculty",
      },
    },
    date: new Date("2025-04-07T20:00:00-05:00"),
    certificateUrl: "/awards/certificates/summa-cum-laude.png",
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
  },
  {
    title: {
      en: "Athletic Career Distinction",
      es: "Distinción a la Trayectoria Deportiva",
    },
    description: {
      en: {
        full: `The Athletic Career Distinction is awarded to a single student in the graduating class for exemplary leadership, commitment, and ethics in sports. Awarded citing 41 swimming medals, including 24 gold, and two years as elected team captain.`,
        short: "Awarded to one graduating student university-wide for leadership and excellence in varsity athletics",
      },
    },
    date: new Date("2025-04-07T20:00:00-05:00"),
    certificateUrl: "/awards/certificates/distincion-trayectoria-deportiva.png",
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
  },
  {
    title: {
      en: "Ramón de Zubiría Award",
      es: "Distinción Ramón de Zubiría",
    },
    description: {
      en: {
        full: `Annual distinction awarded to the undergraduate student with the highest cumulative GPA in their major.`,
        short: "Awarded annually to the top cumulative-GPA student in the major",
      },
    },
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
    instances: [
      {
        description: {
          en: {
            full: `Cumulative GPA of 4.91 / 5.00 in Systems and Computing Engineering.`,
          },
        },
        date: new Date("2024-11-13T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-ramon-zubiria-2024.png",
      },
      {
        description: {
          en: {
            full: `Cumulative GPA of 4.90 / 5.00 in Systems and Computing Engineering.`,
          },
        },
        date: new Date("2023-11-15T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-ramon-zubiria-2023.png",
      },
    ],
  },
  {
    title: {
      en: "Semester Excellence Award",
      es: "Premio a la Excelencia Semestral",
    },
    description: {
      en: {
        full: `Awarded to the undergraduate student with the highest semester GPA in their academic program during the preceding semester.`,
        short: "Awarded each semester to the top-GPA student in the major",
      },
    },
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
    instances: [
      {
        description: {
          en: {
            full: `Semester GPA of 4.97 / 5.00 in Systems and Computing Engineering.`,
          },
        },
        date: new Date("2023-11-15T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-excelencia-semesral-2023-10.png",
      },
      {
        description: {
          en: {
            full: `Semester GPA of 4.86 / 5.00 in Physics.`,
          },
        },
        date: new Date("2021-11-30T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-excelencia-semesral-2021-10.png",
      },
      {
        description: {
          en: {
            full: `Semester GPA of 4.90 / 5.00 in Physics.`,
          },
        },
        date: new Date("2021-06-30T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-excelencia-semesral-2020-20.png",
      },
    ],
  },
];
