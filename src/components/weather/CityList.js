import React from 'react';
import CitiesListItem from './CityListItem';
import moment from 'moment';

const CityList = ({dispatch, state}) => {

  if(!state.cities.length){
    return <p>No cities</p>;
  }else{
    return(
      <div>
        <h3 className="list-header no_margin_bottom">List of cities</h3>
        <ul className="city__list">
          {state.cities.map((city) => { return <CitiesListItem key={city.id} {...city} /> })}
        </ul>
      </div>
    );
  }
};

export default CityList;