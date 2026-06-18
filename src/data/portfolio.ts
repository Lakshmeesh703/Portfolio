import {
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  HeartHandshake,
  LayoutGrid,
  Mail,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Lakshmeesh Shet",
  role: "Computer Science and Artificial Intelligence Student",
  location: "Bengaluru, India",
  email: "lakshmeeshshet744@gmail.com",
  phone: "+91 7019362744",
  profileImage: "/profile.png",
  githubProfile: "https://github.com",
  summary:
    "Building polished, production-minded web experiences with full-stack engineering, data analytics, and machine learning. My major domain is AI/ML, with a focus on practical models and intelligent user experiences.",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: Sparkles },
    { label: "GitHub", href: "https://github.com", icon: Code2 },
    { label: "Email", href: "mailto:lakshmeeshshet744@gmail.com", icon: Mail },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "5+", label: "core tech stacks" },
  { value: "4", label: "featured projects" },
  { value: "2", label: "hackathon roles" },
  { value: "1", label: "portfolio focus" },
];

export const highlights = [
  "Full-stack web apps with clean architecture",
  "Machine learning workflows, model evaluation, and AI prototyping",
  "Analytics dashboards and data visualization",
  "Fast, accessible interfaces with thoughtful motion and AI-ready UX",
];

export const skills = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web",
    icon: LayoutGrid,
    items: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Flask", "FastAPI"],
  },
  {
    title: "Databases",
    icon: BriefcaseBusiness,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Data & AI",
    icon: Sparkles,
    items: ["Data Analytics", "Data Visualization", "Power BI", "Pandas", "NumPy", "Matplotlib", "Chart.js"],
  },
  {
    title: "Machine Learning",
    icon: Rocket,
    items: ["Scikit-learn", "TensorFlow", "Model Optimization", "Chatbot Development", "Search Algorithms"],
  },
  {
    title: "Tools",
    icon: HeartHandshake,
    items: ["Git", "GitHub", "VS Code", "Linux", "Jupyter Notebook", "Google Colab", "Docker", "Postman", "Azure Pipelines", "Render"],
  },
];

export type ProjectCategory = "All" | "Web" | "AI/ML" | "Data";

export type Project = {
  title: string;
  category: ProjectCategory;
  period: string;
  description: string;
  impact: string[];
  stack: string[];
  href: string;
};

export const projectFilters: ProjectCategory[] = ["All", "Web", "AI/ML", "Data"];

export const projects: Project[] = [
  {
    title: "College Event Management System",
    category: "Data",
    period: "Apr 2026 - May 2026",
    description:
      "A full-stack event platform for student activities, competition handling, and role-based registration workflows.",
    impact: [
      "Built relational Supabase-backed data flows for event, team, and user records.",
      "Implemented role-based authentication for Admin, Organizer, Student, and Public users.",
      "Added analytics pages with Chart.js and deployed on Render with environment-based configuration.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Chart.js", "Render"],
    href: "https://github.com/Lakshmeesh703/College_Event_Management",
  },
  {
    title: "Multi-Vendor E-Commerce Platform",
    category: "Web",
    period: "May 2026 - Present",
    description:
      "A scalable storefront with vendor management, unified checkout, cart, order tracking, and dashboards.",
    impact: [
      "Designed normalized PostgreSQL schema for users, orders, payments, and vendor operations.",
      "Integrated MongoDB for dynamic product content and flexible catalog updates.",
      "Focused on transactional ordering and maintainable Flask routing.",
    ],
    stack: ["Flask", "PostgreSQL", "MongoDB", "React", "TypeScript"],
    href: "https://github.com/Lakshmeesh703/Multi-Vendor-E-Commerce",
  },
  {
    title: "AI Campus Map - Interactive Navigation System",
    category: "AI/ML",
    period: "Sep 2025 - Present",
    description:
      "An AI-assisted campus map with chatbot navigation and search-driven discovery for university buildings and facilities.",
    impact: [
      "Implemented search algorithms and conversational UX to help users locate departments and services quickly.",
      "Connected Python backend services to a lightweight frontend for realtime responses.",
      "Balanced map rendering, speed, and clarity for practical on-campus use.",
    ],
    stack: ["Python", "FastAPI", "Search Algorithms", "Chatbot", "React"],
    href: "https://github.com/Lakshmeesh703/CU_PathFinder",
  },
  {
    title: "FIFA World Cup 2026 ML Prediction Model",
    category: "AI/ML",
    period: "Oct 2025 - Nov 2025",
    description:
      "A machine learning pipeline to predict FIFA World Cup 2026 match outcomes using historical statistics and player performance data.",
    impact: [
      "Processed feature sets with Pandas and NumPy for model readiness.",
      "Evaluated classifiers using cross-validation and performance reporting.",
      "Improved interpretability by ranking the most influential features.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML Evaluation"],
    href: "https://github.com/Lakshmeesh703/Predicting-FIFA-World-Cup-2026",
  },
];

