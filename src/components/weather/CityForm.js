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
      <div className="page-header__actions">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group__item">
            <input className="text-input" placeholder="Type city name" type="text" name="city"></input>
          </div>
          <div className="page-header__actions">
            <button className="button">Add city</button>
          </div>
        </form>
      </div>
    );
  }
}