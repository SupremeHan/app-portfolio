import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    title: {
        height: '100vh',
    },
    heading: {
        position: 'absolute',
        left: '15%',
        top: '25%',
        maxWidth: '960px',
        '& span': {
        display: 'inline-block',
        transform: 'translateY(30px)',
        opacity: 0,
        animation: '1s ease 0.2s 1 normal forwards running $span',
        },
    },
    delay: {
        animationDelay: '0.5s !important'
    },
    head: {
        '&:hover': {
            transition: 'all .4s cubic-bezier(0.2, 0.6, 0.2, 1)',
        }
    },
    
    '@keyframes span': {
        '0%': {
            opacity: 0,
            transform: 'translateY(30px)'
        },
        "100%": {
            opacity: 1,
            transform: 'translateY(0px)'
        }
    }
}));


const Title = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.title}>
            <div className={classes.heading}>
                <Typography 
                    variant="h1"
                   // className="animate__animated animate__fadeInLeft"
                >
                   <span>Hello<br/>I'm<br/>Nikola</span>
                </Typography>
                <Typography 
                    variant="h4"
                   // className="animate__animated animate__fadeInLeft animate__delay-1s"
                >
                    <span className={classes.delay}>Frontend Developer</span>
                </Typography>
            </div>
        </div>
    );
}

export default Title;
