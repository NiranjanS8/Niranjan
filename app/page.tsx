"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Send,
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
    skills: ["Java", "SQL", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "GraphQL", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Maven", "Docker", "Postman"],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    skills: [
      "OOP",
      "DBMS",
      "MVC Architecture",
      "Clean Code",
      "Basic System Design",
      "Microservices Fundamentals",
      "Messaging Systems Basics",
    ],
  },
] as const;

const projects = [
  {
    title: "SnapURL",
    description:
      "A full-stack URL shortening platform built around scalable backend patterns, async analytics, secure authentication, and Redis-backed performance features.",
    techStack: ["Spring Boot", "Redis", "PostgreSQL", "RabbitMQ"],
    features: [
      "Short link creation with analytics",
      "JWT auth with refresh flows",
      "Caching, throttling, and async event processing",
    ],
    github: "https://github.com/NiranjanS8/snapurl",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quizze",
    description:
      "A full-stack online quiz platform featuring secure authentication, role-based workflows, analytics, notifications, and backend monitoring.",
    techStack: ["Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    features: [
      "Admin and user quiz workflows",
      "Auto-scoring, leaderboard, and analytics",
      "Caching and async notification flow",
    ],
    github: "https://github.com/NiranjanS8/Quizze",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Whisprly",
    description:
      "A real-time chat platform combining Spring Boot APIs with WebSocket messaging, distributed presence, and token-based authentication flows.",
    techStack: ["Spring Boot", "PostgreSQL", "WebSocket", "React"],
    features: [
      "Direct messages and room chat",
      "Typing, unread, and presence updates",
      "Refresh-token rotation and Google sign-in",
    ],
    github: "https://github.com/NiranjanS8/Whisprly",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Expense Tracker",
    description:
      "A backend-focused personal finance application designed to practice CRUD flows, data modeling, and clean service-layer structure.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JPA"],
    features: ["Expense and category management", "Validation and structured backend layers", "Practical persistence workflows"],
    github: "https://github.com/NiranjanS8/Expense_Tracker",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Video Streaming Application",
    description:
      "A backend-oriented streaming project exploring media delivery, service design, and content-oriented application workflows.",
    techStack: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    features: ["Content delivery workflows", "Backend API design", "Scalable media application foundation"],
    github: "https://github.com/NiranjanS8/video-streaming-application",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Patient Management System",
    description:
      "A structured backend application centered on healthcare-style data management, entity relationships, and operational workflows.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
    features: ["Domain-focused backend modeling", "Entity and DTO handling", "Service and persistence layer practice"],
    github: "https://github.com/NiranjanS8/patient-management-system",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const stats = [
  { icon: FolderGit2, value: 6, suffix: "", label: "Published Projects" },
  { icon: Briefcase, value: 1, suffix: "", label: "Internship Experience" },
  { icon: Layers, value: 4, suffix: "+", label: "Backend Domains Explored" },
  { icon: Award, value: 2026, suffix: "", label: "Final Year Target" },
] as const;

const experience = [
  {
    role: "Backend / Java Intern",
    company: "Internship Experience",
    duration: "Recent Experience",
    responsibilities: [
      "Worked with JDBC and PostgreSQL for database connectivity and CRUD operations",
      "Learned Maven project setup and dependency management",
      "Explored Hibernate concepts including entities, DTOs, and session handling",
      "Strengthened understanding of backend architecture and persistence flow",
    ],
  },
] as const;

const certifications = [
  {
    title: "Scalable API Design",
    issuer: "Learned through SnapURL and Quizze",
    date: "Backend focus",
    credentialId: "Auth, caching, async processing",
    link: "#skills",
  },
  {
    title: "Realtime Systems Practice",
    issuer: "Learned through Whisprly",
    date: "Backend focus",
    credentialId: "WebSocket, presence, token flows",
    link: "#projects",
  },
  {
    title: "Database and ORM Fundamentals",
    issuer: "Internship and project implementation",
    date: "Backend focus",
    credentialId: "PostgreSQL, JPA, Hibernate",
    link: "#about",
  },
  {
    title: "System Design Foundations",
    issuer: "Project architecture exploration",
    date: "Backend focus",
    credentialId: "Redis, Kafka, Docker, layered design",
    link: "#projects",
  },
] as const;

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function useTypedText(text: string, speed = 100) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = window.setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [speed, text]);

  return typedText;
}

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [duration, end, isVisible]);

  return <div ref={ref}>{count}</div>;
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
          className="fixed bottom-8 right-8 z-50 rounded-full bg-accent p-4 text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
            Niranjan S
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-300 transition-colors hover:text-accent"
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
                  className="text-2xl text-gray-300 transition-colors hover:text-accent"
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

