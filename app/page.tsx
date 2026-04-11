"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  AtSign,
  ArrowRight,
  ArrowUp,
  Briefcase,
  Boxes,
  Cloud,
  Code2,
  Copyright,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Server,
  Phone,
  Send,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

const skillCategories = [
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
    icon: Wrench,
    skills: ["AWS (EC2, S3, RDS, IAM)", "Docker", "Docker Compose"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Maven", "Postman"],
  },
  {
    title: "Testing",
    icon: Wrench,
    skills: ["JUnit", "Mockito"],
  },
] as const;

const projects = [
  {
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
  },
  {
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
    demo: "",
  },
  {
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
    demo: "",
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance platform with budgeting, recurring expense automation, async exports, insights, and role-based secure APIs.",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JUnit", "Mockito", "OpenAPI"],
    features: [
      "Built REST APIs for auth, expenses, categories, budgets, goals, insights, and reporting",
      "Implemented JWT-based authentication, validation, rate limiting, and consistent error handling",
      "Added recurring expense generation, smart category rules, and scheduled email report workflows",
      "Designed async export jobs, observability hooks, and modular command/query service separation",
      "Wrote integration and unit tests using JUnit, MockMvc, and Mockito",
    ],
    github: "https://github.com/NiranjanS8/Expense_Tracker",
    demo: "",
  },
  {
    title: "Video Streaming Application",
    description:
      "Backend-driven video upload and streaming platform built with Spring Boot, featuring JWT authentication, user-owned media access, async HLS processing, and performance tracking.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "FFmpeg", "HLS"],
    features: [
      "Implemented JWT-based authentication and protected video management endpoints",
      "Built async video processing pipeline using FFmpeg for HLS output in 360p, 720p, and 1080p",
      "Added owner-based access control for uploaded videos and delete operations",
      "Tracked upload throughput, processing latency, and realtime factor through a metrics summary API",
    ],
    github: "https://github.com/NiranjanS8/video-streaming-application",
    demo: "",
  },
  {
    title: "Patient Management System",
    description:
      "Production-style microservices backend system designed with Spring Boot, featuring secure service-to-service communication, event-driven architecture, and cloud-native deployment.",
    techStack: ["Java", "Spring Boot", "Microservices", "Kafka", "gRPC", "PostgreSQL", "Docker", "AWS", "JWT", "Spring Security"],
    features: [
      "Built microservices architecture with REST, gRPC (low-latency billing), and Kafka for event-driven communication",
      "Implemented centralized authentication using Spring Security + JWT with API Gateway enforcement",
      "Containerized services with Docker and deployed using AWS CDK (IaC) with LocalStack for cloud simulation",
      "Designed PostgreSQL-based persistence with validation and integration testing using RestAssured",
    ],
    github: "https://github.com/NiranjanS8/patient-management-system",
    demo: "",
  },
] as const;

const experience = [
  {
    role: "Java Developer",
    company: "Dyashin Technosoft",
    duration: "",
    responsibilities: [
      "Built and deployed a Java-based backend application using Spring Boot, implementing REST APIs for user authentication and data management.",
      "Designed and integrated PostgreSQL database schemas, optimizing queries to improve data retrieval performance.",
      "Implemented core features using OOP principles, ensuring modular, reusable, and maintainable code structure.",
      "Used Git for version control, managing code changes and collaborating through branches and pull requests.",
      "Tested and debugged applications using tools like Postman and logging techniques, reducing errors and improving stability.",
    ],
  },
] as const;

const heroTechStack = [
  { label: "Java", icon: Code2 },
  { label: "Spring Boot", icon: Server },
  { label: "Spring Security", icon: ShieldCheck },
  { label: "PostgreSQL", icon: Database },
  { label: "Redis", icon: Boxes },
  { label: "AWS", icon: Cloud },
] as const;

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-accent" style={{ scaleX }} />;
}

