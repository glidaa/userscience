// userscience/src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0002ff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      main: '#000',
    },
    accent: {
      main: '#fff',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
});

export default theme;
