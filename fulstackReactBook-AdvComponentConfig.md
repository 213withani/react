## Getting Data into render()
Understanding these are crucial to making our components dynamic and useable within a larger
app.

Props are immutable pieces of data that are passed into child components.

(Props are data that can't be changed and are passed down in Component attributes to children.)

State is private, mutable and local to a component. 

Typically, when our component’s state changes, the component needs to be re-rendered.

<List prop1={this.state.item1}> When user clicks/select an item from the list. 

The state needs to be set to the current selected item. Thus the UI gets re-rendered since state changed.

## props are the parameters
By using props we’ve taken our static component and allowed it to dynamically render whatever is passed into it.

# PropTypes
PropTypes are a way to validate the values that are passed in through our props. safety and documentation.

# context
React will take care of passing down context from component to component so that at any point in the tree hierarchy, 
any component can reach up to the “global” context where it’s defined and get access to the parent’s variables.

# state

stateful components. Any time a component needs to hold on to a dynamic piece of data, that component can be considered stateful.

For instance, when a light switch is turned on, that light switch is holding the state of “on.” Turning a light off can be described as flipping the state of the light to “off.”

We’ll refer to components that hold local-mutable data as stateful components.

## Returning a New Function

This is a common pattern for passing arguments to handlers. We close over the choice argument when we call select. select returns a new function that will call setState with the appropriate choice.

whenever a state update depends on the current state, it is preferable to pass a function to setState()

```js
  decrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  };
```

Whenever a state transition depends on the current state, using a function to set the state helps to avoid the chance for such enigmatic bugs to materialize.

The only information we should ever put in state are values that are not computed and do not need to be sync’d across the app.

# Stateless components

We won’t reference this when working with functional, stateless components.

React does allow us to use propTypes and defaultProps on stateless components.

stateful components often spread complexity throughout a system.

If we don’t need any lifecycle methods and can get away with only a rendering function, using a stateless component is a great choice.

Generally, React will pass the this.props.children prop as a list of components if there are multiple children, whereas it will pass a single element if there is only one component.

## SUMMARY
By using state we hold on to component-local data, and we tell our components to re-render whenever that state changes
