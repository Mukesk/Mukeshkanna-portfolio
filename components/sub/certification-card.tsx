"use client";

import { motion } from "framer-motion";

type CertificationCardProps = {
  title: string;
  provider: string;
  description: string;
  students: string;
  duration: string;
  instructor: string;
  rating: number;
  status: string;
  skills: string[];
};

export const CertificationCard = ({
  title,
  provider,
  description,
  students,
  duration,
  instructor,
  rating,
  status,
  skills,
}: CertificationCardProps) => {
  const isCompleted = status === "Completed";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-br from-[#0F0A1E]/90 to-[#1A0E2E]/70 backdrop-blur-lg border border-[#7042f88b] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6 border-b border-[#7042f88b]/30">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-purple-400 font-semibold">
              {provider}
            </p>
          </div>
          
          {/* Status Badge */}
          <div className="ml-3">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              isCompleted 
                ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}>
              {status}
            </span>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>

        {/* Course Stats */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {students}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-yellow-400 font-medium">{rating}</span>
          </div>
        </div>

        <div className="text-xs text-gray-400">
          by {instructor}
        </div>
      </div>

      {/* Skills */}
      <div className="p-6 border-b border-[#7042f88b]/30">
        <h4 className="text-sm font-semibold text-gray-200 mb-3">Skills Learned</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-[#2A0E61]/50 text-gray-300 rounded-full border border-[#7042f88b]/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
};