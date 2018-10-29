import $ from 'jquery';

const cityData = (cityName) => {
    return $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=e8e3be60d5c61194ea01e5901af30333`,
        method: 'POST',
        format: 'json'
    });
}

export const getWeather = (cityName) => {
    promisedCityData.done(({weather, main, wind, sys}) => {
        const updates = {
            name: cityName,
            weather: {
                description: weather[0],
                main,
                wind,
                sys
        }}
        return updates;
    });
    
    return promisedCityData = cityData(cityName);
}