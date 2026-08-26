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

  const metrics = [
    { value: "100%", label: "On-Chain Provenance", highlight: true },
    { value: "$1.2M+", label: "Creator Value Generated", highlight: false },
    { value: "500+", label: "Verified African Models", highlight: true },
    { value: "0%", label: "Middleman Exploitation", highlight: false },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Subtle Ambient Background Pulse Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[450px] bg-brand-gold-glow blur-3xl rounded-full pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl xl:max-w-7xl mx-auto space-y-6">
          
          {/* Main Headline: Smooth scale & upward slide with brand letter coloring */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
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

          {/* Subheading: Smooth fade-in and slide */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl lg:max-w-5xl leading-relaxed font-normal"
          >
            To redefine the value of African modeling by turning creativity,
            identity, and culture into on-chain assets that empower models and
            connect global fans.
          </motion.p>

          {/* CTA Action Buttons with micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
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

        {/* Metric Badges with staggered interactive hover cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border-primary max-w-5xl mx-auto"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-center p-4 rounded-xl hover:bg-bg-secondary transition-colors border border-transparent hover:border-border-primary cursor-default"
            >
              <h3
                className={`text-2xl sm:text-3xl font-extrabold ${
                  metric.highlight ? "text-brand-gold" : "text-text-primary"
                }`}
              >
                {metric.value}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-1 uppercase font-mono tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
