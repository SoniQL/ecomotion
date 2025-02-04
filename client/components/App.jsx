import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './flightPages/MainContainer.jsx';
import LoginContainer from './loginPages/LoginContainer.jsx';
import TitleHeader from './loginPages/TitleHeader.jsx';
import ProfileContainer from './profilePages/ProfileContainer.jsx';
import SearchContainer from './profilePages/SearchContainer.jsx';
import AccountContainer from './profilePages/AccountContainer.jsx';
import "../stylesheets/styles.scss";

// base App component that stays the same and renders
// different parent components based on the path specified

function App() {
  return (
    <BrowserRouter>
      {/* essentially a switch statement that chooses the component to render based on the path */}
      <Switch>
        <Route exact path='/' render={() => <MainContainer />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/search' render={() => <SearchContainer />} />
        <Route path='/account' render={() => <AccountContainer />} />
        <Route path='/login' render={() => <LoginContainer />} />
        <Route path='/logout' render={() => <MainContainer />} />
      </Switch>
    </BrowserRouter>
  );
}

//export the App component
export default App;

// index.js connects us to index.html

// component hierarchy

// App
//   |LoginContainer
//     |TitleHeader
//     |ChoiceHolder
//   |MainContainer
//     |FlightInterface
//       |FlightForm
//       |FlightOutput
//     |MakeDifferenceContainer
//   |ProfileContainer
//     |TripHeader
//     |TripCardsHolder
//       |Cards
//         |FlightHeading
//         |Action
