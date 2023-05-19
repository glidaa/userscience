//userscience/src/components/Header.js
import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from './Logo';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.main }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
   
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
