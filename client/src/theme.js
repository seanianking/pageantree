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
      fontWeight: "500"
    },
    h2: {
      fontSize: "64px",
      fontWeight: "500"
    },
    h3: {
      fontSize: "56px",
      fontWeight: "500"
    },
    h4: {
      fontSize: "48px",
      fontWeight: "500"
    },
    h5: {
      fontSize: "40px",
      fontWeight: "500"
    },
    h6: {
      fontSize: "36px",
      fontWeight: "500"
    },
    h7: {
      fontSize: "32px",
      fontWeight: "500"
    },
    largeBody: {
      fontSize: "24px",
      lineHeight: "125%"
    },
    body: {
      fontSize: "16px"
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