export const experiences = [
  {
    title: "AI/Healthcare Hackathon Participant",
    organization: "Chanakya University Srujana 2025 Inter-College Hackathon",
    period: "Sep 2025",
    description:
      "Collaborated in a competitive inter-college hackathon and delivered a functional AI healthcare proof of concept under time constraints. Designed an intelligent automation system for workflow optimization and practical healthcare support.",
    points: [
      "Ranked in top tier at Srujana 2025 hackathon for AI/Healthcare category.",
      "Built an automated healthcare workflow system with real-time data processing.",
      "Integrated intelligent task automation with practical user-facing interfaces.",
      "Presented the prototype with focus on usability and immediate impact.",
    ],
    icon: BriefcaseBusiness,
    stack: ["Python", "Flask", "Open Map API", "JavaScript", "NLP"],
    href: "https://github.com/Lakshmeesh703/Predicting-FIFA-World-Cup-2026",
  },
  {
    title: "BharathAI Chant Engine",
    organization: "Chanakya University Samyuk 2026 Inter-College Hackathon",
    period: "Mar 2026 - Apr 2026",
    description:
      "Built an AI-powered Sanskrit chant application with neural TTS, rhythm control, pronunciation feedback, and a React/TypeScript front end as hackathon submission. Integrated FastAPI backend with TensorFlow for real-time synthesis.",
    points: [
      "Submitted to Samyuk 2026 hackathon with production-ready demo.",
      "Implemented neural text-to-speech with rhythm and tempo control.",
      "Built pronunciation evaluation and interactive feedback system.",
      "Demonstrated full tech stack integration for judges evaluation.",
    ],
    icon: Sparkles,
    stack: ["React", "Vite", "Python", "TypeScript", "FastAPI", "TensorFlow", "Neural TTS", "OpenAI APIs"],
    href: "https://github.com/Lakshmeesh703/Samyuti-2026",
    demoVideo: "https://drive.google.com/file/d/1Wc93o1exC4du50YNzjA_6W9M_PLEuqZb/view?usp=sharing",
  },
  {
    title: "AI Focus Group Member",
    organization: "Chanakya University",
    period: "2025 - Present",
    description:
      "Selected into an exclusive AI Focus Group for collaborative problem solving, evaluation, and experimentation.",
    points: [
      "Selected after competitive screening and interviews.",
      "Participated in collaborative AI discussions, demos, and experimentation.",
    ],
    icon: Users,
  },
  {
    title: "EV Focus Group Member",
    organization: "Chanakya University",
    period: "2025 - Present",
    description:
      "Selected as one of the students in the EV Focus Group to contribute to discussions and learning around electric mobility and applied innovation.",
    points: [
      "Joined the EV group as a selected member after internal evaluation.",
      "Contributed to group activities focused on practical electric vehicle concepts and problem solving.",
    ],
    icon: HeartHandshake,
  },
];

export const testimonials = [
  {
    quote:
      "Approaches problems with a strong product mindset, turning technical ideas into structured demos that are easy to evaluate.",
    author: "Hackathon collaborator",
    role: "Cross-functional teammate",
    icon: HeartHandshake,
  },
  {
    quote:
      "Combines frontend polish with data discipline, which makes the output feel credible and presentation-ready.",
    author: "Project reviewer",
    role: "Academic mentor",
    icon: Award,
  },
  {
    quote:
      "Moves comfortably between AI, backend, and UI details without losing sight of clarity or maintainability.",
    author: "Team member",
    role: "Build partner",
    icon: GraduationCap,
  },
];

export const education = [
  {
    school: "Chanakya University",
    degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
    grade: "CGPA: 7.94",
    place: "Bengaluru, India",
    period: "Dec 2024 - May 2028",
  },
  {
    school: "Excellent PU College Sunnari",
    degree: "Higher Secondary Certificate (PCMB)",
    grade: "92.5%",
    place: "Udupi, India",
    period: "June 2022 - July 2024",
  },
  {
    school: "MEARDS Chandana High School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    grade: "92.8%",
    place: "Sirsi, India",
    period: "June 2020 - Apr 2022",
  },
];

export const courseWork = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Data Analytics & Visualization",
  "Mathematical Optimization",
  "ML Optimization",
  "Azure Pipelines",
  "Power BI",
  "Introduction to Artificial Intelligence & Machine Learning",
  "Object-Oriented Programming",
  "Discrete Mathematics",
  "Theory of Computation",
  "Microcontroller and Applications",
];
