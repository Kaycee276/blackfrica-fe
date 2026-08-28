"use client";

import React, { useState } from "react";
import Image from "next/image";
import { collectionsData } from "@/data/collectionsData";
import { useAppStore } from "@/store/useAppStore";
import { useWalletStore } from "@/store/useWalletStore";
import { Heart, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const CollectionsGrid = () => {
  const { activeCollectionCategory, setActiveCollectionCategory } = useAppStore();
  const { openWalletModal } = useWalletStore();
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "all", label: "ALL COLLECTIONS" },
    { id: "fashion", label: "FASHION" },
    { id: "modeling", label: "MODELING" },
    { id: "art", label: "ART" },
    { id: "hybrid", label: "HYBRID" },
  ];

  const filteredItems =
    activeCollectionCategory === "all"
      ? collectionsData
      : collectionsData.filter(
          (item) => item.category === activeCollectionCategory
        );

  const toggleLike = (id: string, initialLikes: number) => {
    setLiked((prev) => {
      const isCurrentlyLiked = !!prev[id];
      setLikes((l) => ({
        ...l,
        [id]: (l[id] ?? initialLikes) + (isCurrentlyLiked ? -1 : 1),
      }));
      return { ...prev, [id]: !isCurrentlyLiked };
    });
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Top Section: Ecosystem Banner with Background Pattern Image */}
      <section className="relative w-full py-10 sm:py-16 md:py-20 flex items-center overflow-hidden">
        {/* Full-Width Background Pattern Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <Image
            src="/assets/blackfrica-pattern.png"
            alt="Blackfrica Cultural Pattern Background"
            fill
            priority
            className="object-cover object-center w-full h-full opacity-30"
          />
        </div>

        {/* Two-Column Grid Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 lg:col-span-9 flex flex-col items-start text-left space-y-4 sm:space-y-5"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary font-mamakilo leading-tight">
                BLACKfrica NFT Ecosystem
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-full font-normal leading-relaxed">
                BLACKfrica transforms its fashion editorials, model campaigns, and
                styled photography into limited-edition digital collectibles
                (NFTs) - giving fans, collectors, and brands a new way to support
                and engage with African modelling culture.
                <br />
                <br />
                Every photoshoot becomes a collectible. Every model becomes a
                digital icon.
              </p>
            </motion.div>

            {/* Right Column: Featured Asset Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]">
                <Image
                  src="/assets/face-model-1.png"
                  alt="BLACKfrica NFT Ecosystem Asset"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain object-center scale-90 sm:scale-85 origin-center transition-transform"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Bottom Section: On-Chain Collections Cards Grid (Positioned BELOW the background pattern section) */}
      <section className="w-full bg-bg-secondary border-t border-border-primary py-16 sm:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-border-primary pb-6">
            <div>
              <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Cultural Assets</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-text-primary tracking-tight">
                ON-CHAIN <span className="text-brand-gold">COLLECTIONS</span>
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCollectionCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeCollectionCategory === cat.id
                      ? "bg-brand-gold text-black shadow-md"
                      : "bg-card-bg text-text-secondary hover:bg-bg-tertiary border border-border-primary"
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
              const isLiked = liked[item.id];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group rounded-2xl bg-card-bg border border-card-border p-4 shadow-sm hover:shadow-xl hover:border-brand-gold transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-bg-primary mb-4">
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
                      <Heart
                        className={`w-4 h-4 ${
                          isLiked ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Info & Price */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-brand-gold">
                        <Image
                          src={item.creatorAvatar}
                          alt={item.creator}
                          fill
                          sizes="24px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-text-muted font-medium">
                        by{" "}
                        <strong className="text-text-primary">
                          {item.creator}
                        </strong>
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-text-primary group-hover:text-brand-gold transition-colors line-clamp-1">
                      {item.title}
                    </h4>

                    <div className="mt-4 pt-3 border-t border-border-primary flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-text-muted block">
                          Reserve Price
                        </span>
                        <span className="text-base font-extrabold text-brand-gold">
                          {item.price}
                        </span>
                      </div>

                      <button
                        onClick={openWalletModal}
                        className="px-4 py-2 rounded-xl bg-text-primary text-bg-primary font-bold text-xs hover:bg-brand-gold hover:text-black transition-all flex items-center gap-1 group-hover:shadow-md"
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
    </div>
  );
};

export default CollectionsGrid;
