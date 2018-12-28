import React, { Component } from 'react';
import { Grid, Cell, Chip, ChipContact } from 'react-mdl';
import ContactForm from './ContactForm.js';

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
/*
  showForm = () => {
      let someClass='';
    if (this.state.showContactForm) {
      return (
        someClass = 'contactInfo open'
      );
    } else {
      someClass = 'contactInfo'
    }
  }
*/


  render() {

    let objectcontact = 'contactInfo'
    if (this.state.showContactForm) {
      objectcontact = 'contactInfo open';
    } else {
      objectcontact = 'contactInfo';
    }


    return(
      <div className='aboutContainer'>


      <ContactForm newClass={objectcontact} click={this.toggleContactForm} />

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
                <ChipContact className="mdl-color--teal mdl-color-text--white"><span className='font'>J</span></ChipContact>
                <span className='font'>Contact Me</span>
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
