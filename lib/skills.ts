import type { LucideIcon } from "lucide-react";
import { Brain, Code2, Cloud, Database, FlaskConical, Layers, Sparkles, Wrench } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: readonly string[];
};

// Devicon CDN base URL
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

// Maps skill names to their brand icon URLs
export const skillIconMap: Record<string, string> = {
  // Languages
  "Java": devicon("java"),
  "Python": devicon("python"),
  "JavaScript": devicon("javascript"),

  // AI Frameworks
  "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "LangGraph": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "LangSmith": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "FastAPI": devicon("fastapi"),
  "Pydantic": devicon("pydantic"),

  // Backend
  "Spring Boot": devicon("spring"),
  "Hibernate": devicon("hibernate"),
  "Spring Security": devicon("spring"),
  "Spring Data JPA": devicon("spring"),
  "RESTful APIs": "",
  "JWT Authentication": "",

  // Databases
  "MySQL": devicon("mysql"),
  "PostgreSQL": devicon("postgresql"),
  "Redis": devicon("redis"),
  "Qdrant": "https://cdn.simpleicons.org/qdrant",
  "Neo4j": devicon("neo4j"),
  "ChromaDB": "",
  "FAISS": "",
  "pgvector": "",

  // Cloud
  "AWS (EC2, S3, RDS, IAM)": devicon("amazonwebservices", "original-wordmark"),
  "Docker": devicon("docker"),
  "Docker Compose": devicon("docker"),

  // Tools
  "Git": devicon("git"),
  "Maven": devicon("maven"),
  "Postman": devicon("postman"),

  // Testing
  "JUnit": devicon("junit"),
  "Mockito": "",
  "PyTest": devicon("pytest"),
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["RAG Pipelines", "AI Agents", "Prompt Engineering", "LLM Evaluation", "Semantic Search", "NLP"],
  },
  {
    title: "AI Frameworks",
    icon: Sparkles,
    skills: ["LangChain", "LangGraph", "LangSmith", "FastAPI", "Pydantic"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Spring Boot", "Hibernate", "Spring Security", "Spring Data JPA", "FastAPI", "RESTful APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "Qdrant", "ChromaDB", "FAISS", "pgvector", "Neo4j"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS (EC2, S3, RDS, IAM)", "Docker", "Docker Compose"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Maven", "Postman"],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    skills: ["JUnit", "Mockito", "PyTest"],
  },
];
