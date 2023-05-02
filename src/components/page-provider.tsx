import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useTheme as useNextTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { generateMuiTheme } from '@/lib/theme';
import { PageProviderCurrentTheme, PageProviderProps } from '@/types';

/**
 * Page provider.
 *
 * @param {PageProviderProps} props - Props.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function PageProvider(props: PageProviderProps) {
  const { children } = props;

  const { resolvedTheme } = useNextTheme();
  const [currentTheme, setCurrentTheme] = useState<PageProviderCurrentTheme>(null);

  useEffect(() => {
    if (
      resolvedTheme
      && (
        resolvedTheme === 'light'
        || resolvedTheme === 'dark'
      )
    ) {
      setCurrentTheme(resolvedTheme);
    }
  }, [currentTheme, resolvedTheme]);

  if (currentTheme !== null) {
    return (
      <MuiThemeProvider theme={generateMuiTheme(currentTheme)}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <CssBaseline />
          {children}
        </LocalizationProvider>
      </MuiThemeProvider>
    );
  }

  return null;
}
