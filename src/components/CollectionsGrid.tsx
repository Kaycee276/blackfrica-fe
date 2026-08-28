"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CollectionsGrid = () => {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[360px] md:min-h-[400px] flex items-center overflow-hidden py-2">
      {/* Full-Width Background Pattern Image with Reduced Height */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[260px] sm:h-[320px] md:h-[360px] pointer-events-none z-0 overflow-hidden">
        <Image
          src="/assets/blackfrica-pattern.png"
          alt="Blackfrica Cultural Pattern Background"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-30"
        />
      </div>

      {/* Two-Column Grid Content Layer */}
      <div className="relative z-10 max-w-4/5 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-9 flex flex-col items-start text-left space-y-5"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary font-mamakilo">
              BLACKfrica NFT Ecosystem
            </h2>

            <p className="text-base sm:text-lg text-text-secondary max-w-full font-normal">
              BLACKfrica transforms its fashion editorials, model campaigns, and
              styled photography into limited-edition digital collectibles
              (NFTs) - giving fans, collectors, and brands a new way to support
              and engage with African modelling culture. Every photoshoot
              becomes a collectible. every model becomes a digital icon.
            </p>
          </motion.div>

          {/* Right Column: Featured Asset Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px]">
              <Image
                src="/assets/face-model-1.png"
                alt="BLACKfrica NFT Ecosystem Asset"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center scale-85 sm:scale-80 origin-center transition-transform"
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
