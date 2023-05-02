import { GenerateMuiStylesId, GenerateMuiStylesReturns, GenerateMuiStylesTheme } from '@/types';

/**
 * Generate mui styles.
 *
 * @param {GenerateMuiStylesTheme} theme - Theme.
 * @param {GenerateMuiStylesId}    id    - Id.
 *
 * @returns {GenerateMuiStylesReturns}
 *
 * @since 1.0.0
 */
export function generateMuiStyles(theme: GenerateMuiStylesTheme, id: GenerateMuiStylesId): GenerateMuiStylesReturns {
  switch (id) {
    case 'index':
      return {
        my: 5,
      };
    default:
      return undefined;
  }
}
