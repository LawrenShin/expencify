import React from 'react';

export default class ExpenceForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

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
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="description" 
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          
          <input type="text" placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange} />
          
          <textarea 
            placeholder="Add a note for ur expence"
            value={this.state.note}
            onChange={this.onNoteChange}>
          </textarea>
          
          <button>Add Expence</button>
        </form>
      </div>
    );
  };
};