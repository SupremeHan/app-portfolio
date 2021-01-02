import { Container } from '@material-ui/core';
import React from 'react';
import AboutCard from '../components/AboutCard/aboutCard';
import Card from '../components/Card/card';
import CardRev from '../components/CardRev/cardreverse';
import Subtitle from '../components/SubTitle/subtitle';

export default function About() {
    return(
        <div>
            <Subtitle
                heading="Since your here"
                subHeading="Learn something more about me"
            />
            <Container maxWidth='lg'>
                <AboutCard
                    title="Shot taker"
                    text={`
                        Besiedes programming i also have some other 
                        interestes, such as photography and videography.
                         I found myself taking photos and recording since 
                         i was a kid (i still remeber my first kodak). 
                         Now i do some more serious stuff using adobe 
                         Lightroom and Adobe Premier Pro.
                    `}
                    img="/images/photo.jpg"
                />
                <AboutCard
                    title="Lifting Stuff"
                    text={`
                        I also do Crossfit on the regular baises. 
                        If you don’t find my sitting at my desk and 
                        yelling at my screen because my code wont work.
                         I’ll probably be at my local box throwing weights 
                         aroud the gym. I also plan to compete so 
                         if you come to any local competition you may find me there.
                    `}
                    img="/images/crossfit.jpg"
                />
            </Container>
        </div>
    );
}