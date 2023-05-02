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
    case 'loading':
      return {
        textAlign: 'center',
      };
    case 'loading-icon':
      return {
        mb: 1,
      };
    case 'loading-message':
      return {
        mt: 1,
        mb: 2,
      };
    default:
      return undefined;
  }
}
