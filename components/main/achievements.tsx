"use client";

import { AchievementCard } from "@/components/sub/achievement-card";
import { ACHIEVEMENTS } from "@/constants";
import { motion } from "framer-motion";
import { AchievementCardSkeleton } from "@/components/ui/Skeleton";
import { useState, useEffect } from "react";

export const Achievements = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay to show skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="achievements"
      className="relative flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A0E2E]/20 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.1 
            }}
            viewport={{ once: true }}
            className="inline-block text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-6"
          >
            🏆
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 mb-3 sm:mb-4 lg:mb-6 leading-tight px-2 sm:px-0"
          >
            Timeline of Excellence
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-4 sm:px-2 lg:px-0"
          >
            From CTF challenges to hackathons and national-level tech fests, each achievement reflects 
            continuous growth in <span className="text-purple-400 font-semibold">cybersecurity</span>, 
            <span className="text-cyan-400 font-semibold"> blockchain</span>, and 
            <span className="text-emerald-400 font-semibold"> innovation</span>.
          </motion.p>

          {/* Achievement Stats */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-br from-[#0F0A1E]/80 to-[#1A0E2E]/60 backdrop-blur-lg border border-[#7042f88b] rounded-xl p-4 min-w-[120px]"
            >
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {ACHIEVEMENTS.length}
              </div>
              <div className="text-gray-400 text-sm">Total Achievements</div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-br from-[#0F0A1E]/80 to-[#1A0E2E]/60 backdrop-blur-lg border border-[#7042f88b] rounded-xl p-4 min-w-[120px]"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                {new Set(ACHIEVEMENTS.map(a => a.category)).size}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-br from-[#0F0A1E]/80 to-[#1A0E2E]/60 backdrop-blur-lg border border-[#7042f88b] rounded-xl p-4 min-w-[120px]"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                2024-25
              </div>
              <div className="text-gray-400 text-sm">Active Years</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {isLoading ? (
            // Show skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                variants={itemVariants}
                className="flex"
              >
                <AchievementCardSkeleton />
              </motion.div>
            ))
          ) : (
            // Show actual achievement cards
            ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="flex"
              >
                <AchievementCard
                  icon={achievement.icon}
                  category={achievement.category}
                  type={achievement.type}
                  id={achievement.id}
                  title={achievement.title}
                  event={achievement.event}
                  description={achievement.description}
                  tags={[...achievement.tags]}
                  date={achievement.date}
                  location={achievement.location}
                  index={index}
                  certificateImage={(achievement as any).certificateImage}
                />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="bg-gradient-to-br from-[#0F0A1E]/70 to-[#1A0E2E]/50 backdrop-blur-lg border border-[#7042f88b] rounded-2xl p-8 max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Journey Continues...
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              These achievements represent milestones in my continuous journey of learning and innovation. 
              Each challenge conquered opens doors to new possibilities and greater heights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                View All Certificates
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-[#7042f88b] text-gray-300 font-semibold rounded-full hover:bg-[#7042f88b]/20 hover:text-white hover:border-purple-500/50 transition-all duration-300"
              >
                Connect with Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Timeline Elements */}
        <div className="absolute left-0 top-1/2 w-1 h-64 bg-gradient-to-b from-purple-500/30 to-cyan-500/30 rounded-full hidden xl:block" />
        <div className="absolute right-0 top-1/3 w-1 h-48 bg-gradient-to-b from-cyan-500/30 to-purple-500/30 rounded-full hidden xl:block" />
      </motion.div>
    </section>
  );
};