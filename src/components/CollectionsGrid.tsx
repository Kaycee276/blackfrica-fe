"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const CollectionsGrid = () => {
  return (
    <section className="relative w-full min-h-[440px] sm:min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden bg-bg-primary py-16 sm:py-20">
      {/* Full-Width Background Pattern Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/assets/blackfrica-pattern.png"
          alt="Blackfrica Cultural Pattern Background"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-30 dark:opacity-20"
        />
      </div>

      {/* Two-Column Grid Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left space-y-5"
          >
            <div className="flex items-center gap-2 text-brand-gold font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold-glow border border-brand-gold-border">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Provenance</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary uppercase leading-tight font-mamakilo">
              BLACK<span className="text-brand-gold">frica</span> NFT Ecosystem
            </h2>

            <p className="text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed font-normal">
              Redefining cultural provenance into on-chain digital assets.
              Empowering African models, fashion designers, and creators through
              sovereign Web3 ownership.
            </p>

            <div className="pt-2">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-brand-gold-glow group active:scale-95"
              >
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Featured Asset Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md h-[340px] sm:h-[400px] md:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/assets/hero-model-5.png"
                alt="BLACKfrica NFT Ecosystem Asset"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Soft Ambient Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
