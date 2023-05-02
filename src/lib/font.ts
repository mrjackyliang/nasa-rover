import { Bebas_Neue, Open_Sans } from 'next/font/google';

/**
 * Bebas Neue.
 *
 * @since 1.0.0
 */
export const bangers = Bebas_Neue({
  style: [
    'normal',
  ],
  subsets: [
    'latin',
    'latin-ext',
  ],
  weight: [
    '400',
  ],
});

/**
 * Open Sans.
 *
 * @since 1.0.0
 */
export const openSans = Open_Sans({
  style: [
    'normal',
    'italic',
  ],
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'hebrew',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
  ],
});
