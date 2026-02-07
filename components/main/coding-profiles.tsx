"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RxGithubLogo, RxExternalLink } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { GITHUB_PORTFOLIO } from "@/constants";

export const CodingProfiles = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#0F0A1E] via-[#1A0E2E] to-[#0F0A1E] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-[20]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Coding Profiles
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        My active contributions to open source and problem-solving journey on competitive platforms.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* GitHub Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative bg-[#110C24]/80 backdrop-blur-xl border border-[#7042f88b] rounded-2xl overflow-hidden p-6 md:p-8 h-full flex flex-col justify-between hover:border-purple-500/50 transition-colors">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                        <RxGithubLogo className="text-3xl text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">GitHub</h3>
                                        <p className="text-sm text-gray-400">@Mukesk</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-6">
                                    {GITHUB_PORTFOLIO.description}
                                </p>
                                <div className="grid grid-cols-3 gap-2 mb-8">
                                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="font-bold text-purple-400">12+</div>
                                        <div className="text-xs text-gray-400">Repos</div>
                                    </div>
                                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="font-bold text-cyan-400">4+</div>
                                        <div className="text-xs text-gray-400">Followers</div>
                                    </div>
                                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="font-bold text-green-400">Active</div>
                                        <div className="text-xs text-gray-400">Status</div>
                                    </div>
                                </div>
                            </div>

                            <Link href={GITHUB_PORTFOLIO.link} target="_blank" className="w-full">
                                <button className="w-full py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/30 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                                    View GitHub Profile <RxExternalLink />
                                </button>
                            </Link>

                        </div>
                    </motion.div>

                    {/* LeetCode Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative bg-[#110C24]/80 backdrop-blur-xl border border-[#7042f88b] rounded-2xl overflow-hidden p-6 md:p-8 h-full flex flex-col justify-between hover:border-orange-500/50 transition-colors">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                        <SiLeetcode className="text-3xl text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">LeetCode</h3>
                                        <p className="text-sm text-gray-400">@mukeshkanna_k21</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-6">
                                    Consistently solving algorithmic challenges to sharpen problem-solving skills and master data structures.
                                </p>
                                {/* Dynamic Stats Image */}
                                <div className="w-full overflow-hidden rounded-lg mb-8 border border-white/5 bg-black/20 flex justify-center py-4">
                                    {/* Using LeetCard as it's more reliable */}
                                    <img
                                        src="https://leetcard.jacoblin.cool/mukeshkanna_k21?theme=dark&font=Inter&ext=heatmap"
                                        alt="LeetCode Stats"
                                        className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>

                            <Link href="https://leetcode.com/u/mukeshkanna_k21/" target="_blank" className="w-full">
                                <button className="w-full py-3 bg-gradient-to-r from-orange-600/20 to-amber-600/20 hover:from-orange-600/40 hover:to-amber-600/40 border border-orange-500/30 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                                    View LeetCode Profile <RxExternalLink />
                                </button>
                            </Link>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
