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

export const skillGroups = [
  {
    title: "AI / ML & Data",
    skills: [
      "PyTorch",
      "HuggingFace Transformers",
      "RAG Pipelines",
      "Transformer Architecture",
      "Fine-tuning",
      "BPE Tokenization",
      "Embeddings",
      "Agents",
      "RoPE",
      "GQA",
      "SwiGLU",
      "Scikit-learn",
      "LangChain",
      "pgvector",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "JWT Auth",
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "Git",
      "GitHub",
      "Docker basics",
      "Postman",
      "Google Colab",
      "VS Code",
      "GitHub Actions",
      "Linux",
      "NPM",
    ],
  },
];

export const projects = [
  {
    name: "Agentic-Catalog",
    repo: "https://github.com/devjuneja789/agentic-catalog",
    stack: ["React", "TypeScript", "Express", "MongoDB", "Gemini", "Razorpay"],
    bullets: [
      "Developed an agentic e-commerce storefront where shoppers search products via natural language; integrated the Gemini API to power an AI buyer agent that autonomously selects items and drives the purchase path",
      "Architected a secure checkout flow utilizing Razorpay Payment Links and webhooks, implementing atomic stock reservation to completely prevent overselling during concurrent API request",
      " Built a full-stack dashboard featuring a chronological audit trail to ensure AI decision visibility, alongside configurable approval gates and fallback mechanisms like automated stock release on payment failure",
    ],
  },
  {
    name: "RLM-Python Recursive Language Models",
    repo: "https://github.com/devjuneja789/rlm-python",
    stack: ["Python", "Gemini API", "REPL Sandbox", "Async"],
    bullets: [
      "Built an independent Python implementation of Recursive Language Models, treating long context as external memory instead of stuffing it into every prompt.",
      "Designed a Python REPL sandbox where a root LLM programmatically inspects, slices, and searches stored context, dispatching recursive sub-LLM calls only on relevant snippets.",
      "Implemented an async engine with Gemini-based root/sub drivers and a Needle-in-a-Haystack benchmark to evaluate long-context retrieval accuracy.",
    ],
  },
  {
    name: "Brainly AI Second Brain",
    repo: "https://brainly-1-pb79.onrender.com/",
    stack: ["MERN", "TypeScript", "Tailwind CSS", "JWT", "pgvector", "OpenAI"],
    bullets: [
      "Built a full-stack AI-powered knowledge base to save YouTube videos, tweets, and links with semantic search via RAG.",
      "Integrated pgvector with PostgreSQL to store and query embeddings, with chunking and contextual retrieval for natural-language answers over saved notes.",
      "Architected a monorepo with React + Tailwind frontend and Node.js + Express backend, including JWT auth, RESTful APIs, and Mongoose schemas.",
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
