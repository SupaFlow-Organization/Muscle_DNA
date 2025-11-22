'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/+918237450891?text=${encodeURIComponent('Hi! I am interested in Muscle DNA products.')}`;
    window.open(url, '_blank');
  };
  
  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-xl bg-green-500 animate-ping opacity-20"></span>
      
      {/* Tooltip - hidden on mobile */}
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us on WhatsApp
      </span>
    </motion.button>
  );
}
