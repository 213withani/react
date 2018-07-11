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

```js
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
 
## Babel
 Babel is a JavaScript transpiler. Babel turns ES6 code into ES5 code.
 
### app-1.js
render this ProductList inside a specific DOM node

```js
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Project One</title>
  <link rel="stylesheet" href="./semantic-dist/semantic.css" />
  <link rel="stylesheet" href="./style.css" />
  <script src="vendor/babel-standalone.js"></script>
  <script src="vendor/react.js"></script>
  <script src="vendor/react-dom.js"></script>
</head>

<body>
  <div class="main ui text container">
    <h1 class="ui dividing centered header">Popular Products</h1>
    <div id="content"></div>
  </div>
  <script src="./js/seed.js"></script>
  <script type="text/babel" data-plugins="transform-class-properties" src="./js/app-1.js"></script>

</body>

</html>

class ProductList extends React.Component {
  render() {
    return (
      <div>
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

ReactDOM.render([what], [where]);

In React, native HTML elements always start with a lowercase letter whereas React component names always start with an uppercase letter.

To recap, we wrote a React component using an ES6 class as well as JSX. We specified that we wanted Babel to transpile this code to ES5. We then used ReactDOM.render() to write this component to the DOM.

```js


class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="product">

        <div className="productImg">
          <img src='images/products/image-aqua.png' />
        </div>

        <div className="descAndImg">

          <div className="description">
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>

          <div className="avatar">
            <span>Submitted by:</span>
            <img src='images/avatars/daniel.jpg'/>
          </div>

        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

// CSS file
.product {
    width: 500px;
    display: flex;
    justify-content: space-between;

}

.avatar > img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

img {
    width: 100px;
    height: 100px;
}

```

Because it runs in the browser as JavaScript, we cannot use any reserved JavaScript words in JSX. class is a reserved word. Therefore, React has us use the attribute name className. Later, when the HTML element reaches the page, this attribute name will be written as class.

We now have two React components being rendered in our app.

## Making Product data-driver
### The data model
Seed.products

### Using Props
We want to modify our Product component so that it no longer uses static, hard-coded attributes.

Product should accept data passed down from its parent ProductList

Structure in this way enables our ProductList component to dynamically render any number of Product components.

The way data flows from parent to child in React is through props.

