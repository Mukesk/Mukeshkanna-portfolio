"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon, ArrowDownTrayIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTypewriterLoop } from "@/hooks/useTypewriter";

export const HeroContent = () => {
  const typeWriterText = useTypewriterLoop(["React", "Node.js", "AI Integration", "DevOps"], 150, 2000);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-32 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex justify-center md:justify-start items-center gap-2 rounded-lg mx-auto md:mx-0 w-fit"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-semibold text-gray-200">
            Passionate Fullstack Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building Secure,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Scalable & Intelligent{" "}
            </span>
            Full-Stack Applications
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-2xl md:text-3xl font-semibold text-gray-300 min-h-[40px]"
        >
          Expertise in: <span className="text-purple-400">{typeWriterText}</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] mx-auto md:mx-0"
        >
          Computer Science undergraduate and Full-Stack & Security Enthusiast.
          I build secure web applications and vulnerability tools, with experience in React, Node.js, and DevOps.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-5 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center gap-2 font-semibold hover:scale-105 transition-transform"
          >
            View Projects
            <ArrowRightCircleIcon className="w-5 h-5" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="py-3 px-8 button-secondary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center gap-2 font-semibold border border-purple-500/30 hover:bg-purple-500/10 hover:scale-105 transition-transform"
          >
            Download Resume
            <ArrowDownTrayIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 w-full flex justify-center items-center z-[20]"
      >
        <a href="#about-me">
          <ArrowDownTrayIcon className="h-10 w-10 text-purple-500 cursor-pointer hover:text-cyan-400 transition-colors" />
        </a>
      </motion.div>
    </motion.div>
  );
};
