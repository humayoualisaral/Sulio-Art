'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

export default function ThemeRegistry({ children }) {
  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      {children}
    </AppRouterCacheProvider>
  );
}