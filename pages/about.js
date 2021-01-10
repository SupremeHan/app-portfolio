import { Container } from '@material-ui/core';
import React from 'react';
import AboutCard from '../components/AboutCard/aboutCard';
import Card from '../components/Card/card';
import CardRev from '../components/CardRev/cardreverse';
import Subtitle from '../components/SubTitle/subtitle';

export default function About() {
    return(
            <Container maxWidth='lg'>
                 <Subtitle
                    heading="Since your here"
                    subHeading="Learn something more about me"
                />
                <AboutCard
                    title="Shot taker"
                    text={`
                        Besiedes programming i also have some other 
                        interestes, such as photography and videography.
                        I love taking photos and recording stuff ever since i was a kid.
                        I also have some intermediate knowledge of Adobe Premier and Adobe Lightroom.
                    `}
                    img="/images/photo.jpg"
                />
                <AboutCard
                    title="Lifting Stuff"
                    text={`
                        I also do Crossfit on the regular basis. 
                        If you don’t find my sitting at my desk and 
                        yelling at my screen because my code won't work.
                         I’ll probably be at my local box throwing weights 
                         aroud the gym. I also plan to compete so 
                         if you come to any local competitions you may find me there.
                    `}
                    img="/images/crossfit.jpg"
                />
            </Container>
    );
}