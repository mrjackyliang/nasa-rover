import { Box, Typography, useTheme as useMuiTheme } from '@mui/material';
import { Error } from '@mui/icons-material';
import React from 'react';

import { generateMuiStyles } from '@/styles/components/api-error';
import { ApiErrorProps } from '@/types';

/**
 * Api error.
 *
 * @param {ApiErrorProps} props - Props.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function ApiError(props: ApiErrorProps) {
  const { code, message } = props;

  const muiTheme = useMuiTheme();

  return (
    <Box sx={generateMuiStyles(muiTheme, 'error')}>
      <Error sx={generateMuiStyles(muiTheme, 'error-icon')} />
      <Typography variant="h4">An Error Occurred</Typography>
      <Typography variant="body1" sx={generateMuiStyles(muiTheme, 'error-message')}>{message}</Typography>
      <Typography variant="body2">{code}</Typography>
    </Box>
  );
}
