import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check local storage or system preference
    const darkMode = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none`}
    >
      <div
        className={`
          pointer-events-auto
          flex items-center justify-between
          w-full max-w-7xl
          px-6 py-4
          rounded-full
          transition-all duration-300
          ${isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg border border-border'
            : 'bg-transparent border border-transparent'}
        `}
      >
        <div className="flex items-center gap-4">
          <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white mix-blend-difference'}`}>
            Dharitree
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-accent/10 text-primary' : 'hover:bg-white/10 text-white'}`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => window.location.href = 'mailto:dasdharitree60@gmail.com'}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${isScrolled ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-white text-black hover:bg-white/90'}`}
          >
            Contact
          </button>
        </div>
      </div>
    </motion.header>
  );
};