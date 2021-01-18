import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

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
        borderRadius: '5px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px'
        }
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
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px 5px 15px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('md')]: {
            height: '350px',
            maxWidth: '500px',
            padding: '20px 20px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '20px 0px'
        },
       
    },
    title: {
        padding: "15px 20px 20px 20px",
        [theme.breakpoints.up('md')]: {
            padding: '20px 15px'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '10px 20px'
        },
    },
    description: {
        padding: '0px 20px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 20px'
        }
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px'
    },
    ul: {
        listStyle: 'none'
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            marginLeft: "10px",
            '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer'
            }
        },
        margin: '10px 0px'
    }
}));

const Contact = () => {
    const classes = useStyles();

    return(
            <Grid container className={classes.card}>
                <Grid
                    item xs={12} sm={10} md={5} 
                    className={classes.cardText}
                >
                    <Paper className={classes.paper}>
                    <Typography variant="h2" className={classes.title}>Get in touch</Typography>
                    <Typography 
                        variant="body2" 
                        className={classes.description}>
                           Reach out to me on social media, or you can
                           just send me an email to zivojinovicn13@gmail.com
                    </Typography>
                    <ul className={classes.ul}>
                        <Link href="https://github.com/SupremeHan"><li className={classes.li}><GitHubIcon fontSize='large'/><span>Github</span></li></Link>
                        
                        <Link href="https://www.linkedin.com/in/nikola-zivojinovic-a369341a0/"><li className={classes.li}><LinkedInIcon fontSize='large'/><span>LinkedIn</span></li></Link>
                        <Link href="https://www.instagram.com/__th1rteen__/"><li className={classes.li}><InstagramIcon fontSize='large'/><span>Instagram</span></li></Link>
                    </ul>

                    </Paper>
                </Grid>
                <Grid 
                    item xs={12} sm={10} md={5} 
                    className={classes.cardImage}
                >
                    <Image
                        src='/images/about.jpg'
                        alt="Image"
                        width={500}
                        height={500}
                        objectFit='cover'
                        className={classes.image}
                    />    
                </Grid>
            </Grid>
    );
};

export default Contact;