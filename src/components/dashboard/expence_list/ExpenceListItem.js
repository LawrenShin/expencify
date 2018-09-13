import React from 'react';
import { connect } from 'react-redux';
import {removeExpence} from '../../../actions/expences';

const ExpenceListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <li>
      <span>{description}</span>
      <span>{amount}</span>
      <span>{createdAt}</span>
      <button onClick={() => { 
        dispatch(removeExpence({id}));
       }}>Remove</button>
    </li>
  );
};

export default connect()(ExpenceListItem);