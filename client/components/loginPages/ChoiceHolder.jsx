import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//this is what's going to let us sign in through google. links us over
class ChoiceHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='googleSign' id='customBtn'>
        <a id='googleLink' href='/auth/google'>
          <i className='fab fa-google'></i>Sign in with Google{' '}
        </a>
      </div>
    );
  }
}

export default ChoiceHolder;
