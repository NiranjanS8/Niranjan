export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  demo?: string;
  readmeRawUrls: string[];
  category: "backend" | "ai" | "frontend";
};

export const projects: Project[] = [
  // Featured projects for the "All" view.
  {
    slug: "resolveai",
    title: "ResolveAI",
    description:
      "Autonomous AI customer-support agent with confidence-based routing, LangGraph human-in-the-loop review workflows, pgvector retrieval, code-enforced guardrails, and Postgres-backed job queues.",
    techStack: ["FastAPI", "Python", "LangGraph", "LangChain", "PostgreSQL", "pgvector", "React"],
    features: [
      "Confidence-based routing directing tickets to auto-resolve, human review, or escalation using routing scores",
      "Human review powered by LangGraph interrupt workflows persisted with a PostgreSQL checkpointer",
      "Code-level safety guardrails including action allowlists, hard refund caps, and prompt-injection sanitization",
      "Retrieval-augmented answers with pgvector indexing and live operational analytics for deflection and reply time",
    ],
    github: "https://github.com/NiranjanS8/ResolveAI",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/ResolveAI/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/ResolveAI/master/README.md",
    ],
    category: "ai",
  },
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
    category: "backend",
  },
  {
    slug: "recruitiq",
    title: "RecruitIQ",
    description:
      "Agentic AI recruiting platform that parses resumes, ranks candidates with grounded reasoning, supports human-in-the-loop review, and powers recruiter workflows from job descriptions to interview scheduling.",
    techStack: ["FastAPI", "LangGraph", "React", "TypeScript", "PostgreSQL", "LiteLLM"],
    features: [
      "Resume ingestion for PDFs, images, and text with OCR, heuristics, structured extraction, and parsing-confidence flags",
      "LangGraph agent pipeline scoring candidates across nine rubric dimensions with per-dimension reasoning",
      "Grounded candidate Q&A with resume citations plus generated interview questions from skill gaps and strongest claims",
      "Recruiter tooling for approval workflows, saved filters, candidate comparison, notes, audit logs, and scheduling integrations",
    ],
    github: "https://github.com/NiranjanS8/RecruitIQ",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/RecruitIQ/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/RecruitIQ/master/README.md",
    ],
    category: "ai",
  },
  {
    slug: "curex-healthcare-ai",
    title: "CureX Healthcare AI",
    description:
      "Agentic healthcare RAG assistant with document ingestion, pgvector retrieval, medical safety guardrails, faithfulness scoring, evaluation dashboard, and MCP healthcare tools.",
    techStack: ["FastAPI", "LangGraph", "LangChain", "pgvector", "React", "Gemini"],
    features: [
      "Healthcare-focused chat with streamed responses and source citations over uploaded clinical documents",
      "Medical safety guardrails, faithfulness scoring, and human-in-the-loop review workflows",
      "JWT authentication with user-scoped chat sessions and memory isolation",
      "MCP tool server for ICD-10 lookup, drug interaction checks, BMI calculation, and retrieval search",
    ],
    github: "https://github.com/NiranjanS8/curex-healthcare-ai",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/curex-healthcare-ai/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/curex-healthcare-ai/master/README.md",
    ],
    category: "ai",
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
    category: "backend",
  },
  {
    slug: "debugging-intelligence-system",
    title: "Debugging Intelligence System",
    description:
      "AI-powered debugging knowledge base that ingests incidents, builds hybrid retrieval with ChromaDB, generates RAG-based explanations, detects semantic duplicates, and maps root-cause relationships in Neo4j.",
    techStack: ["FastAPI", "LangChain", "ChromaDB", "Neo4j", "Pydantic", "Gemini"],
    features: [
      "LLM-backed incident structuring with fallback rule-based extraction and markdown knowledge pages",
      "Hybrid retrieval combining semantic vector search and lexical scoring with filters and reranking",
      "Semantic deduplication detection to identify recurring incidents on ingest",
      "Neo4j knowledge graph modeling relationships between bugs, root causes, technologies, and failure patterns",
    ],
    github: "https://github.com/NiranjanS8/debugging-intelligence-system",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/debugging-intelligence-system/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/debugging-intelligence-system/master/README.md",
    ],
    category: "ai",
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
    category: "backend",
  },
  {
    slug: "text-to-sql-agent",
    title: "Text-to-SQL Agent",
    description:
      "Agentic Text-to-SQL system converting natural-language questions into validated SQL and MongoDB queries with schema-aware RAG, semantic safety guardrails, Redis caching, and an evaluation harness.",
    techStack: ["FastAPI", "LangChain", "Mistral", "Redis", "SQLite", "PostgreSQL", "MongoDB"],
    features: [
      "Schema-aware RAG pipeline with business-rule retrieval and live domain-value grounding",
      "Semantic safety guardrails blocking unsafe execution, ambiguous queries, and sensitive-data exposure",
      "Multi-database support for SQLite, PostgreSQL, and MongoDB with dialect-aware generation",
      "Evaluation harness measuring SQL validity, execution success, row-count match, and latency",
    ],
    github: "https://github.com/NiranjanS8/text-to-sql-agent",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/text-to-sql-agent/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/text-to-sql-agent/master/README.md",
    ],
    category: "ai",
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
    category: "backend",
  },
  {
    slug: "agentic-research-assistant",
    title: "Agentic Research Assistant",
    description:
      "Multi-stage research agent with Tavily web search, source quality scoring, citation-aware Markdown reports, critic feedback loops, streaming pipeline updates, and SQLite research history.",
    techStack: ["FastAPI", "LangChain", "Mistral", "Tavily", "SQLite"],
    features: [
      "Multi-stage agent pipeline: search, score, scrape, draft, critique, and persist",
      "Source quality scoring using position, trusted domains, snippet depth, and recency signals",
      "Citation-aware report generation with structured extraction and coverage metadata",
      "Streaming pipeline updates with partial failure handling and step-by-step progress",
    ],
    github: "https://github.com/NiranjanS8/agentic-research-assistant",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/agentic-research-assistant/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/agentic-research-assistant/master/README.md",
    ],
    category: "ai",
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
    category: "backend",
  },
  {
    slug: "ai-video-assistant",
    title: "AI Video Assistant",
    description:
      "Agentic meeting analysis system that ingests YouTube or local media, transcribes with Whisper, extracts structured meeting outputs, builds per-meeting RAG with ChromaDB, and supports follow-up Q&A.",
    techStack: ["Streamlit", "LangChain", "Whisper", "ChromaDB", "Gemini"],
    features: [
      "Coordinator agent deciding next pipeline step with retry and clarification support",
      "Multi-language transcription with Whisper (English) and Sarvam AI (Hinglish)",
      "Structured extraction of action items, key decisions, and open questions",
      "Per-meeting ChromaDB vector store with retrieval-augmented follow-up Q&A",
    ],
    github: "https://github.com/NiranjanS8/ai-video-assistant",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/ai-video-assistant/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/ai-video-assistant/master/README.md",
    ],
    category: "ai",
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
    category: "backend",
  },
  {
    slug: "certificate-generation-system",
    title: "Certificate Generation System",
    description:
      "Multi-tenant backend for issuing, managing, and publicly verifying digital certificates with Spring Boot, JWT authentication, PostgreSQL tenant isolation, and OpenPDF-based certificate generation.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "OpenPDF"],
    features: [
      "Multi-tenant architecture with JWT-based tenant isolation and organization-scoped queries",
      "Course management with eligibility rules, recipient enrollment, and signatory assignment",
      "Branded PDF certificate generation with OpenPDF and downloadable asset workflows",
      "Access + refresh token auth with session control and BCrypt password hashing",
    ],
    github: "https://github.com/NiranjanS8/certificate-generation-system",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/certificate-generation-system/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/certificate-generation-system/master/README.md",
    ],
    category: "backend",
  },
  {
    slug: "event-ticket-management-system",
    title: "Event Ticket Management System",
    description:
      "Event ticketing and validation backend with pessimistic locking concurrency, Keycloak OAuth2/JWT auth, PostgreSQL full-text search, Caffeine caching, and ZXing QR code generation.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Keycloak", "Caffeine", "Docker"],
    features: [
      "Pessimistic write locking on ticket purchases to prevent overselling under concurrent requests",
      "Dynamic QR code generation with ZXing and one-time gate scan validation to prevent duplicate entry",
      "OAuth2 and JWT authentication backed by Keycloak with automated local user provisioning",
      "PostgreSQL full-text search for events and Caffeine in-memory caching with automatic eviction",
    ],
    github: "https://github.com/NiranjanS8/event-ticket-management-system",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/event-ticket-management-system/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/event-ticket-management-system/master/README.md",
    ],
    category: "backend",
  },
  {
    slug: "glance-readme-viewer",
    title: "Glance — README Viewer",
    description:
      "Lightweight cross-platform desktop Markdown and README reader with clean GitHub-style formatting, folder browsing, live reload, local Mermaid and KaTeX rendering, and dark/light themes.",
    techStack: ["Electron", "JavaScript", "HTML", "CSS", "Mermaid", "KaTeX"],
    features: [
      "Markdown file and folder browsing with sidebar tree, root README auto-opening, and relative link resolution",
      "GitHub-flavored markdown rendering with local Mermaid diagrams, KaTeX math expressions, and alert callouts",
      "Live reload file watcher, contents navigation rail, folder-wide search, and document history",
      "Sandboxed renderer architecture with strict CSP, DOMPurify sanitization, and native OS theme persistence",
    ],
    github: "https://github.com/NiranjanS8/glance-readme-viewer",
    demo: "https://glance.niranjans.tech/",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/glance-readme-viewer/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/glance-readme-viewer/master/README.md",
    ],
    category: "frontend",
  },
  {
    slug: "sorting-algorithm-visualizer",
    title: "Sorting Algorithm Visualizer",
    description:
      "An interactive frontend application to visualize various sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, etc.) in real time, with speed controls, array size adjustments, and audio feedback.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Real-time step-by-step visualization of sorting algorithms",
      "Interactive controls for speed and array size",
      "Color-coded bars highlighting comparisons, swaps, and sorted elements",
      "Audio synthesis feedback synchronized with operations",
    ],
    github: "https://github.com/NiranjanS8/sorting-algorithm-visualizer",
    demo: "https://sortlab.niranjans.tech/",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/sorting-algorithm-visualizer/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/sorting-algorithm-visualizer/master/README.md",
    ],
    category: "frontend",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "A clean, interactive Tic Tac Toe game featuring player vs player modes, minimax-based unbeatable AI mode, move history log with time-travel functionality, and responsive retro sketch themes.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Local 2-player mode and single-player VS computer mode",
      "Minimax algorithm for an unbeatable computer opponent",
      "Interactive history list allowing players to jump back in time",
      "Fully responsive hand-drawn UI style matching desktop and mobile",
    ],
    github: "https://github.com/NiranjanS8/tic-tac-toe",
    demo: "https://xo.niranjans.tech/",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/tic-tac-toe/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/tic-tac-toe/master/README.md",
    ],
    category: "frontend",
  },
  {
    slug: "college-fest-landing-page",
    title: "College Fest Landing Page",
    description:
      "A modern, responsive landing page for a college national-level technical-cultural fest featuring dynamic event listings, registration modals, interactive schedule tables, and smooth scroll animations.",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    features: [
      "Responsive multi-section layout highlighting cultural and technical events",
      "Registration modals with local storage form persistence",
      "Interactive schedule timetable with dynamic filtering",
      "Smooth parallax and scrolling animation effects",
    ],
    github: "https://github.com/NiranjanS8/college-fest-landing-page",
    demo: "http://clg-fest.niranjans.tech/",
    readmeRawUrls: [
      "https://raw.githubusercontent.com/NiranjanS8/college-fest-landing-page/main/README.md",
      "https://raw.githubusercontent.com/NiranjanS8/college-fest-landing-page/master/README.md",
    ],
    category: "frontend",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAlternatingProjects(projectList: Project[] = projects): Project[] {
  const aiProjects = projectList.filter((project) => project.category === "ai");
  const backendProjects = projectList.filter((project) => project.category === "backend");
  const otherProjects = projectList.filter(
    (project) => project.category !== "ai" && project.category !== "backend"
  );

  const alternated: Project[] = [];
  const maxCategoryCount = Math.max(aiProjects.length, backendProjects.length);

  for (let index = 0; index < maxCategoryCount; index++) {
    if (index < aiProjects.length) {
      alternated.push(aiProjects[index]);
    }
    if (index < backendProjects.length) {
      alternated.push(backendProjects[index]);
    }
  }

  return [...alternated, ...otherProjects];
}
