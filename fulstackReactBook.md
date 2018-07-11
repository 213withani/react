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

## Making Product data-driven
### The data model
Seed.products

### Using Props
We want to modify our Product component so that it no longer uses static, hard-coded attributes.

Product should accept data passed down from its parent ProductList

Structure in this way enables our ProductList component to dynamically render any number of Product components.

The way data flows from parent to child in React is through props.

When a parent renders a child, it can send along props the child depends on.

Declaration of props:
<Component [propName]=[propValue]/>

Use Props:
{Obj.property}

Now the ProductList component is passing props down to Product. 

In React, a component can access all its props through the object this.props.

Interweaving props with HTML elements in this way is how we create dynamic, data-driven React components.

Our Product component is now data-driven. Based on the props it receives it can render any product that we’d like.

## Rendering multiple products

### Array's map
Builds a new array by using the return value from each function call.

This page still lacks interactivity.

React's true power: creating dynamic interfaces.

Let’s start with something simple: the ability to up-vote a given product.

## React the vote (your app’s first interaction)
When the up-vote button on each one of the Product components is clicked, we expect it to update the votes attribute for that Product, increasing it by one.

While the child can read its props, it can’t modify them.

We need a way for the Product component to let ProductList know that a click on its up-vote icon occurred. We can then have ProductList, the owner of the product’s data, update the vote count for that product. The updated data will then flow downward from the ProductList component to the Product component.

## Propagating the event
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

## Binding custom component methods

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

## Using state

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

## Updating state and immutability
setState() is actually asynchronous. There is no guarantee when React will update the state and re-render our component. 

Don't use .push inside setState(). concat() creates a new array that contains the elements of the array it was called on followed by the elements passed in as arguments.

Treat the state object as immutable. It’s important to understand which Array and Object methods modify the objects they are called on.

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

we check if the current product matches productId. If it does, we create a new object, copying over the properties from the original product object. We then overwrite the votes property on our new product object. We set it to the incremented vote count.

```
Object.assign({}, product, {votes: product.votes + 1,})
```

