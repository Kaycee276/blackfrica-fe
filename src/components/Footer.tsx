'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe, Share2, MessageSquare, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-[#0D0C0C] text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800 transition-colors">
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
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Bridging African modeling, fashion, art, and digital ownership on-chain. Transforming cultural provenance into globally accessible value.
            </p>
            <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 pt-2">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors" title="Social">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://blackfrica.io" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors" title="Community">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="https://blackfrica.io" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors" title="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">
              <li><Link href="/collections" className="hover:text-amber-500 transition-colors">Collections</Link></li>
              <li><Link href="/creators" className="hover:text-amber-500 transition-colors">Featured Creators</Link></li>
              <li><Link href="/marketplace" className="hover:text-amber-500 transition-colors">NFT Marketplace</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">Mission & Provenance</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">
              <li><Link href="/collections" className="hover:text-amber-500 transition-colors">African Modeling</Link></li>
              <li><Link href="/collections" className="hover:text-amber-500 transition-colors">Avant-Garde Fashion</Link></li>
              <li><Link href="/collections" className="hover:text-amber-500 transition-colors">Braided Sculptural Art</Link></li>
              <li><Link href="/collections" className="hover:text-amber-500 transition-colors">Hybrid Media Assets</Link></li>
            </ul>
          </div>

          {/* Newsletter / Web3 */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-4">Join On-Chain Ecosystem</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
              Subscribe for new creator drops, collection mints, and cultural provenance updates.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full px-3 py-2.5 rounded-l-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none"
              />
              <button className="px-4 py-2.5 rounded-r-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs transition-colors whitespace-nowrap">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
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
