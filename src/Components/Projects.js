import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardActions } from 'react-mdl';
import Flyer from './flyer1.jpg';
import Flyer2 from './TreesFlyer.jpg';
import Flyer3 from './DTRFlyer.jpg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state =
    { activeTab: 0 };
  }
toggleCategories(){
  if (this.state.activeTab === 0) {
    return(
      <div className='flyer-container'>
        <Card shadow={0} style={{minWidth: '20%', height: '450px', background: `url(${Flyer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '450px', background: `url(${Flyer2})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '1.5rem'}}>
        <CardTitle expand />
      
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '450px', background: `url(${Flyer3})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>
      </div>
    )
  } else if (this.state.activeTab === 1) {
    return (
      <div className='photo-container'>
        <Card shadow={0} style={{ minWidth: '20%', height: '400px', background: 'url(https://static1.squarespace.com/static/5a189cb0692ebeb0ea529a33/5a1b0a0e24a694106d9177e2/5a209e900852299886f0b902/1512265987470/Wedding_C%2BS_0536.JPG) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Created for the band ...
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
        Flyer.jpg
        </span>
        </CardActions>
        </Card>
      </div>
    )
  }
}


    render() {
    return(
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Flyers</Tab>
          <Tab>Photography</Tab>
        </Tabs>
        <section>{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
