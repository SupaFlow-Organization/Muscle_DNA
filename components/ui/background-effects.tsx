'use client';

import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  variant?: 'default' | 'hero' | 'features';
}

export function BackgroundEffects({ variant = 'default' }: BackgroundEffectsProps) {
  if (variant === 'hero') {
    return (
      <>
        <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl -z-10"></div>
        <motion.div 
          className="absolute top-1/4 left-0 w-1/3 h-0.5 bg-gradient-to-r from-gold/0 via-gold/40 to-transparent"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </>
    );
  }

  if (variant === 'features') {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-muted/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl"></div>
    </div>
  );
}
