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
    },
    head: {
        '&:hover': {
            transition: 'all .4s cubic-bezier(0.2, 0.6, 0.2, 1)',
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
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-once="true"
                   // className="animate__animated animate__fadeInLeft"
                >
                    Hello<br/>I'm<br/>Nikola
                </Typography>
                <Typography 
                    variant="h4"
                    data-aos="fade-right"
                    data-aos-delay="1500"
                    data-aos-duration="1000"
                    data-aos-once="true"
                   // className="animate__animated animate__fadeInLeft animate__delay-1s"
                >
                    Frontend Developer
                </Typography>
            </div>
        </div>
    );
}

export default Title;
