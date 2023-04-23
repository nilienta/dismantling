import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    primary: {
      main: '#FF4D01',
      dark: '#e65100',
    },
    secondary: {
      main: '#191919',
    },
    info: {
      main: '#ffffff',
    },
    text: {
      disabled: 'transparent',
    },
    typography: {
      fontFamily: `'Montserrat', 'Arial', sans-serif`,
      fontSize: 18,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const theme = createTheme(themeOptions);
