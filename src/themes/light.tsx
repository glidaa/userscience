import { DefaultTheme } from 'styled-components';

import logoBlack from '../public/images/logo-black.png';
import logoWhite from '../public/images/logo-white.png';
import iconBlack from '../public/images/icon-black.png';
import iconWhite from '../public/images/icon-white.png';

const lightTheme: DefaultTheme = {
  name: 'Light',
  logo: {
    black: logoBlack,
    white: logoWhite,
  },
  icon: {
    black: iconBlack,
    white: iconWhite,
  },
  colors: {
    primary: '#0002FF',
    black: '#000',
    white: '#FFF',
  },
  background: {
    primary: '#FFF',
    secondary: '#EEE',
  },
  text: {
    primary: '#333',
    secondary: '#999',
  },
  header: {
    background: '#FFF',
    foreground: '#000',
  },
  footer: {
    background: '#EEE',
    foreground: '#000',
  },
};

export default lightTheme;
