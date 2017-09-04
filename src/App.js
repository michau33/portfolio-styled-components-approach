import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './components/About/About';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Skills from './components/Skills/Skills';
import Gamedev from './components/Gamedev/Gamedev';
import Fullstack from './components/Fullstack/Fullstack';


export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route path="/skills/gamedev" component={Gamedev}></Route>
        <Route path="/skills/fullstack" component={Fullstack}></Route>
      </div>
    );
  }
}