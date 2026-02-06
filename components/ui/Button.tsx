import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#111] text-white hover:bg-black hover:scale-[1.02]",
    secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.02]",
    outline: "border border-gray-200 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-600 hover:text-black hover:bg-gray-100/50"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={clsx(
        baseStyles, 
        variants[variant], 
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};