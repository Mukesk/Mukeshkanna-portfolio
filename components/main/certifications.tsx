"use client";

import { CertificationCard } from "@/components/sub/certification-card";
import { CERTIFICATIONS } from "@/constants";
import { motion } from "framer-motion";

export const Certifications = () => {
  const completedCertifications = CERTIFICATIONS.filter(cert => cert.status === "Completed");
  const inProgressCertifications = CERTIFICATIONS.filter(cert => cert.status === "In Progress");

  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Stellar Certifications
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Continuously expanding my knowledge across the technology universe through advanced courses and certifications
        </p>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">
              {completedCertifications.length}
            </div>
            <div className="text-gray-400 text-sm">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">
              {inProgressCertifications.length}
            </div>
            <div className="text-gray-400 text-sm">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              {CERTIFICATIONS.reduce((total, cert) => total + parseInt(cert.duration), 0)}+
            </div>
            <div className="text-gray-400 text-sm">Hours</div>
          </div>
        </div>
      </motion.div>

      {/* Completed Certifications */}
      {completedCertifications.length > 0 && (
        <div className="w-full max-w-7xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-green-400 mb-8 text-center"
          >
            🎓 Completed Courses
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCertifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationCard
                  title={certification.title}
                  provider={certification.provider}
                  description={certification.description}
                  students={certification.students}
                  duration={certification.duration}
                  instructor={certification.instructor}
                  rating={certification.rating}
                  status={certification.status}
                  skills={[...certification.skills]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* In Progress Certifications */}
      {inProgressCertifications.length > 0 && (
        <div className="w-full max-w-7xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8 text-center"
          >
            🚀 Currently Learning
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCertifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationCard
                  title={certification.title}
                  provider={certification.provider}
                  description={certification.description}
                  students={certification.students}
                  duration={certification.duration}
                  instructor={certification.instructor}
                  rating={certification.rating}
                  status={certification.status}
                  skills={[...certification.skills]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Learning Philosophy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-br from-[#0F0A1E]/50 to-[#1A0E2E]/30 backdrop-blur-lg border border-[#7042f88b] rounded-2xl p-8 max-w-2xl mx-auto"
      >
        <div className="text-4xl mb-4">🌟</div>
        <h3 className="text-xl font-bold text-white mb-4">Learning Never Stops</h3>
        <p className="text-gray-300 mb-6">
          Always expanding my knowledge and skills through continuous learning. 
          The technology universe is vast, and there&apos;s always something new to explore.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-sm"
          >
            View All Courses
          </a>
          <a
            href="#skills"
            className="inline-flex items-center px-4 py-2 bg-transparent border border-[#7042f88b] text-gray-300 font-semibold rounded-lg hover:bg-[#2A0E61]/30 hover:text-white transition-all duration-300 text-sm"
          >
            See My Skills
          </a>
        </div>
      </motion.div>
    </section>
  );
};