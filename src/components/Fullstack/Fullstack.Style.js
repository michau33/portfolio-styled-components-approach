import styled from 'styled-components';
import bg from '../../assets/coding_2_lr.jpg';
import bg_js from '../../assets/technologies/js.png';
import bg_nodejs from '../../assets/technologies/nodejs.png';
import bg_bootstrap from '../../assets/technologies/bootstrap.png';
import bg_reactjs from '../../assets/technologies/reactjs.png';
import { pulse } from '../Landing/Landing.Style.Keyframes';

const primary = '#D6004B';
const primary_2 = '#CB1957';
const colorCyan = '#19F3A3';

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const FullstackPage = styled.div`

`;

export const FullstackSection = Section.extend`
    background-color: #2ECC71;
`;

export const DescriptionSection = Section.extend`
    flex-flow: column;
    background: url( ${ bg } );
    background-size: cover;
`

export const FullstackContainer = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
`;

export const FullstackSkill = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    cursor: pointer;
    transition: width 1s, height 1s;
    &:hover {
        width: 100%;
        height: 100%;
        -webkit-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.75);
    }
`;

export const JavascriptSkill = FullstackSkill.extend`
    background: url( ${ bg_js } );
    background-size: cover;
    background-position: center center;
    &:hover {
        background: rgba( 240, 219, 79, 1 );
    }
`;

export const NodejsSkill = FullstackSkill.extend`
    background: url( ${ bg_nodejs } );
    background-size: cover;
    background-position: center center;
    &:hover {
        background: rgba( 120, 183, 67, 1);
    }
`;

export const ReactjsSkill = FullstackSkill.extend`
    background: url( ${ bg_reactjs } );
    background-size: cover;
    background-position: center center;
    &:hover {
        background: rgba(34,34,34,1);
    }
`;

export const BootstrapSkill = FullstackSkill.extend`
    background: url( ${ bg_bootstrap } );
    background-size: cover;
    background-position: center center;
    &:hover {
        background: rgba(106,66,157,1);
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 5px black;

    @media screen and (max-width: 768px) {
        font-size: 2.3rem;
    }
`;

export const Subtitle = styled.p`
    color: white;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    padding: 1em 1.5em;
    width: 600px;
    border: 2px dashed white;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        width: 100%;
    }
`;

export const Button = styled.button`
    margin-top: 50px;
    background-color: ${primary};
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px black;
    border: 1px solid ${primary};
    border-radius: 0px;
    color: white;
    text-transform: uppercase;
    line-height: 1;
    padding: .6em 1.2em;
    transition: color 1s, background-color 1s;

    &:hover {
        color: ${primary};
        background-color: transparent;
    }

    &:hover, &:focus .pulse {
        animation: ${pulse} 1s;
        box-shadow: 0 0 0 5em rgba(#fff, 0);
        background-color: rgba( #34495E, 0.2 );
}   
`;