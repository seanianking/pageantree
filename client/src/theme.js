import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007a33',
    },
    secondary: {
      main: '#c90159',
    },
    background: {
      default: '#fff4fb',
    },
    divider: '#a7aab4',
    info: {
      main: '#7eb2dd',
    },
    success: {
      main: '#2e7d32',
    },
    warning: {
      main: '#ffd700',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: "72px",
    },
    subtitle1: {
      fontFamily: 'Lato',
    },
    caption: {
      fontFamily: 'Lato',
    },
    overline: {
      fontFamily: 'Lato',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;