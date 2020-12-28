import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../utils/theme';
import light from '../utils/light';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { createMuiTheme, Switch } from '@material-ui/core';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={darkMode ? theme : light}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar/>
        <Switch 
        checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};