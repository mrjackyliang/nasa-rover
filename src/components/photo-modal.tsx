import { Box, Dialog } from '@mui/material';
import React from 'react';

import { PhotoModalProps } from '@/types';

/**
 * Photo modal.
 *
 * @param {PhotoModalProps} props - Props.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function PhotoModal(props: PhotoModalProps) {
  const {
    alt,
    imgSrc,
    onClose,
    open,
  } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        component="img"
        src={imgSrc}
        alt={alt}
      />
    </Dialog>
  );
}
