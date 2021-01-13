import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Image  from 'next/image';

const useStyles = makeStyles(theme => ({
   about: {
       justifyContent: 'center',
       marginTop: '100px',
       [theme.breakpoints.down('sm')]: {
           marginTop: '50px',
       }
   },
   aboutImage: {
       opacity: 0.2
   },
   background: {
       position: 'relative',
       maxWidth: '768px'
   },
   aboutItem: {
       marginTop: '20px',
       [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
       },
       display: 'flex',
       justifyContent: 'center'
   },
    aboutText: {
       position: 'absolute',
       left: "10%",
       top: "10%",
       right: "10%",
      '& span': {
        display: 'inline-block',
        transform: 'translateY(30px)',
        opacity: 0,
        animation: '1s ease 0.2s 1 normal forwards running $span',
        },
   },
   '@keyframes span': {
        '0%': {
            opacity: 0,
            transform: 'translateX(-30px)'
        },
        "100%": {
            opacity: 1,
            transform: 'translateX(0px)'
        }
    },

   aboutHeading: {
       marginBottom: '30px',
       [theme.breakpoints.down('xs')]: {
           marginBottom: '10px'
       }
   },
}));

export default function AboutCard({img, title, text}) {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.about}>
                <Grid item xs={11} className={classes.aboutItem}>
                    <div className={classes.background}>
                        <Image
                            src={img}
                            width={900}
                            height={600}
                            objectFit="cover"
                            alt="Desktop"
                            className={classes.aboutImage}    
                        />
                        <div 
                         className={classes.aboutText}>
                            <Typography variant="h3" className={classes.aboutHeading}>
                                <span>{title}</span>
                            </Typography>
                            <Typography variant="caption">
                                <span>{text}</span>
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
