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
        full: "Undergraduate thesis presented at Universidad de los Andes to obtain the degree of Systems and Computing Engineer",
        short: "Undergraduate thesis - Systems and Computing Engineering degree"
      },
      es: {
        full: "Tesis de pregrado presentada en Universidad de los Andes para obtener el título de Ingeniero de Sistemas y Computación",
        short: "Tesis de pregrado - Ingeniería de Sistemas y Computación"
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