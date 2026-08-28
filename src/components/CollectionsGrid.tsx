"use client";

import React from "react";
import Image from "next/image";
import { collectionsData } from "@/data/collectionsData";
import { motion } from "framer-motion";

export const CollectionsGrid = () => {
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

      {/* 2. Second Section: Featured Collections Cards */}
      <section className="w-full bg-bg-secondary border-t border-border-primary py-16 sm:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-10 border-b border-border-primary pb-6 text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-text-primary tracking-tight font-mamakilo">
              Featured <span className="text-brand-gold">Collections</span>
            </h3>
          </div>

          {/* Featured Collections Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionsData.map((item, idx) => {
              const imageType =
                item.category === "art"
                  ? "Blackfrica Art"
                  : item.category === "fashion"
                  ? "Blackfrica Fashion"
                  : item.category === "hybrid"
                  ? "Blackfrica Hybrid"
                  : "Blackfrica Modeling";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group rounded-2xl bg-card-bg border border-card-border p-4 shadow-sm hover:shadow-xl hover:border-brand-gold transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-bg-primary mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Image Type Tag */}
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase text-brand-gold border border-brand-gold-border">
                      {imageType}
                    </span>
                  </div>

                  {/* Collection Name & Creator's Name */}
                  <div className="space-y-1 text-left">
                    <h4 className="text-base font-bold text-text-primary group-hover:text-brand-gold transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted font-medium">
                      by{" "}
                      <strong className="text-text-primary font-semibold">
                        {item.creator}
                      </strong>
                    </p>
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
