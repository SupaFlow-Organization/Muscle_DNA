'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonPremiumProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  className?: string;
  onClick?: () => void;
}

export function ButtonPremium({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  onClick 
}: ButtonPremiumProps) {
  const baseClasses = 'btn-premium font-semibold rounded-full transition-all';
  
  const variantClasses = {
    primary: 'bg-gold text-white hover:bg-gold-dark shadow-lg hover:shadow-2xl',
    secondary: 'border-2 border-gold text-gold hover:bg-gold/10'
  };

  const sizeClasses = {
    default: 'px-8 py-4',
    large: 'px-10 py-4'
  };

  return (
    <motion.button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
