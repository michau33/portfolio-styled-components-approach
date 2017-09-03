import styled from 'styled-components';
import bg from '../../assets/coding_2_lr.jpg';
import bg_js from '../../assets/technologies/js.png';
import bg_nodejs from '../../assets/technologies/nodejs.png';
import bg_bootstrap from '../../assets/technologies/bootstrap.png';
import bg_reactjs from '../../assets/technologies/reactjs.png';

export const FullstackPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url( ${ bg } );
    background-size: cover;
`;

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