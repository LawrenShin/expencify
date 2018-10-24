import React from 'react';
import { connect } from 'react-redux';
import CityList from './CityList';
import CityForm from './CityForm';
import $ from 'jquery';
import {startAddCity, startSetCities} from '../../actions/cities';

const cityData = (cityName) => {
  return $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e8e3be60d5c61194ea01e5901af30333`,
    method: 'POST',
    format: 'json'
  });
}
// const promisedCityData = cityData(cityName);
// promisedCityData.done((res) => {
//   console.log(res);
// });
// weather request
const Weather = (props) => {
  
  if(!props.state.cities.length){
    props.dispatch(startSetCities());
  }

  this.handleSubmit = (cityName) => {
    const isCityPresent = props.state.cities.find((c) => c.name === cityName);
    if(cityName && !isCityPresent) {
      props.dispatch(startAddCity({name: cityName}));
    }else{
      console.log('city exists');
    }
  }

  return(
    <div>
    <div className="page-header">
      <div className="content-container">
        <div className="page-header-title">
          <h1>Here you can add city to list and view their weather</h1>
          <CityForm triggerAddCity={this.handleSubmit} />
        </div>
      </div>
    </div>
      <div className="content-container">
        <CityList {...props} />
        {!!props.state.errors && <span>{props.state.errors}</span>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    state
  };
};

export default connect(mapStateToProps)(Weather);