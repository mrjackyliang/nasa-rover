import { createTheme } from '@mui/material';

import { bangers, openSans } from '@/lib/font';
import { GenerateMuiThemeReturns, GenerateMuiThemeThemeMode } from '@/types';

/**
 * Generate mui theme.
 *
 * @param {GenerateMuiThemeThemeMode} themeMode - Theme mode.
 *
 * @returns {GenerateMuiThemeReturns}
 *
 * @since 1.0.0
 */
export function generateMuiTheme(themeMode: GenerateMuiThemeThemeMode): GenerateMuiThemeReturns {
  const theme = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1536,
      },
    },
    palette: {
      mode: themeMode,
      primary: {
        dark: '#003f6f',
        light: '#005b9f',
        main: '#337bb2',
      },
      secondary: {
        dark: '#942a2a',
        light: '#d43c3c',
        main: '#dc6363',
      },
    },
    typography: {
      h1: {
        fontFamily: bangers.style.fontFamily,
        fontWeight: 400,
      },
      h2: {
        fontFamily: bangers.style.fontFamily,
        fontWeight: 400,
      },
      h3: {
        fontFamily: bangers.style.fontFamily,
        fontWeight: 400,
      },
      h4: {
        fontFamily: bangers.style.fontFamily,
        fontWeight: 400,
      },
      h5: {
        fontFamily: bangers.style.fontFamily,
        fontWeight: 400,
      },
      h6: {
        fontFamily: bangers.style.fontFamily,
        fontWeight: 400,
      },
      subtitle1: {
        fontFamily: openSans.style.fontFamily,
      },
      subtitle2: {
        fontFamily: openSans.style.fontFamily,
      },
      body1: {
        fontFamily: openSans.style.fontFamily,
      },
      body2: {
        fontFamily: openSans.style.fontFamily,
      },
      button: {
        fontFamily: openSans.style.fontFamily,
      },
      caption: {
        fontFamily: openSans.style.fontFamily,
      },
      overline: {
        fontFamily: openSans.style.fontFamily,
      },
    },
  } as const;

  return createTheme(theme);
}
