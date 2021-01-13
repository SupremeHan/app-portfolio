import { makeStyles, Typography } from "@material-ui/core";
import React from 'react';

const useStyles = makeStyles(theme => ({
    footer: {
        height: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return(
        <div className={classes.footer}>
            <Typography variant='body2'>Nikola Živojinović © 2021</Typography>
        </div>
    );
}

export default Footer;