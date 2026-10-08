import { UNIANDES } from "./constants";
import { COLEGIO_SAN_CARLOS } from "./organizations";
import type { Education } from "../schemas/education";

export const EDUCATION: Education[] = [
  {
    showInCV: true,
    showInResume: true,
    degree: {
      en: "B.Sc. Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación",
    },
    ...UNIANDES,
    startDate: new Date("2020-08-08T12:00:00-05:00"), // Unclear if this is the actual start date
    graduationDate: new Date("2025-04-07T12:00:00-05:00"),
    trueEndDate: new Date("2024-12-08T12:00:00-05:00"), // Sunday, last day to turn in deliverables
    gpa: "4.92 / 5.00",
    gpaContext: {
      en: {
        full: "highest GPA in major in 40 years, highest in Engineering Faculty in 16 years",
      },
      es: {
        full: "el promedio más alto de la carrera en 40 años, el más alto de la Facultad de Ingeniería en 16 años",
      },
    },
    diplomaUrl: "/education/diplomas/uniandes.png",
    certificates: ["/education/certificates/acta-grado-uniandes.png"],
    relatedAwardTitles: [
      "Summa Cum Laude",
      "Athletic Career Distinction",
      "Ramón de Zubiría Award",
      "Ramón de Zubiría Award",
      "Semester Excellence Award",
      "Semester Excellence Award",
      "Semester Excellence Award",
      // "Quiero Estudiar Scholarship"
    ],
    details: [
      {
        showInResume: false,
        en: {
          full: "Recipient of the Quiero Estudiar scholarship (95% tuition coverage) for the duration of the degree",
        },
        es: {
          full: "Beneficiario de la beca Quiero Estudiar (cubre el 95 % de la matrícula) durante toda la carrera",
        },
      },
    ],
  },
  {
    degree: {
      en: "Bachiller Académico",
      es: "Bachiller Académico"
    },
    organization: COLEGIO_SAN_CARLOS,
    city: "Bogotá",
    country: "Colombia",
    graduationDate: new Date("2020-06-26T12:00:00-05:00"),
    gpa: "92.21 / 100.00",
    diplomaUrl: "/education/diplomas/csc.png",
    certificates: ["/education/certificates/acta-grado-csc.png"],
    details: [
      {
        en: {
          full: "Highest GPA in the 2020 cohort",
          short: "Highest GPA in 2020 cohort",
        },
        es: {
          full: "Mejor promedio de la promoción 2020",
          short: "Mejor promedio de la promoción 2020",
        },
      },
    ],
    showInCV: false,
    showInResume: false,
    showInWebsite: false,
  },
];
