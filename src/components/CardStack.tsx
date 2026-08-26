'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';

interface CardItem {
  id: string;
  image: string;
  title: string;
  creator: string;
  rotation: number;
  zIndex: number;
  offsetY: number;
  factor: number;
}

export const CardStack = () => {
  const [activeIndex, setActiveIndex] = useState(2); // center card active by default
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards: CardItem[] = [
    {
      id: '1',
      image: '/assets/hero-model-1.png',
      title: 'Queen of the Nile',
      creator: 'Regina Meessen',
      rotation: -16,
      zIndex: 10,
      offsetY: 30,
      factor: -2,
    },
    {
      id: '2',
      image: '/assets/hero-model-2.png',
      title: 'Braided Identity #02',
      creator: 'Tae Alvón',
      rotation: -8,
      zIndex: 20,
      offsetY: 15,
      factor: -1,
    },
    {
      id: '5',
      image: '/assets/hero-model-5.png',
      title: 'Ethereal Ochre Crown',
      creator: 'Jaye Okonkwo',
      rotation: 0,
      zIndex: 30,
      offsetY: 0,
      factor: 0,
    },
    {
      id: '3',
      image: '/assets/hero-model-3.png',
      title: 'Bronze Royalty',
      creator: 'Min Sandhu',
      rotation: 8,
      zIndex: 20,
      offsetY: 15,
      factor: 1,
    },
    {
      id: '4',
      image: '/assets/hero-model-4.png',
      title: 'Tribal Geometry',
      creator: 'Amina Diop',
      rotation: 16,
      zIndex: 10,
      offsetY: 30,
      factor: 2,
    },
  ];

  // Dynamic horizontal offset scaling to span full screen width on large displays
  const getOffsetX = (factor: number) => {
    if (windowWidth < 640) return factor * 55; // Mobile compact stack
    if (windowWidth < 1024) return factor * 140; // Tablet stack
    if (windowWidth < 1280) return factor * 240; // Laptop stack
    if (windowWidth < 1536) return factor * 320; // Desktop wide stack
    return factor * 400; // Ultra-wide full screen stack
  };

  return (
    <div className="relative w-full py-8 sm:py-16 flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px] overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-brand-gold-glow blur-3xl rounded-full pointer-events-none" />

      <div className="relative w-full max-w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center">
        {cards.map((card, idx) => {
          const isActive = activeIndex === idx;
          const calculatedX = getOffsetX(card.factor);

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{
                opacity: 1,
                scale: isActive ? 1.06 : 0.92,
                rotate: card.rotation,
                x: calculatedX,
                y: card.offsetY + (isActive ? -24 : 0),
                zIndex: isActive ? 40 : card.zIndex,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                y: card.offsetY - 30,
                zIndex: 50,
                transition: { duration: 0.25 },
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`absolute cursor-pointer rounded-2xl p-2 bg-card-bg border border-card-border shadow-2xl transition-all duration-300 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[320px] sm:h-[400px] md:h-[430px] overflow-hidden group ${
                isActive ? 'ring-2 ring-brand-gold shadow-brand-gold-glow' : 'opacity-95'
              }`}
            >
              {/* Card Image */}
              <div className="relative w-full h-[80%] rounded-xl overflow-hidden bg-bg-primary">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 200px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
                
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white border border-white/10 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-gold" />
                  <span>On-Chain</span>
                </div>
              </div>

              {/* Card Details Footer */}
              <div className="p-2.5 sm:p-3 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text-primary group-hover:text-brand-gold transition-colors line-clamp-1">
                    {card.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-text-muted line-clamp-1">by {card.creator}</p>
                </div>
                
                <div className="p-1 sm:p-1.5 rounded-lg bg-bg-tertiary text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
