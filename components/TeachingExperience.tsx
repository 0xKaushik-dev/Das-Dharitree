import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const experiencePoints = [
    "Over 10 years of tutoring and classroom teaching experience",
    "Worked with multiple coaching centers",
    "Experience teaching as a college-level instructor",
    "Taught multiple subjects with a structured and student-friendly approach",
    "Maintained high satisfaction levels among parents through consistent academic results",
    "Focused on concept clarity, discipline, and student development"
];

export const TeachingExperience: React.FC = () => {
    return (
        <section className="py-24 bg-secondary/5 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Teaching Experience</h3>
                        <p className="text-muted-foreground text-lg">A decade of dedication to student growth and academic excellence.</p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 gap-4">
                        {experiencePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-colors shadow-sm"
                            >
                                <div className="p-2 rounded-full bg-secondary text-primary">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="text-lg text-primary font-medium pt-1">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
