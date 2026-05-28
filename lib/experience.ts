export type ExperienceEntry = {
  role: string;
  company: string;
  duration: string;
  responsibilities: readonly string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Java Developer Intern",
    company: "Dyashin Technosoft",
    duration: "Feb 2026 - June 2026",
    responsibilities: [
      "Contributed to the development of a certificate generation system using Spring Boot and PostgreSQL, enabling automated certificate creation and recipient management.",
      "Built REST APIs for participant registration, template management, eligibility validation, and certificate generation workflows.",
      "Implemented JWT-based authentication and role-based access control for secure access to administrative features.",
      "Worked with file generation and storage workflows for dynamically generated certificates and downloadable assets.",
      "Designed asynchronous certificate generation workflows for bulk recipient processing using queue-based architecture concepts.",
    ],
  },
];
