import React from 'react';
import {connect} from 'react-redux';
import ExpenceListItem from './ExpenceListItem';
import selectExpences from '../../../selectors/expences';

const ExpenceList = (props) => {
  return(
    <div>
      <h1>Expence list</h1>
      <ul>
        {props.expences.map((expence) => {
          return <ExpenceListItem key={expence.id} {...expence} /> 
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expences: selectExpences(state.expences, state.filters)
  };
} 

export default connect(mapStateToProps)(ExpenceList);