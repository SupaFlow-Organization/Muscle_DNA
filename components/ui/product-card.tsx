'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonPremium } from './button-premium';

interface ProductCardProps {
  name: string;
  flavor: string;
  category: string;
  description: string;
  image: string;
  index?: number;
  onShopClick?: () => void;
}

export function ProductCard({ 
  name, 
  flavor, 
  category, 
  description, 
  image, 
  index = 0,
  onShopClick 
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <div className="relative bg-white border border-gold/15 rounded-3xl overflow-hidden hover:border-gold/40 transition-all hover:shadow-2xl h-full flex flex-col group-hover:scale-[1.02] duration-300">
        <div className="h-96 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden flex items-center justify-center p-8">
          <Image
            src={image}
            alt={`${name} - ${flavor}`}
            width={300}
            height={360}
            className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-10 flex-1 flex flex-col">
          <p className="text-gold text-xs font-semibold tracking-[0.15em] mb-3 uppercase">
            {category}
          </p>
          <h3 className="font-display font-semibold text-2xl text-foreground mb-2">
            {name}
          </h3>
          <p className="text-gold/80 font-medium mb-5">{flavor}</p>
          <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4 pt-6 border-t border-gold/10">
            <ButtonPremium 
              variant="primary" 
              className="w-full"
              onClick={onShopClick}
            >
              Shop Now
            </ButtonPremium>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
