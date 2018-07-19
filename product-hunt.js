import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Object} from 'core-js';

const recommendationsList = [
  {
    id: 1,
    title: 'Gifless',
    description: 'Create emoji & text gifs in seconds',
    count: 2
  }, {
    id: 2,
    title: 'Gifox',
    description: 'Delightful GIF Recording App for Mac',
    count: 5
  }, {
    id: 3,
    title: 'GIFS.com',
    description: 'Makes .gifs stupidly big',
    count: 1
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductDashboard/>
      </div>
    );
  }
}

class ProductDashboard extends Component {
  state = {
    list: recommendationsList
  };

  onCount = (id) => {
    const nextList = this.state.list.map((item) => {
      if (item.id === id) {
        return (Object.assign({}, item, {
          count: item.count + 1
        }));
      } else {
        return item;
      }
    });

    this.setState({list:nextList});
  }

  render() {
    return (
      <div>
        <Recommendations list={this.state.list} onCount = {this.onCount}/>
        <Counter/>
      </div>
    );
  }
}

class Recommendations extends Component {

  setCount = (id) => {
    this.props.onCount(id);
  }

  render() {
    const listToDisplay = this
      .props
      .list
      .map((reccomendation) => {
        return (
          <div>
            <h1>{reccomendation.title}</h1>
            <p>{reccomendation.description}</p>
            <Counter id={reccomendation.id} count={reccomendation.count} setCount={this.setCount}/>
          </div>
        );
      });

    return (
      <div>
        {listToDisplay}
      </div>
    );
  }
}

class Counter extends Component {
  handleCount = () => {
    this
      .props
      .setCount(this.props.id);
  }
  render() {
    return (
      <div>
        <span onClick={this.handleCount}>{this.props.count}</span>
      </div>
    );
  }
}

export default App;
