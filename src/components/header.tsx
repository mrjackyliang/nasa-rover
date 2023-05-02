import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme as useMuiTheme,
} from '@mui/material';
import { MoreVert, OpenInNew } from '@mui/icons-material';
import NextLink from 'next/link';
import React, { useState } from 'react';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { generateMuiStyles } from '@/styles/components/header';
import { HeaderAnchorElement } from '@/types';

/**
 * Header.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function Header() {
  const [anchorElement, setAnchorElement] = useState<HeaderAnchorElement>(null);
  const muiTheme = useMuiTheme();

  return (
    <AppBar component="header" position="sticky" sx={generateMuiStyles(muiTheme, 'header')}>
      <Toolbar>
        <Box sx={generateMuiStyles(muiTheme, 'header-links')}>
          <Typography variant="h4">
            <Link component={NextLink} href="/">NASA Mars Rover Photos</Link>
          </Typography>
        </Box>
        <Box sx={generateMuiStyles(muiTheme, 'header-buttons')}>
          <ThemeSwitcher />
          <IconButton
            id="menu-button"
            onClick={(event) => setAnchorElement(event.currentTarget)}
            aria-controls={(anchorElement !== null) ? 'menu' : undefined}
            aria-expanded={(anchorElement !== null) ? 'true' : undefined}
            aria-haspopup="true"
            aria-label="More"
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorElement}
            open={anchorElement !== null}
            onClose={() => setAnchorElement(null)}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}
          >
            <MenuItem
              onClick={() => {
                window.open(
                  'https://github.com/mrjackyliang/nasa-rover',
                  '_blank',
                );
              }}
            >
              GitHub Repo
              <OpenInNew sx={generateMuiStyles(muiTheme, 'header-buttons-external')} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.open(
                  'https://api.nasa.gov',
                  '_blank',
                );
              }}
            >
              NASA Open APIs
              <OpenInNew sx={generateMuiStyles(muiTheme, 'header-buttons-external')} />
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
