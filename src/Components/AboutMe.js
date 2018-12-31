import React, { Component } from 'react';
import { Grid, Cell, Chip, ChipContact } from 'react-mdl';
import ContactForm from './ContactForm.js';
import AboutImage from '../images/AboutImage.jpg';

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
          <div style={{backgroundImage: `url(${AboutImage})`}} className='aboutBackground'>

          </div>
        </Cell>

        <Cell col={8}>
          <div className='aboutContent'>
            <h1><span className=''>j</span>avier <span className='letterAlt'>M</span>esser <span className=''>c</span>ontreras</h1>
            <p>I use my expertise and wide range of graphic design experience illustration photography and
            knowledge to enhance the communication, visual appeal and sales of advertising,
            web and broadcast media.</p>
            <hr />
            <p>Qualifications: Over 10 years of experience in the print and web media of graphic design.</p>
            <hr />
            <p style={{fontWeight: 'bold'}}>Proficiencies:</p>
            <ul>
              <li><p>-adobe cs6</p></li>
              <li><p>-illustrator</p></li>
              <li><p>-photoshop</p></li>
            </ul>
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
