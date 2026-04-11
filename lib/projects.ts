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
      "Full-stack URL shortener with Redis caching, RabbitMQ-driven async analytics, JWT auth with refresh token rotation, and a React dashboard with search, filtering, and link management.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Redis", "RabbitMQ"],
    features: [
      "Short link creation with custom aliases, collision protection, and deduplication",
      "RabbitMQ-based async click tracking to keep redirects under low latency",
      "Redis-backed redirect caching, analytics caching, and login rate limiting",
      "JWT auth with refresh token rotation, account lockout, and password reset flow",
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
      "Full-stack quiz platform with role-based admin/user workflows, auto-scoring, leaderboards, Kafka-driven email notifications, Redis caching, and Prometheus + Grafana observability.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Kafka"],
    features: [
      "Admin quiz CRUD with question management, publishing, and analytics dashboards",
      "Timed quiz attempts with auto-scoring, answer review, and leaderboard rankings",
      "Kafka-based async notifications for new quiz alerts and result summary emails",
      "Prometheus metrics with Grafana dashboards for auth, messaging, and cache activity",
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
      "Real-time chat platform with WebSocket/STOMP messaging, Redis-backed distributed presence, Google sign-in, DM request workflows, and Flyway-managed schema migrations.",
    techStack: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "Redis", "React"],
    features: [
      "WebSocket/STOMP real-time messaging with group rooms and direct messages",
      "Redis-backed distributed presence tracking with typing and online indicators",
      "Message lifecycle: edit, soft delete, pin/unpin, attachments, and self-destruct",
      "Google OAuth + JWT auth with refresh token rotation and revocation support",
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
      "Personal finance API with budgeting, recurring expense automation, async CSV/PDF exports, spending insights, and comprehensive test coverage with JUnit and Mockito.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JUnit", "Mockito", "OpenAPI"],
    features: [
      "REST APIs for expenses, budgets, categories, and spending insights with pagination",
      "Recurring expense automation with scheduled processing and category-based rules",
      "JWT auth with validation, rate limiting, and global exception handling",
      "Unit and integration tests with JUnit, MockMvc, and Mockito for full coverage",
    ],
    github: "https://github.com/NiranjanS8/Expense_Tracker",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/Expense_Tracker/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/Expense_Tracker/master/README.md",
    ],
  },
  {
    slug: "video-streaming-application",
    title: "Video Streaming App",
    description:
      "Video upload and streaming platform with async FFmpeg HLS processing for multi-resolution output, JWT-secured ownership model, auto-thumbnails, and performance metrics tracking.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "FFmpeg", "HLS"],
    features: [
      "Async FFmpeg pipeline generating HLS output at 360p, 720p, and 1080p resolutions",
      "JWT-secured upload, list, and delete with owner-based access enforcement",
      "Auto-thumbnail generation with optional custom thumbnail upload support",
      "Performance metrics API tracking upload throughput, processing latency, and RTF",
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
      "Production-style microservices backend with REST + gRPC communication, Kafka event-driven architecture, centralized auth via API Gateway, and cloud-native deployment on AWS.",
    techStack: ["Java", "Spring Boot", "Microservices", "Kafka", "gRPC", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Microservices architecture with REST APIs and gRPC for inter-service communication",
      "Kafka-based event-driven messaging for decoupled service-to-service workflows",
      "Centralized JWT authentication enforced at the API Gateway layer",
      "Containerized with Docker and deployed using AWS CDK with LocalStack testing",
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
