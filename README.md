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
```
//Here goes the create-react-app default imports

import {createStore} from 'redux';

// A reducer is just a function

function reducer() {
 return 'State';
}

// reducer param is needed otw an error is thrown.

const store = createStore(reducer);
console.log( store.getState() );

## Simple working store, reducer and action implemenatation
//Here goes the create-react-app default imports

import {createStore} from 'redux';

// A reducer is just a function

function reducer() {
 return 'State';
}

// reducer param is needed otw an error is thrown.

const store = createStore(reducer);
console.log( store.getState() );

const action = {
 type: 'changeState',
 payload: {
  newState: 'New State'
 }
}
```
