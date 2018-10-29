let initialCityState = [];

const citiesReducer = (state = initialCityState, action) => {
  switch(action.type){
    case 'ADD_CITY':
      if(!!state.find((c) => {return c.name === action.city.name})){ 
        return state;
      }else{
        return [...state, action.city];
      }
    case 'SET_CITIES':
      return [...state, ...action.cityList];
    case 'UPDATE_CITY':
      const newState = state.map((stateCity) => { 
        if(stateCity.id === action.updated.id) return action.updated;
        return stateCity;
      });
      return (newState);
    default:
      return state;
  }
};

export default citiesReducer;