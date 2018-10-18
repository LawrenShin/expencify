import React from 'react';
import { connect } from 'react-redux';
import CityList from './CityList';
import CityForm from './CityForm';
import $ from 'jquery';

const cityData = (cityName) => {
  return $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e8e3be60d5c61194ea01e5901af30333`,
    method: 'POST',
    format: 'json'
  });
}

const Weather = (props) => {

  this.handleSubmit = (cityName) => {
    if(cityName) {
      const promisedCityData = cityData(cityName);
      promisedCityData.done((res) => {
        console.log(res);
      });
    }
  }

  return(
    <div>
      <CityForm triggerAddCity={this.handleSubmit} />
      <CityList {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    state
  };
};

export default connect(mapStateToProps)(Weather);