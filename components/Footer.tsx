import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 pt-32 pb-12 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 max-w-4xl"
          >
            Ready to work with a <span className="text-gray-500 italic font-serif">professional creative?</span>
          </motion.h2>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => window.location.href = 'mailto:dasdharitree60@gmail.com'}
              className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
            >
              Start a conversation
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
              Explore Services
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex gap-4 mb-8">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">© 2026 Dharitree Das. All rights reserved.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
};