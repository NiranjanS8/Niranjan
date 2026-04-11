module.exports = [
"[project]/.next-internal/server/app/projects/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "snapurl",
        title: "SnapURL",
        description: "Scalable URL shortening service built with Spring Boot and Redis, designed to handle high-throughput link generation and fast redirection.",
        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "PostgreSQL",
            "Redis",
            "RabbitMQ"
        ],
        features: [
            "Implemented short URL generation with collision handling",
            "Built JWT-based authentication with refresh token flow",
            "Integrated Redis caching to reduce DB load and improve response time",
            "Designed analytics pipeline for tracking link usage"
        ],
        github: "https://github.com/NiranjanS8/snapurl",
        demo: "https://snapurl.online/",
        readmeRawUrls: [
            "https://raw.githubusercontent.com/NiranjanS8/snapurl/main/README.md",
            "https://raw.githubusercontent.com/NiranjanS8/snapurl/master/README.md"
        ]
    },
    {
        slug: "quizze",
        title: "Quizze",
        description: "Backend-driven quiz platform with real-time scoring, async notifications, and role-based workflows.",
        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "PostgreSQL",
            "Redis",
            "Kafka"
        ],
        features: [
            "Built REST APIs for quiz management and user participation",
            "Implemented role-based access (admin/user)",
            "Designed async notification system using Kafka",
            "Added leaderboard and scoring logic with efficient queries"
        ],
        github: "https://github.com/NiranjanS8/Quizze",
        readmeRawUrls: [
            "https://raw.githubusercontent.com/NiranjanS8/Quizze/main/README.md",
            "https://raw.githubusercontent.com/NiranjanS8/Quizze/master/README.md"
        ]
    },
    {
        slug: "whisprly",
        title: "Whisprly",
        description: "Real-time chat system using Spring Boot and WebSockets with presence tracking and secure authentication.",
        techStack: [
            "Spring Boot",
            "PostgreSQL",
            "WebSocket",
            "React"
        ],
        features: [
            "Implemented WebSocket-based messaging with room support",
            "Built real-time typing and presence indicators",
            "Designed JWT-based auth with refresh tokens",
            "Integrated PostgreSQL for message persistence"
        ],
        github: "https://github.com/NiranjanS8/Whisprly",
        readmeRawUrls: [
            "https://raw.githubusercontent.com/NiranjanS8/Whisprly/main/README.md",
            "https://raw.githubusercontent.com/NiranjanS8/Whisprly/master/README.md"
        ]
    },
    {
        slug: "expense-tracker",
        title: "Expense Tracker",
        description: "Personal finance platform with budgeting, recurring expense automation, async exports, insights, and role-based secure APIs.",
        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "PostgreSQL",
            "JUnit",
            "Mockito",
            "OpenAPI"
        ],
        features: [
            "Built REST APIs for auth, expenses, budgets, insights, and reporting",
            "Implemented JWT auth, validation, rate limiting, and consistent error handling",
            "Added recurring expenses, category rules, and scheduled email reports",
            "Wrote unit and integration tests with JUnit, MockMvc, and Mockito"
        ],
        github: "https://github.com/NiranjanS8/Expense_Tracker",
        readmeRawUrls: [
            "https://raw.githubusercontent.com/NiranjanS8/Expense_Tracker/main/README.md",
            "https://raw.githubusercontent.com/NiranjanS8/Expense_Tracker/master/README.md"
        ]
    },
    {
        slug: "video-streaming-application",
        title: "Video Streaming Application",
        description: "Backend-driven video upload and streaming platform built with Spring Boot, featuring JWT authentication, user-owned media access, async HLS processing, and performance tracking.",
        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "MySQL",
            "FFmpeg",
            "HLS"
        ],
        features: [
            "Implemented JWT auth and protected video management endpoints",
            "Built async FFmpeg processing for 360p, 720p, and 1080p HLS output",
            "Added owner-based access control for video updates and deletes",
            "Tracked upload throughput and processing latency through a metrics API"
        ],
        github: "https://github.com/NiranjanS8/video-streaming-application",
        readmeRawUrls: [
            "https://raw.githubusercontent.com/NiranjanS8/video-streaming-application/main/README.md",
            "https://raw.githubusercontent.com/NiranjanS8/video-streaming-application/master/README.md"
        ]
    },
    {
        slug: "patient-management-system",
        title: "Patient Management System",
        description: "Production-style microservices backend system designed with Spring Boot, featuring secure service-to-service communication, event-driven architecture, and cloud-native deployment.",
        techStack: [
            "Java",
            "Spring Boot",
            "Microservices",
            "Kafka",
            "gRPC",
            "PostgreSQL",
            "Docker",
            "AWS",
            "JWT",
            "Spring Security"
        ],
        features: [
            "Built microservices with REST, gRPC billing, and Kafka event communication",
            "Implemented centralized authentication with Spring Security, JWT, and API Gateway enforcement",
            "Containerized services with Docker and deployed using AWS CDK with LocalStack",
            "Designed PostgreSQL persistence with validation and integration testing via RestAssured"
        ],
        github: "https://github.com/NiranjanS8/patient-management-system",
        readmeRawUrls: [
            "https://raw.githubusercontent.com/NiranjanS8/patient-management-system/main/README.md",
            "https://raw.githubusercontent.com/NiranjanS8/patient-management-system/master/README.md"
        ]
    }
];
function getProjectBySlug(slug) {
    return projects.find((project)=>project.slug === slug);
}
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailsPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-git-2.js [app-rsc] (ecmascript) <export default as FolderGit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-rsc] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const dynamic = "force-dynamic";
async function fetchReadme(urls) {
    for (const url of urls){
        try {
            const response = await fetch(url, {
                cache: "no-store"
            });
            if (response.ok) {
                const text = await response.text();
                if (text.trim()) return text;
            }
        } catch  {
        // Try the next fallback URL.
        }
    }
    return null;
}
function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const elements = [];
    let i = 0;
    let key = 0;
    while(i < lines.length){
        const line = lines[i];
        if (!line.trim()) {
            i += 1;
            continue;
        }
        if (line.startsWith("```")) {
            const codeLines = [];
            i += 1;
            while(i < lines.length && !lines[i].startsWith("```")){
                codeLines.push(lines[i]);
                i += 1;
            }
            i += 1;
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#0f131b] p-4 text-sm text-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: codeLines.join("\n")
                }, void 0, false, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, `code-${key++}`, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this));
            continue;
        }
        if (line.startsWith("# ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-white",
                children: line.slice(2)
            }, `h1-${key++}`, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this));
            i += 1;
            continue;
        }
        if (line.startsWith("## ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "pt-3 text-2xl font-semibold text-white",
                children: line.slice(3)
            }, `h2-${key++}`, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this));
            i += 1;
            continue;
        }
        if (line.startsWith("### ")) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "pt-2 text-xl font-semibold text-white",
                children: line.slice(4)
            }, `h3-${key++}`, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this));
            i += 1;
            continue;
        }
        if (/^[-*]\s+/.test(line)) {
            const items = [];
            while(i < lines.length && /^[-*]\s+/.test(lines[i])){
                items.push(lines[i].replace(/^[-*]\s+/, ""));
                i += 1;
            }
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 pl-1",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "grid grid-cols-[10px_1fr] gap-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-accent/80"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[slug]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "leading-7 text-gray-300",
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[slug]/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${item}-${key++}`, true, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this))
            }, `ul-${key++}`, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this));
            continue;
        }
        const paragraphLines = [];
        while(i < lines.length && lines[i].trim() && !lines[i].startsWith("#") && !lines[i].startsWith("```") && !/^[-*]\s+/.test(lines[i])){
            paragraphLines.push(lines[i].trim());
            i += 1;
        }
        elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "leading-8 text-gray-300",
            children: paragraphLines.join(" ")
        }, `p-${key++}`, false, {
            fileName: "[project]/app/projects/[slug]/page.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this));
    }
    return elements;
}
async function ProjectDetailsPage({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const readme = await fetchReadme(project.readmeRawUrls);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background px-6 py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#projects",
                    className: "text-sm text-accent transition-colors hover:text-white",
                    children: "Back to projects"
                }, void 0, false, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-6 rounded-[2rem] border border-white/[0.05] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 inline-flex rounded-xl bg-accent/10 p-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit2$3e$__["FolderGit2"], {
                                                className: "h-6 w-6 text-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[slug]/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-bold text-white",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 max-w-3xl text-lg leading-8 text-gray-300",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center justify-center rounded-[1rem] border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition-all hover:border-accent/25 hover:bg-white/[0.05]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                "Code"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        project.demo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.demo,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center justify-center rounded-[1rem] border border-accent/30 bg-accent px-4 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                "Live"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap gap-2",
                            children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-sm text-gray-300",
                                    children: tech
                                }, tech, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-white",
                                    children: "README"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: project.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-sm text-accent transition-colors hover:text-white",
                                    children: "Open on GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        readme ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "space-y-5",
                            children: renderMarkdown(readme)
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/[0.05] bg-white/[0.03] p-6 text-gray-300",
                            children: "README could not be loaded automatically right now. You can still view the repository directly from the GitHub button above."
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/projects/[slug]/page.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[slug]/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5757b6f6._.js.map