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
        <Header style={{color:''}} className='header-color' title="bcG.javier.contreras" scroll>
            <Navigation>
                <Link style={{color:'#BA8B02', opacity: '.7'}} to="/">Home</Link>
                <Link style={{color:'#BA8B02', opacity: '.7'}} to="/aboutme">About Me</Link>
                <Link style={{color:'#BA8B02', opacity: '.7'}} to="/projects">portfolio</Link>
            </Navigation>
        </Header>
        <Drawer className='font' title="Menu">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">portfolio</Link>
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
