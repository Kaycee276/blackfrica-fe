'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Search, Wallet, Menu, X } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';
import { useAppStore } from '@/store/useAppStore';
import { useWalletStore } from '@/store/useWalletStore';
import { useIsMounted } from '@/hooks/useIsMounted';

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();
  const { toggleSearch } = useAppStore();
  const { isConnected, address, openWalletModal } = useWalletStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useIsMounted();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Creators', href: '/creators' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#131212]/80 border-b border-neutral-200 dark:border-neutral-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Swaps between Light and Dark mode assets */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-36 h-10 overflow-hidden">
            {/* Light Mode Logo */}
            <Image
              src="/assets/Blackfrica-logo-light.png"
              alt="BLACKfrica Logo"
              fill
              sizes="150px"
              className="object-contain block dark:hidden group-hover:scale-105 transition-transform duration-300"
              priority
            />
            {/* Dark Mode Logo */}
            <Image
              src="/assets/Blackfrica-logo-dark.png"
              alt="BLACKfrica Logo"
              fill
              sizes="150px"
              className="object-contain hidden dark:block group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-amber-600 dark:text-amber-400 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Utilities */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Search Trigger */}
          <button
            onClick={toggleSearch}
            className="p-2.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-neutral-700 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Wallet / Sign In Button */}
          <button
            onClick={openWalletModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold text-sm hover:bg-amber-600 dark:hover:bg-amber-400 dark:hover:text-neutral-950 transition-all shadow-md active:scale-95"
          >
            <Wallet className="w-4 h-4" />
            <span>
              {isConnected && address
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : 'Sign in'}
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 dark:text-neutral-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#131212] px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-amber-500 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                toggleSearch();
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium"
            >
              <Search className="w-4 h-4" />
              <span>Search collections & creators</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWalletModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-sm"
            >
              <Wallet className="w-4 h-4" />
              <span>
                {isConnected && address
                  ? 'Wallet Connected'
                  : 'Sign in / Connect Wallet'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
