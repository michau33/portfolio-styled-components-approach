import styled from 'styled-components';
import bg from '../../assets/caspar.jpg';
import frontendBackground from '../../assets/coding_2_lr.jpg';
import gamedevBackground from '../../assets/gaming_lr.jpg';

const primary = 'tomato';
const primaryRGB = '255, 99, 71'

export const SkillsSection = styled.section`
    background: url( ${ bg } );
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 80%;

    @media (max-width: 1024px) {
        ${SkillsContainer} {
            flex-flow: column;
            align-items: center;
            padding-top: 80px;
            padding-bottom: 80px;
            width: 500px;
        }
    }
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 100%;
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.75);
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transition: 0.5s;
    }
`;

export const FrontendCard = Card.extend`
    background: url( ${ frontendBackground } );
    background-size: cover;
    background-position: center center;
    transition: background 1s;
    &:hover {
        background: rgba( 25, 243, 163, 0.2 );
        -webkit-box-shadow: 0px 0px 5px 1px rgba( 25, 243, 163, .75);
        -moz-box-shadow: 0px 0px 5px 1px rgba( 25, 243, 163, .75);
        box-shadow: 0px 0px 5px 1px rgba( 25, 243, 163, .75);
    }
`;

export const GamedevCard = Card.extend`
    background: url( ${ gamedevBackground } );
    background-size: cover;
    background-position: center center;
    transition: background 1s;
    &:hover {
        background: rgba( 203, 25, 87, 0.2 );
        -webkit-box-shadow: 0px 0px 5px 1px rgba( 203, 25, 87, 0.75 );
        -moz-box-shadow: 0px 0px 5px 1px rgba( 203, 25, 87, 0.75 );
        box-shadow: 0px 0px 5px 1px rgba( 203, 25, 87, 0.75 );
    }
`;


export const CardText = styled.span`
    color: ${ props => props.cyan ? '#19F3A3' : '#CB1957' };
    text-shadow: ${ props => props.cyan ? '0px 0px 20px #19F3A3' : '0px 0px 20px #CB1957' };
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 4rem;
    line-height: 60px;

    @media (max-width: 1024px) {
        ${ CardText } {
            font-size: 2rem;
            line-height: 30px;
        }
    }
`;