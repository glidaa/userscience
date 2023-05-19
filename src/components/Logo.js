// userscience/src/component/Logo.js
import React from 'react';
import logoWhite from '../images/logo-white.png';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './logo.scss';
import { useTheme } from '@mui/material/styles';
const Logo = () => {
  return (

        <div className="logo">
          <img src={logoWhite} alt="UserScience Logo" />

        </div>

  );
};

export default Logo;

