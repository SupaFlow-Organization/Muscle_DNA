'use client';

import { motion } from 'framer-motion';

interface FlavorBadgeProps {
  name: string;
  type: string;
  index?: number;
}

export function FlavorBadge({ name, type, index = 0 }: FlavorBadgeProps) {
  return (
    <motion.div 
      className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent hover:from-gold/10 transition-all border border-gold/10 hover:border-gold/20"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <p className="font-semibold text-foreground mb-2">{name}</p>
      <p className="text-sm text-gold">{type}</p>
    </motion.div>
  );
}
