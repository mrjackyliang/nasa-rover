import {
  Box,
  Container,
  Divider,
  Typography,
  useTheme as useMuiTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { generateMuiStyles } from '@/styles/components/footer';

/**
 * Footer.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function Footer() {
  const muiTheme = useMuiTheme();
  const [year, setYear] = useState(' ');

  useEffect(() => {
    const fullYear = new Date().getFullYear();

    setYear(` ${fullYear} `);
  }, []);

  return (
    <Box component="footer" sx={generateMuiStyles(muiTheme, 'footer')}>
      <Divider sx={generateMuiStyles(muiTheme, 'footer-divider')} />
      <Container>
        <Typography variant="body1" sx={generateMuiStyles(muiTheme, 'footer-copyright')}>
          Copyright
          &copy;
          {year}
          Jacky Liang
        </Typography>
        <Typography variant="body1" sx={generateMuiStyles(muiTheme, 'footer-disclaimer')}>
          This project is not affiliated with or endorsed by NASA. The NASA name, logo, and related trademarks are used solely for demonstration purposes.
        </Typography>
      </Container>
    </Box>
  );
}
