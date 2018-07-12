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
