export const profile = {
  name: "Dev Juneja",
  shortName: "Dev",
  tagline: "AI/ML engineer in training and full-stack developer",
  availability: "Open to AI/ML, full-stack, and internship opportunities",
  location: "Faridabad, Haryana, India",
  email: "devjuneja789@gmail.com",
  phone: "+91-9911522188",
  resumeUrl: "https://drive.google.com/file/d/1QF8uPh__QVgt9ZE_uorkLX4LWYhfmNif/view?usp=sharing",
  bio: [
    "I'm a Computer Science student specializing in AI & ML at VIT Bhopal. I build full-stack applications and AI/ML projects, with a focus on RAG, fine-tuning, and transformer models.",
    "My recent projects include LoopSmith, which turns coding-session traces into reviewed instructions for coding agents; RLM-Python, an exploration of working with long documents; and Agentic Catalog, a storefront where a Gemini-powered agent searches products and prepares checkout.",
    "I'm also an AI Product Engineering Intern at FPA AI Solutions, where I work on internal AI products, model workflows, and automated evaluations. I have also helped improve website visibility through structured data and content updates."
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
    name: "LoopSmith",
    repo: "https://github.com/devjuneja789/loopsmith",
    stack: ["Python", "SQLite", "Typer", "pytest", "LLM evaluation"],
    bullets: [
      "Built a Python CLI that imports coding-session traces and finds evidence-backed suggestions for reusable agent instructions.",
      "Added static checks and optional model-based A/B evaluation; proposed changes require human approval before promotion.",
      "Versioned approved instructions with rollback, and added exports for AGENTS.md, memory files, and agent skills.",
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
    name: "Agentic Catalog (Studio Loom)",
    repo: "https://github.com/devjuneja789/agentic-catalog",
    demo: "https://agentic-catalog-1.onrender.com",
    stack: ["React", "TypeScript", "Express", "MongoDB", "Gemini", "Razorpay", "MCP"],
    bullets: [
      "Built a clothing storefront where shoppers can describe what they want in plain language; a Gemini-powered agent searches the catalog and prepares a checkout.",
      "Added MongoDB stock reservations to prevent overselling, plus spending limits that send higher-value orders to a manager for approval.",
      "Integrated Razorpay payment links and webhooks, and added an MCP server so external AI agents can search products and start guarded checkouts.",
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
