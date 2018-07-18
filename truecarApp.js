import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const carsList = [
  {
    id:1,
    model: 'Acura',
    condition: 'used',
  },
  {
    id:2,
    model: 'FIAT',
    condition: 'new',
  },
  {
    id:3,
    model: 'Acura',
    condition: 'new',
  },
  {
    id:4,
    model: 'Dodge',
    condition: 'used',
  },
];

class App extends Component {
  state = {
    condition: 'new'
  }

  handleCarCondition = (condition) => {
    console.log(condition);
    this.setState({condition:condition});
  }

  render() {
    return (
      <div className="App">
        <h1>Shopping for a Car? Choose a Brand.</h1>
        <CarChoice handleCarCondition={this.handleCarCondition}/>
        <CarList model={this.state.condition} carsList = {carsList}/>
      </div>
    );
  }
}

class CarChoice extends Component {
  setCarCondition = (e) => {
    console.log(e.target.innerText);
    
    this.props.handleCarCondition(e.target.innerText);
  }

  render () {
    return (
      <div className="roundButtons">
        <button onClick={this.setCarCondition}>new</button>
        <button onClick={this.setCarCondition}>used</button>
      </div>
    )
  }
}

class CarList extends Component {
  render () {

    const newCars = this.props.carsList.filter(
      (car) => car.condition==='new'
    );

    const usedCars = this.props.carsList.filter(
      (car) => car.condition==='used'
    );
    
    if (this.props.model === 'new'){
      return (
        <div>
            <ul>
            {newCars.map(
              (car)=><li>{car.model}</li>
            )}
            </ul>

        </div>
      )
    }else {
      return (
      <div>
            <ul>
            {usedCars.map(
              (car)=><li>{car.model}</li>
            )}
            </ul>

        </div>
      )
    }
  }
}
  
export default App;
