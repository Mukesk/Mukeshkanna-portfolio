"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LazyImage } from "../ui/LazyImage";
import { useSwipeGesture, usePinchZoom } from "../../hooks/useSwipeGesture";

type CertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  certificateImage: string;
  title: string;
  event: string;
};

export const CertificateModal = ({
  isOpen,
  onClose,
  certificateImage,
  title,
  event,
}: CertificateModalProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  
  // Add swipe gestures for mobile
  const swipeRef = useSwipeGesture<HTMLDivElement>({
    onSwipeDown: () => {
      if (imageScale <= 1) {
        onClose();
      }
    },
    minSwipeDistance: 100,
  });

  // Add pinch zoom for certificate
  const zoomRef = usePinchZoom<HTMLDivElement>({
    onZoom: (scale) => setImageScale(scale),
    minScale: 1,
    maxScale: 3,
  });
  
  // Add ESC key functionality
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  // Reset zoom when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      setImageScale(1);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={swipeRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5 
            }}
            className="relative bg-gradient-to-br from-[#0F0A1E]/95 to-[#1A0E2E]/90 backdrop-blur-xl border border-[#7042f88b] rounded-2xl overflow-hidden shadow-2xl max-w-4xl max-h-[90vh] sm:max-h-[85vh] w-full flex flex-col mx-2 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#7042f88b]/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1 pr-2">{title}</h2>
                <p className="text-purple-300 text-xs sm:text-sm">{event}</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-3 sm:p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-full transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Certificate Image */}
            <div ref={zoomRef} className="p-3 sm:p-6 flex items-center justify-center flex-1 min-h-[250px] sm:min-h-[300px] overflow-hidden">
              {imageError ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">📜</div>
                  <h3 className="text-xl font-bold text-red-400 mb-2">Certificate Not Found</h3>
                  <p className="text-gray-400">
                    The certificate image could not be loaded.
                  </p>
                </motion.div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {imageLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                      />
                    </motion.div>
                  )}
                  
                  <div 
                    className="transition-transform duration-200 ease-out"
                    style={{ transform: `scale(${imageScale})` }}
                  >
                    <LazyImage
                      src={certificateImage}
                      alt={`${title} Certificate`}
                      width={800}
                      height={600}
                      className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                      quality={95}
                      priority={true}
                      onLoad={() => setImageLoading(false)}
                      onError={() => {
                        setImageError(true);
                        setImageLoading(false);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-4 border-t border-[#7042f88b]/50 bg-gradient-to-r from-[#0F0A1E]/95 to-[#1A0E2E]/90 backdrop-blur-xl flex-shrink-0">
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-center">
              
                
                <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (!imageError) {
                        window.open(certificateImage, '_blank');
                      }
                    }}
                    disabled={imageError}
                    className="px-6 py-3 sm:py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/40 hover:border-white/70 hover:scale-105 min-h-[44px] flex items-center justify-center flex-1 sm:flex-none"
                  >
                    🚀 View Full Size
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-3 sm:py-2.5 bg-transparent border border-[#7042f88b] text-gray-200 text-sm font-semibold rounded-full hover:bg-[#7042f88b]/30 hover:text-white hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 min-h-[44px] flex items-center justify-center flex-1 sm:flex-none"
                  >
                    ✕ Close
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm" />
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-cyan-500/20 rounded-full blur-sm" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hook for handling ESC key
export const useEscapeKey = (callback: () => void) => {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [callback]);
};