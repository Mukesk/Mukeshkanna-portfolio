"use client";

import { motion } from "framer-motion";

interface SkillProgressBarProps {
    name: string;
    percentage: number;
}

export const SkillProgressBar = ({ name, percentage }: SkillProgressBarProps) => {
    return (
        <div className="w-full mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">{name}</span>
                <span className="text-sm font-medium text-white">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div
                    className="bg-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};
