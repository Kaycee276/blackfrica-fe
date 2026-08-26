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
          {/* Main Headline: Colored brand sequence for first part, straight up Black/White for DIGITAL OWNERSHIP... */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight uppercase leading-[1.05] font-mamakilo"
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
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <CardStack />
        </motion.div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border-primary max-w-5xl mx-auto">
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-gold">
              100%
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 uppercase font-mono">
              On-Chain Provenance
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
              $1.2M+
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 uppercase font-mono">
              Creator Value Generated
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-gold">
              500+
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 uppercase font-mono">
              Verified African Models
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
              0%
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 uppercase font-mono">
              Middleman Exploitation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
