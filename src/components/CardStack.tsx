'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardItem {
  id: string;
  image: string;
  title: string;
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
      title: 'Model Trio',
      rotation: -12,
      zIndex: 10,
      offsetY: 35,
      factor: -2,
    },
    {
      id: '2',
      image: '/assets/hero-model-2.png',
      title: 'Tribal Portrait',
      rotation: -6,
      zIndex: 20,
      offsetY: 18,
      factor: -1,
    },
    {
      id: '5',
      image: '/assets/hero-model-5.png',
      title: 'Ethereal Ochre Crown',
      rotation: 0,
      zIndex: 30,
      offsetY: 0,
      factor: 0,
    },
    {
      id: '3',
      image: '/assets/hero-model-3.png',
      title: 'Vibrant Red Portrait',
      rotation: 6,
      zIndex: 20,
      offsetY: 18,
      factor: 1,
    },
    {
      id: '4',
      image: '/assets/hero-model-4.png',
      title: 'Cowrie Shell Headpiece',
      rotation: 12,
      zIndex: 10,
      offsetY: 35,
      factor: 2,
    },
  ];

  // Calculate overlapping horizontal position to match exact Figma fanned arc
  const getOffsetX = (factor: number) => {
    if (windowWidth < 640) return factor * 60; // Mobile compact overlap
    if (windowWidth < 1024) return factor * 130; // Tablet overlap
    if (windowWidth < 1280) return factor * 165; // Laptop overlap
    return factor * 190; // Desktop fanned overlap matching Figma
  };

  return (
    <div className="relative w-full py-6 sm:py-10 flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px] overflow-hidden">
      
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-brand-gold-glow blur-3xl rounded-full pointer-events-none" />

      {/* Cards Deck Container */}
      <div className="relative w-full max-w-6xl h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center">
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
                scale: isActive ? 1.05 : 0.94,
                rotate: card.rotation,
                x: calculatedX,
                y: card.offsetY + (isActive ? -18 : 0),
                zIndex: isActive ? 40 : card.zIndex,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                y: card.offsetY - 20,
                zIndex: 50,
                transition: { duration: 0.25 },
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`absolute cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-300 w-[190px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[280px] sm:h-[390px] md:h-[440px] group ${
                isActive ? 'ring-2 ring-brand-gold shadow-brand-gold-glow' : 'opacity-95'
              }`}
            >
              {/* Full-bleed pure art image matching Figma design */}
              <div className="relative w-full h-full bg-neutral-900">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 200px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
