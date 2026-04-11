import type { LucideIcon } from "lucide-react";
import { Code2, Cloud, Database, FlaskConical, Layers, Wrench } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: readonly string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Spring Boot", "Hibernate", "Spring Security", "Spring Data JPA", "RESTful APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis"],
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
    skills: ["JUnit", "Mockito"],
  },
];
