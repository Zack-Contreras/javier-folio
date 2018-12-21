import React from 'react';
import LandingPage from './LandingPage.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/aboutme' component={AboutMe} />
    <Route path='/projects' component={Projects} />
  </Switch>
)

export default Main;
