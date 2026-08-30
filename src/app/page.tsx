import { Hero } from "@/components/Hero";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { CreatorsSection } from "@/components/CreatorsSection";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <div>
      {/* Hero Section matching Figma node 365:3905 */}
      <Hero />

      {/* Featured Collections */}
      <CollectionsGrid />

      <StorySection />
      {/* Featured Creators Section */}
      <CreatorsSection />
    </div>
  );
}
