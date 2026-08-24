'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [peelState, setPeelState] = useState<{
    isPeeling: boolean;
    peelTheme: 'dark' | 'light';
  }>({ isPeeling: false, peelTheme: theme });

  const prevThemeRef = useRef(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Detect theme toggle
    if (prevThemeRef.current !== theme) {
      setPeelState({
        isPeeling: true,
        peelTheme: theme,
      });

      // Synchronize DOM class halfway through the peel motion
      const timer = setTimeout(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }, 350);

      // Finish peeling animation
      const finishTimer = setTimeout(() => {
        setPeelState((prev) => ({ ...prev, isPeeling: false }));
      }, 800);

      prevThemeRef.current = theme;

      return () => {
        clearTimeout(timer);
        clearTimeout(finishTimer);
      };
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

      {/* Cloth Peeling Layer Overlay */}
      <AnimatePresence>
        {peelState.isPeeling && (
          <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {/* Peeling Fabric Curtain with Organic Cloth Curve */}
            <motion.div
              initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
              animate={{
                clipPath: [
                  'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                  'polygon(0% 0, 100% 0, 100% 100%, 20% 100%)',
                  'polygon(0% 0, 40% 0, 0% 100%, 0% 100%)',
                  'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
                ],
              }}
              transition={{
                duration: 0.75,
                ease: [0.65, 0, 0.35, 1], // fluid organic cloth peel easing
              }}
              className={`absolute inset-0 shadow-2xl ${
                peelState.peelTheme === 'dark'
                  ? 'bg-[#131212] text-white border-l-4 border-amber-500/40'
                  : 'bg-white text-neutral-900 border-l-4 border-amber-500/40'
              }`}
            >
              {/* Subtle Fabric Grain & Fold Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-mono font-bold uppercase tracking-widest text-amber-500/60 pointer-events-none">
                BLACKFRICA • CULTURAL CLOTH PROVENANCE
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
