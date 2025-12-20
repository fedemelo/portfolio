import type { Skill } from "../schemas/skill";

export const SKILLS: Skill[] = [
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Programming Languages"
    },
    skills: ["TypeScript", "Python", "Java", "Swift"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Data & Databases"
    },
    skills: ["Polars", "SQL", "Plotly", "Jupyter", "Hex", "PostgreSQL", "Redis", "Oracle SQL Developer"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Cloud & DevOps"
    },
    skills: ["AWS (RDS, ECS, S3, DynamoDB)", "Docker", "Coolify", "GitHub CI/CD"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Web Technologies"
    },
    skills: ["React", "Svelte", "Next.js", "FastAPI", "Fastify", "Spring Boot", "HTML", "CSS", "MUI", "ShadCN"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "AI/ML"
    },
    skills: [ "TensorFlow", "PyTorch", "Anthropic API", "OpenAI API", "Groq API", "Gemini API"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Other"
    },
    skills: ["LaTeX", "Git", "Bash", "Linux", "Firebase"],
  },
]; 