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
                if(typeof child.val() === 'string'){
                    cityList.push({ id: child.key, name:child.val() });
                }else{
                    cityList.push({ id: child.key, name:child.val().name });
                }
            });
            dispatch(setCities(cityList));
        })
    }
}

export const updateCity = (updated) => ({
    type: 'UPDATE_CITY',
    updated
});

export const startUpdateCity = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/cities/${id}`).update(updates).then(() => {
            const updated = {id, ...updates};
            dispatch(updateCity(updated));
        });
    }
}

export const removeCity = (id) => ({
    type: 'REMOVE_CITY',
    id
})

export const startRemoveCity = (cid) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/cities/${cid}`).remove().then(() => {
            dispatch(removeCity(cid));
        })
    }
}