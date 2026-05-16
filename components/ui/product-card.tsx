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
  price: number;
  weight?: string;
  index?: number;
  onShopClick?: () => void;
}

export function ProductCard({
  name,
  flavor,
  category,
  description,
  image,
  price,
  weight,
  index = 0,
  onShopClick
}: ProductCardProps) {
  const handleGetMoreDetails = () => {
    const message = `Hi! I am interested in ${name} - ${flavor}. Please provide more details and pricing.`;
    const url = `https://wa.me/+919309840897?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group h-full"
    >
      <div className="relative bg-white border border-gold/15 rounded-3xl overflow-hidden hover:border-gold/40 transition-all hover:shadow-2xl h-full flex flex-col group-hover:scale-[1.02] duration-300">
        <div className="relative aspect-square bg-gradient-to-br from-white to-gray-50/50 overflow-hidden flex items-center justify-center flex-shrink-0">
          <Image
            src={image}
            alt={`${name} - ${flavor}`}
            width={300}
            height={300}
            className="object-contain group-hover:scale-110 transition-transform duration-500 p-3 sm:p-4"
          />
          {/* Weight Badge */}
          {weight && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
              <div className="bg-foreground/85 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-md flex items-center gap-1">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <span className="text-white font-bold text-[9px] sm:text-[10px] tracking-wide">{weight}</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 md:p-10 flex-1 flex flex-col">
          <p className="text-gold text-xs font-semibold tracking-[0.15em] mb-2 sm:mb-3 uppercase">
            {category}
          </p>
          <h3 className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-foreground mb-1 sm:mb-2">
            {name}
          </h3>
          <p className="text-gold/80 font-medium mb-3 sm:mb-5 text-sm sm:text-base">{flavor}</p>
          <p className="text-muted-foreground mb-4 sm:mb-8 flex-1 leading-relaxed line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm md:text-base">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-medium line-through">
              ₹{price}
            </span>
            <span className="text-gold font-medium">
              ₹{Math.round(price * 0.8)}
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gold/10 mt-auto">
            <div>
              <ButtonPremium
                variant="primary"
                className="w-full text-xs sm:text-sm md:text-base"
                onClick={handleGetMoreDetails}
              >
                Get More Details
              </ButtonPremium>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
