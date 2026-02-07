"use client";

import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    technologies: readonly string[];
    category: string;
};

type ProjectModalProps = {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
};

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-[#1A0E2E] border border-[#7042f88b] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-[101] flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E2E] via-transparent to-transparent md:bg-gradient-to-r" />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col gap-6">
                            <div>
                                <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/50">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl font-bold text-white mt-4">{project.title}</h2>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {project.description}
                                {/* Placeholder for more extended description if available in future */}
                                <br /><br />
                                This project demonstrates scalable architecture and modern UI principles.
                                Optimized for performance and accessibility.
                            </p>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto pt-6">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-center transition-colors shadow-lg shadow-purple-900/20"
                                >
                                    Live Demo
                                </Link>
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg text-center transition-colors border border-gray-700"
                                >
                                    GitHub Repo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
