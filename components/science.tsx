'use client';

import { motion } from 'framer-motion';
import { SectionHeader, StatCard } from './ui';
import { scienceStats } from '@/data';
import { Microscope, FlaskConical, Dna, Award, Shield, Sparkles } from 'lucide-react';

export default function Science() {
  const stats = scienceStats;

  const certifications = [
    { icon: Award, text: 'GMP Certified', color: 'from-gold/20 to-gold/5' },
    { icon: Shield, text: 'FDA Approved', color: 'from-gold/20 to-gold/5' },
    { icon: Microscope, text: 'Lab Tested', color: 'from-gold/20 to-gold/5' },
    { icon: FlaskConical, text: 'Pure Formula', color: 'from-gold/20 to-gold/5' }
  ];

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
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="science" className="section-padding bg-gradient-to-b from-white via-gold/5 to-white relative overflow-hidden">
      {/* Animated DNA Helix Background - CSS animated */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 dna-rotate-slow">
          <Dna className="w-64 h-64 text-gold" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 dna-rotate-reverse">
          <Dna className="w-48 h-48 text-gold" />
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <SectionHeader 
          eyebrow="Breakthrough Science"
          title="Where DNA Meets Destiny"
          description="Precision-engineered at the molecular level, our formulations harness cutting-edge genetic research to unlock your body's ultimate potential."
          className="mb-10 md:mb-12 lg:mb-16"
        />

        {/* Certifications Bar */}
        <div
          className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-12 md:mb-16 lg:mb-20 animate-fade-in-up"
        >
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 md:gap-3 bg-gradient-to-br ${cert.color} backdrop-blur-sm border border-gold/30 rounded-xl px-4 md:px-6 py-2.5 md:py-3 shadow-md hover:shadow-xl transition-all hover-lift-scale`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center">
                <cert.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              </div>
              <span className="font-bold text-xs md:text-sm text-foreground whitespace-nowrap">
                {cert.text}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <StatCard
                number={stat.number}
                label={stat.label}
                description={stat.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Scientific Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 lg:mt-24 relative"
        >
          <div className="bg-gradient-to-br from-gold/10 via-white to-gold/5 rounded-3xl md:rounded-[2.5rem] border-2 border-gold/20 p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Floating sparkles */}
            <motion.div
              className="absolute top-6 right-6 text-gold/20"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 md:w-16 md:h-16" />
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 text-gold/20"
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>

            <div className="relative z-10">
              <div className="text-center mb-8 md:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-4"
                >
                  <Microscope className="w-4 h-4 text-gold" />
                  <span className="text-gold font-bold text-xs md:text-sm uppercase tracking-wider">
                    Our Scientific Process
                  </span>
                </motion.div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Rigorous Testing & Quality Control
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                  Every batch undergoes multiple stages of testing to ensure purity, potency, and safety
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { step: '01', title: 'Raw Material Testing', desc: 'Source verification & purity analysis' },
                  { step: '02', title: 'Manufacturing', desc: 'GMP-certified production facilities' },
                  { step: '03', title: 'Quality Assurance', desc: 'Third-party lab verification' },
                  { step: '04', title: 'Final Inspection', desc: 'Batch testing & certification' }
                ].map((process, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-5 md:p-6 hover:border-gold/40 hover:shadow-xl transition-all"
                  >
                    <div className="text-gold font-display text-4xl md:text-5xl font-bold mb-3 opacity-30">
                      {process.step}
                    </div>
                    <h4 className="font-bold text-base md:text-lg text-foreground mb-2">
                      {process.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {process.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 md:mt-12 text-center"
              >
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Want to see our lab reports?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold hover:bg-gold-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <FlaskConical className="w-4 h-4 md:w-5 md:h-5" />
                  View Certificates
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
