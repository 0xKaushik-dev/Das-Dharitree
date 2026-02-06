import React from 'react';
import { motion } from 'framer-motion';

export const FeaturedVisual: React.FC = () => {
  return (
    <section className="py-12 bg-background px-6">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden h-[500px] relative bg-neutral-900">
        {/* Abstract geometric background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),_transparent_70%)]"></div>
          <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] w-full h-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5"></div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h3
            initial={{ letterSpacing: '0.2em', opacity: 0 }}
            whileInView={{ letterSpacing: '0.05em', opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white text-center px-4"
          >
            The most elegant solution <br />
            <span className="text-gray-500">we've ever implemented.</span>
          </motion.h3>
        </div>

        <div className="absolute bottom-12 left-12">
          <span className="text-7xl font-bold text-white/5">02</span>
        </div>
      </div>
    </section>
  );
};
