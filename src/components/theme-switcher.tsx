import { IconButton } from '@mui/material';
import { Brightness5, DarkMode } from '@mui/icons-material';
import { useTheme as useNextTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

/**
 * Theme switcher.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useNextTheme();
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  if (clientLoaded) {
    return (
      <IconButton
        id="theme-button"
        onClick={() => {
          if (resolvedTheme === 'light') {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
        aria-label={`Current theme: ${theme}`}
      >
        {(resolvedTheme === 'dark') ? <Brightness5 /> : <DarkMode />}
      </IconButton>
    );
  }

  return null;
}
