"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StorySectionProps {
  children?: React.ReactNode;
}

export const StorySection: React.FC<StorySectionProps> = ({ children }) => {
  const stackedImages = [
    // {
    //   src: "/assets/story-2.png",
    //   alt: "African Fashion Story Model 3",
    //   translateX: "-60px",
    //   translateY: "12px",
    //   zIndex: 10,
    // },
    {
      src: "/assets/story-1.png",
      alt: "African Fashion Story Model 2",
      translateX: "-100px",
      translateY: "6px",
      zIndex: 20,
    },
    {
      src: "/assets/collections/art-1.png",
      alt: "African Fashion Story Model 1 (Topmost)",
      translateX: "0px",
      translateY: "0px",
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
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-extralight text-text-primary uppercase tracking-wider leading-tight">
              Each Collection Tells a story
            </h2>

            <p className="text-base sm:text-3xl text-text-secondary tracking-widest leading-relaxed font-bold">
              Your next favourite collection awaits
            </p>

            <p className="text-sm sm:text-base text-text-muted tracking-wider leading-relaxed font-extralight">
              Explore a world of exceptional, groundbreaking collections loved
              by people around the globe.
            </p>

            <button className="border border-border-primary hover:border-border-secondary tracking-wider p-4 rounded-md inline-flex gap-2">
              View all collections{" "}
              <span>
                {" "}
                <ArrowRight />{" "}
              </span>
            </button>
          </motion.div>

          {/* Right Column: Three Stacked Pictures */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full h-[480px] sm:h-[580px] md:h-[650px] lg:h-[720px] flex items-center justify-center">
              {stackedImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  style={{ zIndex: img.zIndex }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: img.translateX,
                    y: img.translateY,
                  }}
                  viewport={{ once: false }}
                  whileHover={{
                    zIndex: 40,
                    transition: { duration: 0.3 },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="absolute w-full max-w-sm aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain object-center"
                    priority
                  />
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
