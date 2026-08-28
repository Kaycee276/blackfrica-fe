"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CollectionsGrid = () => {
  return (
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
  );
};

export default CollectionsGrid;
