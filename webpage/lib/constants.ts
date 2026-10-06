export const PORTFOLIO_URLS = {
  CV: process.env.NEXT_PUBLIC_CV_URL || "/documents/Federico%20Melo%20Barrero%20-%20CV.pdf",
  RESUME: process.env.NEXT_PUBLIC_RESUME_URL || "/documents/Federico%20Melo%20Barrero%20-%20Resume.pdf",
  API: process.env.NEXT_PUBLIC_API_URL || "https://api.fedemelo.com",
  WEBPAGE: process.env.NEXT_PUBLIC_WEBPAGE_URL || "https://fedemelo.com",
} as const; 