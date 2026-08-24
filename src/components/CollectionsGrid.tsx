'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { collectionsData } from '@/data/collectionsData';
import { useAppStore } from '@/store/useAppStore';
import { useWalletStore } from '@/store/useWalletStore';
import { Heart, Sparkles, Filter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CollectionsGrid = () => {
  const { activeCollectionCategory, setActiveCollectionCategory } = useAppStore();
  const { openWalletModal } = useWalletStore();
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'ALL COLLECTIONS' },
    { id: 'fashion', label: 'FASHION' },
    { id: 'modeling', label: 'MODELING' },
    { id: 'art', label: 'ART' },
    { id: 'hybrid', label: 'HYBRID' },
  ];

  const filteredItems = activeCollectionCategory === 'all'
    ? collectionsData
    : collectionsData.filter(item => item.category === activeCollectionCategory);

  const toggleLike = (id: string, initialLikes: number) => {
    setLiked(prev => {
      const isCurrentlyLiked = !!prev[id];
      setLikes(l => ({
        ...l,
        [id]: (l[id] ?? initialLikes) + (isCurrentlyLiked ? -1 : 1),
      }));
      return { ...prev, [id]: !isCurrentlyLiked };
    });
  };

  return (
    <section className="py-16 bg-neutral-50 dark:bg-[#151414] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Cultural Assets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-neutral-900 dark:text-white tracking-tight">
              ON-CHAIN <span className="text-amber-500">COLLECTIONS</span>
            </h2>
          </div>

          {/* Filter Tabs matching Figma design */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCollectionCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCollectionCategory === cat.id
                    ? 'bg-amber-500 text-neutral-950 shadow-md'
                    : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            const currentLikes = likes[item.id] ?? item.likes;
            const isLiked = liked[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-2xl bg-white dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm hover:shadow-xl dark:hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase text-white border border-white/10">
                    {item.category}
                  </span>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(item.id, item.likes)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-rose-500 transition-colors border border-white/10"
                    aria-label="Like"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Info & Price */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-amber-500">
                      <Image src={item.creatorAvatar} alt={item.creator} fill sizes="24px" className="object-cover" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      by <strong className="text-neutral-800 dark:text-neutral-200">{item.creator}</strong>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-neutral-400 block">Reserve Price</span>
                      <span className="text-base font-extrabold text-amber-600 dark:text-amber-400">{item.price}</span>
                    </div>

                    <button
                      onClick={openWalletModal}
                      className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-bold text-xs hover:bg-amber-500 dark:hover:bg-amber-400 transition-all flex items-center gap-1 group-hover:shadow-md"
                    >
                      <span>Collect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
