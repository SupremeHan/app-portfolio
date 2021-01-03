import React from 'react';
import Project from '../components/Project/project';
import Subtitle from '../components/SubTitle/subtitle';

export default function About() {
    return(
        <div>
            <Subtitle
                heading="Projects"
                subHeading="Some personal some done for other clients"
            />
            <Project
                title="Fitness App"
                description={`Fitness platform created as a part of collage project.
                 Get personalized training plans, track your wokrout progress, 
                 stay in touch with the latets news and trends in fitness world`
                }
                tehnologies={['Html','Css','React','NodeJS']}
                img="/images/projects/fitnessApp.jpg"
                link="https://github.com/SupremeHan/FitnessApp_Front_End"
            />
            <Project
                title="Online Food Ordering"
                description={`Website for ordering food online.`}
                tehnologies={['Html','Css','JavaScript']}
                img="/images/projects/foodApp.jpg"
                link="https://github.com/SupremeHan/Projekat-Brza-Hrana"
            />
            <Project
                title="Movie Ticket App"
                description={`Online booking application, reserve tickets, choose seats, and
                be the first to watch all the best new movies`
                }
                tehnologies={['ReactJs','NodeJS', 'MySQL']}
                img="/images/projects/movieApp.jpg"
                link="https://github.com/SupremeHan/FitnessApp_Front_End"
            />
            <Project
                title="Dar Mar Catering"
                description={`Website for catering company Dar Mar. Showcase of their
                company, their menu and contact information`}
                tehnologies={['ReactJs']}
                img='/images/projects/catering.jpg'
                link="https://github.com/SupremeHan/app-catering"
            />
            <Project
                title="Art portfolio"
                description={`Website portfolio for TheRedNose graphic designer.
                Showcase of his portfolio and his contact.`}
                tehnologies={['Html','Css','JavaScript']}
                img="/images/projects/art.jpg"
                link='https://github.com/SupremeHan/ArtistPage'
            />
            
            <Project
                title="Food Ordering App"
                description={`Web application for ordering online food. One of the 
                first app that i've done in Angular.`}
                tehnologies={['Angular','Firebase']}
                img="/images/projects/foodAngular.jpg"
                link="https://github.com/SupremeHan/Food-App-Angular"
            />
        </div>
    );
}