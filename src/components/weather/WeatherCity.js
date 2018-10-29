import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import {connect} from 'react-redux';
import { startUpdateCity } from '../../actions/cities';

const WeatherCity = (props) => {
    const isOverdue = () => {
        if(props.city.weather){
            const updatedAt = props.city.weather.updatedAt, 
                currentTime = moment();
            const timeHasPassed = currentTime.diff(updatedAt, 's');
            console.log(timeHasPassed);
            return timeHasPassed < 20 ? false : true;
        }   
    }

    console.log(isOverdue);

    if(true){
        const cityData = (cityName) => {
            return $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=e8e3be60d5c61194ea01e5901af30333`,
                method: 'POST',
                format: 'json'
            });
        }

        const promisedCityData = cityData(props.match.params.name);

        promisedCityData.done(({weather, main, wind, sys}) => {
            const updatedAt = moment().format();
            const updates = {
                name: props.match.params.name,
                weather: {
                    description: weather[0],
                    main,
                    wind,
                    sys,
                    updatedAt
            }}
            props.dispatch(startUpdateCity(props.city.id, updates));
        });
    }else{
        console.log('still fresh!');
    }    

    return (
        <div>welcome to weather page of city -</div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        city: state.cities.filter((stateCity) => (stateCity.name === props.match.params.name))[0]
    }
}

export default connect(mapStateToProps)(WeatherCity);