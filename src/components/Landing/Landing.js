import React from 'react';
import { Link } from 'react-router-dom';
import { LandingSection, Button, A, Neon, MainTitle } from './Landing.Style';
import TypeWriter from 'react-typewriter';


const Landing = () => {
    return(
        <LandingSection>
            <MainTitle>
                <Neon>
                    <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }>
                        <A style={ { textDecoration: 'none' } }>MICHALDEV. </A>
                    </TypeWriter>
                </Neon>  
            </MainTitle>
                <Link to="skills"><Button className="btn pulse">More</Button></Link>
        </LandingSection>
    );
}

export default Landing