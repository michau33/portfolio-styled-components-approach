import styled from 'styled-components';
import { shake, neon, pulse } from './Landing.Style.Keyframes';
import bg from '../../assets/street.jpg';

export const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    background-color: rgba(52,73,94,.2);
    width: 100%;
    height: 500px;
`;

export const A = styled.a`
    padding: .5em .5em;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    transition: background-color 1s;
`;

export const Neon = styled.p`
    &:nth-child(1) a {
        color: #fff;
        font-family: 'Monoton';
        font-size: 12rem;
        -webkit-animation: ${neon} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${neon} 1.5s ease-in-out infinite alternate;
        animation: ${neon} 1.5s ease-in-out infinite alternate;
    }

    &:nth-child(1) a:hover {
        color: #FF1177;
        -webkit-animation: none;
        -moz-animation: none;
        animation: none;
    }

    &:hover, &:focus .shake {
        -webkit-animation-name: ${shake};
        -webkit-animation-duration: 2s;
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;  
    }      
`

export const LandingPage = styled.div`
    background: url(${bg});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

export const LandingLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba( 48, 255, 165, .1);
    width: 500px;
    height: 250px;
    cursor: pointer;
    transition: box-shadow 3s, border-radius 3s;
    
    &:hover, &:focus .shake {
        box-shadow: inset 0 20em 0 0 rgba(0,255,216, .2);
        -webkit-animation-name: ${shake};
        -webkit-animation-duration: 1s;
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;  
        border-radius: 20px;
    }  

    @media screen and (max-width : 768px) {
        width: 100%;
    }
`;

export const LogoText = styled.span`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 8rem;
    text-shadow: 2px 2px 10px black;
    text-shadow: 1px 4px 6px #CB1957, 0 0 0 #000, 1px 4px 6px #CB1957;
`;

const colorCyan = '#19F3A3';

export const MoreButton = styled.button`
    margin-top: 50px;
    background-color: #CB1957;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px black;
    border: 1px solid #CB1957;
    border-radius: 0px;
    color: white;
    text-transform: uppercase;
    line-height: 1;
    padding: .6em 1.2em;
    transition: color 1s, background-color 1s;

    &:hover {
        color: #CB1957;
        background-color: transparent;
    }

    &:hover, &:focus .pulse {
        animation: ${pulse} 1s;
        box-shadow: 0 0 0 5em rgba(#fff, 0);
        background-color: rgba( #34495E, 0.2 );
    }   
`;



