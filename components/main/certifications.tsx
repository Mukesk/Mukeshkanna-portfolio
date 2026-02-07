"use client";

import React from "react";
import { motion } from "framer-motion";
import { COURSES } from "@/constants";
import { CertificateCard } from "@/components/sub/certificate-card";

export const Certifications = () => {
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
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and courses that verify my technical expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((item, index) => (
            <CertificateCard key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};