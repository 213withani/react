# Components
## Your first Web app summary
1. Simple static structure
1. Create all your static components
1. Data-driven components, use props
1. Dynamic components, use state


npx create-react-app my-app
cd my-app
npm start


## Previous Chapter
* React organizes apps into components and how data flows between parent and child components.
* How we manage state and pass data between components using props.

## Chapter Goal
We investigate a pattern that you can use to build React apps.

## reaking the app into components
Visual components often map tightly to their respective React components.

A component should, ideally, only be responsible for one piece of functionality. https://en.wikipedia.org/wiki/Single_responsibility_principle

Not only does this separation of responsibilities keep components simple, but it often also improves their re-usability.

 new child component own the single responsibility of determining whether or not to display a “+” button or a create timer form. We’ll call it ToggleableTimerForm.
 
 Displaying a timer and editing a timer are indeed two distinct UI elements. They should be two distinct React components. We’ll call this EditableTimer.
 
 TimersDashboard: Parent container
* EditableTimerList: Displays a list of timer containers
  * EditableTimer: Displays either a timer or a timer’s edit form · Timer: Displays a given timer
    * TimerForm: Displays a given timer’s edit form

* ToggleableTimerForm: Displays a form to create a new timer
  * TimerForm (not displayed): Displays a new timer’s create form

## The steps for building React apps from scratch
Ultimately, our top-level component will communicate with a server.

It will simplify things for us if we start off with static components.

This will enable us to lay the framework for the app, getting a clear idea of how the component tree is organized.

Next
* determine state
* in which component it should live
* start off by just hard-coding the state

At that point, we’ll have the data flow from parent to child in place. Then we can add inverse data flow, propagating events from child to parent.

##  Develop app from scratch
1. Break the app into components
2. Build a static version of the app (pass down static props)
3. Determine what should be stateful (which component you want to interact with)
4. Determine in which component each piece of state should live (usually parent)
5. Hard-code initial states
6. Add inverse data flow (child notifies parent)
7. Add server communication

## Step 2: Build a static version of the app
### TimersDashboard

```js
 <div className='column'>
   <EditableTimerList />
   <ToggleableTimerForm isOpen={true} />
  </div>
```

This component renders its two child components nested under div tags.

We will define EditableTimerList next. We’ll have it render two EditableTimer components. One will end up rendering a timer’s face. The other will render a timer’s edit form
```js
EditableTimerList

<div id='timers'>
  <EditableTimer editFormOpen={false} />
  <EditableTimer editFormOpen={true} /> 
</div>

EditableTimer

if (this.props.editFormOpen) { 
 return (
  <TimerForm />
 );
} else {
 return ( <Timer/>);

TimerForm

<div className='field'>
 <label>Title</label>
 <input type='text' defaultValue={this.props.title} /> 
</div>

<div className='field'>
 <label>Project</label>
 <input type='text' defaultValue={this.props.project} />
</div>

<div className='ui two bottom attached buttons'>
  <button className='ui basic blue button'>
   {submitText}
  </button>
  
  <button className='ui basic red button'>
   Cancel
  </button>
</div>
            
```

We’ll use TimerForm again within ToggleableTimerForm for creating timers. ToggleableTimerForm will not pass TimerForm any props. this.props.title and this.props.project will therefore return undefined and the fields will be left empty.

submitText variable uses the presence of this.props.title to determine what text the submit button at the bottom of the form should display. If title is present, we know we’re editing an existing timer, so it displays “Update.” Otherwise, it displays “Create.”

ToggleableTimerForm. Recall that this is a wrapper component around TimerForm. It will display either a “+” or a TimerForm. Right now, it accepts a single prop, isOpen.

```js
class ToggleableTimerForm extends React.Component { render() {
if (this.props.isOpen) { 
  return (
        <TimerForm />
  );
} else { 
  return (
    <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon' />
          </button>
    </div> 
);
} }
}

time_tracking_app/public/js/app-1.js
class Timer

<div className='header'> 
 {this.props.title}
</div>

<div className='meta'> 
 {this.props.project}
</div>

<div className='extra content'>
  <span className='right floated edit icon'>
     <i className='edit icon' />
  </span>
  <span className='right floated trash icon'>
      <i className='trash icon' />
  </span> 
</div>
        
<div className='ui bottom attached blue basic button'>
 Start
</div>
        
```

Inside TimersDashboard are two child components: EditableTimerList and ToggleableTimerForm.
EditableTimerList contains two EditableTimer components. The first of these has a Timer component as a child and the second a TimerForm. 

These bottom-level components — also known as leaf components — hold the majority of the page’s HTML. This is generally the case. 

The components above leaf components are primarily concerned with orchestration.

We must evolve it from its static existence to a mutable one. 

## Step 3: Determine what should be stateful

### TimersDashboard
 It sets one prop, which is the isOpen boolean that is passed down to ToggleableTimerForm.
