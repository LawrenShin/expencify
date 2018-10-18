import React from 'react';
import uuid from 'uuid';

const CityList = ({dispatch, state}) => {
  console.log(state);
  return(
    <div className="city__list">
      <ul>
        {state.cities.map((city) => { return <li key={uuid()}>{city.name}</li> })}
        {!state.cities.length && <p>No cities</p>}
      </ul>
    </div>
  );
};

export default CityList;