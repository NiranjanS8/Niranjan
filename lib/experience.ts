export type ExperienceEntry = {
  role: string;
  company: string;
  duration: string;
  responsibilities: readonly string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Java Developer",
    company: "Dyashin Technosoft",
    duration: "", // TODO: Add your actual duration (e.g., "Jan 2025 – Apr 2025")
    responsibilities: [
      "Built and deployed a Java-based backend application using Spring Boot, implementing REST APIs for user authentication and data management.",
      "Designed and integrated PostgreSQL database schemas, optimizing queries to improve data retrieval performance.",
      "Implemented core features using OOP principles, ensuring modular, reusable, and maintainable code structure.",
      "Used Git for version control, managing code changes and collaborating through branches and pull requests.",
      "Tested and debugged applications using tools like Postman and logging techniques, reducing errors and improving stability.",
    ],
  },
];
