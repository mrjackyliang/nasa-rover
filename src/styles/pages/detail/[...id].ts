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
    case 'detail':
      return {
        my: 5,
      };
    case 'detail-grid':
      return {
        mb: 5,
      };
    case 'detail-date':
      return {
        width: '100%',
      };
    default:
      return undefined;
  }
}
