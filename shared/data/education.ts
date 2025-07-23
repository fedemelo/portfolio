import { UNIANDES } from "./constants";
import type { Education } from "../schemas/education";

export const EDUCATION: Education[] = [
  {
    showInCV: true,
    showInResume: true,
    degree: {
      en: "B.Sc. Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    honors: {
      en: "Summa Cum Laude",
    },
    ...UNIANDES,
    startDate: new Date("2020-08-08T12:00:00-05:00"),  // Unclear if this is the actual start date
    graduationDate: new Date("2025-04-07T12:00:00-05:00"),
    trueEndDate: new Date("2024-12-08T12:00:00-05:00"),  // Sunday, last day to turn in deliverables
    gpa: "4.92/5.00",
    details: [
      {
        en: {
          full: "Highest cumulative GPA in the Faculty of Engineering in the last 17 years",
          short: "Highest cumulative GPA in Faculty of Engineering in 17 years"
        },
        es: {
          full: "Mejor promedio acumulado en la Facultad de Ingeniería en los últimos 17 años",
          short: "Mejor promedio acumulado en Facultad de Ingeniería en 17 años"
        }
      },
      {
        en: {
          full: "Best cumulative GPA in the Systems and Computing Engineering program in the XXI century",
          short: "Best cumulative GPA in Systems Engineering program in XXI century"
        },
        es: {
          full: "Mejor promedio acumulado en el programa de Ingeniería de Sistemas y Computación en el siglo XXI",
          short: "Mejor promedio acumulado en Ingeniería de Sistemas y Computación en siglo XXI"
        }
      },
    ],
  },
  {
    degree: {
      en: "Bachiller Académico"
    },
    organization: "Colegio San Carlos",
    city: "Bogotá",
    country: "Colombia",
    graduationDate: new Date("2020-06-26T12:00:00-05:00"),
    honors: {
      en: "Highest GPA in the 2020 cohort"
    },
    gpa: "92.21 / 100.00",
    showInCV: false,
    showInResume: false,
  }
];
