import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black text-white">
      {/* Background Image/Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10"></div>

      {/* Profile Image as Background or Large Visual */}
      <div className="absolute inset-0">
        <img
          src={PROFILE_IMAGE}
          alt="Dharitree Das"
          className="w-full h-full object-cover object-top opacity-80"
        />
      </div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium tracking-wide mb-6">
            EST. 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            Dharitree Das
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
            Political Science Post-Graduate & Aspiring Professional.
            <span className="block mt-2 text-gray-400 text-lg">Ready to contribute meaningful leadership and perspective.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};