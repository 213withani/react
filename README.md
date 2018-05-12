# react
react sample projects

# Tech stack
* react
redux
react-redux
react-apollo
react-i18next
radium
prop-types
lodash

# libraries

action creators, redux thunk:HOF / HOC / thunk / closure
https://daveceddia.com/what-is-a-thunk/

# Redux

## Simple Overview
https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/

https://www.youtube.com/watch?v=OSSpVLpuVWA&t=926s
30 minutes packed of goodies.

### Redux: 
Manage state through a one direction data flow model.

### Store, actions and reducers: 
Store is one big object. Entire state.
Actions are objects. Actions are sent from the view which are payloads that can be read by reducers.
Reducers are functions. They ready the payload from the actions and update the store/master state.


UI triggers/sent/dispatch Actions that are payloads that can be read by Reducers then update the Store (Master State).

UI triggers actions/objects that are sent to reducers/functions that update the store/object.

## Setup
1. Latest Node.js from nodejs.org
2. npx create-react-app redux tutorial (npx is latest npm command)
3. cd reduc-tutorial
4. yarn add redux react-redux (npm can be used ins taed of yarn)
5. yarn start

## IDE
https://codeburst.io/top-javascript-vscode-extensions-for-faster-development-c687c39596f5
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

// output:
// State
```
Retreive state from the store means getting the state that the reducer set. In this case a string. Maybe try to understand how this is implemented under the hood.

## Simple working action, reducer and store implemenatation.
Action: An object with type and payload.
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
Simple action that sets new state as string. 
Send action to store.
Reducer reads an action to update store state. Also it has state as a parameter to know initial  state.
Reducers listen to every single action that is sent so they have to figure out what to do diff for every action.

Since the action is sent to store, these means reducers will be able to read it, check with console log. Based on the action the reducer will update store.



## Real world store/reduce/action with CombineReducers.
### combineReducers takes an obj that have key with state value
### default state
### createStore with default state

Store.getState() just returns the object from allReducers.
Getting the state from the store will return the object from all combined reducers.

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

// 2nd parameter is default values.
const store = createStore( allReducers, {
 products: [{name: 'iPhone'}],
 user: 'Michael'
});

console.log( store.getState() );

ReactDOM.render(
 <App />,
 document.getElementById('root')
);

// output: 
// {products: Array(0), user:""} This comes from allReducers and showing the default state [] and ''

```
Retrieve state from store will return object from combined reducers (allReducers).

## Working real world store/reduce/action to udpate user.
###
Third parameter to createStore for dev tools.
Lets update store and see what happens. Dispatch action to store. Update user.

```js
//Here goes the create-react-app default imports
import {combineReducers, createStore} from 'redux';

// A reducer is just a function that takes initial state and action.
function prodcutsReducer(state=[], action) {
 return state;
}

// A reducer is just a function that takes initial state and action.
function userReducer(state='', action) {
 switch (action.type){
  case 'updateUser':
   return action.payload;
 }
 return state;
}

const allReducers = combineReducers({
 products: productsReducer,
 user:userReducer
});

// reducer param is needed otw an error is thrown.
const store = createStore(
 allReducers, 
 {
  products: [{name: 'iPhone'}],
  user: 'Michael'
 },
 window.devToolsExtension && window.devToolsExtension()
 
);

console.log( store.getState() );

// type is what shows up in Redux devtools on the left hand side
const updateUserAction = {
 type: 'updateUser',
 payload: {
  user : 'John'
 }
};

store.dispatch(updateUserAction);

ReactDOM.render(
 <App />,
 document.getElementById('root')
);

// output: 
// {products: Array(0), user:"John"} 

```

## Working real world store/reduce/action that updates user.
### userReducer actin argument is destructured
## User Provider. Wrap your root component with Provider so components can access store.


Use ES6 destructuring.
User Provider to allow store access to our component. Now our app can access the store.

```js
//Here goes the create-react-app default imports
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

// A reducer is just a function that takes initial state and action.
function prodcutsReducer(state=[], {type, payload}) {
 return state;
}

// A reducer is just a function that takes initial state and action.
function userReducer(state='', {type, payload}) {
 switch (type){
  case 'updateUser':
   return payload;
 }
 return state;
}

const allReducers = combineReducers({
 products: productsReducer,
 user:userReducer
});

// reducer param is needed otw an error is thrown.
const store = createStore(allReducers, {
 products: [{name: 'iPhone'}],
 user: 'Michael'
});


ReactDOM.render(
 <Provider store={store}> 
  <App />
 </Provider >
  ,
 document.getElementById('root')
);

// output: 
// 

```

# App.js connect App component to redux store
## import from 'react-redux'
```js
connect is a function that takes 3 arguments
Args: 
1. mapStateToProps: R eceives state of the store, and we can use that state to decide what props to provide to that component.

import {connect} from 'react-redux'

class App extends Component {
 render() {
  return <div className = "App"></App>
 }
}

const mapStateToProps = state => {
 return state;
}

// mapStateToProps = map store state to component props
export default connect(mapStateToProps)(App);
```


