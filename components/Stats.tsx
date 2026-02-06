import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Post-Graduation', value: '77%' },
    { label: 'Graduation', value: '77.85%' },
    { label: 'Language', value: '3+' }, // English, Odia, Hindi
    { label: 'Year Born', value: '2002' },
];

export const Stats: React.FC = () => {
    return (
        <section className="py-12 bg-background px-6 border-b border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col"
                    >
                        <span className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-2">
                            {stat.value}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
