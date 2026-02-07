import { FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 60,
    height: 60,
  },
] as const;

export const SOCIALS = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/mukeshkanna_k21/",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mukeshkanna-k",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Mukesk",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 60,
    height: 60,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 30,
    height: 40,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 50,
    height: 60,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 60,
    height: 60,
  },

  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 40,
    height: 60,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 60,
    height: 60,
  },

] as const;

export const DEVOPS_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Kubernetes",
    image: "go.png", // Placeholder using Go
    width: 60,
    height: 60,
  },
  {
    skill_name: "AWS",
    image: "docker.png", // Placeholder
    width: 60,
    height: 60,
  },
  {
    skill_name: "Jenkins",
    image: "prisma.png", // Placeholder
    width: 60,
    height: 60,
  }
] as const;

export const AI_SKILL = [
  {
    skill_name: "Python",
    image: "js.png", // Placeholder
    width: 60,
    height: 60,
  },
  {
    skill_name: "TensorFlow",
    image: "ts.png", // Placeholder
    width: 60,
    height: 60,
  },
  {
    skill_name: "OpenAI",
    image: "next.png", // Placeholder
    width: 60,
    height: 60,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Vulnexa - Web Vulnerability Scanner",
    description: "A security tool designed to detect common web vulnerabilities like XSS and SQL Injection. Features automated scanning logic and report generation, built to demonstrate OWASP Top 10 security practices.",
    image: "/projects/cybershield-project.webp", // Using cybershield image as it fits the security theme
    link: "https://github.com/Mukesk/Vulnexa", // Assuming GitHub link, will use profile as fallback if unknown
    github: "https://github.com/Mukesk/Vulnexa",
    technologies: ["Python", "Security", "Automation", "OWASP"],
    category: "Security",
  },
  {
    title: "XClone - Social Media Application",
    description: "A full-stack social media platform featuring JWT authentication, post creation, media uploads, and secure REST APIs. Built with React, Node.js, Express, and MongoDB.",
    image: "/projects/xclone-project.webp",
    link: "https://xclone-chi.vercel.app/",
    github: "https://github.com/Mukesk/xclone",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full-Stack",
  },
  {
    title: "BiteMe - Food Delivery Platform",
    description: "A comprehensive food ordering platform with restaurant listings, dynamic cart system, and secure payment gateway integration. Focuses on responsive UI and secure backend architecture.",
    image: "/projects/bitme.webp",
    link: "https://swiggy-clone-psi-liard.vercel.app/",
    github: "https://github.com/Mukesk/SwiggyClone",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    category: "Full-Stack",
  },
] as const;

export const GITHUB_PORTFOLIO = {
  title: "Want to see more of my work?",
  description: "Explore my complete collection of projects, contributions, and experiments on GitHub. From web applications to cybersecurity tools, discover the full scope of my development journey.",
  buttonText: "View All Projects on GitHub",
  link: "https://github.com/Mukesk/",
  stats: {
    repositories: "12+ Repositories",
    followers: "4+ Followers",
    contributions: "Active Contributor"
  },
  highlights: [
    "Full-Stack Web Applications",
    "Cybersecurity & Ethical Hacking Tools",
    "Mobile & Cross-Platform Development",
    "API Development & Integration",
    "Educational Projects & Demos"
  ]
} as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Mukesk",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/mukeshkanna-k",
      },
    ],
  },
  {
    title: "About",
    data: [

      {
        name: "Contact Me",
        icon: null,
        link: "mailto:mukeshkanna.k2005@gmail.com",
      },
    ],
  },
] as const;

export const AWARDS = [
  {
    title: "Amrita Cyber Nation CTF 2025",
    organization: "Amrita School of Computing",
    year: "2025",
    description: "Actively participated in the ACN Capture The Flag (CTF) competition, showcasing cybersecurity skills.",
    image: "/certificates/acn-ctf-2025.jpg",
    link: "/certificates/awards/sih-final.pdf", // Using SIH as placeholder if ACN PDF missing
    category: "Award"
  },
  {
    title: "INFYRA 2024 Symposium",
    organization: "Sairam Institute of Technology",
    year: "2024",
    description: "Certificate of Appreciation for contributions at INFYRA 2024 National-Level Tech Fest Symposium.",
    image: "/certificates/infyra-2024.jpg",
    link: "/certificates/awards/infyra-symposium.pdf",
    category: "Award"
  },
  {
    title: "Invente '24 – Impromptu Event",
    organization: "SSN College of Engineering",
    year: "2024",
    description: "Secured placement in the Impromptu event at Invente '24.",
    image: "/certificates/invente-24-impromptu.jpg",
    link: "/certificates/awards/invente-impromptu.pdf",
    category: "Award"
  },
  {
    title: "Invente '24 – Sketch Scale Event",
    organization: "SSN College of Engineering",
    year: "2024",
    description: "Achieved placement in the Sketch Scale event at Invente '24.",
    image: "/certificates/invente-24-sketch-scale.jpg",
    link: "/certificates/awards/invente-sketch.pdf",
    category: "Award"
  },
  {
    title: "Blockathon '24",
    organization: "Velammal Engineering College",
    year: "2024",
    description: "Participated in Blockathon '24 organized by Hyperledger India Chapter.",
    image: "/certificates/blockathon-24.jpg",
    link: "/certificates/awards/blockathon.pdf",
    category: "Award"
  },
  {
    title: "Akira Ransomware Research",
    organization: "Independent",
    year: "2025",
    description: "Research and analysis of Akira Ransomware.",
    image: "/certificates/awards/akira-preview.jpeg",
    link: "/certificates/awards/akira.pdf",
    category: "Award"
  }
] as const;

export const COURSES = [
  {
    title: "Ethical Hacking",
    platform: "GUVI",
    year: "2024",
    description: "Comprehensive training in ethical hacking methodologies.",
    image: "/certificates/courses/guvi-ethical-hacking.png",
    link: "/certificates/courses/guvi-ethical-hacking.png",
    category: "Course"
  },
  {
    title: "DevOps Fundamentals",
    platform: "Coursera",
    year: "2024",
    description: "Foundational knowledge of DevOps practices and CI/CD.",
    image: "/certificates/courses/coursera-devops-preview.jpeg",
    link: "/certificates/courses/coursera-devops.pdf",
    category: "Course"
  },
  {
    title: "IBM Design Thinking",
    platform: "IBM",
    year: "2026",
    description: "Practitioner Badge for Enterprise Design Thinking.",
    image: "/certificates/courses/ibm-design-preview.jpeg",
    link: "/certificates/courses/ibm-design.pdf",
    category: "Course"
  }
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Awards",
    link: "#awards",
  },
  {
    title: "Blog",
    link: "/blog",
  },
] as const;
