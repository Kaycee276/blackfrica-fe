import { CollectionsGrid } from '@/components/CollectionsGrid';

export const metadata = {
  title: 'Collections | BLACKfrica',
  description: 'Explore on-chain African fashion, modeling, and cultural digital assets.',
};

export default function CollectionsPage() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-text-primary">
          AFRICAN <span className="text-brand-gold">CULTURAL COLLECTIONS</span>
        </h1>
        <p className="text-text-secondary mt-2 max-w-2xl text-sm">
          Discover verified digital ownership assets representing African high-fashion, editorial modeling, hair sculptures, and avant-garde art forms.
        </p>
      </div>
      <CollectionsGrid />
    </div>
  );
}
