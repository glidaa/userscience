import { DefaultTheme } from 'styled-components';

import logoBlack from '../public/images/logo-black.png';
import logoWhite from '../public/images/logo-white.png';
import iconBlack from '../public/images/icon-black.png';
import iconWhite from '../public/images/icon-white.png';

const darkTheme: DefaultTheme = {
  name: 'Dark',
  logo: {
    black: logoWhite,
    white: logoBlack,
  },
  icon: {
    black: iconWhite,
    white: iconBlack,
  },
  colors: {
    primary: '#0002FF',
    black: '#000',
    white: '#FFF',
  },
  background: {
    primary: '#000',
    secondary: '#333',
  },
  text: {
    primary: '#FFF',
    secondary: '#999',
  },
  header: {
    background: '#000',
    foreground: '#FFF',
  },
  footer: {
    background: '#333',
    foreground: '#FFF',
  },
};

export default darkTheme;
