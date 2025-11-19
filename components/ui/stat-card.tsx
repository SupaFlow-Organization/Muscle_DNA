'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  index?: number;
  variant?: 'default' | 'compact';
}

export function StatCard({ number, label, description, index = 0, variant = 'default' }: StatCardProps) {
  if (variant === 'compact') {
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-gold font-display font-bold text-3xl lg:text-4xl mb-1">{number}</p>
        <p className="text-sm text-muted-foreground tracking-wide">{label}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white border border-gold/15 rounded-3xl p-12 text-center hover:border-gold/30 transition-all hover:shadow-xl group"
    >
      <div className="text-6xl font-display font-bold text-gold mb-4 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <h3 className="font-display font-semibold text-xl text-foreground mb-3">
        {label}
      </h3>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
