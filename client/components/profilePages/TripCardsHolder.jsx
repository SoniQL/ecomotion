import React, { Component } from 'react';
import Cards from './Cards.jsx';

class TripCardsHolder extends Component {
  constructor(props) {
    super(props);
  }
  //create as many cards as are in the profileData array and send profileData to cards compoonents
  render() {
    // const flightCards = [];
    // for (let i = 0; i <= 6; i += 1) {
    //   console.log(
    //     'the data that will be pushed into the flightCard',
    //     this.props.profileData[i]
    //   );
    //   flightCards.push(<Cards profileData={this.props.profileData[i]}></Cards>);
    // }
    // return <div>{flightCards}</div>;
    return <div>Profile</div>;
  }
}

export default TripCardsHolder;
