import { DefaultTheme } from 'styled-components';

import logoBlack from '../public/images/logo-black.png';
import logoWhite from '../public/images/logo-white.png';
import iconBlack from '../public/images/icon-black.png';
import iconWhite from '../public/images/icon-white.png';

const appTheme: DefaultTheme = {
  name: 'App',
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
};

export default appTheme;
