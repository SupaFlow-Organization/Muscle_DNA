'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, ProductCard } from './ui';
import { products } from '@/data';
import { Sparkles, Award, Zap } from 'lucide-react';

export default function Products() {
  // Duplicate products array for infinite scroll effect
  // Using 2 copies ensures smooth looping when animation reaches 50%
  const duplicatedProducts = [...products, ...products];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const autoScrollRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll animation
  useEffect(() => {
    if (isDragging || isAutoScrollPaused) return;

    const animate = () => {
      setCurrentTranslate((prev) => {
        const newValue = prev - 1; // Scroll speed: 1px per frame

        // Check if we need to loop
        if (scrollContainerRef.current) {
          const containerWidth = scrollContainerRef.current.scrollWidth / 2;
          if (newValue < -containerWidth) {
            return 0;
          }
        }

        return newValue;
      });

      autoScrollRef.current = requestAnimationFrame(animate);
    };

    autoScrollRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isDragging, isAutoScrollPaused]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Prevent default touch behavior
    const preventDefaultTouch = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    container.addEventListener('touchmove', preventDefaultTouch, { passive: false });

    return () => {
      container.removeEventListener('touchmove', preventDefaultTouch);
    };
  }, [isDragging]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };


  const highlights = [
    { icon: Award, text: 'Lab Certified', subtext: '100% Pure' },
    { icon: Zap, text: 'Fast Results', subtext: 'Within 30 Days' },
    { icon: Sparkles, text: 'Premium Quality', subtext: 'No Fillers' }
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-gold/5 via-white to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <SectionHeader
          eyebrow="Elite Performance Arsenal"
          title="Engineered for Greatness"
          description="Every formula is a masterpiece of nutritional science, designed to transform your body and elevate your performance beyond limits."
          className="mb-8 md:mb-12"
        />

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20"
        >
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gold/20 rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-md hover:shadow-xl hover:border-gold/40 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                <highlight.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm md:text-base text-foreground">{highlight.text}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{highlight.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Horizontal Scroll Products */}
        <div className="relative w-full overflow-hidden touch-pan-y">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 w-max cursor-grab active:cursor-grabbing swipeable-carousel"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {duplicatedProducts.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96 product-card-hover"
              >
                <ProductCard
                  {...product}
                  price={product.price ?? 0}
                  index={index}
                  onShopClick={() => console.log(`Shop ${product.name}`)}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );

  // Mouse drag handlers
  function handleMouseDown(e: React.MouseEvent) {
    setIsDragging(true);
    setIsAutoScrollPaused(true);
    setStartX(e.pageX);
    setPrevTranslate(currentTranslate);

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.pageX;
    const diff = currentX - startX;
    setCurrentTranslate(prevTranslate + diff);
  }

  function handleMouseUp() {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
    checkInfiniteLoop();

    // Resume auto-scroll after 3 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 3000);
  }

  function handleMouseLeave() {
    if (isDragging) {
      setIsDragging(false);
      setPrevTranslate(currentTranslate);
      checkInfiniteLoop();

      // Resume auto-scroll after 3 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 3000);
    }
  }

  // Touch handlers
  function handleTouchStart(e: React.TouchEvent) {
    setIsDragging(true);
    setIsAutoScrollPaused(true);
    setStartX(e.touches[0].pageX);
    setPrevTranslate(currentTranslate);

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const diff = currentX - startX;
    setCurrentTranslate(prevTranslate + diff);
  }

  function handleTouchEnd() {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
    checkInfiniteLoop();

    // Resume auto-scroll after 3 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 3000);
  }

  function checkInfiniteLoop() {
    if (!scrollContainerRef.current) return;

    const containerWidth = scrollContainerRef.current.scrollWidth / 2; // Half because we duplicated

    // If scrolled past the first set, reset to beginning of second set
    if (currentTranslate < -containerWidth) {
      setCurrentTranslate(0);
      setPrevTranslate(0);
    }
    // If scrolled before the beginning, jump to end of first set
    else if (currentTranslate > 0) {
      setCurrentTranslate(-containerWidth);
      setPrevTranslate(-containerWidth);
    }
  }
}
