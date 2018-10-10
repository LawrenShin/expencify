import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenceForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: '',
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      calendarFocused: false,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment()
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  }
  onFocusChange = () => {
    this.setState(({calendarFocused}) => {return({ calendarFocused: !calendarFocused })});
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    }else{
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <form className="" onSubmit={this.onSubmit}>
        <div className="form content-container">
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input 
            className="text-input"
            type="text" 
            placeholder="description" 
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          
          <input 
          type="text" 
          placeholder="amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange} />
          
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => {false}}
          />

          <textarea
            className="textarea" 
            placeholder="Add a note for ur expence"
            value={this.state.note}
            onChange={this.onNoteChange}>
          </textarea>
          <div>
            <button className="button">Save Expense</button>
          </div>
        </div>
      </form>
    );
  };
};