import React, { Component } from 'react';
import Cards from './Cards.jsx';

class TripCardsHolder extends Component {
  constructor(props) {
    super(props);
  }
  //create as many cards as are in the profileData array and send profileData to cards compoonents
  render() {
    const flightCards = [];
    console.log(this.props.profileData);

    if (this.props.profileData === null) {
      return <div>'No data found.'</div>;
    } else {
      for (let i = 0; i < this.props.profileData.length; i += 1) {
        console.log(
          'the data that will be pushed into the flightCard',
          this.props.profileData[i]
        );
        flightCards.push(<Cards profileData={this.props.profileData[i]}></Cards>);
      }
      return <div>{flightCards}</div>;
    }
  }
}

export default TripCardsHolder;
