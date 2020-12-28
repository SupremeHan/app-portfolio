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
            fontSize: '0',
            '&:after': {
                content: 'attr(data-hover)',
                fontSize: '3rem'
            }
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
                >
                    Hello<br/>I'm<br/>Nikola
                </Typography>
                <Typography variant="h3" className={classes.head}
                    data-hover='UX/UI Designer'>
                    Frontend Developer
                </Typography>
            </div>
        </div>
    );
}

export default Title;