import { Hero } from '@/components/Hero';
import { CollectionsGrid } from '@/components/CollectionsGrid';
import { CreatorsSection } from '@/components/CreatorsSection';
import Link from 'next/link';
import { Sparkles, ShieldCheck, ArrowRight, Zap, Layers, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section matching Figma node 365:3905 */}
      <Hero />

      {/* Featured Collections */}
      <CollectionsGrid />

      {/* Value Proposition Banner matching Figma frame 365:6440 */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 text-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 border border-black/20 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Cultural Authentication & Ownership</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase max-w-4xl mx-auto leading-tight">
            "BY PRESERVING AUTHENTICITY AND PROVENANCE, BLACKFRICA TRANSFORMS AFRICAN CULTURE INTO TRUSTED, OWNABLE, AND GLOBALLY ACCESSIBLE VALUE."
          </h2>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 text-sm font-bold uppercase">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Immutable Royalties</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Phygital Rights</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>On-Chain Identity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <CreatorsSection />
    </div>
  );
}
