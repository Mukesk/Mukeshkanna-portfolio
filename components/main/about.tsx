"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";

const stats = [
    { label: "Months of Experience", value: 4, suffix: "+" }, // Internship duration
    { label: "Main Projects", value: 3, suffix: "" },
    { label: "Certifications", value: 3, suffix: "" },
    { label: "Hackathons", value: 5, suffix: "+" },
];

const timelineEvents = [
    {
        year: "Oct 2025 - Jan 2026",
        title: "Software Intern @ Udyosh Welfare Society",
        description: "Developed and maintained web modules using React and Node.js. Improved UI performance and collaborated with the team to deliver features.",
    },
    {
        year: "2022 - Present",
        title: "B.E. CSE @ Velammal Engineering College",
        description: "Pursuing Computer Science Engineering. CGPA: 7.7/10. Active in CTFs and development clubs.",
    },
    {
        year: "2022",
        title: "HSC @ Bharathidasan Matric Hr Sec School",
        description: "Completed Higher Secondary Education with 82%.",
    },
];

export const About = () => {
    return (
        <section id="about-me" className="w-full py-20 z-[20] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: Text Content & Timeline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.5)}
                    className="w-full md:w-1/2 flex flex-col gap-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        I am a Computer Science undergraduate with hands-on experience in full-stack web development.
                        My expertise lies in building secure, scalable applications using the MERN stack (React, Node.js, MongoDB).
                        I have a strong background in cybersecurity, actively participating in CTF competitions and developing
                        security-focused tools like vulnerability scanners. I am passionate about DevOps, cloud computing,
                        and contributing to open-source projects.
                    </p>

                    <div className="flex flex-wrap gap-8 my-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                                <span className="text-3xl font-bold text-white">
                                    <CountUp end={stat.value} duration={3} />
                                    {stat.suffix}
                                </span>
                                <span className="text-sm text-gray-500">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-l-2 border-purple-500/30 pl-6 space-y-8">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                                <span className="text-sm text-purple-400">{event.year}</span>
                                <p className="text-gray-400 mt-2">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Tilt Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromRight(0.5)}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-purple-500/20 bg-gradient-to-tr from-purple-900/20 to-black/40 backdrop-blur-sm flex items-center justify-center">
                            {/* Placeholder for Profile Image - Using Logo for now if profile not available, or just a cool graphic */}
                            <Image
                                src="/logo.png"
                                alt="Profile"
                                width={200} // Smaller than container so it looks like it's floating inside or fill it
                                height={200}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </section>
    );
};
