import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    title: {
        height:'60vh',
        [theme.breakpoints.down('xs')]: {
           height: '70vh'
        }
    },
    heading: {
        position: 'absolute',
        left: '15%',
        top: '25%',
        maxWidth: '768px',
         '& span': {
        display: 'inline-block',
        transform: 'translateY(30px)',
        opacity: 0,
        animation: '1s ease 0.2s 1 normal forwards running $span',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '500px'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '300px',
        }
    },
    headingText: {
        paddingBottom: "10px"
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
    },
    delay: {
        animationDelay: '0.5s !important'
    },
}));


const Subtitle = ({ heading, subHeading }) => {
    const classes = useStyles();

    
    return(
        <div className={classes.title}>
            <div className={classes.heading}>
                <Typography variant="h1" className={classes.headingText}>
                    <span>{heading}</span>
                </Typography>
                <Typography variant="h4">
                    <span className={classes.delay}>{subHeading}</span> 
                </Typography>
            </div>
        </div>
    );
}

export default Subtitle;