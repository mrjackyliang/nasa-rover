import { Container, useTheme as useMuiTheme } from '@mui/material';
import React from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageProvider } from '@/components/page-provider';
import { RoverListing } from '@/components/rover-listing';
import { generateMuiStyles } from '@/styles/pages';

/**
 * Index.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export default function Index() {
  const muiTheme = useMuiTheme();

  return (
    <PageProvider>
      <Header />
      <Container component="main" sx={generateMuiStyles(muiTheme, 'index')}>
        <RoverListing />
      </Container>
      <Footer />
    </PageProvider>
  );
}
