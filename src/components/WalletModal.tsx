'use client';

import React from 'react';
import { useWalletStore } from '@/store/useWalletStore';
import { X, ShieldCheck, Wallet, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WalletModal = () => {
  const { isModalOpen, closeWalletModal, isConnected, address, balance, connectWallet, disconnectWallet } =
    useWalletStore();

  if (!isModalOpen) return null;

  const mockAddress = '0x71C...89B4';

  const walletOptions = [
    { name: 'MetaMask', icon: '🦊', desc: 'Connect using your browser extension' },
    { name: 'WalletConnect', icon: '🌐', desc: 'Scan with mobile wallet' },
    { name: 'Coinbase Wallet', icon: '🔵', desc: 'Connect to Coinbase' },
    { name: 'Phantom', icon: '👻', desc: 'Solana & EVM wallet' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-card-bg border border-card-border rounded-3xl p-6 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={closeWalletModal}
            className="absolute top-5 right-5 p-2 text-text-muted hover:text-text-primary rounded-full hover:bg-bg-tertiary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-brand-gold-glow text-brand-gold border border-brand-gold-border">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-text-primary uppercase tracking-tight">
                {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </h3>
              <p className="text-xs text-text-muted font-mono">
                {isConnected ? 'Web3 Identity Verified' : 'Select your Web3 provider'}
              </p>
            </div>
          </div>

          {isConnected ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-bg-tertiary border border-border-primary space-y-2">
                <div className="flex items-center justify-between text-xs text-text-muted font-mono">
                  <span>CONNECTED ACCOUNT</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
                <div className="text-lg font-bold text-text-primary font-mono">{address}</div>
                <div className="pt-2 border-t border-border-primary flex justify-between text-sm">
                  <span className="text-text-muted">On-Chain Balance:</span>
                  <span className="font-extrabold text-brand-gold">{balance}</span>
                </div>
              </div>

              <button
                onClick={disconnectWallet}
                className="w-full py-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 font-bold text-sm border border-rose-500/30 transition-colors"
              >
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {walletOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => connectWallet(mockAddress)}
                  className="w-full p-4 rounded-2xl bg-bg-secondary hover:bg-bg-tertiary border border-border-primary text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary group-hover:text-brand-gold transition-colors">
                        {opt.name}
                      </h4>
                      <p className="text-xs text-text-muted">{opt.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                </button>
              ))}

              <div className="pt-3 text-center">
                <p className="text-[11px] text-text-muted flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" /> Secure Web3 authentication powered by BLACKfrica
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
