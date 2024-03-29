import React from 'react';
import Head from 'next/head';
import Project from '../components/Project/project';
import Subtitle from '../components/SubTitle/subtitle';

export default function About() {
    return(
        <>
             <Head>
                <title>Projects | Nikola Zivojinovic | Front End Developer</title>
            </Head>
            <Subtitle
                heading="Projects"
                subHeading="Both personal and done for clients"
            />
            
            <Project
                title="Fitness App"
                description={`Full stack web application, created as a part of personal project. You can create an account, have personal training plan, track your progress, read fitness related articles.`
                }
                tehnologies={['Html','Css','React','NodeJS', 'MySQL']}
                img="/images/projects/fitnessApp.png"
                link="https://github.com/SupremeHan/fitnessApp-frontend"
            />
            <Project
                title='Requirements Model'
                description={`Application based on PowerDesigner requirements model. Create and menage multiple projects and teams. Convert your class diagrams to java classes.`}
                tehnologies={['React, Java, MongoDB']}
                img="/images/projects/rqmApp.png"
                link="https://github.com/SupremeHan/rqm_app"
            />
            <Project
                title="Online Food Ordering"
                description={`Website for ordering food online. Done for college project in pure javascript.`}
                tehnologies={['Html','Css','JavaScript']}
                img="/images/projects/foodApp.png"
                link="https://github.com/SupremeHan/Projekat-Brza-Hrana"
            />
            <Project
                title="Movie Ticket App"
                description={`Online booking application, reserve tickets, choose seats, and
                be the first to watch all the best new movies.`
                }
                tehnologies={['ReactJs','NodeJS', 'MySQL']}
                img="/images/projects/movieApp.png"
                link="https://github.com/SupremeHan/PIIV-FrontEnd"
            />
            <Project
                title="Dar Mar Catering"
                description={`Website for catering company Dar Mar. Showcase of their
                company, their menu and contact information`}
                tehnologies={['ReactJs']}
                img='/images/projects/darmar.png'
                link="https://github.com/SupremeHan/app-catering"
            />
            <Project
                title="Art portfolio"
                description={`Website portfolio for TheRedNose graphic designer.
                Showcase of his portfolio and his contact.`}
                tehnologies={['Html','Css','JavaScript']}
                img="/images/projects/artist.png"
                link='https://github.com/SupremeHan/ArtistPage'
            />
            
            <Project
                title="Food Ordering App"
                description={`Web application for ordering online food. One of the 
                first app that i've done in Angular.`}
                tehnologies={['Angular','Firebase']}
                img="/images/projects/foodAppAngular.png"
                link="https://github.com/SupremeHan/Food-App-Angular"
            />
        </>
    );
}