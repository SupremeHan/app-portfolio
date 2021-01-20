import React from 'react';
import Head from 'next/head'
import AboutCard from '../components/AboutCard/aboutCard';
import Subtitle from '../components/SubTitle/subtitle';

export default function About() {
    return(
        <>
            <Head>
                <title>About Me | Nikola Zivojinovic | Front End Developer</title>
            </Head>
             <Subtitle
                heading="Since your here"
                subHeading="Learn something more about me"
            />
            <AboutCard
                title="Shot taker"
                text={`
                    Besides programming, 
                    i also have some other interests, 
                    such as photography and videography. 
                    I love taking photos and recording stuff 
                    ever since i was a kid. I also have some 
                    intermediate knowledge of Adobe Premiere 
                    and Adobe Lightroom.
                `}
                img="/images/photo.jpg"
            />
            <AboutCard
                title="Lifting Stuff"
                text={`
                    I also do crossfit. If you don't find me at my desk,
                     yelling at my screen because my code won't work.
                      I'll probably be at my box throwing weights around.
                       I also plan to compete, so if you come to any
                        local competition you may find me there.
                `}
                img="/images/crossfit.jpg"
            />
         </>  
    );
}