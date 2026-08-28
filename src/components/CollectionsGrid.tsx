"use client";

import Image from "next/image";

export const CollectionsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Image
        src="/blackfrica-pattern.png"
        alt="Collection"
        width={600}
        height={400}
      />
    </div>
  );
};

export default CollectionsGrid;
