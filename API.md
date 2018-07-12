https://lucasmreis.github.io/blog/simple-react-patterns/
https://reactjs.org/docs/faq-ajax.html

modified https://daveceddia.com/ajax-requests-in-react/

Get one name to display:
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

Display a list of github repos:

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    githubRepoName: []
  }

  componentDidMount() {
    const url=`https://api.github.com/users/213withani/repos`;
    const names = [];

    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(json => {
      const name = json.map((repo)=>{
        names.push(repo.name); // add repo.name string into names array 
      });
      
      this.setState({ githubRepoName:names });
    });
  }

  render() {
    return (
      <div>
        <h1>github web app</h1>
        <ul style={styles.list}>{console.log(this.state.githubRepoName)}
          {this.state.githubRepoName.map((repo)=><li>{repo}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;

const styles = {
  list: {
    padding: '15px',
    listStyleType: 'none',
  }
}

```
