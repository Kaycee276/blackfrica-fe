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
    {
      src: "/assets/collections/art-1.png",
      alt: "African Fashion Story Model 3",
      rotation: "-14deg",
      translateY: "16px",
      translateX: "-36px",
      zIndex: 10,
    },
    {
      src: "/assets/story-1.png",
      alt: "African Fashion Story Model 2",
      rotation: "-7deg",
      translateY: "8px",
      translateX: "-18px",
      zIndex: 20,
    },
    {
      src: "/assets/story-2.png",
      alt: "African Fashion Story Model 1 (Topmost)",
      rotation: "0deg",
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
