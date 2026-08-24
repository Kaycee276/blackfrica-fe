'use client';

import React from 'react';
import Link from 'next/link';
import { CardStack } from './CardStack';
import { ArrowRight, Sparkles, ShieldCheck, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      
      {/* Abstract Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-medium tracking-wide uppercase"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Empowering African Cultural Provenance</span>
          </motion.div>

          {/* Main Headline directly matching Figma */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase leading-[1.1]"
          >
            BRIDGING AFRICAN MODELING, FASHION, Art, AND DIGITAL <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">OWNERSHIP...</span>
          </motion.h1>

          {/* Subheading directly matching Figma */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed font-normal"
          >
            To redefine the value of African modeling by turning creativity, identity, and culture into on-chain assets that empower models and connect global fans.
          </motion.p>

          {/* CTA Action Buttons matching Figma frame 16 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Link
              href="/collections"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-base tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>EXPLORE NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/creators"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-neutral-800 dark:border-neutral-700 hover:border-amber-500 text-neutral-900 dark:text-white font-extrabold text-base tracking-wider uppercase transition-all bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>JOIN AS A CREATOR</span>
            </Link>
          </motion.div>
        </div>

        {/* Hero Interactive Card Showcase Fan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <CardStack />
        </motion.div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-neutral-200 dark:border-neutral-800/80 max-w-5xl mx-auto">
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500">100%</h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 uppercase font-mono">On-Chain Provenance</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">$1.2M+</h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 uppercase font-mono">Creator Value Generated</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500">500+</h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 uppercase font-mono">Verified African Models</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">0%</h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 uppercase font-mono">Middleman Exploitation</p>
          </div>
        </div>

      </div>
    </section>
  );
};
