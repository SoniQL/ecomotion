import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';


class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
    };
  }
  render() {
    return (
      <div className="accountInfoRow" >
      <div >
        <p>Email:</p>
        <p>First Name:</p>
        <p>Last Name:</p>
        <p>Update Password:</p>
        <p>Personal Information:</p>
      </div>
        <div className="navLink" id="profPic"><h3>Change Profile Picture</h3><div id='picture'></div></div>
      </div>
      )
  }
  
  
};



export default AccountInfo;