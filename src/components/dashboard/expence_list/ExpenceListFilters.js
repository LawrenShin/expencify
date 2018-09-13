import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../../../actions/filters';

const changeSortBy = (dispatch, val) => {
  switch (val) {
    case "date":
      dispatch(sortByDate('date')); break;
    case "amount":
      dispatch(sortByAmount('amount')); break;
    default:
    console.log(val);
      break;
  }
};

const ExpenceListFilters = (props) => {
  return (
    <div>
      <input type="text" value={props.filters.text} onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
      }} />
      <select onChange={(e) => {changeSortBy(props.dispatch, e.target.value)}}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenceListFilters)