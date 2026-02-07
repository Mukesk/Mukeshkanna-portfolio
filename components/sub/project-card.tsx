"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
  category: string;
  onClick?: () => void;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  technologies,
  category,
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#0F0A1E]/80 to-[#1A0E2E]/60 backdrop-blur-lg border border-[#7042f88b] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Category Badge */}
      <div className="absolute top-3 left-3 z-20">
        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full">
          {category}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={src}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-[#2A0E61]/50 text-gray-300 rounded-md border border-[#7042f88b]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 text-center"
          >
            Live Demo
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 py-2 px-4 bg-transparent border border-[#7042f88b] text-gray-300 text-sm font-semibold rounded-lg hover:bg-[#2A0E61]/30 hover:text-white transition-all duration-200 text-center"
          >
            Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
