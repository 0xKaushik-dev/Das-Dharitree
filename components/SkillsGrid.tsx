import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

export const SkillsGrid: React.FC = () => {
    return (
        <section className="py-24 bg-background px-6">
            <div className="max-w-7xl mx-auto">
                <h3 className="section-label mb-8 text-primary font-medium tracking-tight">Capabilities</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                 group p-8 rounded-2xl bg-secondary/5 
                 border border-border/50
                 hover:bg-secondary/10 transition-colors duration-500
                 flex flex-col justify-between
                 ${index === 0 || index === 3 ? 'md:col-span-2' : ''}
               `}
                        >
                            <div>
                                <h4 className="text-xl font-semibold mb-3 text-primary">{service.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white dark:bg-black border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
