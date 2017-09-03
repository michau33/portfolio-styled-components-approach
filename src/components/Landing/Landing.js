import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPage, LandingLogo, LogoText, MoreButton, A, Neon, MainTitle } from './Landing.Style';
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
                    <A style={ { textDecoration: 'none' } }>WELCOME</A>
                </Neon>
                <Link to="about"><MoreButton className="btn pulse">More</MoreButton></Link>
            </MainTitle>
            
        </LandingPage>
    );
}

export default Landing