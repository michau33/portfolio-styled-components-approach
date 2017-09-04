import styled from 'styled-components';
import { shake, neon, pulse } from './Landing.Style.Keyframes';
import bg from '../../assets/bg.jpg';

const tomato = '#ff6347';
export const primary = tomato;
const primary_2 = '#CB1957';
const primary_3 = '#D6004B';
const colorCyan = '#19F3A3';

export const LandingSection = styled.div`
    background: url(${bg});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

export const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    border: 1px dashed ${primary};
    width: 80%;
    height: 300px;
`;

export const A = styled.a`
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
        font-size: 10rem;
        -webkit-animation: ${neon} 1.5s ease-in-out infinite alternate;
        -moz-animation: ${neon} 1.5s ease-in-out infinite alternate;
        animation: ${neon} 1.5s ease-in-out infinite alternate;
        transition: font-size .5s;

        @media screen and (max-width : 1224px) {
            font-size: 8rem;
        }

        @media screen and (max-width: 768px) {
            font-size: 6rem;
        }

        @media screen and (max-width: 615px) {
            font-size: 3rem;
        }
    }

    &:nth-child(1) a:hover {
        color: ${primary};
        -webkit-animation: none;
        -moz-animation: none;
        animation: none;
    }

    &:hover, &:focus {
        &:nth-child(1) a {
            font-size: 11rem;
            font-weight: bold;
        }
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
