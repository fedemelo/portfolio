import type { Organization } from "../schemas/organization";

export const UNIANDES: Organization = {
  name: "Universidad de los Andes",
  icon: "/icons/uniandes-icon.png",
  link: "https://uniandes.edu.co",
};

export const CANALS_AI: Organization = {
  name: "Canals AI",
  icon: "/icons/canals-icon.png",
  link: "https://canals.ai",
};

export const CASEWARE: Organization = {
  name: "Caseware International Inc.",
  icon: "/icons/caseware-icon.png",
  link: "https://www.caseware.com",
};

export const COLEGIO_SAN_CARLOS: Organization = {
  name: "Colegio San Carlos",
  icon: "/icons/csc-icon.png",
  // I feel like the Wikipedia page is more telling than sancarlos.edu.co
  link: "https://en.wikipedia.org/wiki/Colegio_San_Carlos",  
};

export const MIN_EDUCACION_COLOMBIA: Organization = {
  name: "Ministerio de Educación Nacional",
  icon: "/icons/min-educacion-icon.png",
  // Link to the certificate of accreditation from Acreditta,
  // not to the official website of the Ministry of Education.
  link: "https://www.acreditta.com/credential/4b25867e-0749-4267-a55b-aedecdc29aca",
};

