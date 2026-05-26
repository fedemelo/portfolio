import { UNIANDES } from "./constants";
import type { Publication } from "../schemas/publication";

export const PUBLICATIONS: Publication[] = [
  {
    showInCV: true,
    showInResume: true,
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