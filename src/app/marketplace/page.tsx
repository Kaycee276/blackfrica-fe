'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useWalletStore } from '@/store/useWalletStore';
import { collectionsData } from '@/data/collectionsData';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';

export default function MarketplacePage() {
  const { openWalletModal } = useWalletStore();
  const [selectedAsset, setSelectedAsset] = useState(collectionsData[0]);

  return (
    <div className="py-12 bg-bg-primary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-8 uppercase">
          <span>Marketplace</span>
          <span>/</span>
          <span>{selectedAsset.category}</span>
          <span>/</span>
          <span className="text-brand-gold">{selectedAsset.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Asset Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-bg-tertiary border border-card-border shadow-2xl">
              <Image
                src={selectedAsset.image}
                alt={selectedAsset.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase text-white border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
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
                    selectedAsset.id === item.id ? 'border-brand-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
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
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-gold">
                  <Image src={selectedAsset.creatorAvatar} alt={selectedAsset.creator} fill sizes="32px" className="object-cover" />
                </div>
                <div>
                  <span className="text-xs text-text-muted font-mono uppercase block">Created By</span>
                  <span className="text-sm font-bold text-text-primary flex items-center gap-1">
                    {selectedAsset.creator}
                    <ShieldCheck className="w-4 h-4 text-brand-gold fill-brand-gold-glow" />
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-text-primary tracking-tight">
                {selectedAsset.title}
              </h1>

              <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                Tokenized editorial modeling asset preserving traditional African braided artistry and fashion identity on-chain. Grants exclusive digital usage rights and verified cultural provenance.
              </p>
            </div>

            {/* Price & Bidding Card */}
            <div className="p-6 rounded-3xl bg-card-bg border border-card-border space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-text-muted block">Current Reserve Price</span>
                  <span className="text-3xl font-extrabold text-brand-gold">{selectedAsset.price}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono uppercase text-text-muted block flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Auction Ends In
                  </span>
                  <span className="text-sm font-bold text-text-primary font-mono">14h 22m 08s</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={openWalletModal}
                  className="flex-1 py-4 rounded-2xl bg-brand-gold hover:bg-brand-gold-hover text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-brand-gold-glow active:scale-95 text-center"
                >
                  Buy Now for {selectedAsset.price}
                </button>

                <button
                  onClick={openWalletModal}
                  className="flex-1 py-4 rounded-2xl border-2 border-border-primary hover:border-brand-gold text-text-primary font-extrabold text-sm uppercase tracking-wider transition-all bg-transparent hover:bg-bg-tertiary text-center"
                >
                  Place Bid
                </button>
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-bg-secondary border border-border-primary">
                <span className="text-[10px] font-mono uppercase text-text-muted block">Format</span>
                <span className="text-xs font-bold text-text-primary">2K Hi-Res RAW / 3D</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-bg-secondary border border-border-primary">
                <span className="text-[10px] font-mono uppercase text-text-muted block">Royalty Fee</span>
                <span className="text-xs font-bold text-brand-gold">10% Perpetual</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-bg-secondary border border-border-primary">
                <span className="text-[10px] font-mono uppercase text-text-muted block">Network</span>
                <span className="text-xs font-bold text-text-primary">Arc L1 Blockchain</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
