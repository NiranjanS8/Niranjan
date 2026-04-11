export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  demo?: string;
  readmeRawUrls: string[];
};

export const projects: Project[] = [
  {
    slug: "snapurl",
    title: "SnapURL",
    description:
      "Scalable URL shortening service built with Spring Boot and Redis, designed to handle high-throughput link generation and fast redirection.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Redis", "RabbitMQ"],
    features: [
      "Implemented short URL generation with collision handling",
      "Built JWT-based authentication with refresh token flow",
      "Integrated Redis caching to reduce DB load and improve response time",
      "Designed analytics pipeline for tracking link usage",
    ],
    github: "https://github.com/NiranjanS8/snapurl",
    demo: "https://snapurl.online/",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/snapurl/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/snapurl/master/README.md",
    ],
  },
  {
    slug: "quizze",
    title: "Quizze",
    description:
      "Backend-driven quiz platform with real-time scoring, async notifications, and role-based workflows.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Kafka"],
    features: [
      "Built REST APIs for quiz management and user participation",
      "Implemented role-based access (admin/user)",
      "Designed async notification system using Kafka",
      "Added leaderboard and scoring logic with efficient queries",
    ],
    github: "https://github.com/NiranjanS8/Quizze",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/Quizze/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/Quizze/master/README.md",
    ],
  },
  {
    slug: "whisprly",
    title: "Whisprly",
    description:
      "Real-time chat system using Spring Boot and WebSockets with presence tracking and secure authentication.",
    techStack: ["Spring Boot", "PostgreSQL", "WebSocket", "React"],
    features: [
      "Implemented WebSocket-based messaging with room support",
      "Built real-time typing and presence indicators",
      "Designed JWT-based auth with refresh tokens",
      "Integrated PostgreSQL for message persistence",
    ],
    github: "https://github.com/NiranjanS8/Whisprly",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/Whisprly/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/Whisprly/master/README.md",
    ],
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Personal finance platform with budgeting, recurring expense automation, async exports, insights, and role-based secure APIs.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JUnit", "Mockito", "OpenAPI"],
    features: [
      "Built REST APIs for auth, expenses, budgets, insights, and reporting",
      "Implemented JWT auth, validation, rate limiting, and consistent error handling",
      "Added recurring expenses, category rules, and scheduled email reports",
      "Wrote unit and integration tests with JUnit, MockMvc, and Mockito",
    ],
    github: "https://github.com/NiranjanS8/Expense_Tracker",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/Expense_Tracker/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/Expense_Tracker/master/README.md",
    ],
  },
  {
    slug: "video-streaming-application",
    title: "Video Streaming Application",
    description:
      "Backend-driven video upload and streaming platform built with Spring Boot, featuring JWT authentication, user-owned media access, async HLS processing, and performance tracking.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "FFmpeg", "HLS"],
    features: [
      "Implemented JWT auth and protected video management endpoints",
      "Built async FFmpeg processing for 360p, 720p, and 1080p HLS output",
      "Added owner-based access control for video updates and deletes",
      "Tracked upload throughput and processing latency through a metrics API",
    ],
    github: "https://github.com/NiranjanS8/video-streaming-application",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/video-streaming-application/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/video-streaming-application/master/README.md",
    ],
  },
  {
    slug: "patient-management-system",
    title: "Patient Management System",
    description:
      "Production-style microservices backend system designed with Spring Boot, featuring secure service-to-service communication, event-driven architecture, and cloud-native deployment.",
    techStack: ["Java", "Spring Boot", "Microservices", "Kafka", "gRPC", "PostgreSQL", "Docker", "AWS", "JWT", "Spring Security"],
    features: [
      "Built microservices with REST, gRPC billing, and Kafka event communication",
      "Implemented centralized authentication with Spring Security, JWT, and API Gateway enforcement",
      "Containerized services with Docker and deployed using AWS CDK with LocalStack",
      "Designed PostgreSQL persistence with validation and integration testing via RestAssured",
    ],
    github: "https://github.com/NiranjanS8/patient-management-system",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/patient-management-system/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/patient-management-system/master/README.md",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
