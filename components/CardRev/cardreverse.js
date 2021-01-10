import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
    card: {
        justifyContent: 'center',
        marginTop: '100px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
           flexDirection: 'column-reverse',
           marginTop: '50px',
           marginBottom: '70px' 
        }
    },
    cardText: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardImage: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        height: '400px',
        marginLeft: '-20px',
        zIndex: 1,
        borderRadius: '5px',
        padding: '20px 30px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('md')]: {
            height: '350px',
            maxWidth: '500px'
        },
        [theme.breakpoints.down('xs')]: {
            background: 'transparent',
            boxShadow: 'none'
        },
    },
    title: {
        padding: '30px 20px',
        [theme.breakpoints.down('md')]: {
            padding: '10px 20px'
        }
    },
    description: {
        padding: '0px 20px'
    },
    link: {
        textDecoration: 'underline',
        paddingLeft: '20px'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px'
    }
}));


const CardRev = ({title, description, img}) => {
    const classes = useStyles();

    return(
            <Grid container className={classes.card}>
                <Grid
                    item xs={12} sm={10} md={5} 
                    className={classes.cardImage}
                >
                    <Image
                        src={img}
                        alt="Image"
                        width={500}
                        height={500}
                        className={classes.image}
                    />    
                </Grid>
                <Grid 
                    item xs={12} sm={10} md={5} 
                    className={classes.cardText}
                >
                    <Paper className={classes.paper}>
                    <Typography variant="h2" className={classes.title}>{title}</Typography>
                    <Typography variant="body2" className={classes.description}>{description}</Typography>
                    <Link href='/projects'>
                        <p className={classes.link}>Projects</p>
                    </Link>
                    </Paper>
                </Grid>  
            </Grid>
    );
};

export default CardRev;