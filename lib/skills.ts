import type { LucideIcon } from "lucide-react";
import { Brain, Code2, Cloud, Database, FlaskConical, Layers, Sparkles, Wrench } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: readonly string[];
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
    skills: ["LangChain", "LangGraph", "FastAPI", "PyTorch", "Scikit-learn", "Pydantic"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Spring Boot", "Hibernate", "Spring Security", "Spring Data JPA", "RESTful APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "ChromaDB", "FAISS", "pgvector", "Neo4j"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS (EC2, S3, RDS, IAM)", "Docker", "Docker Compose"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Maven", "Postman", "LangSmith", "Streamlit"],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    skills: ["JUnit", "Mockito"],
  },
];
