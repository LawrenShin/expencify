import React from 'react';
import {connect} from 'react-redux';
import ExpenceListItem from './ExpenceListItem';
import ExpenceListFilters from './ExpenceListFilters';
import selectExpences from '../../../selectors/expences';
import ExpensesSummary from './ExpensesSummary';

const ExpenceList = (props) => {
  return(
    <div>
      <ExpensesSummary expenses={props.expences} />
      <ExpenceListFilters />
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>
        <ul>
          {props.expences.map((expence) => {
            return <ExpenceListItem key={expence.id} {...expence} />
          })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expences: selectExpences(state.expences, state.filters)
  };
} 

export default connect(mapStateToProps)(ExpenceList);