'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [peelState, setPeelState] = useState<{
    isPeeling: boolean;
    oldTheme: 'dark' | 'light';
    newTheme: 'dark' | 'light';
  }>({ isPeeling: false, oldTheme: theme, newTheme: theme });

  const prevThemeRef = useRef(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (prevThemeRef.current !== theme) {
      const oldTheme = prevThemeRef.current;
      const newTheme = theme;

      // Instantly switch DOM theme underneath so the new theme is exposed beneath
      const root = document.documentElement;
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }

      // Trigger slow 3D garment peeling transition
      setPeelState({
        isPeeling: true,
        oldTheme,
        newTheme,
      });

      const timer = setTimeout(() => {
        setPeelState((prev) => ({ ...prev, isPeeling: false }));
      }, 1650);

      prevThemeRef.current = theme;

      return () => clearTimeout(timer);
    } else {
      // Initial mount sync
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme, mounted]);

  return (
    <>
      {children}

      {/* Slow Hyper-Realistic 3D Garment Peel Overlay */}
      <AnimatePresence>
        {peelState.isPeeling && (
          <div className="fixed inset-0 z-[9999] pointer-events-none [perspective:2000px] overflow-hidden">
            
            {/* Ambient drop shadow cast on the new theme underneath as cloth lifts */}
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 0.4, 0] }}
              transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-black/60 pointer-events-none backdrop-blur-[1px]"
            />

            {/* Main Peeling Garment Sheet (Old Theme Layer) */}
            <motion.div
              initial={{
                x: '0%',
                y: '0%',
                rotateZ: 0,
                rotateY: 0,
                rotateX: 0,
                skewY: 0,
                scale: 1,
              }}
              animate={{
                x: '-145%',
                y: '45%',
                rotateZ: -28,
                rotateY: 22,
                rotateX: -10,
                skewY: -12,
                scale: 0.94,
              }}
              transition={{
                duration: 1.6,
                ease: [0.25, 1, 0.5, 1], // slow luxurious physical pull curve
              }}
              style={{
                transformOrigin: 'bottom left',
                transformStyle: 'preserve-3d',
              }}
              className={`absolute inset-0 w-full h-full border-r-[10px] border-amber-500/60 ${
                peelState.oldTheme === 'dark'
                  ? 'bg-[#131212] text-white shadow-[50px_50px_120px_rgba(0,0,0,0.95)]'
                  : 'bg-white text-neutral-900 shadow-[50px_50px_120px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Garment Fabric Grain & Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-amber-500/10 to-transparent pointer-events-none" />

              {/* Garment Inner Lining (Reversed Gold/Black Silk Backside) */}
              <div className="absolute top-0 right-0 bottom-0 w-48 bg-gradient-to-l from-amber-600/40 via-amber-500/20 to-transparent pointer-events-none" />

              {/* Moving Fabric Wrinkle & Fold Edge Highlight */}
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: '-100%', opacity: [0, 1, 0.8, 0] }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none blur-sm"
              />

              {/* High Fashion Garment Tag */}
              <div className="absolute top-14 right-14 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-500/25 backdrop-blur-md text-amber-400 text-xs font-mono font-bold uppercase tracking-widest border border-amber-500/50 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Unveiling On-Chain Identity...</span>
              </div>
            </motion.div>

            {/* Second Drag Wave: Trailing Silk Under-Lining Edge */}
            <motion.div
              initial={{ x: '0%', y: '0%', rotateZ: 0 }}
              animate={{ x: '-125%', y: '35%', rotateZ: -20 }}
              transition={{
                duration: 1.4,
                delay: 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{ transformOrigin: 'bottom left' }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600/30 to-amber-500/10 border-r-2 border-amber-400/40 pointer-events-none"
            />

          </div>
        )}
      </AnimatePresence>
    </>
  );
};
