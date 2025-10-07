"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = "rectangular",
  width,
  height,
  animation = true,
}) => {
  const baseClasses = "bg-gradient-to-r from-gray-700/50 to-gray-600/50";
  
  const variantClasses = {
    text: "rounded-md h-4",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    rounded: "rounded-xl",
  };

  const skeletonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const style = {
    width: width || "100%",
    height: height || (variant === "text" ? "1rem" : "auto"),
  };

  if (animation) {
    return (
      <motion.div
        className={skeletonClasses}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          ...style,
          background: "linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)",
          backgroundSize: "200% 100%",
        }}
      />
    );
  }

  return <div className={skeletonClasses} style={style} />;
};

// Specific skeleton components for different sections
export const AchievementCardSkeleton = () => (
  <div className="bg-gradient-to-br from-[#0F0A1E]/90 to-[#1A0E2E]/80 backdrop-blur-xl border border-[#7042f88b] rounded-2xl p-6 space-y-4">
    {/* Icon placeholder */}
    <div className="flex justify-center mb-4">
      <Skeleton variant="circular" width={60} height={60} />
    </div>
    
    {/* Badges */}
    <div className="flex justify-between mb-4">
      <Skeleton width={80} height={24} className="rounded-full" />
      <Skeleton width={70} height={24} className="rounded-full" />
    </div>
    
    {/* Title and event */}
    <Skeleton variant="text" width="80%" height={20} />
    <Skeleton variant="text" width="60%" height={16} />
    
    {/* Description */}
    <div className="space-y-2">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="text" width="70%" />
    </div>
    
    {/* Tags */}
    <div className="flex gap-2 flex-wrap">
      <Skeleton width={60} height={24} className="rounded-full" />
      <Skeleton width={80} height={24} className="rounded-full" />
      <Skeleton width={70} height={24} className="rounded-full" />
    </div>
    
    {/* Footer */}
    <div className="flex justify-between items-end pt-4 border-t border-[#7042f88b]/30">
      <div className="space-y-1">
        <Skeleton variant="text" width={100} height={12} />
        <Skeleton variant="text" width={80} height={12} />
      </div>
      <Skeleton width={60} height={32} className="rounded-full" />
    </div>
  </div>
);

export const ProjectCardSkeleton = () => (
  <div className="bg-gradient-to-br from-[#0F0A1E]/90 to-[#1A0E2E]/80 backdrop-blur-xl border border-[#7042f88b] rounded-2xl overflow-hidden">
    {/* Image placeholder */}
    <Skeleton variant="rectangular" height={200} />
    
    <div className="p-6 space-y-4">
      {/* Title */}
      <Skeleton variant="text" width="85%" height={24} />
      
      {/* Description */}
      <div className="space-y-2">
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="80%" />
      </div>
      
      {/* Technologies */}
      <div className="flex gap-2 flex-wrap">
        <Skeleton width={50} height={20} className="rounded-full" />
        <Skeleton width={60} height={20} className="rounded-full" />
        <Skeleton width={70} height={20} className="rounded-full" />
        <Skeleton width={55} height={20} className="rounded-full" />
      </div>
      
      {/* Buttons */}
      <div className="flex gap-3 pt-4">
        <Skeleton width={100} height={36} className="rounded-full" />
        <Skeleton width={80} height={36} className="rounded-full" />
      </div>
    </div>
  </div>
);

export const SkillCardSkeleton = () => (
  <div className="bg-gradient-to-br from-[#0F0A1E]/90 to-[#1A0E2E]/80 backdrop-blur-xl border border-[#7042f88b] rounded-xl p-4 flex flex-col items-center space-y-3">
    <Skeleton variant="circular" width={50} height={50} />
    <Skeleton variant="text" width={60} height={16} />
  </div>
);

export const CertificationCardSkeleton = () => (
  <div className="bg-gradient-to-br from-[#0F0A1E]/90 to-[#1A0E2E]/80 backdrop-blur-xl border border-[#7042f88b] rounded-2xl p-6 space-y-4">
    <div className="flex items-start justify-between">
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={16} />
      </div>
      <Skeleton width={60} height={24} className="rounded-full" />
    </div>
    
    <div className="space-y-2">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="90%" />
    </div>
    
    <div className="flex gap-2 flex-wrap">
      <Skeleton width={50} height={20} className="rounded-full" />
      <Skeleton width={60} height={20} className="rounded-full" />
      <Skeleton width={70} height={20} className="rounded-full" />
    </div>
    
    <div className="flex justify-between items-center pt-4">
      <div className="flex items-center space-x-4">
        <Skeleton variant="text" width={80} height={14} />
        <Skeleton variant="text" width={60} height={14} />
      </div>
      <Skeleton width={80} height={32} className="rounded-full" />
    </div>
  </div>
);