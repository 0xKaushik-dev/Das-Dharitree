import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { clsx } from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, className, id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={clsx("py-12 md:py-24 px-4 sm:px-6", className)}
    >
      <motion.div variants={fadeInUp} transition={{ delay }}>
        {children}
      </motion.div>
    </motion.section>
  );
};