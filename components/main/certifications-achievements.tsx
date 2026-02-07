"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AWARDS, COURSES } from "@/constants";
import { CertificateCard } from "@/components/sub/certificate-card";

export const CertificationsAchievements = () => {
    const [filter, setFilter] = useState<"All" | "Awards" | "Courses">("All");

    const allItems = [...AWARDS, ...COURSES];

    const filteredItems = allItems.filter((item) => {
        if (filter === "All") return true;
        if (filter === "Awards") return item.category === "Award";
        if (filter === "Courses") return item.category === "Course";
        return true;
    });

    return (
        <section
            id="certifications"
            className="flex flex-col items-center justify-center py-20 relative z-[20] overflow-hidden bg-[#030014]"
        >
            <div className="absolute top-0 w-full h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-[100px] z-[-1]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Certifications & Achievements
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my professional certifications, awards, and continuous learning journey in technology and cybersecurity.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="bg-[#110C24]/80 backdrop-blur-md p-1.5 rounded-xl border border-[#7042f88b] flex gap-2 shadow-lg">
                        {(["All", "Awards", "Courses"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`
                            px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative
                            ${filter === tab ? "text-white" : "text-gray-400 hover:text-white"}
                        `}
                            >
                                {filter === tab && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg -z-10 shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <CertificateCard key={`${item.title}-${index}`} item={item} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
