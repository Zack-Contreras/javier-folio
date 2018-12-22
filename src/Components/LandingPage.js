import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{widht:'100%',margin:'auto'}}>
        <Grid className='landingGrid'>
          <Cell col={12}>
            <img
            src='http://pluspng.com/img-png/png-hd-pictures-of-birds-birds-png-pic-372.png'
            alt='avatar'
            className='avatarImage'
            />
            <div className='banner-text'>
              <h1>BirdCageProductions</h1>
              <hr />
              <p>Photoshop | Flyers | Photography | Weddings</p>
              <div className='social-links'>
                <a href='https://www.facebook.com/javiermesser' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href='http://www.google.com' rel="noopener noreferrer" target='_blank'>
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
