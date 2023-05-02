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
  const { error } = theme.palette;

  switch (id) {
    case 'error':
      return {
        textAlign: 'center',
      };
    case 'error-icon':
      return {
        color: error.main,
        width: 45,
        height: 45,
        mb: 1,
      };
    case 'error-message':
      return {
        mt: 1,
        mb: 2,
      };
    default:
      return undefined;
  }
}
