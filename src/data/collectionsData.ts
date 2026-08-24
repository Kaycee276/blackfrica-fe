export interface CollectionItem {
  id: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  category: 'fashion' | 'art' | 'hybrid' | 'modeling';
  image: string;
  price: string;
  likes: number;
  featured?: boolean;
}

export const collectionsData: CollectionItem[] = [
  {
    id: 'col-1',
    title: 'Afro-Futurism Regal Headwear',
    creator: 'Regina Meessen',
    creatorAvatar: '/assets/hero-model-1.png',
    category: 'fashion',
    image: '/assets/hero-model-1.png',
    price: '0.85 ETH',
    likes: 342,
    featured: true,
  },
  {
    id: 'col-2',
    title: 'Sacred Braid Provenance #04',
    creator: 'Tae Alvón',
    creatorAvatar: '/assets/hero-model-2.png',
    category: 'modeling',
    image: '/assets/hero-model-2.png',
    price: '1.20 ETH',
    likes: 512,
    featured: true,
  },
  {
    id: 'col-3',
    title: 'Ethereal Bronze Glow',
    creator: 'Min Sandhu',
    creatorAvatar: '/assets/hero-model-3.png',
    category: 'art',
    image: '/assets/hero-model-3.png',
    price: '0.65 ETH',
    likes: 219,
    featured: true,
  },
  {
    id: 'col-4',
    title: 'Tribal Geometric Identity',
    creator: 'Jaye Okonkwo',
    creatorAvatar: '/assets/hero-model-4.png',
    category: 'hybrid',
    image: '/assets/hero-model-4.png',
    price: '2.10 ETH',
    likes: 890,
    featured: true,
  },
  {
    id: 'col-5',
    title: 'Nile Velvet & Ochre Crown',
    creator: 'Amina Diop',
    creatorAvatar: '/assets/hero-model-5.png',
    category: 'fashion',
    image: '/assets/hero-model-5.png',
    price: '1.45 ETH',
    likes: 674,
    featured: true,
  },
];
