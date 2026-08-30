"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface StorySectionProps {
  children?: React.ReactNode;
}

export const StorySection: React.FC<StorySectionProps> = ({ children }) => {
  const stackedImages = [
    {
      src: "/assets/hero-model-1.png",
      alt: "African Fashion Story Model 1",
      rotation: "-8deg",
      translateY: "12px",
      translateX: "-24px",
      zIndex: 10,
    },
    {
      src: "/assets/hero-model-3.png",
      alt: "African Fashion Story Model 2",
      rotation: "6deg",
      translateY: "6px",
      translateX: "24px",
      zIndex: 20,
    },
    {
      src: "/assets/hero-model-5.png",
      alt: "African Fashion Story Model 3",
      rotation: "-2deg",
      translateY: "0px",
      translateX: "0px",
      zIndex: 30,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-bg-primary overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold-glow border border-brand-gold-border">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Provenance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary uppercase leading-tight font-mamakilo">
              UNVEILING THE <span className="text-brand-gold">SOUL</span> OF AFRICAN FASHION
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              BLACKfrica was built to reclaim the narrative of African modeling and couture. By fusing traditional heritage with sovereign Web3 technology, we turn iconic runway moments and editorial campaigns into immutable digital provenance.
            </p>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
              Every digital collectible represents direct empowerment for verified models, stylists, and visionary artists across the African continent—ensuring eternal credit and royalties for every creation.
            </p>
          </motion.div>

          {/* Right Column: Three Stacked Pictures */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md h-[380px] sm:h-[450px] md:h-[480px] flex items-center justify-center">
              {stackedImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  style={{ zIndex: img.zIndex }}
                  initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: img.rotation,
                    x: img.translateX,
                    y: img.translateY,
                  }}
                  viewport={{ once: false }}
                  whileHover={{
                    scale: 1.06,
                    rotate: "0deg",
                    zIndex: 40,
                    transition: { duration: 0.3 },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="absolute w-56 sm:w-64 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-card-border bg-card-bg cursor-pointer transition-shadow hover:shadow-brand-gold-glow"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 224px, 288px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Children Rendered Cleanly below if passed */}
        {children && <div className="mt-16 sm:mt-24">{children}</div>}
      </div>
    </section>
  );
};

export default StorySection;
