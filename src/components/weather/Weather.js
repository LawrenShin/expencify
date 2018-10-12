import React from 'react';
import { connect } from 'react-redux';
import CityList from './CityList';

const Weather = () => {
  return(
    <div>
      <CityList  />
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    state
  };
};

export default connect(mapStateToProps)(Weather);