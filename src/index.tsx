import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme();
// Bootstrap font sizes
theme.typography = {
  ...theme.typography,
  h1: {
    ...theme.typography.h1,
    fontSize: 'calc(1.375rem + 1.5vw)',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
  },
  h2: {
    ...theme.typography.h2,
    fontSize: 'calc(1.325rem + 0.9vw)',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  h3: {
    ...theme.typography.h3,
    fontSize: 'calc(1.3rem + 0.6vw)',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.75rem',
    },
  },
  h4: {
    ...theme.typography.h4,
    fontSize: 'calc(1.275rem + 0.3vw)',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
  },
  h5: {
    ...theme.typography.h5,
    fontSize: '1.25rem',
  },
  h6: {
    ...theme.typography.h6,
    fontSize: '1rem',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
