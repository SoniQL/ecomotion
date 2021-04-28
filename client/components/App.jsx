import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './flightPages/MainContainer.jsx';
import MakeDifferenceContainer from './flightPages/MakeDifferenceContainer.jsx';
import LoginContainer from './loginPages/LoginContainer.jsx';
import TitleHeader from './loginPages/TitleHeader.jsx';
import ProfileContainer from './profilePages/ProfileContainer.jsx';
import "../stylesheets/styles.scss";

// base App component that stays the same and renders
// different parent components based on the path specified

function App() {
  return (
    <BrowserRouter>
      {/* essentially a switch statement that chooses the component to render based on the path */}
      <Switch>
        <Route exact path='/' render={() => <LoginContainer />} />
        <Route path='/flights' render={() => <MainContainer />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
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
