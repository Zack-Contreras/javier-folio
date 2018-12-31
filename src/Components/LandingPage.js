import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import BirdCage from '../images/Bird-Cage.png';

class LandingPage extends Component {
  render() {
    return(
      <div style={{widht:'100%',margin:'auto'}}>
        <Grid className='landingGrid'>
          <Cell col={12}>
          <div>
            <img
            src={BirdCage}
            alt='avatar'
            className='avatarImage'
            />
          </div>

            <div className='banner-text'>
              <h1>BirdCageGraphics</h1>
              <hr />
              <p>Photoshop | Flyers | Photography | Weddings</p>
              <div className='social-links'>
                <a href='https://www.facebook.com/bird.cage.1253' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href='https://www.instagram.com/bird.cage.1253/?hl=en' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
