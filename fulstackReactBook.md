# First React Web Application

## Building Product Hunt
## Simple voting app 

React approach to front end development.

## Getting started
React’s most important concepts at a high-level before diving into them in subsequent sections.

All products are sorted instantaneously by number of votes.

Node apps contain a package.json which specifies the dependencies of the project.

cd voting_app/
npm install
npm start
Browser will open to localhost:3000 and serve voting_app/index.html

For this project, we’re using Semantic UI for styling.

```
<div>
 <h1>Popular Products</h1>
 <div id="content"></div>
</div>
```

Building a React app is all about components.

1. ProductList: Contains a list of product components 
2. Product: Displays a given product

Self-contained and reusable: 

The markup, view logic, and often component-specific style is all housed in one place. 

In React, when the inputs for a component change, the framework simply re-renders that component.

Using JSX enables us to write the markup for our component views in a familiar, HTML-like syntax.

## JSX
React components ultimately render HTML which is displayed in the browser.

render() describes the view.

React allows us to describe a component’s HTML representation in JavaScript.

DOM = HTML Tree

JSX presents a light abstraction over the JavaScript version
 
# Babel
 Babel is a JavaScript transpiler. Babel turns ES6 code into ES5 code.
 
```
 app-1.js
class ProductList extends React.Component {
  render() {
    return (
      <div >
        Hello, friend! I am a basic React component.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
```
