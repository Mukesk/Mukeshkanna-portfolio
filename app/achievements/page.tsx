"use client";

import React from "react";
import { Certifications } from "@/components/main/certifications";
import { Awards } from "@/components/main/awards";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Footer } from "@/components/main/footer";

export default function AchievementsPage() {
    return (
        <main className="h-full w-full bg-[#030014] overflow-x-hidden">
            {/* Background stars/effects can be reused here if componentized, 
          but simpler for now just to have the section background */}

            <div className="flex flex-col gap-10">

                {/* Header / Nav Back */}
                <div className="pt-24 px-6 md:px-20 container mx-auto">
                    <Link href="/" className="inline-flex items-center text-gray-300 hover:text-cyan-400 transition-colors mb-8">
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-10"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 pb-2">
                            All Achievements
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mt-4">
                            A comprehensive collection of my professional certifications, awards, hackathon wins, and research contributions.
                        </p>
                    </motion.div>
                </div>

                {/* Full Lists - We reuse the components with viewAll=true */}
                <div className="flex flex-col gap-0">
                    <Certifications viewAll={true} />
                    <Awards viewAll={true} />
                </div>

                <Footer />
            </div>
        </main>
    );
}
