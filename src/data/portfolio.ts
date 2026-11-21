export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "Full-Stack" | "Frontend" | "MERN Stack" | "Next.js" | "Python / AI";
  services: string;
  year: string;
  description: string;
  featuredImage: string;
  images: string[];
  liveSite: string;
  github: string;
  isFeatured: boolean;
  tags: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export const personalInfo = {
  name: "Suryansh Sharma",
  headline: "Building Digital Experiences That Matter.",
  tagline: "Full-Stack Developer | MERN Stack | Python",
  shortBio:
    "Passionate Full-Stack Developer and B.Tech student specializing in Artificial Intelligence and Machine Learning at COER University. Turning ideas into scalable, responsive, and meaningful digital products.",
  fullBio: [
    "I'm Suryansh Sharma, a passionate Full-Stack Developer and B.Tech student specializing in Artificial Intelligence and Machine Learning at COER University.",
    "I enjoy building modern, responsive, and user-friendly web applications that solve real-world problems. I work with technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and Python.",
    "I'm constantly learning, exploring new technologies, and turning creative ideas into functional digital experiences. My goal is to build impactful products, collaborate with innovative teams, and grow as a software developer."
  ],
  availability: "AVAILABLE FOR WORK",
  email: "suryanshsharma09.dev@gmail.com",
  phone: "+91 9368 375925",
  location: "Roorkee / Uttarakhand, India",
  socials: [
    { name: "GitHub", url: "https://github.com/Suryansh10-ctrl" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/suryan925a98309sh-sharma-/" },
    { name: "LeetCode", url: "https://leetcode.com/u/suryamsh09/" },
    { name: "Email", url: "mailto:suryanshsharma09.dev@gmail.com" },
  ],
};

export const skillsData = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "SCSS",
    "Framer Motion",
    "Responsive UI/UX",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "REST API Development",
    "JWT & OAuth Authentication",
  ],
  databaseAndTools: [
    "MongoDB",
    "MySQL",
    "Git & GitHub",
    "Redux Toolkit",
    "Axios",
    "Appwrite",
    "Cloudinary",
    "Postman",
  ],
};

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end development of dynamic, scalable web applications with MERN stack, robust backend APIs, secure authentication, and seamless database architectures.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Express"],
  },
  {
    number: "02",
    title: "Business & Portfolio Websites",
    description:
      "Modern, brutalist, or minimalist portfolio and corporate landing experiences with high visual identity, bold typography, and smooth micro-interactions.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
  },
  {
    number: "03",
    title: "Landing Page Development",
    description:
      "Conversion-driven, hyper-responsive landing pages crafted for product launches, marketing funnels, and university events.",
    tags: ["Responsive Design", "Fast Load Speed", "Clean UI"],
  },
  {
    number: "04",
    title: "REST API Integration & Backend",
    description:
      "Architecting clean RESTful services, middleware integrations, third-party API hooks, and database modeling for high performance.",
    tags: ["Node.js", "Express", "Python", "REST", "MongoDB"],
  },
  {
    number: "05",
    title: "Website Redesign & Optimization",
    description:
      "Transforming outdated interfaces into fast, modern, accessible digital web products with optimized Core Web Vitals.",
    tags: ["Performance", "UI/UX Audit", "Mobile Optimization"],
  },
];

