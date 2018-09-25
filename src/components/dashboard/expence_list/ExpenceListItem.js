import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenceListItem = ({ dispatch, id, description, amount, createdAt, note }) => {
  return (
    <li>
      <NavLink to={`/edit/${id}`} ><h3>{description}</h3></NavLink>
      <p>
        <span>{numeral(amount / 100).format('$0,0.00')}</span><br/>
        <span>{moment(createdAt).format('Do/MMM/YYYY')}</span>
        <span>{note}</span>
      </p>
    </li>
  );
};

export default (ExpenceListItem);