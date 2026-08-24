'use client';

import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { collectionsData } from '@/data/collectionsData';
import { creatorsData } from '@/data/creatorsData';
import { Search, X, Sparkles, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchModal = () => {
  const { searchOpen, setSearchOpen, searchQuery, setSearchQuery } = useAppStore();

  if (!searchOpen) return null;

  const filteredCollections = searchQuery
    ? collectionsData.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.creator.toLowerCase().includes(searchQuery.toLowerCase()))
    : collectionsData.slice(0, 3);

  const filteredCreators = searchQuery
    ? creatorsData.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.role.toLowerCase().includes(searchQuery.toLowerCase()))
    : creatorsData.slice(0, 3);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="relative flex items-center mb-6">
            <Search className="absolute left-4 w-5 h-5 text-amber-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search African models, fashion assets, creators..."
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 text-base"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 p-1 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results */}
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            
            {/* Collections matching search */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-neutral-400 mb-3 tracking-wider">
                Collections ({filteredCollections.length})
              </h4>
              <div className="space-y-2">
                {filteredCollections.map(col => (
                  <Link
                    key={col.id}
                    href="/collections"
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black">
                        <Image src={col.image} alt={col.title} fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                          {col.title}
                        </h5>
                        <p className="text-xs text-neutral-400">by {col.creator} • {col.price}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Creators matching search */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-neutral-400 mb-3 tracking-wider">
                Creators ({filteredCreators.length})
              </h4>
              <div className="space-y-2">
                {filteredCreators.map(cr => (
                  <Link
                    key={cr.id}
                    href="/creators"
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500">
                        <Image src={cr.avatar} alt={cr.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                          {cr.name}
                        </h5>
                        <p className="text-xs text-neutral-400">{cr.role} • {cr.followers} Followers</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
