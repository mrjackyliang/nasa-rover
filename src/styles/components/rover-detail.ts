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
  const { grey, mode } = theme.palette;

  switch (id) {
    case 'detail-grid-item':
      return {
        '&:hover': {
          '& .MuiBox-root': {
            borderColor: (mode === 'dark') ? grey[600] : grey[500],
          },
        },
      };
    case 'detail-grid-item-image':
      return {
        display: 'block',
        width: '100%',
        height: 'auto',
        borderColor: (mode === 'dark') ? grey[800] : grey[300],
        borderStyle: 'solid',
        borderRadius: 5,
        borderWidth: 8,
        transition: 'all 250ms ease-in-out',
        cursor: 'pointer',
      };
    case 'detail-grid-item-text':
      return {
        '& .MuiImageListItemBar-titleWrap': {
          py: 2,
          '& .MuiImageListItemBar-title': {
            fontWeight: 700,
            pb: 0.25,
          },
          '& .MuiImageListItemBar-subtitle': {
            color: (mode === 'dark') ? grey[500] : grey[600],
          },
        },
      };
    default:
      return undefined;
  }
}
