import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { Link } from 'react-router-dom';
import { Navigation, Container, NavTitle, NavCenter, Icon, IconsRight, HomeIcon } from './Header.Style';


export default class Header extends Component {
    render() {
        return(
            <Navigation>
                <Container className="container-fluid">
                    <Link to="/" style={ { textDecoration: 'none' } }><HomeIcon className="fa fa-home"></HomeIcon></Link>
                    <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }><NavTitle>MichalDev</NavTitle></TypeWriter>
                    <IconsRight>
                        <a href="https://www.instagram.com/gamedevguy/" target="_blank" style={ { textDecoration: 'none' } }>
                            <Icon className="fa fa-instagram"></Icon>
                        </a>
                        <a href="https://github.com" target="_blank" style={ { textDecoration: 'none' } }>
                            <Icon className="fa fa-github"></Icon>
                        </a>
                        <a href="https://www.artstation.com/michaldev" target="_blank" style={ { textDecoration: 'none' } }>
                            <Icon className="fa fa-gamepad"></Icon>
                        </a>
                        <a href="https://www.linkedin.com/in/micha%C5%82-szkopi%C5%84ski-4b228014a/" target="_blank" style={ { textDecoration: 'none' } }>
                            <Icon className="fa fa-linkedin"></Icon>
                        </a>
                    </IconsRight>
                </Container>
            </Navigation>
        );
    }
}
