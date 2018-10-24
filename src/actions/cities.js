import database from '../firebase/firebase';

export const addCity = (city) => ({
    type: 'ADD_CITY',
    city
});

export const startAddCity = (cityData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/cities`).push(cityData.name).then((ref) => {
            dispatch(addCity({
                id: ref.key,
                name: cityData.name
            }));
        });
    }
}

export const setCities = (cityList) => ({
    type: 'SET_CITIES',
    cityList
});

export const startSetCities = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/cities`).once('value').then((snapshot) => {
            const cityList = [];
            snapshot.forEach((child) => {
                cityList.push({ id: child.key, name:child.val() });
            });
            dispatch(setCities(cityList));
        })
    }
}