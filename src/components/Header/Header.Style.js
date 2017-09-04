import styled, { keyframes } from 'styled-components';

const iconSize = '2rem';
const colorPink = '203, 25, 87';

const primary = '#ff6347';
const primary_2 = '#D6004B';
const primary_3 = '#CB1957';
const colorCyan = '#19F3A3';

// -------------------------
// EXPORT SECTION 
// -------------------------
export const Navigation = styled.nav`
    position: fixed;
    z-index: 1;
    top: 0px;
    height: 50px;  
    width: 100%;
    padding: 0px;
    margin: 0px;
    border: 0px;
    background-color: rgba( 52, 73, 94, 0.6 );
    -webkit-box-shadow: 0px 5px 45px 8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 45px 8px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 45px 8px rgba(0,0,0,0.75);
`;


const pulseIcon = keyframes`
    100% {
        box-shadow: inset 0px 0px 0px 30px rgba( 255, 99, 71, .8);
    }  
`;

const pulseHome = keyframes`
    100% {
        box-shadow: inset 0px 0px 0px 30px rgba( 255, 99, 71, .8);
    }  
`;

export const Icon = styled.span`
    color: white;
    font-size: ${iconSize};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    top: 0px;
    padding: 0px 12px;
    border-left: 1px dotted ${primary};
    cursor: pointer;
    transition: background-color 1s;
 
    &.fa-linkedin {
        border-right: 1px dotted ${primary};
    }

    &:hover, &:focus {
        font-size: 3rem;
        animation: ${pulseIcon} .5s;
        animation-fill-mode: forwards;
        box-shadow: 0 0 0 5em rgba(#fff, 0);
        text-shadow: 0px 0px 20px #CB1957;
    } 

    @media screen and (max-width : 768px) {
        font-size: 1.5rem;
        width: 50px;
    }
`;

export const HomeIcon = Icon.extend`
    border-right: 1px dotted ${primary};
    left: 25px;
    &:hover, &:focus {
        animation: ${pulseHome} .5s;
        animation-fill-mode: forwards;
        text-shadow: 0px 0px 20px ${primary};
    }
`;

export const NavTitle = styled.span`
    color: ${colorCyan};
    font-family: 'VT323';
    font-weight: bold;
    font-size: 2rem;
    text-shadow: 0px 0px 20px ${colorCyan};

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const IconsRight = styled.div`
    display: flex;
`

export const NavCenter = styled.div`
    display: flex;
    border: 1px solid pink;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;