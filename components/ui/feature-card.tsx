'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface FeatureCardProps {
  icon: string;
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

  // Get the icon component from lucide-react
  const IconComponent = (Icons as any)[icon] || Icons.Sparkles;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="bg-white border border-gold/10 rounded-3xl p-8 md:p-10 hover:border-gold/30 transition-all duration-300 h-full relative overflow-hidden group-hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <motion.div 
          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative z-10 group-hover:from-gold/30 group-hover:to-gold/10 transition-all"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-gold" strokeWidth={2} />
        </motion.div>
        
        <h3 className="font-sans font-bold text-xl md:text-2xl text-foreground mb-3 md:mb-4 relative z-10 tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base relative z-10">
          {description}
        </p>
        
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold via-gold-dark to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </motion.div>
  );
}
