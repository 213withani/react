https://lucasmreis.github.io/blog/simple-react-patterns/

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    githubName: ''
  }

  componentDidMount() {
    const url=`https://api.github.com/users/213withani`;
    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(json => {
      this.setState({ githubName: json.name });
    });
  }

  render() {
    return (
      <div>
        <h1>github web app</h1>
        <ul>
          {this.state.githubName}
        </ul>
      </div>
    );
  }
}

export default App;
```
