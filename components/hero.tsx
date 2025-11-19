'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ButtonPremium, StatCard, BackgroundEffects } from './ui';
import { heroStats } from '@/data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-gold/5">
      <BackgroundEffects variant="hero" />

      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[650px] relative">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8 z-10"
          >
            {/* Eyebrow text */}
            <motion.div variants={itemVariants} className="space-y-8" transition={{ duration: 0.8 }}>
              <motion.p 
                className="text-gold font-semibold tracking-[0.2em] text-sm uppercase inline-flex items-center gap-2"
                variants={itemVariants}
                transition={{ duration: 0.8 }}
              >
                <span className="w-8 h-px bg-gold"></span>
                Genetic Optimization
              </motion.p>
              
              {/* Main heading */}
              <h1 className="font-display text-6xl lg:text-8xl font-bold text-foreground leading-[1.1] text-balance">
                Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold">Genetic</span> Potential
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Where Muscle Meets Science. Experience the future of fitness with premium formulations designed to unlock your true genetic potential and maximize every workout.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 pt-8"
            >
              <ButtonPremium variant="primary">
                Explore Products
              </ButtonPremium>
              <ButtonPremium variant="secondary">
                Learn More
              </ButtonPremium>
            </motion.div>

            {/* Stats section */}
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-12 pt-12 border-t border-gold/15"
            >
              {heroStats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  number={stat.number}
                  label={stat.label}
                  variant="compact"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Product Image with Creative Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center items-center h-full"
          >
            
            {/* Background decorative shapes */}
            <div className="absolute inset-0 opacity-0 lg:opacity-100">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-gold/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute inset-12 border border-gold/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Accent dots */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-3 h-3 bg-gold/30 rounded-full blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gold/20 rounded-full blur-sm"
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Product image container */}
            <motion.div
              className="relative z-10"
              whileHover={{ 
                scale: 1.08,
                rotateZ: 8,
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: { type: "spring", stiffness: 200, damping: 15 },
                rotateZ: { type: "spring", stiffness: 200, damping: 15 }
              }}
            >
              <div className="relative w-80 lg:w-96">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Product image */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-15%20at%2015.14.38_ef22c492-Simml0VDaeZh6FGHBsKnzf1WUIFAY8.jpg"
                  alt="Muscle DNA Bio Whey Protein - Chocolate Almond Crunch"
                  width={380}
                  height={480}
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-12 right-6 lg:right-0 bg-white/80 backdrop-blur-md border border-gold/30 rounded-full px-4 py-2 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-xs lg:text-sm font-bold text-foreground">Premium Quality</p>
            </motion.div>

            {/* Bottom accent label */}
            <motion.div
              className="absolute bottom-12 left-0 lg:left-auto lg:right-12 bg-gold/90 text-white rounded-lg px-4 py-2 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-sm font-bold">Chocolate Almond Crunch</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
