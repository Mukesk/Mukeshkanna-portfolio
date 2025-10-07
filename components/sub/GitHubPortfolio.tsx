"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RxGithubLogo, RxExternalLink } from "react-icons/rx";
import { GITHUB_PORTFOLIO } from "@/constants";

export const GitHubPortfolio = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0F0A1E] via-[#1A0E2E] to-[#0F0A1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {GITHUB_PORTFOLIO.title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {GITHUB_PORTFOLIO.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* GitHub Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#2A0E61]/50 to-[#1A0E2E]/50 backdrop-blur-lg border border-[#7042f88b] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{GITHUB_PORTFOLIO.stats.repositories.split(" ")[0]}</div>
                <div className="text-gray-400 text-sm">{GITHUB_PORTFOLIO.stats.repositories.split(" ").slice(1).join(" ")}</div>
              </div>
              <div className="bg-gradient-to-br from-[#2A0E61]/50 to-[#1A0E2E]/50 backdrop-blur-lg border border-[#7042f88b] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">{GITHUB_PORTFOLIO.stats.followers.split(" ")[0]}</div>
                <div className="text-gray-400 text-sm">{GITHUB_PORTFOLIO.stats.followers.split(" ").slice(1).join(" ")}</div>
              </div>
              <div className="bg-gradient-to-br from-[#2A0E61]/50 to-[#1A0E2E]/50 backdrop-blur-lg border border-[#7042f88b] rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-green-400">Active</div>
                <div className="text-gray-400 text-sm">Contributor</div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <RxGithubLogo className="text-purple-400" />
                Project Categories
              </h3>
              <div className="space-y-3">
                {GITHUB_PORTFOLIO.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#0F0A1E]/90 to-[#2A0E61]/70 backdrop-blur-lg border border-[#7042f88b] rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              {/* GitHub-like Header */}
              <div className="bg-gradient-to-r from-[#2A0E61] to-[#1A0E2E] p-6 border-b border-[#7042f88b]/30">
                <div className="flex items-center gap-3">
                  <RxGithubLogo className="text-3xl text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">GitHub Profile</h3>
                    <p className="text-gray-400">@Mukesk - Mukeshkanna</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold text-white mb-3">Explore My Repository</h4>
                  <p className="text-gray-400 mb-6">
                    Dive deep into my coding journey with 12+ repositories showcasing diverse technologies and innovative solutions.
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={GITHUB_PORTFOLIO.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 text-lg"
                  >
                    <RxGithubLogo className="text-xl" />
                    {GITHUB_PORTFOLIO.buttonText}
                    <RxExternalLink className="text-lg" />
                  </motion.button>
                </Link>

                <div className="text-center text-sm text-gray-500">
                  🌟 Star repositories you find interesting!
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};