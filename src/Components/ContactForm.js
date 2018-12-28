import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <div onClick={props.click} className={props.newClass}>
      <Grid className='contactGrid'>
        <Cell col={6}>
        <div className='contact-section-a'>
          <h1>Contact Form</h1>
          <i className="fas fa-address-book iconContact"></i>
          <Button color="secondary" size="lg" onClick={props.click} block>Back</Button>
        </div>
        </Cell>
        <Cell col={6}>
        <div className='contact-section-b'>
          <h2>Get in touch with me anytime through:</h2>
          <div>
          {/* grid within grid for contact info */}
            <Grid>
              <Cell col={4}>
                <i className="fas fa-envelope contact-icons"></i>
                <i className="fas fa-phone-square contact-icons"></i>
              </Cell>
              <Cell col={7}>
                <h2 className='contactLabels'>Email: javier@javier.com</h2>
                <h2 className='contactLabels labelAlt'>Phone: 214-333-2321</h2>
              </Cell>
            </Grid>
          </div>

        </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default ContactForm;
