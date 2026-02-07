"use client";

import React from "react";
import { motion } from "framer-motion";
import { AWARDS } from "@/constants";
import { CertificateCard } from "@/components/sub/certificate-card";

import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

interface AwardsProps {
    viewAll?: boolean;
}

export const Awards = ({ viewAll = false }: AwardsProps) => {
    const displayAwards = viewAll ? AWARDS : AWARDS.slice(0, 3);

    return (
        <section
            id="awards"
            className="flex flex-col items-center justify-center py-20 relative z-[20] overflow-hidden bg-[#030014]"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 mb-4">
                        Awards & Recognition
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Honors received from hackathons, competitions, and research contributions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayAwards.map((item, index) => (
                        <CertificateCard key={`${item.title}-${index}`} item={item} index={index} />
                    ))}
                </div>

                {!viewAll && AWARDS.length > 3 && (
                    <div className="w-full flex justify-center mt-12">
                        <Link href="/achievements">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg flex items-center gap-2 font-semibold"
                            >
                                View All Awards
                                <ArrowRightCircleIcon className="w-5 h-5" />
                            </motion.div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
