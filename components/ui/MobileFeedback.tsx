"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Touch ripple effect component
export const TouchRipple = ({ 
  children, 
  className = "",
  disabled = false 
}: { 
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const addRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onMouseDown={addRipple}
      disabled={disabled}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white/20 rounded-full pointer-events-none"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 1,
          }}
          animate={{
            width: 300,
            height: 300,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </button>
  );
};

// Mobile loading indicator
export const MobileLoader = ({ 
  isVisible = false,
  text = "Loading..."
}: { 
  isVisible?: boolean;
  text?: string;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            className="bg-gradient-to-br from-[#0F0A1E]/95 to-[#1A0E2E]/90 backdrop-blur-xl border border-[#7042f88b] rounded-2xl p-6 flex flex-col items-center space-y-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            {/* Animated loader */}
            <div className="relative">
              <motion.div
                className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 w-8 h-8 border-2 border-cyan-500/30 border-b-cyan-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            
            <p className="text-white font-medium">{text}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Mobile toast notification
export const MobileToast = ({
  message,
  type = "info",
  isVisible = false,
  onClose,
  duration = 3000
}: {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const typeStyles = {
    success: "from-green-500 to-emerald-600",
    error: "from-red-500 to-pink-600",
    warning: "from-yellow-500 to-orange-600",
    info: "from-purple-500 to-cyan-500",
  };

  const typeEmojis = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          className="fixed top-4 left-4 right-4 z-50"
        >
          <motion.div
            className={`bg-gradient-to-r ${typeStyles[type]} p-4 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20`}
            layoutId="toast"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{typeEmojis[type]}</span>
              <p className="text-white font-medium flex-1">{message}</p>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                ✕
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Mobile drag indicator (for modals, sheets, etc.)
export const MobileDragIndicator = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex justify-center py-3 ${className}`}>
      <motion.div
        className="w-12 h-1 bg-gray-400/60 rounded-full"
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

// Mobile bottom sheet component
export const MobileBottomSheet = ({
  isOpen,
  onClose,
  children,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed bottom-0 left-0 right-0 bg-gradient-to-br from-[#0F0A1E]/95 to-[#1A0E2E]/90 backdrop-blur-xl border-t border-[#7042f88b] rounded-t-2xl z-50 max-h-[90vh] overflow-hidden"
          >
            <MobileDragIndicator />
            
            {title && (
              <div className="px-6 pb-4 border-b border-[#7042f88b]/30">
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            )}
            
            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Mobile haptic feedback simulation
export const useHapticFeedback = () => {
  const triggerHaptic = (type: "light" | "medium" | "heavy" = "light") => {
    // Check if the device supports haptic feedback
    if (navigator.vibrate) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30],
      };
      navigator.vibrate(patterns[type]);
    }
  };

  return triggerHaptic;
};