'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleShopNow = () => {
    const message = 'Hi! I am interested in Muscle DNA products. Please provide more details and pricing.';
    const url = `https://wa.me/+918237450891?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash and hash changes
  useEffect(() => {
    // Set initial hash from URL
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/', hash: '#hero' },
    { label: 'Products', href: '/', hash: '#products' },
    { label: 'About', href: '/', hash: '#science' },
    { label: 'Contact Us', href: '/', hash: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hash: string) => {
    e.preventDefault();
    
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Update active hash state immediately
    setActiveHash(hash);
    
    // Update URL with hash - this will change the URL to show the route
    const newUrl = href + hash;
    router.push(newUrl);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        // Adjust offset based on screen size
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 64 : 80; // 64px for mobile navbar, 80px for desktop
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Wait for menu animation to complete
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`bg-white border-b border-gold/20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}>
        <div className="container-custom px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-40 h-16 lg:w-52 lg:h-20 hover-scale">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Muscle-Dna-Logo-Le21ti1qq4Zyzw3GZyu0MQDMo22067.png"
                  alt="Muscle DNA"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href + item.hash}
                    onClick={(e) => handleNavClick(e, item.href, item.hash)}
                    className={`text-foreground hover:text-gold font-medium text-sm transition-colors relative group ${
                      activeHash === item.hash ? 'text-gold' : ''
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Shop Now Button */}
              <button 
                onClick={handleShopNow}
                className="hidden lg:block bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg hover-scale-button"
              >
                Shop Now
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gold/20 bg-white overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={item.href + item.hash}
                      onClick={(e) => handleNavClick(e, item.href, item.hash)}
                      className={`block py-3 px-4 text-foreground hover:text-gold hover:bg-gold/5 font-medium transition-all rounded-lg active:bg-gold/10 ${
                        activeHash === item.hash ? 'text-gold bg-gold/10' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Shop Now Button - Mobile Only */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.08, duration: 0.3 }}
                  className="pt-2"
                >
                  <motion.button 
                    onClick={handleShopNow}
                    className="w-full bg-gold hover:bg-gold-dark text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Shop Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

