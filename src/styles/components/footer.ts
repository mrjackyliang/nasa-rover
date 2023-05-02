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
  const { grey } = theme.palette;

  switch (id) {
    case 'footer':
      return {
        my: 5,
        textAlign: 'center',
      };
    case 'footer-divider':
      return {
        mb: 5,
        borderBottomColor: grey[800],
        borderBottomWidth: 3,
      };
    case 'footer-copyright':
      return {
        fontWeight: 700,
        textTransform: 'uppercase',
      };
    case 'footer-disclaimer':
      return {
        fontSize: 12,
        pt: 2,
      };
    default:
      return undefined;
  }
}
