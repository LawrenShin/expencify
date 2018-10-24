import React from 'react';
import uuid from 'uuid';

const CityList = ({dispatch, state}) => {
  if(!state.cities.length){
    return <p>No cities</p>;
  }else{
    return(
      <div>
        <h3 className="list-header no_margin_bottom">List of cities</h3>
        <ul className="city__list">
          {state.cities.map((city) => { return <div key={uuid()}><a className="list-item__cities" href="#">{city.name}</a></div> })}
        </ul>
      </div>
    );
  }
};

export default CityList;