import { Hidden, makeStyles } from '@material-ui/core'
import React from 'react';
import MouseIcon from '@material-ui/icons/Mouse';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const useStyles = makeStyles(theme => ({
  wrapper: {
        left: '50%',
        position: 'absolute',
        textAlign: "center",
        bottom: "20px",
        transform: 'translate(-50%, -50%)',
        
  },
  floater: {
        animation: '$floating',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
  },
  '@keyframes floating': {
        '0%': {
            transform: 'translate(0, 0px)'
        },
        "50%": {
            transform: 'translate(0, 10px)'
        },
        "100%": {
            transform: 'translate(0, -0px)'
        }
  }
}))

export default function Mouse() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Hidden smDown>
                <MouseIcon className={classes.floater} fontSize='large'/>
            </Hidden>
            <Hidden mdUp>
                <TouchAppIcon className={classes.floater} fontSize='large'/>
            </Hidden>
        </div>
    )
}
