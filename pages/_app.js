import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../utils/theme';
import light from '../utils/light';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { makeStyles, Switch } from '@material-ui/core';
import * as gtag from '../utils/gtag';
import { useRouter } from 'next/router';


const useStyles = makeStyles(theme => ({
    toggle: {
      position: 'absolute',
      top: '30px',
      left: '20px'
    },
    switchBase: {
      color: '#e64a4a',
    }
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [darkMode, setDarkMode] = useState(true);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment >
      <ThemeProvider theme={darkMode ? theme : light}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar/>
        <div className={classes.switch}>
          <Switch 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)}
            className={classes.toggle}
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            color="primary"
          />
        </div>
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