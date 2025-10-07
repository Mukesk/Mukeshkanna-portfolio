"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type CertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  certificateImage: string;
  certificateTitle: string;
};

export const CertificateModal = ({
  isOpen,
  onClose,
  certificateImage,
  certificateTitle,
}: CertificateModalProps) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-4xl max-h-[90vh] w-full bg-gradient-to-br from-[#0F0A1E]/95 to-[#1A0E2E]/95 backdrop-blur-xl border border-[#7042f88b] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#7042f88b]/30">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {certificateTitle}
              </h3>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-[#7042f88b]/20 rounded-full transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-6">
              <div className="relative w-full h-[60vh] bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={certificateImage}
                  alt={certificateTitle}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-[#7042f88b]/30">
              <div className="text-sm text-gray-400">
                Click anywhere outside or press ESC to close
              </div>
              <div className="flex gap-3">
                <a
                  href={certificateImage}
                  download={`${certificateTitle}.jpg`}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-transparent border border-[#7042f88b] text-gray-300 text-sm font-semibold rounded-lg hover:bg-[#2A0E61]/30 hover:text-white transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};