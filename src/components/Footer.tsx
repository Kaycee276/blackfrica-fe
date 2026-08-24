'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Share2, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-primary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center group">
              <div className="relative w-36 h-10 overflow-hidden">
                {/* Light Mode Logo */}
                <Image
                  src="/assets/Blackfrica-logo-light.png"
                  alt="BLACKfrica Logo"
                  fill
                  sizes="150px"
                  className="object-contain block dark:hidden group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/assets/Blackfrica-logo-dark.png"
                  alt="BLACKfrica Logo"
                  fill
                  sizes="150px"
                  className="object-contain hidden dark:block group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-xs text-text-secondary leading-relaxed">
              Bridging African modeling, fashion, art, and digital ownership on-chain. Transforming cultural provenance into globally accessible value.
            </p>
            <div className="flex items-center gap-3 text-text-secondary pt-2">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-bg-tertiary hover:text-brand-gold hover:bg-card-bg transition-colors" title="Social">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://blackfrica.io" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-bg-tertiary hover:text-brand-gold hover:bg-card-bg transition-colors" title="Community">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="https://blackfrica.io" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-bg-tertiary hover:text-brand-gold hover:bg-card-bg transition-colors" title="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li><Link href="/collections" className="hover:text-brand-gold transition-colors">Collections</Link></li>
              <li><Link href="/creators" className="hover:text-brand-gold transition-colors">Featured Creators</Link></li>
              <li><Link href="/marketplace" className="hover:text-brand-gold transition-colors">NFT Marketplace</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">Mission & Provenance</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li><Link href="/collections" className="hover:text-brand-gold transition-colors">African Modeling</Link></li>
              <li><Link href="/collections" className="hover:text-brand-gold transition-colors">Avant-Garde Fashion</Link></li>
              <li><Link href="/collections" className="hover:text-brand-gold transition-colors">Braided Sculptural Art</Link></li>
              <li><Link href="/collections" className="hover:text-brand-gold transition-colors">Hybrid Media Assets</Link></li>
            </ul>
          </div>

          {/* Newsletter / Web3 */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold mb-4">Join On-Chain Ecosystem</h4>
            <p className="text-xs text-text-secondary mb-4">
              Subscribe for new creator drops, collection mints, and cultural provenance updates.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full px-3 py-2.5 rounded-l-xl bg-card-bg border border-border-primary text-xs text-text-primary placeholder-text-muted focus:outline-none"
              />
              <button className="px-4 py-2.5 rounded-r-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-bold text-xs transition-colors whitespace-nowrap">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-border-primary flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <p>© {new Date().getFullYear()} BLACKfrica Platform. All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Powered by Arc L1 & Smart Contracts</span>
            <span>Sub-second Finality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
