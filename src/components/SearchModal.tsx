'use client';

import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { collectionsData } from '@/data/collectionsData';
import { creatorsData } from '@/data/creatorsData';
import { Search, X, ArrowUpRight } from 'lucide-react';
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
          className="relative w-full max-w-2xl bg-card-bg border border-card-border rounded-3xl p-6 shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="relative flex items-center mb-6">
            <Search className="absolute left-4 w-5 h-5 text-brand-gold" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search African models, fashion assets, creators..."
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-bg-tertiary border border-border-primary text-text-primary placeholder-text-muted font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold text-base"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 p-1 text-text-muted hover:text-text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results */}
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            
            {/* Collections matching search */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-text-muted mb-3 tracking-wider">
                Collections ({filteredCollections.length})
              </h4>
              <div className="space-y-2">
                {filteredCollections.map(col => (
                  <Link
                    key={col.id}
                    href="/collections"
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary hover:bg-bg-tertiary border border-border-primary transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black">
                        <Image src={col.image} alt={col.title} fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-text-primary group-hover:text-brand-gold transition-colors">
                          {col.title}
                        </h5>
                        <p className="text-xs text-text-muted">by {col.creator} • {col.price}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-brand-gold transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Creators matching search */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-text-muted mb-3 tracking-wider">
                Creators ({filteredCreators.length})
              </h4>
              <div className="space-y-2">
                {filteredCreators.map(cr => (
                  <Link
                    key={cr.id}
                    href="/creators"
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary hover:bg-bg-tertiary border border-border-primary transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold">
                        <Image src={cr.avatar} alt={cr.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-text-primary group-hover:text-brand-gold transition-colors">
                          {cr.name}
                        </h5>
                        <p className="text-xs text-text-muted">{cr.role} • {cr.followers} Followers</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-brand-gold transition-transform" />
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
