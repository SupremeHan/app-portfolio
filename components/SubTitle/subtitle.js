import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    title: {
        height:'60vh',
    },
    heading: {
        position: 'absolute',
        left: '15%',
        top: '25%',
        maxWidth: '768px',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '500px'
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '200px'
        }
    },
    headingText: {
        paddingBottom: "10px"
    }
}));


const Subtitle = ({ heading, subHeading }) => {
    const classes = useStyles();

    
    return(
        <div className={classes.title}>
            <div className={classes.heading}>
                <Typography variant="h1" className={classes.headingText}>
                    {heading}
                </Typography>
                <Typography variant="h3">
                    {subHeading}
                </Typography>
            </div>
        </div>
    );
}

export default Subtitle;