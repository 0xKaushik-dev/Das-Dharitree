import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Section } from './ui/Section';
import { ArrowDown, Star, Users, CheckCircle, Lightbulb } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div id="skills" className="max-w-4xl mx-auto space-y-8 pt-12">
      
      {/* Services Title */}
      <div className="flex justify-center py-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-100 text-secondary">
              Key Skills <ArrowDown size={14} />
          </div>
      </div>

      {/* Services Grid */}
      <Section className="!py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-[#f8f8f7] p-8 rounded-[2rem] flex flex-col justify-between min-h-[200px] group border border-transparent hover:border-gray-200 transition-colors"
            >
              <div>
                {idx === 0 && <Users className="mb-4 text-gray-400 group-hover:text-black transition-colors" />}
                {idx === 1 && <CheckCircle className="mb-4 text-gray-400 group-hover:text-black transition-colors" />}
                {idx === 2 && <Users className="mb-4 text-gray-400 group-hover:text-black transition-colors" />}
                {idx === 3 && <Lightbulb className="mb-4 text-gray-400 group-hover:text-black transition-colors" />}
                
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};