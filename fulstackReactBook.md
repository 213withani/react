# First React Web Application (Page 6-54)

## Building [Product Hunt](https://www.producthunt.com/)
### Simple voting app 

React approach to Front End Development.

### Getting started
Node apps contain a package.json which specifies the dependencies of the project.

* cd voting_app/
* npm install
* npm start
* Browser will open to localhost:3000 and serve voting_app/index.html

For this project, we’re using Semantic UI for styling. (Try semantic cdn or downloading it to a folder)

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
  <div >
    <h1>Popular Products</h1>
    <div id="content"></div>
  </div>
  <script src="./js/seed.js"></script>
  <script type="text/babel" data-plugins="transform-class-properties" src="./js/app-2.js"></script>
</body>
</html>
```

* Building a React app is all about components.
* Self-contained and reusable: The markup, view logic, and often component-specific style is all housed in one place. 

### JSX
Using JSX enables us to write the markup for our component views in a familiar, HTML-like syntax.

* JSX represents a light abstraction over the JavaScript version.
* React allows us to describe a component’s HTML representation in JavaScript.
* render() describes the view.
* React components ultimately render HTML which is displayed in the browser.
* DOM = HTML Tree
 
### app-1.js
render this ProductList inside a specific DOM node

```js
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

### SUMMARY (Basic static component rendered):
* we wrote a React component using an ES6 class as well as JSX. 
* We specified that we wanted Babel to transpile ES6 code to ES5. 
* We then used ReactDOM.render() to write this component to the DOM.

## Product Component
### ProductList now renders Product Component
We now have two React components being rendered in our app.
1. ProductList: Contains a list of product components 
2. Product: Displays a given product

### app-2.js
```js
class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src='images/products/image-aqua.png' />
        </div>

        <div>
          <div>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>

          <div>
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
```
### JSX
We cannot use any reserved JavaScript words in JSX. class is a reserved word. Therefore, React has us use the attribute name className. Later, when the HTML element reaches the page, this attribute name will be written as class.

## Making Product data-driven
### The data model
* Seed.products

### Using Props
#### Product Component
* We want to modify our Product component so that it no longer uses static, hard-coded attributes.
* Product should accept data passed down from its parent ProductList

#### ProductList Component
* Structure in this way enables our ProductList component to dynamically render any number of Product components.
* The way data flows from parent to child in React is through props.
* When a parent renders a child, it can send along props the child depends on.

#### Props
* Declaration of props: <Component [propName]=[propValue]/>
* Now the ProductList component is passing props down to Product. 
* In React, a component can access all its props through the object this.props.

### SUMMARY (Dynamic, data driven components)
* Interweaving props with HTML elements in this way is how we create dynamic, data-driven React components.
* Our Product component is now data-driven. Based on the props it receives it can render any product that we’d like.

## Rendering multiple products
### Array's map
Builds a new array by using the return value from each function call.

* This page still lacks interactivity.
* React's true power: creating dynamic interfaces.

## React the vote 
### (your app’s first interaction)
While the child can read its props, it can’t modify them.

### The Goal
We need a way for the Product component to let ProductList know that a click on its up-vote icon occurred. We can then have ProductList, the owner of the product’s data, update the vote count for that product. The updated data will then flow downward from the ProductList component to the Product component.

### Propagating the event
We know that parents communicate data to children through props. Because props are immutable, children need some way to communicate events to parents. The parents could then make whatever data changes might be necessary.

Functions passed down through props are the canonical manner in which children communicate events with their parent components.

We’ll start by having up-votes log a message to the console.

Work you way up. For example here put a log message instead of creating the feature end to end, create them step by step.

In React, we can use the special attribute onClick to handle mouse click events.

When the user clicks the up-vote icon, it will trigger a chain of function calls:
1. User clicks the up-vote icon.
2. ReactinvokesProductcomponent’shandleUpVote.
3. handleUpVote invokes its prop onVote. This function lives inside the parent ProductList and
logs a message to the console.

Here’s the odd part: When working inside render(), we’ve witnessed that this is always bound to the component. But inside our custom component method handleUpVote(), this is actually null.

### Binding custom component methods

For the render() function, React binds this to the component for us.

So, any time we define our own custom component methods, we have to manually bind this to the component ourselves.

```js
voting_app/public/js/app-6.js
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

```

By calling super(props), we’re invoking that constructor() function first.

We’re redefining the component method handleUpVote(), setting it to the same function but bound to this (the component). Now, whenever handleUpVote() executes, this will reference the component as opposed to null.

Our next task is to update the vote count on the product.

At the moment, our app doesn’t have a place to store and manage data.

What our app is currently missing is state.

### Using state

Whereas props are immutable and owned by a component’s parent, state is owned by the component. this.state is private to the component and as we’ll see can be updated with this.setState().

Because we are mutating the data for our products (the number of votes), we should consider this data to be stateful. ProductList will be the owner of this state. It will then pass this state down as props to Product.

When adding state to a component, the first thing we do is define what the initial state should look like. Because constructor() is called when initializing our component, it’s the best place to define our initial state.

In React components, state is an object.

```
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }; 
  }
  componentDidMount() {
    this.setState({ products: Seed.products });
  }
```

React invokes one lifecycle method, componentDid- Mount(), after our component has mounted to the page. 

For all state modifications after the initial state, React provides components the method this.setState(). 

The component will mount with an empty state this.state.products array. After mounting, we populate the state with data from Seed. The component will re-render and our products will be displayed. This happens at a speed that is imperceptible to the user.

### Updating state and immutability
#### setState()
setState() is actually asynchronous. There is no guarantee when React will update the state and re-render our component. 

Don't use .push inside setState(). concat() creates a new array that contains the elements of the array it was called on followed by the elements passed in as arguments.

Treat the state object as immutable. It’s important to understand which Array and Object methods modify the objects they are called on.

#### Object.assign
Instead, we should create a new array of products. And if we modify one of the product objects, we should modify a clone of the object as opposed to the original one.

```
voting_app/public/js/app-9.js
  // Inside `ProductList`
  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
});
} else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
}
```
#### .map
While we’re creating a new array, the variable product here still references the product object sitting on the original array in state. Therefore, if we make changes to it we’ll be modifying the object in state. So we use Object.assign() to clone the original into a new object and then modify the votes property on that new object.

### SUMMARY (State and immutability)
we check if the current product matches productId. If it does, we create a new object, copying over the properties from the original product object. We then overwrite the votes property on our new product object. We set it to the incremented vote count.
```
Object.assign({}, product, {votes: product.votes + 1,})
```
We use Object.assign() a lot for avoiding mutating objects.

## Refactoring with the Babel plugin
Babel is a JavaScript transpiler. Babel turns ES6 code into ES5 code.
We’ve been using Babel in this project to give us the ability to write modern JavaScript.

ES6 (ES2015), JSX => ES5 JS

With the transform-class-properties plugin, we can write handleUpVote as an arrow function. This will ensure this inside the function is bound to the component

Using this feature, we can drop constructor(). There is no need for the manual binding call.

If we write a custom component method in which we want this bound to the component, we write it as an arrow function.

### SUMMARY (bind vs no bind using arrow function)
In sum, we can use property initializers to make two refactors to our React components:
1. We can use arrow functions for custom component methods (and avoid having to bind this)
2. We can define the initial state outside of constructor()


1. We think about and organize our React apps as components 2. UsingJSXinsidetherendermethod
3. Data flows from parent to children through props
4. Event flows from children to parent through functions
5. Utilizing React lifecycle methods
6. Stateful components and how state is different from props 7. How to manipulate state while treating it as immutable

# Components
## A time-logging app
