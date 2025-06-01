import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#ED1C24' },
    secondary: { main: '#B59A54' },
    text: { primary: '#000000', secondary: '#B59A54' }
  },
  typography: {
    fontFamily: '"Nunito Sans", Roboto, sans-serif',
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      lineHeight: 1.2,
      maxWidth: '100%'
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.3,
      maxWidth: '100%'
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      lineHeight: 1.4,
      maxWidth: '100%'
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
      lineHeight: 1.4,
      maxWidth: '100%'
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
      lineHeight: 1.4,
      maxWidth: '100%'
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
      lineHeight: 1.4,
      maxWidth: '100%'
    },
    body1: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
      lineHeight: 1.6,
      maxWidth: '100%'
    },
    body2: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
      lineHeight: 1.6,
      maxWidth: '100%'
    }
  }
});

export default theme;
