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
          className="relative w-full max-w-md bg-white dark:bg-[#1A1919] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={closeWalletModal}
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/30">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white uppercase tracking-tight">
                {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                {isConnected ? 'Web3 Identity Verified' : 'Select your Web3 provider'}
              </p>
            </div>
          </div>

          {isConnected ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>CONNECTED ACCOUNT</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
                <div className="text-lg font-bold text-neutral-900 dark:text-white font-mono">{address}</div>
                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-sm">
                  <span className="text-neutral-400">On-Chain Balance:</span>
                  <span className="font-extrabold text-amber-500">{balance}</span>
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
                  className="w-full p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800/80 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        {opt.name}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{opt.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}

              <div className="pt-3 text-center">
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Secure Web3 authentication powered by BLACKfrica
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
