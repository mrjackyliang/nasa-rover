import {
  Box,
  CircularProgress,
  Typography,
  useTheme as useMuiTheme,
} from '@mui/material';
import React from 'react';

import { generateMuiStyles } from '@/styles/components/api-loading';

/**
 * Api loading.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function ApiLoading() {
  const muiTheme = useMuiTheme();

  return (
    <Box sx={generateMuiStyles(muiTheme, 'loading')}>
      <CircularProgress size={40} thickness={6} sx={generateMuiStyles(muiTheme, 'loading-icon')} />
      <Typography variant="h4" sx={generateMuiStyles(muiTheme, 'loading-title')}>
        Fetching Rover Data
      </Typography>
      <Typography variant="body1" sx={generateMuiStyles(muiTheme, 'loading-message')}>Application is loading data from the NASA API&hellip;</Typography>
    </Box>
  );
}
