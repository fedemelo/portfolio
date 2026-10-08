import { UNIANDES } from "./constants";
import type { Publication } from "../schemas/publication";

export const PUBLICATIONS: Publication[] = [
  {
    showInCV: true,
    showInResume: true,
    type: "conferencePaper",
    title: {
      en: "Centralizing the Student Lens: Design and Evaluation of a Learning Analytics Dashboard for Academic Advising in Higher Education",
    },
    authors: [
      { name: "Martínez Novoa, S." },
      { name: "Melo Barrero, F.", isUser: true },
      { name: "Ruiz Giraldo, M." },
      { name: "Velásquez Marín, S." },
      { name: "Carvajal Chaves, N." },
      { name: "Hernández Hoyos, M." },
      { name: "Reyes, J. P." },
    ],
    year: 2026,
    description: {
      en: {
        full: "Proceedings of the World Engineering Education Forum (WEEF 2026)",
      },
    },
    institution: "IFEES & GEDC",
    note: {
      en: "To appear",
      es: "En prensa",
    },
    city: "Cartagena de Indias",
    country: "Colombia",
  },
  {
    showInCV: true,
    showInResume: true,
    type: "undergraduateThesis",
    title: {
      en: "Desarrollo del Perfil del estudiante dentro de No estás solo"
    },
    authors: [
      {
        name: "Melo Barrero, F.",
        isUser: true,
      }
    ],
    year: 2024,
    description: {
      en: {
        full: "Undergraduate thesis",
      },
      es: {
        full: "Tesis de pregrado",
      }
    },
    institution: "Universidad de los Andes",
    url: "https://repositorio.uniandes.edu.co/entities/publication/26656ec1-50e7-42cd-976c-1cc0194beb5a",
    linkText: {
      en: "Uniandes Repository"
    },
    ...UNIANDES,
  },
]; 