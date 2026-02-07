"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser"; // Uncomment when real keys are available

export const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log("Form Data:", data);

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // TODO: Implement EmailJS
        // await emailjs.send(
        //   process.env.NEXT_PUBLIC_SERVICE_ID!,
        //   process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        //   data,
        //   process.env.NEXT_PUBLIC_PUBLIC_KEY!
        // );

        setIsSubmitting(false);
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-20 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-[#030014]/50 z-[-1]" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-12 z-[20]"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
                    Connect With Me
                </h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto px-4">
                    Have a project in mind or just want to say hi? Send me a message and let&apos;s create something amazing together.
                </p>
            </motion.div>

            <div className="w-full max-w-3xl px-6 relative z-[20]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#110C24]/80 backdrop-blur-xl border border-[#7042f88b] p-8 md:p-12 rounded-2xl shadow-2xl"
                >
                    {success ? (
                        <div className="text-center py-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-300">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-[#1A0E2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Email</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full bg-[#1A0E2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Subject</label>
                                <input
                                    {...register("subject", { required: true })}
                                    className="w-full bg-[#1A0E2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && <span className="text-red-500 text-xs mt-1">Subject is required</span>}
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    rows={5}
                                    className="w-full bg-[#1A0E2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
