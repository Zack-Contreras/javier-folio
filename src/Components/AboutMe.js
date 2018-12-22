import React, { Component } from 'react';
import { Grid, Cell, Chip, ChipContact } from 'react-mdl';

class AboutMe extends Component {
  state = {
    showContactForm: false
  }

  toggleContactForm = () => {
    console.log('Testing');
    this.setState({
      showContactForm:  !this.state.showContactForm
    });
  }

  showForm = () => {
    if (this.state.showContactForm) {
      return (
        <div className='contactInfo'>
          <p>Contact me through one of these options</p>
          <p>Phone: 214-222-2222</p>
          <p>Email: javier@javier.com</p>
          <button onClick={this.toggleContactForm}>Back</button>
        </div>
      );
    } else {
      console.log('cool');
    }
  }


  render() {


    return(
      <div className='aboutContainer'>

      {this.showForm()}

      <Grid className='aboutGrid'>

        <Cell col={4}>
          <div className='aboutBackground'>

          </div>
        </Cell>

        <Cell col={8}>
          <div className='aboutContent'>
            <h1><span className=''>j</span>avier <span className='letterAlt'>M</span>esser <span className=''>c</span>ontreras</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <button onClick={this.toggleContactForm}>
               <Chip>
                <ChipContact className="mdl-color--teal mdl-color-text--white">J</ChipContact>
                Contact Me
              </Chip>
            </button>
          </div>
        </Cell>

      </Grid>

      </div>
    );
  }
}

export default AboutMe;
