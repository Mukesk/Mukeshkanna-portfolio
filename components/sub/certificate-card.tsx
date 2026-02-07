"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";

interface CertificateCardProps {
    item: {
        title: string;
        organization?: string;
        platform?: string;
        year: string;
        description: string;
        image: string;
        link: string;
        category: string;
    };
    index: number;
}

export const CertificateCard = ({ item, index }: CertificateCardProps) => {
    return (
        <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="block h-full w-full"
        >
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative w-full h-full bg-[#110C24]/80 backdrop-blur-xl border border-[#7042f88b] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col cursor-pointer"
            >
                <div className="relative w-full h-48 overflow-hidden bg-[#0a0618] border-b border-[#7042f88b]/30">
                    {item.image.endsWith(".pdf") ? (
                        <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 gap-2 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 group-hover:scale-105 transition-transform duration-500">
                            <span className="text-5xl drop-shadow-[0_0_15px_rgba(112,66,248,0.5)]">📄</span>
                            <span className="text-xs font-mono text-cyan-500 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/30">PDF Document</span>
                        </div>
                    ) : (
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    )}

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white/20 transition-colors transform group-hover:scale-110">
                            <LinkIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded-md bg-cyan-500/10">
                                {item.category}
                            </span>
                            <span className="text-sm text-gray-500">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-100 mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {item.description}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-[#7042f88b]/50">
                        <p className="text-sm text-gray-400">
                            <span className="text-purple-400 font-semibold">{item.organization || item.platform}</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </a>
    );
};
