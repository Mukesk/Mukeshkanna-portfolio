import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Mukeshkanna | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Mukeshkanna, a Full Stack Developer specializing in React, Next.js, Node.js, and AI integration. Building secure, scalable, and intelligent applications.",
  keywords: [
    "Mukeshkanna",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",
    "AI Integration",
    "Cybersecurity",
    "Portfolio",
    "Frontend",
    "Backend",
    "DevOps",
  ],
  authors: {
    name: "Mukeshkanna",
    url: "https://github.com/Mukesk",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mukeshkanna.vercel.app", // Replace with actual URL
    siteName: "Mukeshkanna Portfolio",
    title: "Mukeshkanna | Full Stack Developer",
    description: "Building secure, scalable, and intelligent full-stack applications.",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Mukeshkanna Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukeshkanna | Full Stack Developer",
    description: "Building secure, scalable, and intelligent full-stack applications.",
    images: ["/og-image.png"],
  },
} as const;
