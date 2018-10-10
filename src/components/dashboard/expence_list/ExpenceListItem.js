import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenceListItem = ({ dispatch, id, description, amount, createdAt, note }) => {
  return (
    <div>
      <NavLink className="list-item" to={`/edit/${id}`} >
        <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">{moment(createdAt).format('Do/MMM/YYYY')}</span>
        </div>
        <h3 className="list-item__data">&#8381;{numeral(amount / 100).format('0,0.00')}</h3>
      </NavLink>
    </div>
  );
};

export default (ExpenceListItem);