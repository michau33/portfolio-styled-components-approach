import { keyframes } from 'styled-components';
import { primary } from './Landing.Style';

export const shake = keyframes`
    0% {
        -webkit-transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
        -webkit-transform: translate(-1px, -2px) rotate(-1deg);
    } 
    20% {
        -webkit-transform: translate(-3px, 0px) rotate(1deg);
    } 
    30% {
        -webkit-transform: translate(0px, 2px) rotate(0deg);
    } 
    40% {
        -webkit-transform: translate(1px, -1px) rotate(1deg);
    } 
    50% {
        -webkit-transform: translate(-1px, 2px) rotate(-1deg);
    } 
    60% {
        -webkit-transform: translate(-3px, 1px) rotate(0deg);
    } 
    70% {
        -webkit-transform: translate(2px, 1px) rotate(-1deg);
    } 
    80% {
        -webkit-transform: translate(-1px, -1px) rotate(1deg);
    } 
    90% {
        -webkit-transform: translate(2px, 2px) rotate(0deg);
    } 
    100% {
        -webkit-transform: translate(1px, -2px) rotate(-1deg);  
    } 
`;

export const neon = keyframes`
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px tomato , 0 0 70px tomato, 0 0 80px tomato, 0 0 100px tomato, 0 0 150px tomato;
    }
    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #19F3A3, 0 0 35px #19F3A3, 0 0 40px #19F3A3, 0 0 50px #19F3A3, 0 0 75px #19F3A3;
    }
`;

export const pulse = keyframes`
    0% {
        box-shadow: 0px 0px 0px 30px rgba(255, 99, 71, .2);
    }  
`;