'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const handleScrollToProducts = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <footer id="footer" className="bg-gradient-to-b from-white to-gold/10 border-t border-gold/30 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 md:mb-6">
              <motion.div
                className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Muscle-Dna-Logo-Le21ti1qq4Zyzw3GZyu0MQDMo22067.png"
                  alt="Muscle DNA"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </motion.div>
              <motion.p
                className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed font-medium max-w-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Genetic optimization meets premium supplementation.
              </motion.p>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-4 md:mb-6 text-base md:text-lg text-foreground">Products</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              {['Whey Protein', 'Mass Gainer', 'Pre-Workout', 'BCAA'].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <motion.button
                    onClick={handleScrollToProducts}
                    className="hover:text-gold transition-colors inline-block text-left bg-none border-none p-0 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-4 md:mb-6 text-base md:text-lg text-foreground">Address</h4>
            <div className="space-y-3 text-sm md:text-base text-muted-foreground">
              <motion.p
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="leading-relaxed"
              >
                Nutrition vision pvt .ltd<br />
                B-28 /B,Ghatkopar Ind Est ,
                <br />L.B.S. marg Ghatkopar(w)<br />
                mumbai -400086<br />
                India
              </motion.p>
            </div>
          </motion.div>

          {/* Phone & Email */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-4 md:mb-6 text-base md:text-lg text-foreground">Contact Us</h4>
            <div className="space-y-3 text-sm md:text-base text-muted-foreground">
              <motion.div
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                <p className="font-medium text-foreground mb-1">Phone</p>
                <motion.a
                  href="tel:+919309840897"
                  className="hover:text-gold transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  +91 9309840897
                </motion.a>
                <br />
                <motion.a
                  href="tel:+917083115629"
                  className="hover:text-gold transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  +91 7083115629
                </motion.a>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="font-medium text-foreground mb-1">Email</p>
                <motion.a
                  href="mailto:muscledna.store@gmail.com"
                  className="hover:text-gold transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  muscledna.store@gmail.com
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gold/30 pt-8 md:pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-muted-foreground gap-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              &copy; 2025 Muscle DNA. All rights reserved.
            </motion.p>
            <motion.div
              className="flex gap-6 md:gap-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/muscle._dna?igsh=MWd2OTViOTZ3eWx1Mg==' },
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/17odwx7kW5/' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-gold transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
