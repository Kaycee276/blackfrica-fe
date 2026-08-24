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

      // Trigger 3D Peeling overlay of the old theme lifting off
      setPeelState({
        isPeeling: true,
        oldTheme,
        newTheme,
      });

      const timer = setTimeout(() => {
        setPeelState((prev) => ({ ...prev, isPeeling: false }));
      }, 900);

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

      {/* Realistic 3D Cloth Layer Peel Overlay */}
      <AnimatePresence>
        {peelState.isPeeling && (
          <div className="fixed inset-0 z-[9999] pointer-events-none [perspective:1400px] overflow-hidden">
            
            {/* Ambient drop shadow cast on the new theme underneath */}
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 bg-black/50 pointer-events-none"
            />

            {/* The Old Theme Layer Peeling & Curling Away in 3D */}
            <motion.div
              initial={{
                x: '0%',
                y: '0%',
                rotateZ: 0,
                rotateY: 0,
                skewY: 0,
                scale: 1,
              }}
              animate={{
                x: '-135%',
                y: '35%',
                rotateZ: -25,
                rotateY: 18,
                skewY: -8,
                scale: 0.96,
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1], // realistic physical cloth pull curve
              }}
              style={{
                transformOrigin: 'bottom left',
                transformStyle: 'preserve-3d',
              }}
              className={`absolute inset-0 w-full h-full border-r-8 border-amber-500/50 ${
                peelState.oldTheme === 'dark'
                  ? 'bg-[#131212] text-white shadow-[40px_40px_90px_rgba(0,0,0,0.9)]'
                  : 'bg-white text-neutral-900 shadow-[40px_40px_90px_rgba(0,0,0,0.4)]'
              }`}
            >
              {/* Fabric Fold Lighting & Backside Curl Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-amber-500/10 to-transparent pointer-events-none" />

              {/* Edge Roll Highlight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.85 }}
                className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-amber-400/30 via-white/20 to-transparent pointer-events-none"
              />

              {/* Tag on Peeling Garment */}
              <div className="absolute top-12 right-12 flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-500 text-xs font-mono font-bold uppercase tracking-widest border border-amber-500/40 shadow-xl">
                <span>Peeling Garment Layer</span>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
};
