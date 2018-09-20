import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenceListItem = ({ dispatch, id, description, amount, createdAt, note }) => {
  return (
    <li>
      <NavLink to={`/edit/${id}`} ><h3>{description}</h3></NavLink>
      <span>{amount}</span>
      <span>{createdAt}</span>
      <span>{note}</span>
    </li>
  );
};

export default (ExpenceListItem);