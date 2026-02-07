"use client";

import { motion } from "framer-motion";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "CTO, TechCorp",
        content: "He transformed our legacy system into a modern, scalable application. His expertise in React and Node.js is unmatched.",
    },
    {
        name: "Sarah Williams",
        role: "Product Manager, InnovateX",
        content: "An exceptional developer who understands both the technical and business aspects. The UI/UX improvements he made were game-changing.",
    },
    {
        name: "Michael Brown",
        role: "Lead Engineer, DevSolutions",
        content: "High-quality code, great communication, and delivered ahead of schedule. Would definitely work with him again.",
    },
    {
        name: "Emily Davis",
        role: "Founder, StartUp Inc",
        content: "Deep understanding of full-stack development. He built our MVP from scratch and helped us secure funding."
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        What People Say
                    </h2>
                    <p className="text-gray-400">Feedback from clients and collaborators</p>
                </motion.div>

                <div className="relative w-full overflow-hidden">
                    {/* Infinite Slider Implementation */}
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl flex flex-col gap-4 hover:border-purple-500/50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <UserCircleIcon className="w-12 h-12 text-gray-400" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                                        <p className="text-sm text-purple-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic leading-relaxed">
                                    &quot;{testimonial.content}&quot;
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
