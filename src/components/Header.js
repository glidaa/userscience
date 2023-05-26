import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Menu, StyledMenu, MenuItem, MenuList } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from './Logo';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesSubMenuItems = [
    { key: 'menu.services.service1', label: 'Insights' },
    { key: 'menu.services.service2', label: 'Recruitment' },
    { key: 'menu.services.service3', label: 'Training' },
    { key: 'menu.services.service4', label: 'Experience Building' },
    { key: 'menu.services.service5', label: 'Data Consulting' },
    { key: 'menu.services.service6', label: 'Events' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.main }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        <Box sx={{ display: 'flex', alignItems: 'right' }}>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
 
          <IconButton
            color="inherit"
            aria-label="menu"
            aria-controls="basic-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
        
        <Button
              color="inherit"
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
               {t('menu.services')}
            </Button>
          <Button color="inherit" onClick={() => navigateToSection('insights')}>
               {t('menu.insights')}
          </Button>
          <Button color="inherit" onClick={() => navigateToSection('events')}>
          {t('menu.events')}
          </Button>
          <Button color="inherit" onClick={() => navigateToSection('book')}>
          {t('menu.book')}
          </Button>
          <Button color="inherit" onClick={() => navigateToSection('training')}>
          {t('menu.training')}
          </Button>
          <Button color="inherit" onClick={() => navigateToSection('clients')}>
          {t('menu.clients')}
          </Button>
          <Button color="inherit" onClick={() => navigateToSection('contact')}>
          {t('menu.contact')}
          </Button>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => navigateToSection('services')} key="menu.services">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>{t('menu.services')}</Box>
            </Box>
          </MenuItem>
          {servicesSubMenuItems.map((item) => (
           <MenuItem onClick={() => navigateToSection(item.key)} key={item.key}>
           {item.label}
         </MenuItem>
       ))}
     </Menu>
     <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigateToSection('/login')}
        sx={{
          outline: '1px solid #fff',
          color: '#fff',
          marginRight: '15px',
        }}
        className="login"
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigateToSection('/register')}
        className="register"
      >
        Register
      </Button>
      </Box>
      </Box>
   </Toolbar>
 </AppBar>
);
};

export default Header;
