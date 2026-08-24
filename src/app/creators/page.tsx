import { CreatorsSection } from '@/components/CreatorsSection';

export const metadata = {
  title: 'Creators | BLACKfrica',
  description: 'Connect with African models, stylists, artists, and hybrid creators.',
};

export default function CreatorsPage() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-text-primary">
          AFRICAN <span className="text-brand-gold">CREATORS & MODELS</span>
        </h1>
        <p className="text-text-secondary mt-2 max-w-2xl text-sm">
          Connect directly with verified models, hairstylists, 3D sculptors, and creative directors shaping the future of African digital identity.
        </p>
      </div>
      <CreatorsSection />
    </div>
  );
}
