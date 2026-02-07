'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-[#030014]/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#about-me"
          className="flex items-center gap-2 group"
          onClick={closeMenu}
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-purple-500/50 group-hover:border-purple-500 transition-colors">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <span className="hidden sm:block font-bold tracking-wide text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Mukeshkanna
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-gray-100/50 dark:bg-[rgba(3,0,20,0.37)] px-6 py-2 rounded-full border border-gray-200 dark:border-[rgba(112,66,248,0.38)] backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-purple-600 dark:hover:text-[#b49bff] transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-[#b49bff] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-gray-300 dark:border-gray-700 pr-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-transform hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-purple-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-purple-600" />
            )}
          </button>

          <button
            className="text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="h-8 w-8 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-white/95 dark:bg-[#030014]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden"
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={closeMenu}
            >
              <X className="h-8 w-8 text-gray-800 dark:text-white" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={closeMenu}
                  className="text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-[#b49bff] transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex gap-6 mt-8">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-white/10 rounded-full text-purple-600 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>

            <div className="absolute bottom-10 text-xs text-gray-500">
              &copy; 2024 Mukeshkanna
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
