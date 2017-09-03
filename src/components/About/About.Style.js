import styled from 'styled-components';
import bg from '../../assets/whoami.jpg';

export const AboutPage = styled.div`
    display: flex;
    justify-content: center;
    background-color: #34495E;
    width: 100%;
    height: 100vh;
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
    margin-top: 50px;
    background-color: rgba(44, 62, 80, 1);
`;

export const Title = styled.span`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: bold;
    font-size: 6rem;
    border: 4px solid white;
    padding: .5em 1em;
    text-transform: uppercase;
    text-shadow: 1px 1px 5px black;
`;