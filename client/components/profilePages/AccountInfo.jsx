import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';


class AccountInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.profileData);
    return (
      <div className="accountInfoRow" >
      <div >
        <p>Email: bhepfing@gmail.com</p>
        <p>First Name: Billy</p>
        <p>Last Name: Hepfinger</p>
        <p>Update Password</p>
        <p>Personal Information: egg</p>
      </div>
        <div className="navLink" id="profPic">
          <h3>Change Profile Picture</h3>
          <div id='picture'></div>
        </div>
      </div>
    )
  }
};



export default AccountInfo;