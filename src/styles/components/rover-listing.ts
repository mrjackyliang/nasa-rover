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
  const { common, grey, mode } = theme.palette;

  switch (id) {
    case 'listing':
      return {
        textAlign: 'center',
      };
    case 'listing-grid':
      return {
        my: 3,
      };
    case 'listing-grid-link':
      return {
        textDecoration: 'none',
        '&:hover': {
          '& .MuiPaper-root': {
            backgroundColor: (mode === 'dark') ? grey[800] : common.white,
            boxShadow: (mode === 'dark') ? 'none' : `0 0 10px ${grey[800]}`,
          },
        },
      };
    case 'listing-grid-link-paper':
      return {
        height: '100%',
        p: 3,
        backgroundColor: (mode === 'dark') ? grey[900] : common.white,
        boxShadow: (mode === 'dark') ? 'none' : `0 0 10px ${grey[400]}`,
        transition: 'all 250ms ease-in-out',
      };
    default:
      return undefined;
  }
}
