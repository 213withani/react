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
<div id='timers'>
  <EditableTimer editFormOpen={false} />
  <EditableTimer
    title='Learn extreme ironing' project='World Domination' editFormOpen={true}
  /> 
</div>
```
