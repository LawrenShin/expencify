import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../../actions/filters';
import { DateRangePicker} from 'react-dates';

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

class ExpenceListFilters extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      calendarFocused: null
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render(){
    return (
      <div className="content-container">
        <div className="input-group">
        <div className="input-group__item">
            <input className="text-input" placeholder="search expenses" type="text" value={this.props.filters.text} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }} />
          </div>
          <div className="input-group__item">
            <select className="select" onChange={(e) => {changeSortBy(this.props.dispatch, e.target.value)}}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker 
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenceListFilters)