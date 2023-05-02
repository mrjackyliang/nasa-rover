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
  const { common } = theme.palette;

  switch (id) {
    case 'header':
      return {
        boxShadow: 'none',
      };
    case 'header-links':
      return {
        flexGrow: 1,
        '& a': {
          color: common.white,
          textDecoration: 'none',
        },
      };
    case 'header-buttons':
      return {
        '& > [id$="-button"]': {
          color: common.white,
        },
      };
    case 'header-buttons-external':
      return {
        width: 16,
        height: 16,
        ml: 1,
      };
    default:
      return undefined;
  }
}
