"use client";

import React from "react";
import Image from "next/image";
import { collectionsData } from "@/data/collectionsData";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const CollectionsGrid = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-bg-primary">
      {/* Full-Width Background Pattern Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/assets/blackfrica-pattern.png"
          alt="Blackfrica Cultural Pattern Background"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-20 dark:opacity-15"
        />
        {/* Subtle Top & Bottom Gradient Overlay for Seamless Blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      </div>

      {/* Grid Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border-primary pb-6">
          <div>
            <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Provenance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-text-primary tracking-tight">
              FEATURED <span className="text-brand-gold">COLLECTIONS</span>
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md">
            Explore authentic African modeling assets, digital wear, and cultural provenance secured on-chain.
          </p>
        </div>

        {/* Collections Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((col, idx) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-card-bg/90 backdrop-blur-md border border-card-border overflow-hidden hover:border-brand-gold transition-all duration-300 shadow-xl hover:shadow-brand-gold-glow flex flex-col justify-between"
            >
              {/* Artwork Image */}
              <div className="relative w-full h-72 overflow-hidden bg-bg-tertiary">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white border border-white/10 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>{col.likes}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-gold transition-colors line-clamp-1 mb-2">
                  {col.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-border-primary">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-brand-gold">
                      <Image
                        src={col.creatorAvatar}
                        alt={col.creator}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-text-secondary font-medium">
                      {col.creator}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-text-muted uppercase font-mono block">Price</span>
                    <span className="text-xs font-extrabold text-brand-gold">{col.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
