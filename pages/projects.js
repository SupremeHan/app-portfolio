import React from 'react';
import Project from '../components/Project/project';
import Subtitle from '../components/SubTitle/subtitle';

export default function About() {
    return(
        <div>
            <Subtitle
                heading="Projects"
                subHeading="Some part of the collage project some done for clients"
            />
            <Project
                title="Fitness App"
                description={`Fitness platform created as a part of collage project.
                 Get personalized training plans, track your wokrout progress, 
                 stay in touch with the latets news and trends in fitness world`
                }
                tehnologies={['Html','Css','React','NodeJS']}
                img="/images/fitness.png"
                link="https://github.com/SupremeHan/FitnessApp_Front_End"
            />
        </div>
    );
}