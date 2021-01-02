import { makeStyles } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles(theme => ({
    scrolldownWrapper: {
        left: '50%',
        position: 'absolute',
        textAlign: "center",
        bottom: "0",
        transform: 'translate(-50%, -50%)'
    },
    scrolldown: {
        border: '2px solid #cfc9d7',
        borderRadius: '30px',
        height: '46px',
        margin: '0 auto 8px',
        textAlign: 'center',
        width: '30px'
    },
    scrolldownP1: {
        animationDuration: '1.5s',
        animationName: '$scrolldown',
        animationIterationCount: 'infinite',
        fill: '#cfc9d7'
    },
    scrolldownP2: {
        animationDuration: '1.5s',
        animationName: '$scrolldown',
        animationIterationCount: 'infinite',
        fill: '#cfc9d7',
        animationDelay: '0.75s'
    },
    "@keyframes scrolldown" : {
        "0%": {
            opacity: 0,
            transform: 'translate(0, -8px)'
        },
        "50%": {
            opacity: 1,
            transform: 'translate(0, 0)'
        },
        "100%": {
            opacity: 0,
            transform: 'translate(0, 8px)'
        }
    }
}));

const Mouse = () => {
    const classes = useStyles();
    return(
        <div className={classes.scrolldownWrapper}>
            <div className={classes.scrolldown}>
                <svg height="30" width="10">
                    <circle className={classes.scrolldownP1} cx="5" cy="15" r="2"/>
                    <circle className={classes.scrolldownP2} cx="5" cy="15" r="2"/>
                </svg>
            </div>
        </div>
    )
};

export default Mouse;