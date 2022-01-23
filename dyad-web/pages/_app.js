import '../styles/globals.css';
import Head from 'next/head';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  pallete: {
    primary: {
      main: '#448d9b',
    },
    secondary: {
      main: '#8FBCBB',
    },
    error: {
      main: '#8FBCBB',
    },
  },
  
});

function getTheme(){
  return(theme);
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dyad</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        
      </ThemeProvider>
    </>
  ); 
}