'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { useIsMounted } from '@/hooks/useIsMounted';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const mounted = useIsMounted();

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, mounted]);

  return <>{children}</>;
};
