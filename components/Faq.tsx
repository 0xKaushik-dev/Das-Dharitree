import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background px-6">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">Frequently Asked Questions</h3>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-border pb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 text-left group"
                            >
                                <span className="text-xl font-medium text-primary group-hover:text-primary/70 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-muted-foreground leading-relaxed pt-2">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
