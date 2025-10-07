"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CertificateModal } from "./CertificateModal";

type AchievementCardProps = {
  icon: string;
  category: string;
  type: string;
  id: string;
  title: string;
  event: string;
  description: string;
  tags: string[];
  date: string;
  location: string;
  index: number;
  certificateImage?: string;
};

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'winner':
      return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black';
    case 'participant':
      return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
    case 'achievement':
      return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
    case 'appreciation':
      return 'bg-gradient-to-r from-pink-500 to-rose-600 text-white';
    case 'placement':
      return 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  }
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'hackathon':
      return 'text-emerald-400 border-emerald-400/30';
    case 'ctf':
      return 'text-red-400 border-red-400/30';
    case 'tech fest':
      return 'text-blue-400 border-blue-400/30';
    case 'blockchain hackathon':
      return 'text-purple-400 border-purple-400/30';
    default:
      return 'text-cyan-400 border-cyan-400/30';
  }
};

export const AchievementCard = ({
  icon,
  category,
  type,
  id,
  title,
  event,
  description,
  tags,
  date,
  location,
  index,
  certificateImage,
}: AchievementCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gradient-to-br from-[#0F0A1E]/95 to-[#1A0E2E]/85 backdrop-blur-xl border border-[#7042f88b] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 mx-1 sm:mx-0"
    >
      {/* Floating glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top section with icon and badges */}
      <div className="relative p-4 sm:p-6 pb-3 sm:pb-4">
        {/* Icon */}
        <motion.div 
          className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 text-center"
          whileHover={{ scale: 1.15, rotate: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        
        {/* Category and Type badges */}
        <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
          <span className={`px-2 sm:px-3 py-1 text-xs font-bold border rounded-full ${getCategoryColor(category)} flex-shrink-0`}>
            {category.toUpperCase()}
          </span>
          <span className={`px-2 sm:px-3 py-1 text-xs font-bold rounded-full ${getTypeColor(type)} flex-shrink-0`}>
            {type}
          </span>
        </div>

        {/* Ranking ID Badge */}
        <div className="absolute top-4 right-4">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {id}
          </motion.div>
        </div>
      </div>

      {/* Content section */}
      <div className="px-4 sm:px-6 pb-3 sm:pb-4">
        {/* Title and Event */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-purple-300 font-semibold text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
          {event}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags cloud */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index * 0.1) + (tagIndex * 0.1) + 0.3 }}
              className="px-2 sm:px-3 py-1 text-xs bg-[#2A0E61]/60 text-gray-300 rounded-full border border-[#7042f88b]/50 hover:bg-[#7042f88b]/30 hover:text-white transition-all duration-200 flex-shrink-0"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer with date, location and view button */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#0F0A1E]/50 border-t border-[#7042f88b]/30">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">
            <div className="flex items-center gap-1 mb-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{location}</span>
            </div>
          </div>

          {/* Floating View Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (certificateImage) {
                setIsModalOpen(true);
              } else {
                alert('Certificate not available yet');
              }
            }}
            className={`group/btn relative px-4 py-2.5 sm:py-2 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[40px] sm:min-h-auto flex items-center justify-center ${
              certificateImage 
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-purple-500/50' 
                : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:shadow-gray-500/50 cursor-not-allowed opacity-70'
            }`}
          >
            <span className="relative z-10 font-bold">
              {certificateImage ? 'View' : 'N/A'}
            </span>
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
                certificateImage 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700'
              }`}
              layoutId="button-bg"
            />
          </motion.button>
        </div>
      </div>

      {/* Hover overlay with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Certificate Modal */}
      {certificateImage && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          certificateImage={certificateImage}
          title={title}
          event={event}
        />
      )}
    </motion.div>
  );
};
