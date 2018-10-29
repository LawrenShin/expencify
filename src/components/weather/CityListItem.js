import React from 'react';
import {NavLink} from 'react-router-dom';

const CitiesListItem = ({name} = {}) => {
    return (
        <div>
            <NavLink className="list-item" to={`/weather/${name}`}>{name}</NavLink>
        </div>
    );
}

export default CitiesListItem;