function SectionIndicators() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button key={section.id} onClick={() => scrollToSection(section.id)} className="group flex items-center gap-3">
            <span
              className={`text-right text-xs transition-opacity ${
                activeSection === section.id ? "text-accent opacity-100" : "text-gray-400 opacity-0 group-hover:opacity-100"
              }`}
            >
              {section.label}
            </span>
            <div
              className={`rounded-full transition-all ${
                activeSection === section.id ? "h-2 w-8 bg-accent" : "h-2 w-2 bg-gray-600 group-hover:bg-accent/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-accent p-3.5 text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionTracking = () => {
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleSectionTracking);
    handleSectionTracking();
    return () => window.removeEventListener("scroll", handleSectionTracking);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollToSection("home")} className="text-xl font-bold text-white transition-colors hover:text-accent">
            Niranjan
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors hover:text-accent ${
                  activeSection === item.id ? "text-accent" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="z-50 text-white md:hidden" onClick={() => setMobileMenuOpen((value) => !value)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {sections.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-2xl transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function SocialLinks() {
  const links = useMemo(
    () => [
      { href: "https://github.com/NiranjanS8", label: "GitHub", icon: Github },
      { href: "https://www.linkedin.com/in/niranjans8/", label: "LinkedIn", icon: Linkedin },
      { href: "mailto:niranjansankeshwari9@gmail.com", label: "Email", icon: Mail },
    ],
    [],
  );

  return (
    <div className="flex gap-4 pt-4">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-accent hover:bg-accent/20"
          aria-label={item.label}
        >
          <item.icon className="h-5 w-5 text-gray-300" />
        </a>
      ))}
    </div>
  );
}

function SectionDivider() {
  return (
    <section aria-hidden="true" className="px-6">
      <div className="mx-auto max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <NavBar />
      <SectionIndicators />
      <section id="home" className="relative flex min-h-[82vh] items-center overflow-hidden px-6 pb-16 pt-20 md:min-h-[88vh]">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl justify-center">
          <div className="space-y-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-2">
              <p className="text-lg text-accent">Hi, I&apos;m</p>
              <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Niranjan</h1>
              <h2 className="text-3xl font-bold text-gray-400 md:text-4xl">Backend Developer</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400"
            >
              I build backend applications and APIs with a focus on clean architecture, database design, authentication,
              and scalable development. I enjoy turning ideas into practical, real-world software projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button onClick={() => scrollToSection("projects")} className="primary-button group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="/Niranjans_resume.pdf" className="outline-button">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <div className="flex justify-center">
                <SocialLinks />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 overflow-hidden">
          <div className="hero-marquee">
            <div className="hero-marquee-track">
              {[...heroTechStack, ...heroTechStack].map((item, index) => (
                <div key={`${item.label}-${index}`} className="hero-tech-pill">
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/[0.06] bg-white/[0.02] px-6 pb-20 pt-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-3"
          >
            <Code2 className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "I am a final-year engineering student focused on backend development and building real-world software systems. I enjoy working with Java, Spring Boot, and PostgreSQL to design clean, scalable APIs and backend architectures.",
              "Through hands-on projects and internship experience, I have worked on database integration, authentication, ORM frameworks like Hibernate, and backend application structure. I focus on writing clean, maintainable code and understanding how systems work beyond just implementation.",
              "Currently, I am looking for backend developer roles and internships where I can contribute to real-world products, improve my system design skills, and grow as a software engineer.",
            ].map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="text-lg leading-relaxed text-gray-400"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="skills" className="relative bg-white/[0.02] px-6 pb-20 pt-14">
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-3"
          >
            <Layers className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-bold text-white">Skills &amp; Technologies</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[1.5rem] border border-white/[0.07] bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-accent/10 p-3 transition-all duration-300 group-hover:bg-accent/15 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]">
                    <category.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-sm text-gray-300 transition-all duration-200 hover:border-accent/30 hover:bg-white/[0.08] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="projects" className="relative px-6 py-24">
        <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-3"
          >
            <FolderGit2 className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[1.5rem] border border-white/[0.06] bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.1] hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <FolderGit2 className="h-8 w-8 text-accent" />
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                        <Github className="h-5 w-5" />
                      </a>
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-accent">{project.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1 pt-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span className="mt-1 text-xs text-accent">+</span>
                        <p className="text-xs text-gray-400">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-accent/50 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm text-white transition-colors hover:bg-accent/90"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="experience" className="relative bg-white/[0.02] px-6 py-24">
        <div className="absolute bottom-0 right-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-3"
          >
            <Briefcase className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-bold text-white">Experience</h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative border-l-2 border-gradient pl-8 pb-8 last:pb-0"
                style={{ borderImage: "linear-gradient(to bottom, #3B82F6, rgba(59, 130, 246, 0.2)) 1" }}
              >
                <div className="absolute -left-[9px] top-0">
                  <div className="relative h-4 w-4 rounded-full border-4 border-background bg-accent">
                    <div className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping" />
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-card p-6 transition-all hover:border-accent/50">
                  <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent">{item.role}</h3>
                      <p className="text-accent">{item.company}</p>
                    </div>
                    {item.duration ? <p className="mt-2 text-sm text-gray-400 md:mt-0">{item.duration}</p> : null}
                  </div>

                  <ul className="space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="grid grid-cols-[12px_1fr] items-start gap-x-3">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-accent/80" />
                        <p className="leading-7 text-gray-400">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="contact" className="relative px-6 py-24">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.16em] text-accent">
                Available for opportunities
              </span>
            </div>
            <h2 className="mb-3 text-4xl font-bold text-white">Get In Touch</h2>
            <p className="mx-auto max-w-xl text-base leading-7 text-gray-400 md:text-lg">
              Open to backend roles, internships, and collaborations.
              <span className="block">Feel free to reach out - I usually respond quickly.</span>
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex h-full"
            >
              <div className="flex h-full w-full flex-col rounded-2xl border border-white/[0.04] bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <h3 className="mb-6 text-xl font-bold text-white">Let&apos;s Connect</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "niranjansankeshwari9@gmail.com", href: "mailto:niranjansankeshwari9@gmail.com" },
                    { icon: Github, label: "GitHub", value: "github.com/NiranjanS8", href: "https://github.com/NiranjanS8" },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "linkedin.com/in/niranjans8",
                      href: "https://www.linkedin.com/in/niranjans8/",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-white/[0.045] bg-white/[0.045] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
                    >
                      <div className="rounded-lg bg-accent/10 p-3 transition-all duration-200 group-hover:bg-accent/15">
                        <item.icon className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-105" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="truncate text-white">{item.value}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-500 transition-colors duration-200 group-hover:text-accent" />
                    </a>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.03] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-white/[0.04] p-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-gray-500">Phone</p>
                        <a href="tel:+919606694256" className="mt-1 inline-block text-sm text-gray-400 transition-colors hover:text-white">
                          +91 9606694256
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.04] bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-white">Best Ways To Reach Me</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Email and LinkedIn are the fastest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Open to backend roles and internships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Happy to discuss projects and collaborations</span>
                </li>
              </ul>

              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <section className="rounded-xl border border-white/[0.045] bg-white/[0.045] p-4 transition-all duration-200 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-accent">Open To</h4>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span>Backend developer roles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span>Internships and entry-level opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span>Meaningful technical collaborations</span>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a href="mailto:niranjansankeshwari9@gmail.com" className="primary-button shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
                  <Send className="mr-2 h-4 w-4" />
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="outline-button">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <SectionDivider />

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-2 text-sm text-gray-400">
              <Copyright className="h-4 w-4" />
              <span>2026 Niranjan. All rights reserved.</span>
            </p>
          </div>

          <div className="flex items-center gap-4 md:pr-20">
            <a href="https://github.com/NiranjanS8" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:niranjansankeshwari9@gmail.com" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="Email">
              <AtSign className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}

