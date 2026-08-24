import React from 'react';
import { Sparkles, ShieldCheck, Globe, Layers } from 'lucide-react';

export const metadata = {
  title: 'About Mission & Provenance | BLACKfrica',
  description: 'Learn how BLACKfrica is building Africa’s leading phygital cultural platform on-chain.',
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-bg-primary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Mission Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold-glow border border-brand-gold-border text-brand-gold text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-text-primary leading-tight">
            BLACKfrica is built to become Africa’s leading <span className="text-brand-gold">phygital cultural platform.</span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            For decades, African fashion, modeling, and cultural aesthetic forms have been appropriated without attribution or direct economic empowerment. BLACKfrica changes this by embedding authenticity and smart contract royalties directly into every creative asset.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-card-bg border border-card-border space-y-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-brand-gold-glow text-brand-gold w-fit">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase text-text-primary">Authenticity & Provenance</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Every African model, stylist, and artist has their work immutably logged on-chain. Ownership history and creative credits remain permanent and tamper-proof.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card-bg border border-card-border space-y-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-brand-gold-glow text-brand-gold w-fit">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase text-text-primary">Phygital Ownership</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Connecting physical high-fashion garments and editorial photoshoots with digital 3D tokens and smart rights contracts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card-bg border border-card-border space-y-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-brand-gold-glow text-brand-gold w-fit">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase text-text-primary">Global Economic Reach</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Connecting global collectors, fashion houses, and art enthusiasts directly to African creators without intermediaries.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
