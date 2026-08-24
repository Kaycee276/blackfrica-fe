"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Search, Menu, X } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { useAppStore } from "@/store/useAppStore";
import { useWalletStore } from "@/store/useWalletStore";
import { useIsMounted } from "@/hooks/useIsMounted";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();
  const { toggleSearch } = useAppStore();
  const { isConnected, address, openWalletModal } = useWalletStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useIsMounted();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Creators", href: "/creators" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg-primary/80 border-b border-border-primary shadow-md"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
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
                    ? "text-brand-gold font-semibold"
                    : "text-text-secondary hover:text-brand-gold"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Utilities */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search Trigger */}
          <button
            onClick={toggleSearch}
            className="p-2.5 rounded-full text-text-secondary hover:bg-bg-tertiary transition-colors"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-text-secondary hover:bg-bg-tertiary transition-colors relative"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-5 h-5 text-brand-gold hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-text-primary hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Discord Logo Button */}
          <a
            href="https://discord.gg/blackfrica"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-text-secondary hover:bg-bg-tertiary hover:text-[#5865F2] transition-colors flex items-center justify-center group"
            title="Join our Discord community"
            aria-label="Discord Community"
          >
            <svg
              className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-200"
              viewBox="0 0 127.14 96.36"
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a74.56,74.56,0,0,0,64.3,0c.87.69,1.76,1.37,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,121.71,29.12,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,45.92,53.86,53,48.74,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,45.92,96.09,53,91,65.69,84.69,65.69Z" />
            </svg>
          </a>

          {/* Wallet / Sign In Button */}
          <button
            onClick={openWalletModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-bg-primary font-semibold text-sm hover:bg-brand-gold hover:text-black transition-all shadow-md active:scale-95 ml-1"
          >
            <Wallet className="w-4 h-4" />
            <span>
              {isConnected && address
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : "Sign in"}
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-secondary"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-5 h-5 text-brand-gold" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <a
            href="https://discord.gg/blackfrica"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-[#5865F2]"
            aria-label="Discord Community"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a74.56,74.56,0,0,0,64.3,0c.87.69,1.76,1.37,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,121.71,29.12,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,45.92,53.86,53,48.74,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,45.92,96.09,53,91,65.69,84.69,65.69Z" />
            </svg>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-primary"
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
        <div className="md:hidden border-t border-border-primary bg-bg-primary px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-text-primary hover:text-brand-gold py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border-primary flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                toggleSearch();
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border-primary text-text-secondary text-sm font-medium"
            >
              <Search className="w-4 h-4" />
              <span>Search collections & creators</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWalletModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-gold text-black font-bold text-sm"
            >
              <Wallet className="w-4 h-4" />
              <span>
                {isConnected && address
                  ? "Wallet Connected"
                  : "Sign in / Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
