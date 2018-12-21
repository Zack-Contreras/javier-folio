import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main.js';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header style={{color:'orange;'}} className='header-color' title="Javier.Contreras" scroll>
            <Navigation>
                <Link style={{color:'orange', opacity: '.7'}} to="/">Home</Link>
                <Link style={{color:'orange', opacity: '.7'}} to="/aboutme">About Me</Link>
                <Link style={{color:'orange', opacity: '.7'}} to="/projects">Portfolio</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Portfolio</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
