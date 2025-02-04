import React from 'react';
import { Link } from 'react-router-dom';

const MakeDifferenceContainer = (props) => {
  //create algorithm for each element as long as the carbon emissions is not 0 as it is in the initial state
  //our carbon emissions is in kg. 1kg = 2.2 lbs
  if (props.carbon !== 0) {
    //1 tree offsets 48 lbs of carbon emissions
    props.actions.trees = Math.ceil((props.carbon * 2.2) / 48);
    //1 person eating meat for one meal causes 33.06 lbs of carbon emissions
    props.actions.meat = Math.ceil((props.carbon * 2.2) / 33.06);
    //1 plastic bag is .0727 lbs of carbon emissions
    props.actions.bags = Math.ceil((props.carbon * 2.2) / 0.0727);
  }

  return (
    <div className='make-diff-container'>
      {/* if the trees are greater than 1 (the initial state) then render the values*/}
      {props.actions.trees > 1 ? (
        <div>
          <h3>You could offset your flight by doing the following:</h3>
          <p> 🌳 🌳 🌳 Planting {props.actions.trees} Trees 🌳 🌳 🌳</p>
          <p>
            {' '}
            🐄 🐄 🐄 Enjoying {props.actions.meat} Meatless Mondays 🐄 🐄 🐄
          </p>
          <p> 🛍️ 🛍️ 🛍️ Not Using {props.actions.bags} Plastic Bags 🛍️ 🛍️ 🛍️</p>
          <button id='drive-btn' name='drive' type='button' onClick={(e) => props.onClick(e)}>Take a drive instead?</button>
        </div>
      ) : (
        // otherwise render nothing
        <p></p>
      )}
      {/* if vCarbon has been updated, display those values */}
      {props.vCarbon > 0 ? (<p>🚗 The same distance drive in your 2021 Subaru Impreza will generate {props.vCarbon}kg of CO2 total</p>) : (<p></p>)
      }
      {/* if vCarbon has been updated and there is more than one traveler*/}
      {props.vCarbon > 0 && props.numTravelers > 1 ? (<p>👯 Since you're carpooling with {props.numTravelers} people, each of you will generate {(props.vCarbon/props.numTravelers).toFixed(2)}kg of CO2</p>) : (<p></p>)
      }
      {/* link to the profile page - Reach Router */}
      {/* <Link to='/profile'>
        <div>MY PROFILE</div>
      </Link> */}
    </div>
  );
};

export default MakeDifferenceContainer;
