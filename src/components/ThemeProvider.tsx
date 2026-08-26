'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply current theme class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Mark as hydrated to enable smooth transition ONLY after initial paint
    root.classList.add('hydrated');
  }, [theme]);

  return <>{children}</>;
};
