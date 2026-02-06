import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING, FAQS, SOCIALS } from '../constants';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowDown, CheckCircle2, Minus, Plus } from 'lucide-react';
import { clsx } from 'clsx';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300">
            <button 
                onClick={onClick}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
            >
                <span className="font-medium text-primary text-base md:text-lg pr-4">{question}</span>
                <div className={clsx("p-2 rounded-full transition-colors", isOpen ? "bg-black text-white" : "bg-gray-100 text-gray-500")}>
                     {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-8 pb-8 text-secondary leading-relaxed border-t border-gray-50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const PricingAndFaq: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div id="education" className="max-w-4xl mx-auto mt-16 space-y-20 pb-20">
            {/* Education Section (formerly Pricing) */}
            <div>
                 <div className="flex justify-center py-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-100 text-secondary">
                        Education <ArrowDown size={14} />
                    </div>
                </div>

                <Section className="!py-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PRICING.map((plan, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -8 }}
                                className={clsx(
                                    "p-8 rounded-[2.5rem] flex flex-col relative overflow-hidden",
                                    idx === 0 ? "bg-white shadow-xl shadow-gray-200/50" : "bg-[#f8f8f7] border border-transparent"
                                )}
                            >
                                <div className="mb-2 text-sm font-medium text-secondary">Year: {plan.price}</div>
                                <div className="text-2xl font-semibold text-primary mb-4">{plan.title}</div>
                                <p className="text-secondary text-sm mb-8 leading-relaxed h-10">{plan.description}</p>
                                
                                <div className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-700">
                                            <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-gray-200/50">
                                     <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-3 py-1 rounded-full">Completed</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* Additional Info Section (formerly FAQ) */}
            <div>
                 <div className="flex justify-center py-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-transparent rounded-full text-sm font-medium text-secondary">
                        Additional Info <ArrowDown size={14} />
                    </div>
                </div>
                
                <Section className="!py-0 space-y-4">
                    {FAQS.map((faq, idx) => (
                        <AccordionItem 
                            key={idx} 
                            question={faq.question} 
                            answer={faq.answer} 
                            isOpen={openFaqIndex === idx}
                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        />
                    ))}
                </Section>
            </div>

            {/* Social Grid */}
            <Section className="!py-0">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {SOCIALS.map((social, idx) => (
                         <motion.a 
                            key={idx}
                            href={social.href}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white p-6 rounded-3xl flex items-center justify-between group"
                         >
                            <span className="font-medium">{social.label}</span>
                            {social.icon && <social.icon size={20} className="text-gray-400 group-hover:text-black transition-colors" />}
                         </motion.a>
                     ))}
                 </div>
            </Section>
        </div>
    );
};