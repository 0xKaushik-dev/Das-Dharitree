import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { PROFILE_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center md:text-left"
    >
      <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <div className="relative group">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg bg-gray-200 flex items-center justify-center">
            <img src={PROFILE_IMAGE} alt="Dharitree Das" className="w-full h-full object-cover" />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm"
          >
            <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg text-primary">Dharitree Das</h2>
          <p className="text-secondary text-sm">Political Science Post-Graduate</p>
        </div>
      </motion.div>

      <motion.h1 
        variants={fadeInUp}
        className="text-4xl md:text-6xl font-semibold tracking-tight text-primary mb-6 leading-[1.1]"
      >
        Aspiring Professional <br className="hidden md:block" />
        <span className="text-gray-400">Ready to contribute.</span>
      </motion.h1>

      <motion.p 
        variants={fadeInUp}
        className="text-lg text-secondary max-w-2xl mb-10 leading-relaxed"
      >
        To be professionally associated with an organization with an object to accept the challenges and utilize my education and experience more meaningfully and work hard towards achieving the goals of the organization.
      </motion.p>

      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button className="gap-2" onClick={() => window.location.href = 'mailto:dasdharitree60@gmail.com'}>
          Contact Me <Phone size={16} />
        </Button>
        <Button variant="secondary" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>
          View Education
        </Button>
      </motion.div>
    </motion.section>
  );
};