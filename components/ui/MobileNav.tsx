"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { smoothScrollTo } from "@/lib/motion";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    // Remove the # from the link and scroll to that section
    const sectionId = link.replace("#", "");
    smoothScrollTo(sectionId);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-[#7042f88b] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#0F0A1E]/95 to-[#1A0E2E]/90 backdrop-blur-xl border-l border-[#7042f88b] shadow-2xl z-40"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-[#7042f88b]/30">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Navigation
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Explore my portfolio sections
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <motion.ul
                  className="space-y-2"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 },
                    },
                  }}
                >
                  {NAV_LINKS.map((navLink, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <button
                        onClick={() => handleNavClick(navLink.link)}
                        className="group w-full text-left p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-purple-500/10 hover:to-cyan-500/10 border border-transparent hover:border-[#7042f88b]/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 group-hover:text-white font-medium text-lg transition-colors duration-200">
                            {navLink.title}
                          </span>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                          </motion.div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-[#7042f88b]/30 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Menu Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-[#7042f88b]/30">
                  <p className="text-gray-400 text-sm text-center">
                    🚀 Built with Next.js & Framer Motion
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile-friendly floating action button for quick navigation
export const MobileFloatingNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30 md:hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex flex-col items-end space-y-3"
      >
        {/* Quick Nav Items */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {NAV_LINKS.slice(0, 4).map((navLink, index) => (
                <motion.button
                  key={navLink.link}
                  initial={{ scale: 0, y: 20 }}
                  animate={{
                    scale: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{
                    scale: 0,
                    y: 20,
                    transition: { delay: (3 - index) * 0.05 },
                  }}
                  onClick={() => {
                    setIsExpanded(false);
                    const sectionId = navLink.link.replace("#", "");
                    smoothScrollTo(sectionId);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  {navLink.title}
                </motion.button>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu size={24} className="text-white" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};