import { create } from 'zustand';

interface WalletState {
  isModalOpen: boolean;
  isConnected: boolean;
  address: string | null;
  balance: string;
  openWalletModal: () => void;
  closeWalletModal: () => void;
  connectWallet: (address: string) => void;
  disconnectWallet: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  isModalOpen: false,
  isConnected: false,
  address: null,
  balance: '4.25 ETH',
  openWalletModal: () => set({ isModalOpen: true }),
  closeWalletModal: () => set({ isModalOpen: false }),
  connectWallet: (address) =>
    set({
      isConnected: true,
      address,
      isModalOpen: false,
    }),
  disconnectWallet: () =>
    set({
      isConnected: false,
      address: null,
    }),
}));
