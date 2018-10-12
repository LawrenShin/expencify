import React from 'react';

export default class CityForm extends React.Component{
  constructor(props){
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label for="city">Provide city name</label>
        <input type="text" name="city"></input>
        <button>Add city</button>
      </form>
    );
  }
}