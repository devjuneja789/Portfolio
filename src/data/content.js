export const profile = {
  name: "Dev Juneja",
  shortName: "Dev",
  tagline: "AI/ML & Full Stack Developer",
  availability: "Open to AI/ML, full-stack, and internship opportunities",
  location: "Faridabad, Haryana, India",
  email: "devjuneja789@gmail.com",
  phone: "+91-9911522188",
  resumeUrl: "https://drive.google.com/file/d/1QF8uPh__QVgt9ZE_uorkLX4LWYhfmNif/view?usp=sharing",
  bio: [
    "I'm a Computer Science student specializing in AI & ML at VIT Bhopal, building applied AI systems end-to-end — from model training to production deployment.",
    "My work spans fine-tuning & alignment (LoRA/DPO pipelines), RAG systems with evaluation and observability, agentic AI with memory and tool use, and long-context research. I build with PyTorch, HuggingFace (Transformers/TRL/PEFT), LangGraph, Node.js, FastAPI, PostgreSQL/pgvector, and MongoDB.",
    "I like going below the API layer: training transformer LLMs from scratch, aligning models with preference optimization, building agents that learn from experience, and turning all of it into usable tools with rigorous evaluation."
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/devjuneja789" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dev-juneja-963ba7240" },
    { label: "X", url: "https://x.com/devjuneja18" },
    { label: "Email", url: "mailto:devjuneja789@gmail.com" },
  ],
};

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "Vellore Institute of Technology (VIT Bhopal)",
    cgpa: "7.75 / 10",
    duration: "Aug 2023 - May 2027",
    status: "Pursuing",
    location: "Bhopal, MP",
  },
];

export const experiences = [
  {
    role: "AI Product Engineering Intern",
    company: "FPA AI Solutions",
    location: "Remote, India",
    period: "Oct 2026 - Present",
    bullets: [
      "Engineered proprietary enterprise AI products and autonomous agentic workflows, architecting modular LLM orchestration pipelines, context-aware prompt templates, and automated evaluation harnesses.",
      "Spearheaded website optimization across SEO, AEO, and GEO by improving semantic entity graphs and schema markup to strengthen brand discovery across Google, Perplexity, and ChatGPT Search.",
    ],
  },
];

export const skillGroups = [
  {
    title: "AI & Agentic Systems",
    skills: [
      "Model Context Protocol (MCP)",
      "Autonomous Agents",
      "Tool / Function Calling",
      "Gemini API",
      "RAG Pipelines",
      "Fine-tuning",
      "Embeddings",
      "Transformers",
      "HuggingFace",
      "LangChain",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Tailwind CSS",
      "Vite",
      "WebSockets",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Databases & ORMs",
    skills: ["MongoDB", "PostgreSQL", "pgvector", "Prisma", "Mongoose"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "PayPal REST APIs",
      "GitHub Actions",
      "Postman",
      "Linux/Bash",
      "VS Code",
      "Google Colab",
    ],
  },
  {
    title: "Concepts & Architecture",
    skills: [
      "SEO/AEO/GEO Optimization",
      "Atomic Stock Locks",
      "Spending Guardrails",
      "Human-in-the-Loop (HITL)",
      "Concurrency Control",
      "REST APIs",
      "Webhooks",
      "JWT Auth",
      "DSA",
    ],
  },
];

export const projects = [
  {
    name: "Agentic Commerce",
    repo: "https://github.com/devjuneja789/agentic-commerce",
    demo: "https://agentic-commerce-1.onrender.com",
    stack: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "PayPal Orders v2",
      "MCP",
      "Gemini 2.5 Flash",
    ],
    bullets: [
      "Developed an autonomous e-commerce storefront where shoppers query inventory in natural language; integrated Gemini 2.5 Flash to parse intent, rank catalog items, and drive safe purchasing with full audit telemetry.",
      "Architected a resilient PayPal Orders v2 checkout pipeline featuring atomic MongoDB stock reservations to prevent overselling during concurrent traffic, complete with webhook reconciliation and post-redirect capture.",
      "Engineered multi-tier spending guardrails with a Human-in-the-Loop review queue ($100 approval gate, $500 hard safety cap) and implemented an MCP (Model Context Protocol) server exposing safe checkout tools to external AI agents.",
    ],
  },
  {
    name: "RLM-Python Recursive Language Models",
    repo: "https://github.com/devjuneja789/rlm-python",
    stack: ["Python", "Gemini API", "REPL Sandbox", "Async Engine"],
    bullets: [
      "Built an independent Python implementation of Recursive Language Models (RLM), treating long context as external memory instead of stuffing it into every prompt.",
      "Designed a Python REPL sandbox where a root LLM programmatically inspects, slices, and searches stored context, dispatching recursive sub-LLM calls (llm_query, llm_query_parallel) only on relevant snippets.",
      "Implemented an async engine with Gemini-based root/sub drivers and a Needle-in-a-Haystack benchmark to evaluate long-context retrieval accuracy.",
    ],
  },
  {
    name: "Brainly AI Second Brain",
    repo: "https://github.com/devjuneja789/brainly",
    demo: "https://brainly-1-pb79.onrender.com",
    stack: ["MERN", "TypeScript", "Tailwind CSS", "JWT", "pgvector", "OpenAI"],
    bullets: [
      "Built a full-stack AI-powered knowledge base to save YouTube videos, tweets, and links — with semantic search via RAG (Retrieval-Augmented Generation).",
      "Integrated pgvector with PostgreSQL to store and query embeddings; content is chunked, embedded, and retrieved contextually to answer natural language queries over saved notes.",
      "Architected a monorepo with React + Tailwind frontend and Node.js + Express backend; implemented JWT auth, RESTful APIs, and Mongoose schemas.",
    ],
  },
  {
    name: "MiniLLM",
    repo: "https://github.com/devjuneja789/MiniLLM",
    stack: ["Python", "PyTorch", "BPE Tokenizer", "Google Colab"],
    bullets: [
      "Built a miniature transformer LLM from scratch in PyTorch and trained it on Shakespeare text using a Google Colab T4 GPU.",
      "Implemented RoPE positional encoding, Grouped Query Attention, SwiGLU activations, and RMSNorm in a LLaMA-style architecture.",
      "Engineered a custom Byte Pair Encoding tokenizer and diagnosed corpus-size limitations that were hurting generation quality.",
    ],
  },
];

export const involvement = [
  {
    role: "Technical Team Lead",
    org: "Data Science Club, VIT Bhopal",
    location: "Bhopal, MP",
    period: "Aug 2025 - Jul 2026",
    bullets: [
      "Leading the technical wing of the club and mentoring junior members on ML/DL concepts and project development.",
      "Organising workshops, hands-on sessions, and club projects to build a stronger data science learning community.",
    ],
  },
  {
    role: "Technical Team Member",
    org: "Data Science Club, VIT Bhopal",
    location: "Bhopal, MP",
    period: "Aug 2024 - Jul 2025",
    bullets: [
      "Contributed to club technical initiatives, assisted with event planning, and collaborated on internal ML projects.",
    ],
  },
];
