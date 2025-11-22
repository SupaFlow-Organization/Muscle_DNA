'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  productImage: string;
  title: string;
  subtitle: string;
  certificationBadge?: string;
  features: string[];
  backgroundColor: string;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      productImage: '/images/Black_product_box.jpg',
      title: 'BIO WHEY PROTEIN',
      subtitle: 'Chocolate Fudge',
      certificationBadge: '/trustified-badge.png',
      features: [
        '25g Protein Per Serving',
        '7g BCAA',
        '50% BCAAs'
      ],
      backgroundColor: 'from-white via-gold/5 to-gold/10'
    },
    {
      id: 2,
      productImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2015.14.38_ef22c492-Simml0VDaeZh6FGHBsKnzf1WUIFAY8.jpg',
      title: 'BIO WHEY PROTEIN',
      subtitle: 'Chocolate Almond Crunch',
      certificationBadge: '/trustified-badge.png',
      features: [
        '25g Protein Per Serving',
        '16g Creatine',
        '5g BCAA'
      ],
      backgroundColor: 'from-white via-gold/5 to-gold/10'
    },
    {
      id: 3,
      productImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2015.14.40_1ef9de40-y434UxyKKMwKmVS31CqVhsn3tMrMHN.jpg',
      title: 'BIO PROTEIN GAINER',
      subtitle: 'Kesar Badaam',
      certificationBadge: '/trustified-badge.png',
      features: [
        '20g Protein Per Serving',
        '60g Carbs',
        '3g Creatine'
      ],
      backgroundColor: 'from-white via-gold/5 to-gold/10'
    },
    {
      id: 4,
      productImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2015.14.43_00423002-NJ3Lx9Brcm8b1fjTXq0xszcRLpZtlD.jpg',
      title: 'LAUNCHER PRE-WORKOUT',
      subtitle: 'Pineapple Blast',
      certificationBadge: '/trustified-badge.png',
      features: [
        'Explosive Energy',
        'Enhanced Focus',
        'Maximum Endurance'
      ],
      backgroundColor: 'from-white via-gold/5 to-gold/10'
    },
    {
      id: 5,
      productImage: '/images/BCAA_new.png',
      title: 'CURRENT AMINOS',
      subtitle: 'White Pineapple',
      certificationBadge: '/trustified-badge.png',
      features: [
        'BCAA + Energy',
        'Muscle Recovery',
        'Enhanced Performance'
      ],
      backgroundColor: 'from-white via-gold/5 to-gold/10'
    },


  ];

  const handleShopNow = () => {
    const currentProduct = slides[currentSlide];
    const message = `Hi! I am interested in ${currentProduct.title} - ${currentProduct.subtitle}. Please provide more details and pricing.`;
    const url = `https://wa.me/+918237450891?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleMoreProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide every 3 seconds (faster)
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
      scale: 0.97
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 600 : -600,
      opacity: 0,
      scale: 0.97
    })
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-gold/5 pt-20 sm:pt-24 md:pt-20 pb-6 md:pb-0">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 md:w-96 md:h-96 bg-gold/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-[auto] md:min-h-[650px] lg:min-h-[750px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 40, mass: 0.7 },
              opacity: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }
            }}
            className="relative md:absolute md:inset-0 hero-slide"
          >
            <div className={`h-full bg-gradient-to-br ${slides[currentSlide].backgroundColor}`}>
              <div className="container-custom h-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-center min-h-[auto] md:h-full py-6 sm:py-8 md:py-12 lg:py-16">

                  {/* Product Image - Mobile First */}
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative flex items-center justify-center w-full order-1 lg:order-1 flex-shrink-0"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[400px] mx-auto h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
                      {/* Glow effect behind product */}
                      <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-gold/5 to-transparent blur-2xl scale-110"></div>

                      {/* Product image with background */}
                      <div className="relative z-10 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 h-full flex items-center justify-center">
                        <Image
                          src={slides[currentSlide].productImage}
                          alt={slides[currentSlide].title}
                          width={400}
                          height={500}
                          className="w-auto h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] md:drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
                          priority
                        />
                      </div>

                      {/* Floating sparkle elements - hidden on small mobile */}
                      <motion.div
                        className="hidden sm:block absolute top-1/4 right-1/4 w-2 h-2 bg-gold rounded-full"
                        animate={{
                          y: [-20, 20, -20],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="hidden sm:block absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-gold/60 rounded-full"
                        animate={{
                          x: [-15, 15, -15],
                          opacity: [0.2, 0.8, 0.2],
                          scale: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div
                        className="hidden sm:block absolute bottom-1/3 right-1/3 w-1 h-1 bg-gold/40 rounded-full"
                        animate={{
                          y: [15, -15, 15],
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content - Mobile First */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="space-y-2.5 sm:space-y-3 md:space-y-5 lg:space-y-7 text-center lg:text-left order-2 lg:order-2 w-full"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {/* Eyebrow text */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="inline-flex items-center gap-1.5 md:gap-2 bg-gold/10 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gold rounded-full animate-pulse"></span>
                      <span className="text-gold font-semibold text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
                        Science-Backed Excellence
                      </span>
                    </motion.div>

                    {/* Title and Subtitle */}
                    <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                      <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12, duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.15]"
                      >
                        {slides[currentSlide].title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold font-semibold"
                      >
                        {slides[currentSlide].subtitle}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18, duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-[11px] sm:text-xs md:text-sm lg:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 pt-0.5 sm:pt-1"
                      >
                        Engineered for Champions. Scientifically crafted formulations that transform your body's potential into extraordinary performance.
                      </motion.p>
                    </div>

                    {/* Features Grid - Always Horizontal, One Line for All Devices */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex flex-row gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 justify-center lg:justify-start flex-nowrap w-full"
                    >
                      {slides[currentSlide].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.22 + index * 0.03, duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          className="bg-white border border-gold/20 p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 rounded-lg md:rounded-xl shadow-md hover:shadow-xl hover:border-gold/40 transition-all duration-150 group flex-1 min-w-0"
                        >
                          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                              <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-semibold text-foreground text-left truncate">{feature}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 md:gap-3 justify-center lg:justify-start"
                    >
                      <motion.button
                        onClick={handleShopNow}
                        className="bg-gold hover:bg-gold-dark text-white px-6 py-2 sm:px-7 sm:py-2.5 md:px-9 md:py-3.5 rounded-lg font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-2xl transition-all duration-150 w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      >
                        Shop Now
                      </motion.button>
                      <motion.button
                        onClick={handleMoreProducts}
                        className="border-2 border-gold text-gold hover:bg-gold/10 px-6 py-2 sm:px-7 sm:py-2.5 md:px-9 md:py-3.5 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-all duration-150 w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      >
                        More Products
                      </motion.button>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.28, duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex flex-wrap items-center gap-2 sm:gap-2.5 md:gap-4 lg:gap-5 justify-center lg:justify-start pt-2 sm:pt-2.5 md:pt-3 border-t border-gold/10"
                    >
                      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground whitespace-nowrap">Certified Quality</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground whitespace-nowrap">Lab Tested</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground whitespace-nowrap">50K+ Customers</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        {/* Slide Indicators - Hidden on mobile */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ease-out ${index === currentSlide
                ? 'w-10 bg-gold'
                : 'w-2 bg-gold/30 hover:bg-gold/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
