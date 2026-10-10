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
        full: "Universidad de los Andes recognition for team impact on the university community. Awarded for \"No Estás Solx,\" a student-built peer-support platform serving 56,000+ active students with ~1,000 daily connections to institutional support",
        short: "Uniandes internal impact award, for a peer-support platform serving 56,000+ students",
      },
      es: {
        full: "Reconocimiento de la Universidad de los Andes al impacto de equipos en la comunidad universitaria. Otorgado por \"No estás solx\", una plataforma de apoyo entre pares construida por estudiantes, con más de 56.000 estudiantes activos y ~1.000 conexiones diarias con la red de apoyo institucional",
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
      en: "Top Saber Pro Score Award 2024",
      es: "Reconocimiento Mejores Saber Pro y TyT 2024",
    },
    description: {
      en: {
        full: "Awarded to top-performing students on Colombia’s official national standardized higher-education examinations (Saber Pro and TyT)", // Ranked third nationally in my major and seventeenth nationally in engineering.
        short: "Among the top national scores on Colombia's mandatory exit exam for university graduates",
      },
      es: {
        full: "Otorgado a los estudiantes con los mejores resultados en los exámenes oficiales de Estado de la educación superior en Colombia (Saber Pro y TyT)",
        short: "Entre los mejores puntajes del país en el examen de Estado obligatorio para quienes terminan la universidad",
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
      es: "Summa Cum Laude"
    },
    description: {
      en: {
        full: `Summa Cum Laude is the highest undergraduate academic honor. Eligibility requires a cumulative GPA within the top 1% of graduates from the faculty over the past five years, and demonstrated integral merits in an interview before a commission appointed by the Academic Council`,
        short: "Highest undergraduate honor; top 1% cumulative GPA among graduates of the faculty",
      },
      es: {
        full: "Summa Cum Laude es la máxima distinción académica de pregrado. Para optar a ella se requiere un promedio acumulado dentro del 1 % más alto de los graduados de la facultad en los últimos cinco años, y demostrar méritos integrales en una entrevista ante una comisión designada por el Consejo Académico",
        short: "Máxima distinción de pregrado; promedio acumulado dentro del 1 % más alto de los graduados de la facultad",
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
        full: `The Athletic Career Distinction is awarded to a single student in the graduating class for exemplary leadership, commitment, and ethics in sports. Awarded citing 41 swimming medals, including 24 gold, and two years as elected team captain`,
        short: "Awarded to one graduating student university-wide for leadership and excellence in varsity athletics",
      },
      es: {
        full: "La Distinción a la Trayectoria Deportiva se otorga a un solo estudiante de cada promoción por su liderazgo, compromiso y ética ejemplares en el deporte. Se otorgó destacando 41 medallas en natación, 24 de ellas de oro, y dos años como capitán elegido del equipo",
        short: "Otorgada a un solo graduando de toda la universidad por su liderazgo y excelencia en el deporte universitario",
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
        full: `Annual distinction awarded to the undergraduate student with the highest cumulative GPA in their major`,
        short: "Awarded annually to the top cumulative-GPA student in the major",
      },
      es: {
        full: "Distinción anual que se otorga al estudiante de pregrado con el promedio acumulado más alto de su carrera",
        short: "Otorgada cada año al estudiante con el mejor promedio acumulado de la carrera",
      },
    },
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
    instances: [
      {
        description: {
          en: {
            full: `Cumulative GPA of 4.91 / 5.00 in Systems and Computing Engineering`,
          },
          es: {
            full: "Promedio acumulado de 4,91 / 5,00 en Ingeniería de Sistemas y Computación",
          },
        },
        date: new Date("2024-11-13T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-ramon-zubiria-2024.png",
      },
      {
        description: {
          en: {
            full: `Cumulative GPA of 4.90 / 5.00 in Systems and Computing Engineering`,
          },
          es: {
            full: "Promedio acumulado de 4,90 / 5,00 en Ingeniería de Sistemas y Computación",
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
        full: `Awarded to the undergraduate student with the highest semester GPA in their academic program during the preceding semester`,
        short: "Awarded each semester to the top-GPA student in the major",
      },
      es: {
        full: "Se otorga al estudiante de pregrado con el promedio semestral más alto de su programa en el semestre anterior",
        short: "Otorgado cada semestre al estudiante con el mejor promedio de la carrera",
      },
    },
    showInCV: true,
    showInResume: true,
    ...UNIANDES,
    instances: [
      {
        description: {
          en: {
            full: `Semester GPA of 4.97 / 5.00 in Systems and Computing Engineering`,
          },
          es: {
            full: "Promedio semestral de 4,97 / 5,00 en Ingeniería de Sistemas y Computación",
          },
        },
        date: new Date("2023-11-15T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-excelencia-semesral-2023-10.png",
      },
      {
        description: {
          en: {
            full: `Semester GPA of 4.86 / 5.00 in Physics`,
          },
          es: {
            full: "Promedio semestral de 4,86 / 5,00 en Física",
          },
        },
        date: new Date("2021-11-30T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-excelencia-semesral-2021-10.png",
      },
      {
        description: {
          en: {
            full: `Semester GPA of 4.90 / 5.00 in Physics`,
          },
          es: {
            full: "Promedio semestral de 4,90 / 5,00 en Física",
          },
        },
        date: new Date("2021-06-30T20:00:00-05:00"),
        certificateUrl:
          "/awards/certificates/distincion-excelencia-semesral-2020-20.png",
      },
    ],
  },
  {
    title: {
      en: "Quiero Estudiar Scholarship",
      es: "Beca Quiero Estudiar",
    },
    description: {
      en: {
        full: "Merit- and need-based scholarship from Universidad de los Andes covering 95% of tuition for the full undergraduate degree",
        short: "Uniandes scholarship covering 95% of tuition for the full undergraduate degree",
      },
      es: {
        full: "Beca de la Universidad de los Andes, por mérito y necesidad económica, que cubre el 95 % de la matrícula durante todo el pregrado",
        short: "Beca de Uniandes que cubre el 95 % de la matrícula durante todo el pregrado",
      }
    },
    date: new Date("2020-07-13T20:00:00-05:00"),
    // certificateUrl: TODO: Add when available
    // REF: https://apoyofinanciero.uniandes.edu.co/quiero-estudiar
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
];
