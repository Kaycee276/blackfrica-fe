import { create } from 'zustand';

export type CategoryFilter = 'all' | 'models' | 'artists' | 'stylists' | 'hybrid';

interface AppState {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  toggleSearch: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCreatorCategory: CategoryFilter;
  setActiveCreatorCategory: (category: CategoryFilter) => void;
  activeCollectionCategory: string;
  setActiveCollectionCategory: (category: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  searchOpen: false,
  setSearchOpen: (open) => set({ searchOpen: open }),
  toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  activeCreatorCategory: 'all',
  setActiveCreatorCategory: (category) => set({ activeCreatorCategory: category }),
  activeCollectionCategory: 'all',
  setActiveCollectionCategory: (category) => set({ activeCollectionCategory: category }),
}));
