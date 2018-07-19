# reactjs basics video
https://techburst.io/learn-react-js-basics-in-two-hours-free-video-course-b159b30b3ecb

# ReactJS Tutorial for Beginners - Getting Started with React
https://youtu.be/pgAvVxowaYU

Reusable Components:
```js
HTML
<div class='person'>
 <h1> Max </h1>
 <p> Your age: 28 </p> 
<div>

<div class='person'>
 <h1> Manu </h1>
 <p> Your age: 29 </p> 
<div>

REACT
function Person (props) => {
 <div className='person'>
   <h1> {this.props.name} </h1>
   <p> {this.props.age} </p> 
 <div>
}
```


```css
.person {
 display: inline-block; /*displays elements in the same line*/
 margin: 0px;
 border: 1px solid #eee; /*card layout*/
 box-shadow: 0 2px 2px #ccc; 
 width: 200px;
 padding: 20px;
}
```


# Rethinking best practices -- JSConf EU 2013
https://www.youtube.com/watch?v=x7cQ3mrcKaY

React: Renders your UI and responds to events.

1. Build components, not templates

Separation of concerns: Reduce coupling, increase cohesion.

Coupling: The degree to which each program module relies on each of the other modules.

If you make a change in one place, how often do you go to another place to make it work.

Cohesion: The degree to which elements ofa. module belong together.

Is a piece of code doing too much and can you refactor.

## Display logic and markup are highly cohesive. They both show the UI.
 The JS code that drives your UI and the markup that displays it to the user are doing the same thing handling events and data to the user.
 
Templates separate technologies, not concerns.
Partial: child template.

The framework cannot know how to seprate your concerns for you. It should only provide powerful, expressive tools for the user to do it correctly.

React component: A highly cohesive building block for UIs loosely coupled with other components.

Use components to separate your concerns. With the full power of JS.

## Componets are reuseable, composable, unit testable

Just don't write spaghetti code. 
* Keep your componets small.
* Only put display logic in your components. 

# What about XSS?
Creating DOM using function calls.

# JSX
JSX is an optional preprocessor to let you use HTML like syntax.

The accessibility of templates and the power of JS.
 
 # React
 Re-render your app on every single data change.
 
 ## Building UI is hard
 ### because there is so much state.
 
 Lots of UI elements, design iteration, crazy environments, mutable DOM (forgot to keep track of it), user input ...
 
 When the data changes, React re-renders the entire component.
 
 Components describe your UI at any point in time.
 
 Re-rendering on every change makes things simple. Every place data is displayed is guaranteed to be up to date.
 
 # 3. Virtual DOM
 Makes re-rendering on every change fast.
 
 You can't just throw out the DOM and rebuild it on each update. It's too slow and you'll lose form state and scroll position.
 
 Built a virtual DOM and events system.
 
 Usually faster than manual DOM operations.
 
 Input some data and out a description of the DOM.
 
 # SUMMARY 
 * Components, not templates
 * Re-render, don't mutate
 ** Hard to think about mutation. Just throw out your old app and re-render the whole thing, have the implementation take care of it (Virtual DOM)
 
