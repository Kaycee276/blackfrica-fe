'use client';

import React from 'react';
import Image from 'next/image';
import { creatorsData } from '@/data/creatorsData';
import { useAppStore, CategoryFilter } from '@/store/useAppStore';
import { ShieldCheck, UserPlus, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CreatorsSection = () => {
  const { activeCreatorCategory, setActiveCreatorCategory } = useAppStore();

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'ALL CREATORS' },
    { id: 'models', label: 'MODELS' },
    { id: 'artists', label: 'ARTISTS' },
    { id: 'stylists', label: 'STYLISTS' },
    { id: 'hybrid', label: 'HYBRIDS' },
  ];

  const filteredCreators = activeCreatorCategory === 'all'
    ? creatorsData
    : creatorsData.filter(c => c.category === activeCreatorCategory);

  return (
    <section className="py-16 bg-bg-primary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-border-primary pb-6">
          <div>
            <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified African Talent</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-text-primary tracking-tight">
              FEATURED <span className="text-brand-gold">CREATORS</span>
            </h2>
          </div>

          {/* Filter buttons matching Figma */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCreatorCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCreatorCategory === cat.id
                    ? 'bg-brand-gold text-black shadow-md'
                    : 'bg-bg-tertiary text-text-secondary hover:bg-card-bg border border-border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCreators.map((creator, idx) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-2xl bg-card-bg border border-card-border overflow-hidden hover:border-brand-gold transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cover Banner */}
              <div className="relative w-full h-32 bg-bg-tertiary">
                <Image
                  src={creator.coverImage}
                  alt={creator.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Profile Avatar & Info */}
              <div className="px-5 pb-5 pt-0 relative flex-1 flex flex-col justify-between -mt-10">
                <div>
                  <div className="flex items-end justify-between mb-3">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-card-bg shadow-lg bg-black">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase font-mono bg-brand-gold-glow text-brand-gold border border-brand-gold-border">
                      {creator.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-gold transition-colors">
                      {creator.name}
                    </h3>
                    {creator.verified && (
                      <ShieldCheck className="w-4 h-4 text-brand-gold fill-brand-gold-glow" />
                    )}
                  </div>

                  <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed mb-4">
                    {creator.bio}
                  </p>
                </div>

                {/* Stats & Action */}
                <div className="pt-4 border-t border-border-primary flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-text-muted block">Volume</span>
                    <span className="text-xs font-bold text-text-primary">{creator.totalVolume}</span>
                  </div>

                  <button className="px-4 py-2 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm">
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
