"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WhyCollect = () => {
  const points = [
    { text: "Access to IRL and virtual events.", indent: "ml-0" },
    { text: "Voting rights on future collections.", indent: "ml-6 sm:ml-12" },
    { text: "Exclusive behind-the-scenes content.", indent: "ml-12 sm:ml-24" },
    { text: "Early access to fashion and art collaboration", indent: "ml-18 sm:ml-36" },
  ];

  return (
    <section className="relative w-full py-20 sm:py-32 bg-bg-primary overflow-hidden transition-colors min-h-[650px] sm:min-h-[750px] flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline & Staggered Bullet List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left z-20"
          >
            {/* Top Accent Gradient Bar (Green -> Gold -> Red) */}
            <div className="w-16 h-2 rounded-full bg-gradient-to-r from-[#029834] via-[#f59e0b] to-[#fe0002] mb-6" />

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary tracking-tight mb-10">
              Why Collect?
            </h2>

            {/* Bulleted Points with Custom Two-Color Dot & Progressive Indentation */}
            <div className="space-y-6 sm:space-y-8 w-full">
              {points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center gap-3 ${pt.indent}`}
                >
                  {/* Two-color Dot (Green & Red) */}
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#029834] to-[#fe0002] flex-shrink-0 inline-block shadow-sm" />
                  <span className="text-lg sm:text-xl md:text-2xl text-text-secondary font-light tracking-wide">
                    {pt.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side & Background: Tilted Floating Images Matching Screenshot Layout */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center">
            
            {/* 1. Top-Center Tilted Small Image */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 14 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="absolute -top-6 sm:top-2 left-1/4 sm:left-1/3 -translate-x-1/2 w-28 sm:w-36 aspect-[3/4] rounded-xl overflow-hidden shadow-xl border border-white/10 z-10"
            >
              <Image
                src="/assets/collections/art-2.png"
                alt="African Culture Collection"
                fill
                sizes="(max-width: 768px) 112px, 144px"
                className="object-cover"
              />
            </motion.div>

            {/* 2. Bottom-Left Rotated Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -35 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute -bottom-10 sm:-bottom-6 -left-8 sm:-left-16 w-52 sm:w-64 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-20"
            >
              <Image
                src="/assets/collections/art-1.png"
                alt="Illustrated African Queen"
                fill
                sizes="(max-width: 768px) 208px, 256px"
                className="object-cover"
              />
            </motion.div>

            {/* 3. Right Prominent Large Tilted Card (Futuristic Portrait Pink Sun) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -18 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-4 sm:top-0 right-4 sm:right-12 w-56 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-30"
            >
              <Image
                src="/assets/hero-model-4.png"
                alt="Afro-Futuristic NFT Art"
                fill
                sizes="(max-width: 768px) 224px, 320px"
                className="object-cover"
              />
            </motion.div>

            {/* 4. Bottom-Right Tilted Rectangular Card (Model with sunglasses & red headwrap) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 18 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 sm:bottom-2 -right-4 sm:right-0 w-48 sm:w-60 md:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-20"
            >
              <Image
                src="/assets/story-1.png"
                alt="African Fashion Editorial"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCollect;