export const projectsData: Project[] = [
  {
  slug: "snitch",
  title: "SNITCH",
  client: "E-Commerce Platform",
  category: "Full-Stack",
  services: "Full-Stack Development / E-Commerce Architecture",
  year: "2025",
  description:
    "A modern full-stack e-commerce platform built to deliver a seamless online shopping experience. Features secure authentication with Google OAuth, role-based access control, product browsing, shopping cart management, and Razorpay payment integration, supported by a responsive interface and a scalable MERN architecture.",
  featuredImage: "/assets/projects/snitch/home2.png",
  images: [
    "/assets/projects/snitch/home2.png",
    "/assets/projects/snitch/collection.png",
    "/assets/projects/snitch/trend.png",
    "/assets/projects/snitch/sellerconsole.png",
  ],
  liveSite: "https://snitch-b1zz.onrender.com/",
  github: "https://github.com/Suryansh10-ctrl/Snitch",
  isFeatured: true,
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
    "Razorpay",
    "JWT",
    "Google OAuth",
  ],
  },
  {
    slug: "floweyhues",
    title: "FloweyHues",
    client: "Floweryhues Fragrances",
    category: "Full-Stack",
    services: "E-Commerce Experience / UI Engineering / Product Catalog",
    year: "2026",
    description:
      "A modern, responsive brand showcase and e-commerce web platform for Floweryhues Fragrances, featuring immersive product catalogs, fragrance note explorations, custom order inquiries, and a seamless client shopping experience.",
    featuredImage: "/assets/projects/floweyhues/home1.png",
    images: [
      "/assets/projects/floweyhues/home1.png",
      "/assets/projects/floweyhues/abouts.png",
      "/assets/projects/floweyhues/items.png",
      "/assets/projects/floweyhues/testimonals.png",
    ],
    liveSite: "https://flowery-hues.vercel.app/", 
    github: "https://github.com/Suryansh10-ctrl/Flowery_hues",
    isFeatured: true,
    tags: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "E-Commerce",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
  slug: "ai-arena",
  title: "AI Arena",
  client: "Multi-Model AI Platform",
  category: "Full-Stack",
  services: "AI Orchestration / Multi-LLM Integration / Full-Stack Development",
  year: "2026",
  description:
    "A multi-model AI platform that enables users to compare responses from multiple large language models side by side. Built with a scalable full-stack architecture and LangGraph-powered AI orchestration, it integrates multiple LLM providers, including Gemini, Mistral, and Cohere, to streamline AI model evaluation and deliver a unified interactive experience.",
  featuredImage: "/assets/projects/ai-arena/home3.png",
  images: [
    "/assets/projects/ai-arena/home3.png",
    "/assets/projects/ai-arena/models.png",
    "/assets/projects/ai-arena/points.png",
    "/assets/projects/ai-arena/home3.png",
  ],
  liveSite: "https://github.com/Suryansh10-ctrl/AI-Arena",
  github: "https://github.com/Suryansh10-ctrl/AI-Arena",
  isFeatured: true,
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "LangGraph",
    "Gemini API",
    "Mistral API",
    "Cohere API",
    "REST APIs",
  ],
},
  {
    slug: "resume-builder",
    title: "Resume Builder",
    client: "Career SaaS Platform",
    category: "Next.js",
    services: "AI Integration / Full-Stack Next.js",
    year: "2025",
    description:
      "An intelligent, AI-assisted resume generation tool empowering students and developers to construct ATS-optimized CVs with real-time PDF exports.",
    featuredImage: "/assets/projects/lumina/1.jpg",
    images: [
      "/assets/projects/lumina/1.jpg",
      "/assets/projects/lumina/2.jpg",
      "/assets/projects/lumina/3.jpg",
      "/assets/projects/lumina/4.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl/Resume_Builder",
    github: "https://github.com/Suryansh10-ctrl/Resume_Builder",
    isFeatured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PDF Export"],
  },
  
{
    slug: "razorpay-clone",
    title: "Razorpay Clone",
    client: "Fintech Interface",
    category: "Frontend",
    services: "UI/UX Engineering / Tailwind CSS",
    year: "2025",
    description:
      "A pixel-perfect fintech payment gateway landing experience mimicking Razorpay's modern interface with interactive pricing tables and responsive dashboards.",
    featuredImage: "/assets/projects/razorpay/home4.png",
    images: [
      "/assets/projects/razorpay/home4.png",
      "/assets/projects/razorpay/about1.png",
      "/assets/projects/razorpay/features.png",
      "/assets/projects/razorpay/premium.png",
    ],
    liveSite: "https://github.com/Karanchaudhary350/razorpay-clone",
    github: "https://github.com/Karanchaudhary350/razorpay-clone",
    isFeatured: true,
    tags: ["React", "Tailwind CSS", "Modern UI", "Interactive Controls"],
  },
  {
    slug: "tinycats",
    title: "TinyCats",
    client: "AI-Powered Cat Discovery Platform",
    category: "Full-Stack",
    services: "REST APIs / AI Integration / Backend Development",
    year: "2026",
    description:
      "TinyCats is an AI-powered cat discovery platform that allows users to explore cat breeds, access detailed breed information, and interact with AI-powered features for intelligent cat recommendations. Built with a scalable REST API architecture and Model Context Protocol (MCP) integration to deliver a smarter and more interactive experience.",
    featuredImage: "/assets/projects/tinycats/ho.png",
    images: [
      "/assets/projects/tinycats/ho.png",
      "/assets/projects/tinycats/findcats.png",
      "/assets/projects/tinycats/ai.png",
      "/assets/projects/tinycats/ai.png",
    ],
    liveSite: "",
    github: "https://github.com/Suryansh10-ctrl/TinyCats_",
    isFeatured: true,
    tags: ["Node.js", "Express.js", "TypeScript", "REST APIs", "MCP", "AI Integration"],
  },
  {
    slug: "oorja-2026",
    title: "OORJA 2026",
    client: "COER University",
    category: "Frontend",
    services: "Event Portal / Motion Design",
    year: "2026",
    description:
      "Official university cultural & tech fest web application facilitating student event registrations, schedule timelines, and live announcements.",
    featuredImage: "/assets/projects/oorja/home.png",
    images: [
      "/assets/projects/oorja/home.png",
      "/assets/projects/oorja/about.png",
      "/assets/projects/oorja/events.png",
      "/assets/projects/oorja/team.png",
    ],
    liveSite: "https://suryansh10-ctrl.github.io/oorja_/",
    github: "https://github.com/Suryansh10-ctrl/oorja_",
    isFeatured: false,
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What technologies and frameworks do you work with?",
    answer:
      "I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js with TypeScript, Tailwind CSS, and Python. For databases, I use MongoDB and MySQL, and I manage version control through Git and GitHub.",
  },
  {
    id: 2,
    question: "Are you open to freelance projects or internships?",
    answer:
      "Yes! I'm actively open to freelance web development opportunities, internships, and collaborative software engineering roles where I can contribute to building high-impact products.",
  },
  {
    id: 3,
    question: "What is your typical project development workflow?",
    answer:
      "My process starts with understanding the core problem and requirements, followed by UI/UX wireframing, component-driven frontend architecture, secure backend/API development, thorough testing across devices, and automated deployment.",
  },
  {
    id: 4,
    question: "Can you build both the frontend and backend of an application?",
    answer:
      "Yes, absolutely. As a Full-Stack Developer, I build complete end-to-end solutions—from responsive, interactive user interfaces to scalable REST APIs, database schemas, and authentication flows.",
  },
  {
    id: 5,
    question: "How do you ensure responsiveness and performance?",
    answer:
      "I follow mobile-first responsive design principles with Tailwind CSS, optimize asset compression, utilize Next.js server components and image optimization, and maintain clean semantic HTML.",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance & Open Source",
    period: "2024 - Present",
    description:
      "Designing and implementing scalable full-stack web applications, REST APIs, and modern responsive portfolios for clients and open-source communities.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "AI & Web Development Contributor",
    company: "COER University Tech Community",
    period: "2023 - Present",
    description:
      "Collaborating on university tech projects including the OORJA fest web portal, hackathon submissions, and developer workshops.",
    technologies: ["Next.js", "JavaScript", "TypeScript", "React", "Git", "REST APIs"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "COER University, Roorkee",
    period: "2024 - 2028",
    details:
      "Specializing in AI/ML fundamentals, Data Structures & Algorithms, Object-Oriented Programming (Java/Python), and Database Management Systems.",
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "CBSE Board",
    period: "Completed",
    details: "Physics, Chemistry, and Mathematics (PCM).",
  },
];

