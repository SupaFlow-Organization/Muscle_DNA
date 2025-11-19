'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-sm border-b border-gold/10' : 'bg-transparent'
    }`}>
      <div className="container-custom px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative w-14 h-14">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Muscle-Dna-Logo-Le21ti1qq4Zyzw3GZyu0MQDMo22067.png"
                alt="Muscle DNA"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-2xl font-semibold text-foreground">Muscle DNA</h1>
              <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">Performance Science</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-10">
            {['Science', 'Features', 'Products'].map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground relative group tracking-wide"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button 
              className="px-7 py-3 bg-gold text-white rounded-full font-semibold text-sm hover:bg-gold-dark transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Now
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden pb-4 border-t border-gold/10 bg-white/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {['Science', 'Features', 'Products'].map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-sm font-semibold text-foreground hover:text-gold transition-colors"
                whileHover={{ x: 4 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              className="w-full mt-4 px-6 py-2.5 bg-gold text-white rounded-full font-bold hover:bg-gold-dark transition-all duration-500 ease-out"
              whileHover={{ scale: 1.02 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        )}
      </div>
    </header>
  );
}
