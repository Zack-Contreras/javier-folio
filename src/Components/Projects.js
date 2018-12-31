import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle } from 'react-mdl';
import Flyer from '../images/flyer1.jpg';
import Flyer2 from '../images/TreesFlyer.jpg';
import Flyer3 from '../images/DTRFlyer.jpg';
import CustomCard from './CustomCard.js'
import Treepic from '../images/trees.jpg';
import OldCar from '../images/old-car.jpg';
import CatPic from '../images/cat-pic.jpg';
import DerekPic from '../images/derek.jpg';
import KennyPic from '../images/kenny-pic.jpg';
import ConcertPic from '../images/concer-pic.jpg';

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
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '450px', background: `url(${Flyer2})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '1.5rem'}}>
        <CardTitle expand />
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '450px', background: `url(${Flyer3})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '1.5rem'}}>
        <CardTitle expand />
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49069726_102472804164265_616214991070035968_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=f4b810b86f4c24fc019b0bbda466286a&oe=5C9A04FF) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49144944_102472827497596_3777719990791176192_n.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-1.xx&oh=bfef5e42905f42d402b26d4e39f544bd&oe=5C8F28B7)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '1.5rem'}}>
        <CardTitle expand />
        </Card>

        <Card shadow={0} style={{minWidth: '20%', height: '400px', background: 'url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/48926345_101058757639003_256882487894999040_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-1.xx&oh=c5fea84c9cff1be6163f38db71eb8af2&oe=5C9A3237) center / cover', marginTop: '1.5rem'}}>
        <CardTitle expand />
        </Card>
      </div>
    )
  } else if (this.state.activeTab === 1) {
    return (
      <div className='photo-container'>
        <CustomCard
        photo={Treepic} />


        <CustomCard
        photo={DerekPic} />

        <CustomCard
        photo={OldCar} />

        <CustomCard
        photo={CatPic} />

        <CustomCard
        photo={KennyPic} />

        <CustomCard
        photo={ConcertPic} />
      </div>
    )
  }
}


    render() {
    return(
      <div className='category-tabs'>
        <Tabs className='tabColor' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Flyers</Tab>
          <Tab>Photography</Tab>
        </Tabs>
        <section>{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
