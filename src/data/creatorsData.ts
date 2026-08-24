export interface CreatorItem {
  id: string;
  name: string;
  role: 'Model' | 'Artist' | 'Stylist' | 'Hybrid Creator';
  category: 'models' | 'artists' | 'stylists' | 'hybrid';
  avatar: string;
  coverImage: string;
  bio: string;
  followers: string;
  totalVolume: string;
  verified: boolean;
}

export const creatorsData: CreatorItem[] = [
  {
    id: 'cr-1',
    name: 'Jaye Okonkwo',
    role: 'Model',
    category: 'models',
    avatar: '/assets/hero-model-5.png',
    coverImage: '/assets/hero-model-1.png',
    bio: 'High-fashion editorial model pioneering on-chain identity & African cultural provenance.',
    followers: '45.2K',
    totalVolume: '24.8 ETH',
    verified: true,
  },
  {
    id: 'cr-2',
    name: 'Regina Meessen',
    role: 'Stylist',
    category: 'stylists',
    avatar: '/assets/hero-model-1.png',
    coverImage: '/assets/hero-model-2.png',
    bio: 'Haistylist and creative director pushing the boundaries of African braided art forms.',
    followers: '32.1K',
    totalVolume: '18.4 ETH',
    verified: true,
  },
  {
    id: 'cr-3',
    name: 'Tae Alvón',
    role: 'Artist',
    category: 'artists',
    avatar: '/assets/hero-model-2.png',
    coverImage: '/assets/hero-model-3.png',
    bio: 'Visual artist and photographer documenting traditional sub-Saharan aesthetics.',
    followers: '68.9K',
    totalVolume: '52.1 ETH',
    verified: true,
  },
  {
    id: 'cr-4',
    name: 'Min Sandhu',
    role: 'Hybrid Creator',
    category: 'hybrid',
    avatar: '/assets/hero-model-3.png',
    coverImage: '/assets/hero-model-4.png',
    bio: 'Makeup artist and digital 3D sculptor blending physical body art with Web3 ownership.',
    followers: '28.4K',
    totalVolume: '12.9 ETH',
    verified: true,
  },
];