# App.js connect App component to redux store
## import from 'react-redux'
connect is a function that takes 3 arguments
Args: 
1. mapStateToProps: Receives state of the store, and we can use that state to decide what props to provide to that component.
2. mapActionsToProps or mapDispatchToProps: Allows us to easily dispatch actions from our components so we don't need to use distpatch we can just call functions that automatically dispatch actions to the store.

```js
import {connect} from 'react-redux'

class App extends Component {
 render() {
  return <div className = "App"></App>
 }
}

// Use parentheses to automatically return the object.
const mapStateToProps = state => ({
 products: state.products,
 user: state.user
});

const mapActionsToProps = {

};

// mapStateToProps = map store state to component props
export default connect(mapStateToProps, mapActionsToProps)(App);
```

# Create constants in acttions file since the constants will be used in reducers file too. Constants will be used in multiple places: actions and reducers.
```js
user-actions.js
// users: is just namespacing for var conflicts
export const UPDATE_USER = 'users:updateUser';

export function updateUser(newUser) {
 return {
  type: UPDATE_USER,
  payload: {
   user: newUser
  }
 }
} 

user-reducers.js

import {UPDATE_USER} from '../actions/user-actions'
 
export default function userReducer(state='', {type, payload}) {
 switch(type) {
  case UPDATE_USER:
   return payload.user;
  default: 
   return state;
 }
}
```

# App.js mapStateToProps
# App.js Label that updates user on click by dispatching action in App component.
```js
import {connect} from 'react-redux'
import { updateUser } from './actions/user-actions';

class App extends Component {
 construction(props){
  super(props);
  
  tthis.onUpdateUser = this.onUpdateUser.bind(this);
 }
 
 onUpdateUser() {
  this.props.onUpdateUser('Sammy');
 }
 
 render() {
  return 
   <div className = "App">
   ...
   <div onClick={this.onUpdateUser}>Update user </div>
   {this.props.user}
   </App>
 }
}

// Use parentheses to automatically return the object.
const mapStateToProps = state => ({
 products: state.products,
 user: state.user
});

const mapActionsToProps = {
 onUpdateUser: updateUser
};

// mapStateToProps = map store state to component props
export default connect(mapStateToProps, mapActionsToProps)(App);
```


# App.js mapStateToProps
# App.js Input that updates user on change by dispatching action in App component.
```js
import {connect} from 'react-redux'
import { updateUser } from './actions/user-actions';

class App extends Component {
 construction(props){
  super(props);
  
  tthis.onUpdateUser = this.onUpdateUser.bind(this);
 }
 
 // The onchange value is sent to the store.
 onUpdateUser(event) {
  this.props.onUpdateUser(event.target.value);
 }
 
 render() {
  return 
   <div className = "App">
   ...
   <input onChange={this.onUpdateUser} / >
   {this.props.user}
   </App>
 }
}

// Use parentheses to automatically return the object.
const mapStateToProps = state => ({
 products: state.products,
 user: state.user
});

const mapActionsToProps = {
 onUpdateUser: updateUser
};

// mapStateToProps = map store state to component props
export default connect(mapStateToProps, mapActionsToProps)(App);
```

# Index.js Using Passes Props
# Index.js mapStateToProps
```js
//Here goes the create-react-app default imports
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

// A reducer is just a function that takes initial state and action.
function prodcutsReducer(state=[], {type, payload}) {
 return state;
}

// A reducer is just a function that takes initial state and action.
function userReducer(state='', {type, payload}) {
 switch (type){
  case 'updateUser':
   return payload;
 }
 return state;
}

const allReducers = combineReducers({
 products: productsReducer,
 user:userReducer
});

// reducer param is needed otw an error is thrown.
const store = createStore(allReducers, {
 products: [{name: 'iPhone'}],
 user: 'Michael'
});


ReactDOM.render(
 <Provider store={store}> 
  <App aRandomProps = 'Whatever'/>
 </Provider >
  ,
 document.getElementById('root')
);

// output: 
// 

```
# App.js

```js
import {connect} from 'react-redux'
import { updateUser } from './actions/user-actions';

class App extends Component {
 construction(props){
  super(props);
  
  tthis.onUpdateUser = this.onUpdateUser.bind(this);
 }
 
 // The onchange value is sent to the store.
 onUpdateUser(event) {
  this.props.onUpdateUser(event.target.value);
 }
 
 render() {
 // Output: 
 {
  aRandomProps: "Whatever", 
  products: Array(1
  user: "Michael"
  userPlusProp: "Michael Whatever",
  onUpdateUser: f
 }
  console.log(this.props);
  
  return 
   <div className = "App">
   ...
   <input onChange={this.onUpdateUser} / >
   {this.props.user}
   </App>
 }
}

// Use parentheses to automatically return the object.
// Remove automatic return, parentheses

const mapStateToProps = (state, props) => {
// props aRandomProps = 'Whatever' was passed from App component.
// output: {aRandomProp: "Whatever"}
 console.log(props) 
 
 return {
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} ${props.aRandomProps}`
 }
};

const mapActionsToProps = {
 onUpdateUser: updateUser
};

// mapStateToProps = map store state to component props
export default connect(mapStateToProps, mapActionsToProps)(App);
```
