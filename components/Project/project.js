import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
    project: {
        justifyContent: 'center'
    },
    projectText: {
        maxWidth: '500px',
        padding: '20px 30px'
    },
    projectHeading: {
        display: 'flex',
        padding: '20px 0px',
    },
    bar: {
        display: 'block',
        position: 'relative',
        height: '24px',
        width: '100%',
        maxWidth: '500px',
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
        padding: '20px 0px'
    },
    projectTechText: {
        padding: '15px 0px'
    },
    title: {
        paddingRight: '20px'
    },
    link: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}));

const Project = ({title, description, tehnologies, img, link}) => {
    const classes = useStyles();

    return(
        <Grid container className={classes.project}>
            <Grid 
                md={5} lg={4} xl={3} 
                item className={classes.projectText}
            >
                <div className={classes.projectHeading}>
                    <Typography variant="h4" className={classes.title}>
                        {title}
                    </Typography>
                    <Link href={link}>
                    <Image
                        src="/images/git.jpg"
                        alt="GitCat"
                        width={50}
                        height={40}
                        objectFit="fill"
                        className={classes.link}
                    />
                    </Link>
                </div>
               
                <Typography variant="body2">
                    {description}
                </Typography>
                <div className={classes.projectTech}>
                    <Typography variant="h5" className={classes.projectTechText}>
                        Tehnologies
                    </Typography>
                    <Typography variant="body2">
                        {tehnologies.join(', ')}
                    </Typography>
                </div>
            </Grid>
            <Grid 
                md={5} lg={4} xl={3} 
                item className={classes.projectImage}
            >
                 <div className={classes.itemImage}>
                    <div className={classes.bar}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <Image
                        src={img}
                        alt="Image"
                        width={500}
                        height={300}
                    />    
                </div>    
            </Grid>
        </Grid>
    );
}

export default Project;