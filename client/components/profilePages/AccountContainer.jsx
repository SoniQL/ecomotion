import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AccountInfo from './AccountInfo.jsx'


class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
    };
  }

  componentDidMount() {
    //fetching the info from flights table in sql db.
    fetch("/api/loadProfile")
      .then((response) => {
        console.log("raw data", response);
        return response.json();
      })
      .then((profileDataResults) => {
        console.log("logging data call for profiles", profileDataResults);
        return this.setState({ profileData: profileDataResults.array_to_json });
      });
  }

  logout() {
    console.log('logging out...');
    fetch('/logout')
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className='profileContainer'>
         <div className="nav">
          <div className="navLink" id="profPic">
            <Link to="/profile">My Profile</Link>
            <div id="picture"></div>
          </div>
          <div className="navLink" id="savedSearch">
            <Link to="/profile">My Trips</Link>
          </div>
          <div className="navLink" id="newSearch">
            <Link to="/search">New Search</Link>
          </div>
          <div className="navLink" id="account"><Link to='/account'>Account Info</Link></div>
          <div className="navLink" id="logOut">
            <Link to="/logout"><button onClick={()=>{this.logout()}}>Log Out</button></Link>
          </div>

          <div className="logoBox">ecomotion</div>
        </div>
        <div className='gallery'>
          <h2 id="accountInfoHeader"> Account Info </h2>
          <AccountInfo profileData={ this.state.profileData } />
        </div>
      </div>
    ) 
  }
}


export default AccountContainer;