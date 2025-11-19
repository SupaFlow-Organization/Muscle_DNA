'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className = '' }: SectionHeaderProps) {
  return (
    <motion.div 
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-gold font-semibold tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm mb-4 md:mb-6 uppercase inline-flex items-center gap-2">
        <span className="w-6 md:w-8 h-px bg-gold"></span>
        {eyebrow}
        <span className="w-6 md:w-8 h-px bg-gold"></span>
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 text-balance px-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
