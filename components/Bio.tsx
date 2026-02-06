import React from 'react';
import { motion } from 'framer-motion';

export const Bio: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium leading-tight text-primary max-w-4xl"
        >
          <span className="text-muted-foreground">Professional Objective — </span>
          To be professionally associated with an organization to accept challenges, utilize education and experience meaningfully, and work hard towards achieving collective goals.
        </motion.h2>
      </div>
    </section>
  );
};
