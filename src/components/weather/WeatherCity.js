import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import {connect} from 'react-redux';
import { startUpdateCity, startRemoveCity } from '../../actions/cities';

const WeatherCity = (props) => {
    let weather, iconUrl, error;
    const weatherGetter = () => {
        const cityData = (cityName) => {
            return $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=e8e3be60d5c61194ea01e5901af30333`,
                method: 'POST',
                format: 'json'
            });
        }

        const promisedCityData = cityData(props.match.params.name);
        promisedCityData.fail((err) => {
            if(err){
                $('#no_data > p').text(`${error} on openweather.com`);
            }            
        });
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
    }

    if(!props.city.weather){
        weatherGetter();
    }else{
        const updatedAt = props.city.weather.updatedAt, 
        currentTime = moment();
        const timeHasPassed = currentTime.diff(updatedAt, 'm');
        const isOverdue = timeHasPassed > 30 ? true : false;
        if(isOverdue) weatherGetter();
        
        weather = props.city.weather;
        iconUrl = `http://openweathermap.org/img/w/${props.city.weather.description.icon}.png`;
    }

    const handleClick = () => {
        props.dispatch(startRemoveCity(props.city.id));
        props.history.push('/weather');
    }

    return (
        <div className="content-container">
            {weather ? (
                <div className="weather__main">
                    <div>
                        <h1 className="weather_city_header">{props.city.name}</h1>
                    </div>
                    <p><strong>Temperature</strong></p>
                    <div className="weather_layout__temp">
                        <div><span>{props.city.weather.main.temp_max}&deg;C <span className="weather_info__temp_max">max</span></span> / <span>{props.city.weather.main.temp_min}&deg;C <span className="weather_info__temp_min">min</span></span></div>
                        <div><span>{props.city.weather.main.temp}&deg;C</span></div>
                    </div>
                    <div className="weather_layout__description">
                        <p><strong>Weather description: </strong></p>
                        <div><img src={iconUrl} /></div>
                        <div><span>{props.city.weather.description.description}</span></div>
                    </div>
                    <div>
                        <div><p><strong>Humidity: </strong><span>{props.city.weather.main.humidity} %</span></p></div>
                        <div>
                            <p><strong>Wind: </strong>
                            <span>{props.city.weather.wind.speed} m/s, </span>
                            <span>{props.city.weather.wind.deg} degree</span>
                            </p>
                        </div>
                    </div>
                    <button className="button button-secondary" type="button button-secondary" onClick={handleClick}>Remove</button>
                </div>
            ) : (
                <div id="no_data">
                    <p>fetching data...</p>
                    <button className="button button-secondary" type="button button-secondary" onClick={handleClick}>Remove</button>
                </div>
            )}
        </div>
    );
    
}

const mapStateToProps = (state, props) => {
    return {
        city: state.cities.filter((stateCity) => (stateCity.name === props.match.params.name))[0]
    }
}

export default connect(mapStateToProps)(WeatherCity);