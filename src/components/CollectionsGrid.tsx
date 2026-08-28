"use client";

import React from "react";
import Image from "next/image";

export const CollectionsGrid = () => {
  return (
    <section className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] overflow-hidden bg-bg-primary">
      {/* Full-Width Background Pattern Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/assets/blackfrica-pattern.png"
          alt="Blackfrica Cultural Pattern Background"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-35 dark:opacity-25"
        />
      </div>
    </section>
  );
};

export default CollectionsGrid;
