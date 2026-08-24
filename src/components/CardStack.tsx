'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ExternalLink } from 'lucide-react';

interface CardItem {
  id: string;
  image: string;
  title: string;
  creator: string;
  rotation: number;
  zIndex: number;
  offsetY: number;
}

export const CardStack = () => {
  const [activeIndex, setActiveIndex] = useState(2); // center card active by default

  const cards: CardItem[] = [
    {
      id: '1',
      image: '/assets/hero-model-1.png',
      title: 'Queen of the Nile',
      creator: 'Regina Meessen',
      rotation: -12,
      zIndex: 10,
      offsetY: 20,
    },
    {
      id: '2',
      image: '/assets/hero-model-2.png',
      title: 'Braided Identity #02',
      creator: 'Tae Alvón',
      rotation: -6,
      zIndex: 20,
      offsetY: 10,
    },
    {
      id: '5',
      image: '/assets/hero-model-5.png',
      title: 'Ethereal Ochre Crown',
      creator: 'Jaye Okonkwo',
      rotation: 0,
      zIndex: 30,
      offsetY: 0,
    },
    {
      id: '3',
      image: '/assets/hero-model-3.png',
      title: 'Bronze Royalty',
      creator: 'Min Sandhu',
      rotation: 6,
      zIndex: 20,
      offsetY: 10,
    },
    {
      id: '4',
      image: '/assets/hero-model-4.png',
      title: 'Tribal Geometry',
      creator: 'Amina Diop',
      rotation: 12,
      zIndex: 10,
      offsetY: 20,
    },
  ];

  return (
    <div className="relative w-full py-12 flex flex-col items-center justify-center min-h-[460px]">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative w-full max-w-4xl h-[420px] sm:h-[460px] flex items-center justify-center">
        {cards.map((card, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{
                scale: isActive ? 1.05 : 0.95,
                rotate: card.rotation,
                y: card.offsetY + (isActive ? -15 : 0),
                zIndex: isActive ? 40 : card.zIndex,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.25 },
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`absolute cursor-pointer rounded-2xl p-2 bg-[#1A1919] border border-neutral-700/80 shadow-2xl transition-all duration-300 w-[240px] sm:w-[280px] h-[340px] sm:h-[400px] overflow-hidden group ${
                isActive ? 'ring-2 ring-amber-500/80 shadow-amber-500/10' : 'opacity-90'
              }`}
            >
              {/* Card Image */}
              <div className="relative w-full h-[82%] rounded-xl overflow-hidden bg-neutral-900">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={true}
                  loading="eager"
                />
                
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white border border-white/10 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>On-Chain</span>
                </div>
              </div>

              {/* Card Details Footer */}
              <div className="p-3 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-1">by {card.creator}</p>
                </div>
                
                <div className="p-1.5 rounded-lg bg-neutral-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
