import React from 'react';
import {connect} from 'react-redux';
import ExpenceListItem from './ExpenceListItem';
import selectExpences from '../../../selectors/expences';
import ExpensesSummary from './ExpensesSummary';

const ExpenceList = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Expence list</h1>
      <ul>
        {props.expences.map((expence) => {
          return <ExpenceListItem key={expence.id} {...expence} /> 
        })}
      </ul>
      <ExpensesSummary expenses={props.expences} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expences: selectExpences(state.expences, state.filters)
  };
} 

export default connect(mapStateToProps)(ExpenceList);