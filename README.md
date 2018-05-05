# react
react sample projects

# Redux

## Simple Overview
https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/

https://www.youtube.com/watch?v=OSSpVLpuVWA&t=926s
30 minutes packed of goodies.

### Redux: 
Manage state through a one direction data flow model.

### Store, actions and reducers: 
UI triggers/sent/dispatch Actions that are payloads that can be read by Reducers then update the Store (Master State).

UI triggers actions/objects that are sent to reducers/functions that update the store/object.

## Setup
1. Latest Node.js from nodejs.org
2. npx create-react-app redux tutorial (npx is latest npm command)
3. cd reduc-tutorial
4. yarn add redux react-redux (npm can be used ins taed of yarn)
5. yarn start

## IDE
Open your IDE. Currently I'm using Visual Code. Atom, Sublime or others can be used.

Go to src/index.js

## Simple working store and reducer implemenatation
```js
//Here goes the create-react-app default imports
import {createStore} from 'redux';

// A reducer is just a function
function reducer() {
 return 'State';
}

// reducer param is needed otw an error is thrown.
const store = createStore(reducer);
console.log( store.getState() );

```
## Simple working action, reduce and store implemenatation.
Reducers listen to every sigle action that is sent. 

```js
//Here goes the create-react-app default imports
import {createStore} from 'redux';

// A reducer is just a function that takes initial state and action.
function reducer(state, action) {
 if (action.type === 'changeState'){
  return action.payload.newState; // return action.payload value
 }
 return 'State';
}

// reducer param is needed otw an error is thrown.
const store = createStore(reducer);
console.log( store.getState() );

const action = {
 type: 'changeState',
 payload: {
  newState: 'New state'
 }
};

store.dispatch(action);
console.log( store.getState() );

// output: 
// State
// New state
```

## Real world store/reduce/action with CombineReducers.
Reducers listen to every sigle action that is sent. 

```js
//Here goes the create-react-app default imports
import {combineReducers, createStore} from 'redux';

// A reducer is just a function that takes initial state and action.
function prodcutsReducer(state=[], action) {
 return state;
}

// A reducer is just a function that takes initial state and action.
function userReducer(state='', action) {
 return state;
}

const allReducers = combineReducers({
 products: productsReducer,
 user:userReducer
});

// reducer param is needed otw an error is thrown.
const store = createStore(allReducers);
console.log( store.getState() );

ReactDOM.render(
 <App />,
 document.getElementById('root')
);

// output: 
// {products: Array(0), user:""} This comes from allReducers and showing the default state [] and ''
// New state
```
