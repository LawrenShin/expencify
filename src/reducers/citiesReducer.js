import $ from 'jquery';

var initialCityData;
$.ajax({
  url: 'http://www.geoplugin.net/json.gp',
  method: 'POST',
  format: 'json',
  success: (res) => {
    initialCityData = (JSON.parse(res));
  }
});
console.log(initialCityData);
const initialCityState = [{
  // name: initialCityData.geoplugin_city,
  // lat: initialCityData.geoplugin_latitude,
  // lon: initialCityData.geoplugin_longitude
}];

const citiesReducer = (state = initialCityState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default citiesReducer;