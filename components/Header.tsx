import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Sun, Circle } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none`}
    >
      <div 
        className={`
          pointer-events-auto
          flex items-center justify-between
          w-full max-w-4xl
          px-4 py-3 sm:px-6 sm:py-3.5
          rounded-full
          transition-all duration-300
          ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-gray-100/50' : 'bg-transparent'}
        `}
      >
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg tracking-tight text-primary">Dharitree</span>
          
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="relative flex items-center justify-center w-3 h-3">
               <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent"></span>
               <span className="relative inline-flex w-2 h-2 rounded-full bg-accent"></span>
            </div>
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Available as a Tutor</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Sun className="w-5 h-5 text-gray-600" />
           </button>
           <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium">
             Menu
           </button>
        </div>
      </div>
    </motion.header>
  );
};