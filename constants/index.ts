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
    link: "https://leetcode.com/u/mukeshkanna_k21",
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

export const OTHER_SKILL = [
] as const;

export const PROJECTS = [
  {
    title: "🚀 X Clone - Social Media Platform",
    description: "A full-stack Twitter/X clone featuring user authentication, posting tweets, real-time interactions, and modern social media functionalities with a sleek UI.",
    image: "/projects/xclone-project.webp",
    link: "https://xclone-chi.vercel.app/",
    github: "https://github.com/Mukesk/xclone",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    category: "Full-Stack",
  },
  {
    title: "🍽️ Swiggy Clone - Food Delivery Platform",
    description: "A comprehensive food delivery application clone with restaurant browsing, menu selection, cart management, and order placement functionality built with modern web technologies.",
    image: "/projects/bitme.webp",
    link: "https://swiggy-clone-psi-liard.vercel.app/",
    github: "https://github.com/Mukesk/SwiggyClone",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    category: "Full-Stack",
  },
  {
    title: "🛡️ FakeInsta - Phishing Awareness Platform",
    description: "A controlled educational project demonstrating how phishing websites capture credentials — built for cybersecurity awareness and defensive training. Includes fake login page, credential logger, and automation script for lab use only.",
    image: "/projects/cybershield-project.webp",
    link: "https://cybershield-demo.netlify.app/",
    github: "https://github.com/Mukesk/FakeInsta-PhisingSite",
    technologies: ["HTML", "CSS", "PHP", "Python", "Selenium"],
    category: "Security",
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

export const CERTIFICATIONS = [
  {
    title: "React & TypeScript Masterclass",
    provider: "Cyfoxgen",
    description: "Comprehensive course covering React 18, TypeScript, and modern development practices",
    students: "125K+ students",
    duration: "42 hours",
    instructor: "Various Experts",
    rating: 4.8,
    status: "Completed",
    skills: ["React Hooks", "TypeScript", "State Management"],
  },
  {
    title: "Node.js Complete Guide",
    provider: "Guvi",
    description: "Learn Node.js from scratch with Express, MongoDB, and real-world projects",
    students: "89K+ students",
    duration: "35 hours",
    instructor: "Various Experts",
    rating: 4.7,
    status: "Completed",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Advanced CSS & Sass",
    provider: "Frontend Masters",
    description: "Master modern CSS techniques, animations, and responsive design",
    students: "45K+ students",
    duration: "28 hours",
    instructor: "Various Experts",
    rating: 4.9,
    status: "Completed",
    skills: ["CSS Grid", "Flexbox", "Sass"],
  },
  {
    title: "DevOps AWS and Generative AI",
    provider: "AWS Training",
    description: "Advanced DevOps practices with AWS services and AI integration",
    students: "200K+ students",
    duration: "60 hours",
    instructor: "AWS Official",
    rating: 4.6,
    status: "In Progress",
    skills: ["EC2", "S3", "Lambda"],
  },
  {
    title: "React Native Development",
    provider: "edX",
    description: "Introduction to React Native and practical mobile app development",
    students: "500K+ students",
    duration: "50 hours",
    instructor: "Andrew Ng",
    rating: 4.8,
    status: "In Progress",
    skills: ["React Native", "Mobile Development", "Cross Platform"],
  },
  {
    title: "Cybersecurity Fundamentals",
    provider: "Guvi",
    description: "Learn ethical hacking, network security, and penetration testing",
    students: "75K+ students",
    duration: "40 hours",
    instructor: "Various Experts",
    rating: 4.5,
    status: "In Progress",
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing"],
  },
] as const;

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    category: "CTF",
    type: "PARTICIPANT",
    id: "#1",
    title: "Amrita Cyber Nation CTF 2025",
    event: "Amrita School of Computing, Chennai",
    description: "Actively participated in the ACN Capture The Flag (CTF) competition, 4th Edition, showcasing cybersecurity and problem-solving skills.",
    tags: ["Cybersecurity", "CTF", "Amrita Vishwa Vidyapeetham"],
    date: "15–18 September 2025",
    location: "Chennai, India",
    certificateImage: "/certificates/acn-ctf-2025.jpg",
  },
  {
    icon: "💡",
    category: "Tech Fest",
    type: "APPRECIATION",
    id: "#2",
    title: "INFYRA 2024 Symposium",
    event: "Sairam Institute of Technology",
    description: "Recognized with a Certificate of Appreciation for contributions and participation at INFYRA 2024 National-Level Tech Fest Symposium.",
    tags: ["Tech Symposium", "Innovation", "Sairam Institute"],
    date: "24 September 2024",
    location: "Chennai, India",
    certificateImage: "/certificates/infyra-2024.jpg",
  },
  {
    icon: "🎤",
    category: "Hackathon",
    type: "ACHIEVEMENT",
    id: "#3",
    title: "Invente '24 – Impromptu Event",
    event: "SSN College of Engineering & Shiv Nadar University",
    description: "Secured placement in the Impromptu event at Invente '24, a national-level tech fest promoting innovation and quick problem-solving.",
    tags: ["Hackathon", "Innovation", "Tech Fest"],
    date: "27–28 September 2024",
    location: "Chennai, India",
    certificateImage: "/certificates/invente-24-impromptu.jpg",
  },
  {
    icon: "🚀",
    category: "Hackathon",
    type: "PLACEMENT",
    id: "#4",
    title: "Invente '24 – Sketch Scale Event",
    event: "SSN College of Engineering & Shiv Nadar University",
    description: "Achieved placement in the Sketch Scale event at Invente '24, highlighting creativity and technical excellence.",
    tags: ["Hackathon", "Creativity", "National Level"],
    date: "27–28 September 2024",
    location: "Chennai, India",
    certificateImage: "/certificates/invente-24-sketch-scale.jpg",
  },
  {
    icon: "⚡",
    category: "Blockchain Hackathon",
    type: "PARTICIPANT",
    id: "#5",
    title: "Blockathon '24",
    event: "Velammal Engineering College – Hyperledger India Chapter",
    description: "Participated in Blockathon '24 organized by Hyperledger India Chapter Student Society, contributing to blockchain innovation.",
    tags: ["Blockchain", "Hyperledger", "Hackathon"],
    date: "21 August 2024",
    location: "Chennai, India",
    certificateImage: "/certificates/blockathon-24.jpg",
  },
  {
    icon: "🇮🇳",
    category: "Hackathon",
    type: "PARTICIPANT",
    id: "#6",
    title: "Smart India Hackathon 2024 - Internal",
    event: "Government of India Initiative",
    description: "Participated in the Smart India Hackathon 2024 internal selection rounds, contributing innovative solutions to real-world problems identified by government ministries and organizations.",
    tags: ["Smart India Hackathon", "Innovation", "Government Initiative"],
    date: "September 2024",
    location: "India",
    // certificateImage: "/certificates/smart-india-hackathon-2024.jpg", // Certificate not available yet
  },
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
    title: "Achievements",
    link: "#achievements",
  },
] as const;


