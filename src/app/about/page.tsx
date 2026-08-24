import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Globe, Zap, Layers, Award } from 'lucide-react';

export const metadata = {
  title: 'About Mission & Provenance | BLACKfrica',
  description: 'Learn how BLACKfrica is building Africa’s leading phygital cultural platform on-chain.',
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-white dark:bg-[#131212] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Mission Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
            BLACKfrica is built to become Africa’s leading <span className="text-amber-500">phygital cultural platform.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            For decades, African fashion, modeling, and cultural aesthetic forms have been appropriated without attribution or direct economic empowerment. BLACKfrica changes this by embedding authenticity and smart contract royalties directly into every creative asset.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 w-fit">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase text-neutral-900 dark:text-white">Authenticity & Provenance</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Every African model, stylist, and artist has their work immutably logged on-chain. Ownership history and creative credits remain permanent and tamper-proof.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 w-fit">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase text-neutral-900 dark:text-white">Phygital Ownership</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Connecting physical high-fashion garments and editorial photoshoots with digital 3D tokens and smart rights contracts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 w-fit">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase text-neutral-900 dark:text-white">Global Economic Reach</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Connecting global collectors, fashion houses, and art enthusiasts directly to African creators without intermediaries.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
