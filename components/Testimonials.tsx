import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Section } from './ui/Section';
import { ArrowDown } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="flex justify-center py-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-100 text-secondary">
              Personal Info & Languages <ArrowDown size={14} />
          </div>
      </div>

      <Section className="!py-0">
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 ${t.featured ? 'md:bg-white' : ''}`}
            >
              
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                <div>
                  <p className="font-medium text-sm text-primary">{t.author === 'Language' ? 'Language Known' : t.author}</p>
                  <p className="text-xs text-secondary">{t.company}</p>
                </div>
              </div>

              {t.author === 'Language' ? (
                   <h4 className="text-xl font-medium mb-1 leading-snug">
                     {idx === 0 ? "English" : idx === 1 ? "Odia" : "Hindi"}
                   </h4>
              ) : (
                   <h4 className="text-xl font-medium mb-1 leading-snug">{t.quote}</h4>
              )}
              
              <p className="text-secondary text-sm mt-2 leading-relaxed">
                  {t.author === 'Language' ? t.quote : null}
              </p>

            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};