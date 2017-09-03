import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPage, LandingLogo, LogoText, MoreButton, A, Neon, MainTitle } from './Landing.Style';
import TypeWriter from 'react-typewriter';
import './Landing.css';

const test = () => {
    return (
        <LandingLogo className="shake">
            <LogoText>
                Welcome<br/>
                <span className="fa fa-code"></span>
            </LogoText>
        </LandingLogo>
    );
}

const Landing = () => {
    return(
        <LandingPage>
            <MainTitle>
                <Neon>
                    <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }> <A style={ { textDecoration: 'none' } }>MICHALDEV.</A></TypeWriter>
                </Neon>
                <Link to="about"><MoreButton className="btn pulse">More</MoreButton></Link>
            </MainTitle>
            
        </LandingPage>
    );
}

export default Landing