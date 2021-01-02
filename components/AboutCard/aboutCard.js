import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Image  from 'next/image';

const useStyles = makeStyles(theme => ({
   about: {
       justifyContent: 'center',
       marginTop: '100px'
   },
   aboutImage: {
       opacity: 0.2
   },
   background: {
       position: 'relative',
       maxWidth: '768px'
   },
   aboutText: {
       position: 'absolute',
       left: "10%",
       top: "10%",
       right: "10%",
   },
   aboutHeading: {
       marginBottom: '30px',
       [theme.breakpoints.down('xs')]: {
           marginBottom: '10px'
       }
   },
   aboutItem: {
       marginTop: '20px',
       [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
       }
   }
}));

export default function AboutCard({img, title, text}) {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.about}>
                <Grid item className={classes.aboutItem}>
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
                         data-aos="zoom-in"
                         data-aos-delay="500"
                         data-aos-duration="1000"
                         data-aos-once="true"
                         className={classes.aboutText}>
                            <Typography variant="h3" className={classes.aboutHeading}>
                                {title}
                            </Typography>
                            <Typography variant="caption">
                                {text}
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
