import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
    project: {
        justifyContent: 'center',
        marginBottom: '70px',
        marginTop: '70px',
    },
    projectText: {
        maxWidth: '500px',
        padding: '20px 30px'
    },
    projectHeading: {
        display: 'flex',
        padding: '20px 0px',
    },
    projectImage: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
        
    },
    image: {
        border: '1px solid #ddd !important'
    },
    bar: {
        display: 'block',
        position: 'relative',
        height: '24px',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#ddd',
        '& i': {
        height: '12px',
        width: '12px',
        backgroundColor: '#ff5f57',
        borderRadius: '50%',
        position: 'absolute',
        top: '6px',
        left: '10px'
        },
        '& i:nth-child(2)' : {
            height: '12px',
            width: '12px',
            backgroundColor: '#ffbd2e',
            borderRadius: '50%',
            position: 'absolute',
            top: '6px',
            left: '27px'
        },
        '& i:nth-child(3)' : {
            height: '12px',
            width: '12px',
            backgroundColor: '#28ca41',
            borderRadius: '50%',
            position: 'absolute',
            top: '6px',
            left: '44px'
        },
    },
     projectTech: {
        padding: '10px 0px'
    },
    projectTechText: {
        padding: '15px 0px'
    },
    title: {
        paddingRight: '20px',
        marginBottom: '10px'
    },
    link: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    gitWrap: {
        display: 'flex',
        alignItems: 'center',
        '& :hover': {
            cursor: 'pointer'
        }
    },
    github: {
        marginLeft: '20px',
        
    }
}));

const Project = ({title, description, tehnologies, img, link}) => {
    const classes = useStyles();

    return(
        <Grid container className={classes.project}>
            <Grid 
                md={5} lg={4} 
                item className={classes.projectText}
            >
                <Typography variant="h4" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
                <div className={classes.projectTech}>
                     <div className={classes.projectHeading}>
                    <Typography variant="h5" className={classes.projectTechText}>
                        Tehnologies
                    </Typography>
                    <Link href={link}>
                    <div className={classes.gitWrap}>
                        <GitHubIcon
                            className={classes.github}
                            fontSize="large"
                        />
                    </div>
                    
                    </Link>
                     </div>
                    <Typography variant="body2">
                        {tehnologies.join(', ')}
                    </Typography>
                </div>
            </Grid>
            <Grid 
                xs={11} md={5} lg={4} 
                item className={classes.projectImage}
            >
                 <div >
                    <div className={classes.bar}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <div className={classes.itemImage}>
                    <Image
                        src={img}
                        alt="Image"
                        width={600}
                        height={300}
                        objectFit="cover"
                        className={classes.image}
                    />    
                    </div>
                    
                </div>    
            </Grid>
        </Grid>
    );
}

export default Project;