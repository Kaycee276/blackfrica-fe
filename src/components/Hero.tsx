"use client";

import Link from "next/link";
import { CardStack } from "./CardStack";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const coloredPart = "BRIDGING AFRICAN MODELING, FASHION, Art, AND ";
  const monochromePart = "DIGITAL OWNERSHIP...";

  // Brand color sequence in exact user order: Green, Red, Gold, Brown, Black
  const colorCycle = [
    "var(--brand-green)",
    "var(--brand-red)",
    "var(--brand-gold)",
    "var(--brand-brown)",
    "var(--brand-black)",
  ];

  let colorIndexCounter = 0;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl xl:max-w-7xl mx-auto space-y-6">
          {/* Main Headline: Reduced size font (text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight uppercase font-mamakilo leading-[1.1]"
          >
            {coloredPart.split("").map((char, index) => {
              if (char === " ") {
                return <span key={index}> </span>;
              }
              const color = colorCycle[colorIndexCounter % colorCycle.length];
              colorIndexCounter++;
              return (
                <span key={index} style={{ color }}>
                  {char}
                </span>
              );
            })}

            {/* Straight up Black in light mode / White in dark mode for DIGITAL OWNERSHIP... */}
            <span className="text-text-primary">{monochromePart}</span>
          </motion.h1>

          {/* Subheading directly matching Figma - wider layout on large screens */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl lg:max-w-5xl leading-relaxed font-normal"
          >
            To redefine the value of African modeling by turning creativity,
            identity, and culture into on-chain assets that empower models and
            connect global fans.
          </motion.p>

          {/* CTA Action Buttons matching Figma frame 16 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Link
              href="/collections"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-extrabold text-base tracking-wider uppercase transition-all shadow-lg hover:shadow-brand-gold-glow flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>EXPLORE NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/creators"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-brand-gold text-text-primary font-extrabold text-base tracking-wider uppercase transition-all bg-transparent hover:bg-bg-tertiary flex items-center justify-center gap-2 active:scale-95"
            >
              <span>JOIN AS A CREATOR</span>
            </Link>
          </motion.div>
        </div>

        {/* Hero Interactive Card Showcase Fan */}
        <div className="mt-8">
          <CardStack />
        </div>
      </div>
    </section>
  );
};
