import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    card: {
        justifyContent: 'center',
        marginTop: '100px',
        alignItems: 'center',
         [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
            marginBottom: '70px'
        },
    },
    cardText: {
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1,
    },
    cardImage: {
        display: 'flex',
        justifyContent: 'center',
        
    },
    paper: {
        height: '400px',
        marginRight: '-20px',
        zIndex: 2,
        borderRadius: '5px',
        padding: '20px 30px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('md')]: {
            height: '350px',
            maxWidth: '500px'
        },
        
       
    },
    title: {
        padding: "20px 0px"
    }
}));


const Card = ({title, description, img, link}) => {
    const classes = useStyles();

    return(
            <Grid container className={classes.card}>
                <Grid
                    item xs={12} sm={10} md={5} 
                    className={classes.cardText}
                >
                    <Paper className={classes.paper}>
                    <Typography variant="h2" className={classes.title}>{title}</Typography>
                    <Typography variant="body2">{description}</Typography>
                    <div>
                        <p>{link}</p>
                    </div>
                    </Paper>
                </Grid>
                <Grid 
                    item xs={12} sm={10} md={5} 
                    className={classes.cardImage}
                >
                    <Image
                        src={img}
                        alt="Image"
                        width={500}
                        height={500}
                    />    
                </Grid>
            </Grid>
    );
};

export default Card;