export default function Home() {
  const typedText = useTypedText("Java, Spring Boot, PostgreSQL");

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <NavBar />
      <SectionIndicators />
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-2">
              <p className="text-lg text-accent">Hi, I&apos;m</p>
              <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Niranjan S</h1>
              <h2 className="text-3xl font-bold text-gray-400 md:text-4xl">Backend Developer</h2>
              <p className="min-h-[2rem] text-xl text-accent">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-gray-400"
            >
              I build backend applications and APIs with a focus on clean architecture, database design, authentication,
              and scalable development. I enjoy turning ideas into practical, real-world software projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => scrollToSection("projects")} className="primary-button group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="/resume.pdf" className="outline-button">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden items-center justify-center md:flex"
          >
            <div className="relative aspect-square w-full max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-accent/20 to-cyan-500/20 blur-3xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin-slow h-64 w-64 rounded-lg border-2 border-accent/30 rotate-45" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-56 w-56 rounded-full border border-accent/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative px-6 py-24">
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
              "I am a final-year engineering student focused on backend engineering and real-world software development. I enjoy building secure and scalable applications using Java, Spring Boot, PostgreSQL, and related backend technologies.",
              "Through projects and internship experience, I have worked on database integration, API development, ORM concepts, authentication, and clean backend structure.",
              "I am currently looking for opportunities to contribute as a backend developer and grow in production-level engineering while continuously improving my problem-solving and development skills.",
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

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-white/10 bg-card p-6 text-center transition-colors hover:border-accent/50"
            >
              <div className="mb-3 flex justify-center">
                <div className="rounded-lg bg-accent/10 p-3">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="mb-1 text-3xl font-bold text-white">
                <Counter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative bg-white/[0.02] px-6 py-24">
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
                className="group rounded-xl border border-white/10 bg-card p-6 transition-colors hover:border-accent/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-accent/10 p-2 transition-colors group-hover:bg-accent/20">
                    <category.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-accent hover:text-accent"
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
                className="group overflow-hidden rounded-xl border border-white/10 bg-card transition-all hover:border-accent/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)]"
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="space-y-4 p-6">
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
                        <span className="mt-1 text-xs text-accent">â–¸</span>
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
                        Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
                    <p className="mt-2 text-sm text-gray-400 md:mt-0">{item.duration}</p>
                  </div>

                  <ul className="space-y-2">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-2">
                        <span className="mt-1.5 text-accent">-</span>
                        <p className="text-gray-400">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-3">
            <Award className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-bold text-white">Learning Highlights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border border-white/10 bg-card p-6 transition-all hover:border-accent/50"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg bg-accent/10 p-2">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-accent">{cert.title}</h3>
                      <p className="text-sm text-accent">{cert.issuer}</p>
                    </div>
                  </div>
                  <a href={cert.link} className="text-gray-400 transition-colors hover:text-accent">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400">{cert.date}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                    {cert.credentialId}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="relative px-6 py-24">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">Get In Touch</h2>
            <p className="text-lg text-gray-400">
              I&apos;m currently open to backend opportunities, internships, and collaborations. Feel free to reach out and connect.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-6 text-xl font-bold text-white">Let&apos;s Connect</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "niranjansankeshwari9@gmail.com", href: "mailto:niranjansankeshwari9@gmail.com" },
                    { icon: Briefcase, label: "Phone", value: "+91 9606694256", href: "tel:+919606694256" },
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
                      className="group flex items-center gap-4 rounded-lg border border-white/10 bg-card p-4 transition-colors hover:border-accent/50"
                    >
                      <div className="rounded-lg bg-accent/10 p-3 transition-colors group-hover:bg-accent/20">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-card p-6"
            >
              <h3 className="text-xl font-bold text-white">Best Ways To Reach Me</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                I respond fastest on email and LinkedIn. If you&apos;re reaching out about backend roles, internships, or project collaboration, feel free to share the role, team, or problem space you&apos;re hiring for.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Current Focus</p>
                  <p className="mt-2">Java backend development, Spring Boot applications, PostgreSQL, authentication, and scalable API design.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Open To</p>
                  <p className="mt-2">Backend developer roles, internships, entry-level software engineering opportunities, and meaningful technical collaborations.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:niranjansankeshwari9@gmail.com" className="primary-button">
                  <Send className="mr-2 h-4 w-4" />
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="outline-button">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect On LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">(c) 2026 Niranjan S. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-500">Built with Next.js &amp; Tailwind CSS</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/NiranjanS8" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/niranjans8/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:niranjansankeshwari9@gmail.com" className="p-2 text-gray-400 transition-colors hover:text-accent" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}

