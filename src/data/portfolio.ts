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
  email: "suryanshsharma.dev@gmail.com",
  phone: "+91 98765 43210",
  location: "Roorkee / Uttarakhand, India",
  socials: [
    { name: "GitHub", url: "https://github.com/Suryansh10-ctrl" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "LeetCode", url: "https://leetcode.com/" },
    { name: "Email", url: "mailto:suryanshsharma.dev@gmail.com" },
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
    slug: "studysync",
    title: "StudySync",
    client: "Productivity Suite",
    category: "Full-Stack",
    services: "Full-Stack Architecture / UI Design",
    year: "2025",
    description:
      "A comprehensive student productivity and collaborative learning ecosystem designed to streamline task tracking, academic resources, and group discussions.",
    featuredImage: "/assets/projects/cloudsync-suite/1.jpg",
    images: [
      "/assets/projects/cloudsync-suite/1.jpg",
      "/assets/projects/cloudsync-suite/2.jpg",
      "/assets/projects/cloudsync-suite/3.jpg",
      "/assets/projects/cloudsync-suite/4.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
    isFeatured: true,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
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
    featuredImage: "/assets/projects/coffee-brand/1.jpg",
    images: [
      "/assets/projects/coffee-brand/1.jpg",
      "/assets/projects/coffee-brand/2.jpg",
      "/assets/projects/coffee-brand/3.jpg",
      "/assets/projects/coffee-brand/4.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
    isFeatured: true,
    tags: ["React", "Tailwind CSS", "Modern UI", "Interactive Controls"],
  },
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    client: "Media Streaming",
    category: "Frontend",
    services: "Web Audio / State Management",
    year: "2024",
    description:
      "Dynamic music streaming player UI featuring custom playback controls, playlists, song progress seeking, and clean dark-mode audio visualization.",
    featuredImage: "/assets/projects/smart-speaker/1.jpg",
    images: [
      "/assets/projects/smart-speaker/1.jpg",
      "/assets/projects/smart-speaker/2.jpg",
      "/assets/projects/smart-speaker/3.jpg",
      "/assets/projects/smart-speaker/4.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
    isFeatured: true,
    tags: ["React.js", "Redux Toolkit", "Web Audio API", "Tailwind CSS"],
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
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
    isFeatured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PDF Export"],
  },
  {
    slug: "teamsync",
    title: "TeamSync",
    client: "Collaboration Tool",
    category: "MERN Stack",
    services: "Real-time Messaging / WebSockets",
    year: "2024",
    description:
      "A real-time workspace collaboration application with team channels, instant notifications, kanban sprint boards, and file attachments.",
    featuredImage: "/assets/projects/nourish/1.jpg",
    images: [
      "/assets/projects/nourish/1.jpg",
      "/assets/projects/nourish/2.jpg",
      "/assets/projects/nourish/3.jpg",
      "/assets/projects/nourish/4.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
    isFeatured: false,
    tags: ["MERN Stack", "Socket.io", "Cloudinary", "Express"],
  },
  {
    slug: "leetmetric",
    title: "LeetMetric",
    client: "Developer Analytics",
    category: "Python / AI",
    services: "Data Visualization / REST APIs",
    year: "2025",
    description:
      "A developer statistics dashboard tracking daily LeetCode submissions, problem-solving streaks, topic mastery heatmaps, and ranking progress.",
    featuredImage: "/assets/projects/zenith-wellness/1.jpg",
    images: [
      "/assets/projects/zenith-wellness/1.jpg",
      "/assets/projects/zenith-wellness/2.jpg",
      "/assets/projects/zenith-wellness/3.jpg",
      "/assets/projects/zenith-wellness/4.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
    isFeatured: false,
    tags: ["Python", "FastAPI / Node", "React", "Chart.js"],
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
    featuredImage: "/assets/projects/cloudsync-suite/3.jpg",
    images: [
      "/assets/projects/cloudsync-suite/3.jpg",
      "/assets/projects/cloudsync-suite/4.jpg",
      "/assets/projects/coffee-brand/2.jpg",
      "/assets/projects/smart-speaker/2.jpg",
    ],
    liveSite: "https://github.com/Suryansh10-ctrl",
    github: "https://github.com/Suryansh10-ctrl",
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
    technologies: ["Python", "JavaScript", "React", "Git", "REST APIs"],
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

