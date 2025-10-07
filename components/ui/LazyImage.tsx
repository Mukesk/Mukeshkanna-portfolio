"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skeleton } from "./Skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  fill = false,
  onLoad,
  onError,
  placeholder,
  blurDataURL,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const ErrorFallback = () => (
    <div className={`flex items-center justify-center bg-gray-800/50 rounded-lg ${className}`}>
      <div className="text-center p-4">
        <div className="text-2xl mb-2">🖼️</div>
        <p className="text-gray-400 text-sm">Image not available</p>
      </div>
    </div>
  );

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isInView && !priority ? (
        <Skeleton 
          className={className}
          width={width}
          height={height}
        />
      ) : (
        <>
          {isLoading && (
            <div className={`absolute inset-0 z-10 ${className}`}>
              <Skeleton 
                className="w-full h-full"
                animation={true}
              />
            </div>
          )}
          
          {hasError ? (
            <ErrorFallback />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                quality={quality}
                priority={priority}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                className={className}
                onLoadingComplete={handleLoad}
                onError={handleError}
                loading={priority ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

// Optimized image component specifically for project cards
export const ProjectImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "" }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={400}
      height={250}
      className={`object-cover ${className}`}
      quality={80}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};

// Optimized image component for skill icons
export const SkillIcon: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}> = ({ src, alt, width = 50, height = 50, className = "" }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      quality={90}
      placeholder="empty"
    />
  );
};

// Certificate image component with specific optimizations
export const CertificateImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "" }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={`object-contain ${className}`}
      quality={95}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};