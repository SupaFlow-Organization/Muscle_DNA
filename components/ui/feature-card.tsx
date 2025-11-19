'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="bg-white border border-gold/10 rounded-3xl p-10 hover:border-gold/30 transition-all duration-300 h-full relative overflow-hidden group-hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <motion.div 
          className="text-5xl mb-8 relative z-10"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-display font-semibold text-2xl text-foreground mb-4 relative z-10">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed relative z-10">
          {description}
        </p>
        
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold via-gold-dark to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </motion.div>
  );
}