### EditableTimerList
 Passes down Timer’s properties.
### EditableTimer
This uses the prop editFormOpen. 
### Timer
This uses all the props for a timer. 
### TimerForm
This has two interactive input fields, one for title and one for project. When editing an existing timer, these fields are initialized with the timer’s current values.

## Step 3: Determine what should be stateful
Read https://reactjs.org/docs/thinking-in-react.html
  
So, outside of TimerForm, we’ve identified our stateful data:
• The list of timers and properties of each timer 
• Whether or not the edit form of a timer is open 
• Whether or not the create form is open

## Step 4: Determine in which component each piece of state should live

ToggleableTimerForm does not need the state to render, but it can affect state. It needs to be able to insert a new timer. It will propagate the data for the new timer up to TimersDashboard.

Storing the state in EditableTimer will be fine for our current needs. But there are a few requirements that might require us to “hoist” this state up higher in the component hierarchy in the future.

TimersDashboard doesn’t appear to care about whether ToggleableTimerForm is open or closed.

So, in summary, we’ll have three pieces of state each in three different components:
• Timer data will be owned and managed by TimersDashboard.
• Each EditableTimer will manage the state of its timer edit form.
• The ToggleableTimerForm will manage the state of its form visibility.

# Step 5: Hard-code initial states
We’ll define our initial states within the components themselves. This means hard-coding a list of timers in the top-level component, TimersDashboard. For our two other pieces of state, we’ll have the components’ forms closed by default.


```js
class TimersDashboard extends React.Component {
  // no constructor
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid.v4(),
      }, 
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid.v4(),
      }, 
    ],
   };
   
    render() {
      return (
        <div className='column'>
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm />
        </div> 
     );
   } 
   
 }
```

Receiving props in EditableTimerList

```js

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
    
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        />
        
    )); 
    
    return (
      <div id='timers'>
        {timers}
      </div> );
  } 
}
```
## Props vs. state
 What existed as mutable state in Timers-
Dashboard is passed down as immutable props to EditableTimerList.

Once you understand state, you can see how props act as its one-way data pipeline. State is managed in some select parent components and then that data flows down through children as props.

## Adding state to EditableTimer
In the static version of our app, EditableTimer relied on editFormOpen as a prop to be passed down
from the parent. We decided that this state could actually live here in the component itself.

We’ll set the initial value of editFormOpen to false, which means that the form starts off as closed. We’ll also pass the id property down the chain:

```js
class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };

 render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
       /> 
     );
   } 
 }
}
```

Using a combination of state, the value attribute, and the onChange attribute is the canonical method
we use to write form elements in React.

# Step 6: Add inverse data flow
```js
time_tracking_app/public/js/app-3.js
  <button className='ui basic blue button' onClick={this.handleSubmit}>
       {submitText}
  </button>
  
  <button className='ui basic red button' onClick={this.props.onFormClose}>
       Cancel
  </button>
   
time_tracking_app/public/js/app-3.js
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
}); };


time_tracking_app/public/js/app-3.js
render() {
    const submitText = this.props.id ? 'Update' : 'Create';

```

We have submitText switch on id as opposed to title. Using the id property to determine whether or not an object has been created is a more common practice.

Remember, ToggleableTimerForm is not the manager of timer state. TimerForm has an event it’s emitting, in this case the submission of a new timer. ToggleableTimerForm is just a proxy of this message.

handleFormSubmit() accepts the argument timer. Recall that in TimerForm this argument is an object containing the desired timer properties. We just pass that argument along here.

TimersDashboard: handling the events we’re capturing down at the leaf components.

Event - submission of a form: a new timer is being created or an existing one is being updated. 
To display an edit form, the user clicks on the edit icon on a Timer. This should propagate an event up to EditableTimer and tell it to flip its child component, opening the form.

```js
 <span onClick={this.props.onEditClick}>
      <i className='edit icon' />
 </span>
```

To display an edit form, the user clicks on the edit icon on a Timer. This should propagate an event up to EditableTimer and tell it to flip its child component, opening the form.

Both EditableTimer and Toggleable- TimerForm are just intermediaries between TimerForm and TimersDashboard.

Like ToggleableTimerForm, EditableTimer doesn’t do anything with the incoming timer.

## Updating EditableTimerList (page 99)

send the submit function from TimersDashboard to each EditableTimer:

## Defining onEditFormSubmit() in TimersDashboard
For updates, we need to hunt through the timers array

If the timer’s id matches that of the form submitted, we’ll return a new object that contains the timer with the updated attributes.

## Deleting timers
### Adding the event handler to Timer
we’re going to need the id to sort out which timer is being deleted. handleTrashClick() provides the id to this function.

## Implementing the delete function in TimersDashboard
The last step is to define the function in TimersDashboard that deletes the desired timer from the state array. 
