import { CreatorsSection } from '@/components/CreatorsSection';

export const metadata = {
  title: 'Creators | BLACKfrica',
  description: 'Connect with African models, stylists, artists, and hybrid creators.',
};

export default function CreatorsPage() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white">
          AFRICAN <span className="text-amber-500">CREATORS & MODELS</span>
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl text-sm">
          Connect directly with verified models, hairstylists, 3D sculptors, and creative directors shaping the future of African digital identity.
        </p>
      </div>
      <CreatorsSection />
    </div>
  );
}
