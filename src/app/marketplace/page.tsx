'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useWalletStore } from '@/store/useWalletStore';
import { collectionsData } from '@/data/collectionsData';
import { Heart, ShieldCheck, Share2, ExternalLink, Sparkles, Clock, Eye, Layers } from 'lucide-react';

export default function MarketplacePage() {
  const { openWalletModal } = useWalletStore();
  const [selectedAsset, setSelectedAsset] = useState(collectionsData[0]);

  return (
    <div className="py-12 bg-white dark:bg-[#131212] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8 uppercase">
          <span>Marketplace</span>
          <span>/</span>
          <span>{selectedAsset.category}</span>
          <span>/</span>
          <span className="text-amber-500">{selectedAsset.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Asset Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
              <Image
                src={selectedAsset.image}
                alt={selectedAsset.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase text-white border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified Asset #365</span>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {collectionsData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedAsset(item)}
                  className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedAsset.id === item.id ? 'border-amber-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={item.image} alt={item.title} fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Asset Details & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500">
                  <Image src={selectedAsset.creatorAvatar} alt={selectedAsset.creator} fill sizes="32px" className="object-cover" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono uppercase block">Created By</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                    {selectedAsset.creator}
                    <ShieldCheck className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-neutral-900 dark:text-white tracking-tight">
                {selectedAsset.title}
              </h1>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
                Tokenized editorial modeling asset preserving traditional African braided artistry and fashion identity on-chain. Grants exclusive digital usage rights and verified cultural provenance.
              </p>
            </div>

            {/* Price & Bidding Card */}
            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Current Reserve Price</span>
                  <span className="text-3xl font-extrabold text-amber-500">{selectedAsset.price}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono uppercase text-neutral-400 block flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Auction Ends In
                  </span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white font-mono">14h 22m 08s</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={openWalletModal}
                  className="flex-1 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-center"
                >
                  Buy Now for {selectedAsset.price}
                </button>

                <button
                  onClick={openWalletModal}
                  className="flex-1 py-4 rounded-2xl border-2 border-neutral-800 dark:border-neutral-700 hover:border-amber-500 text-neutral-900 dark:text-white font-extrabold text-sm uppercase tracking-wider transition-all bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-center"
                >
                  Place Bid
                </button>
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block">Format</span>
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">2K Hi-Res RAW / 3D</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block">Royalty Fee</span>
                <span className="text-xs font-bold text-amber-500">10% Perpetual</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block">Network</span>
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Arc L1 Blockchain</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
