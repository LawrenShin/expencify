import React from 'react';

export default class CityForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.triggerAddCity(e.target.city.value);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="city">Provide city name</label>
        <input type="text" name="city"></input>
        <button>Add city</button>
      </form>
    );
  }
}