import React from 'react';

class FlightOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //conditionally rendering the carbon output of a flight
    return (
      <div className='flightOutput'>
        <div>
          {!this.props.dist || !this.props.carbon
            ? ''
            : `Your ${this.props.dist}km flight will generate ${this.props.carbon}kg of CO2`}
        </div>
      </div>
    );
  }
}

export default FlightOutput;
