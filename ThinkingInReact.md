# Thinking in React
https://reactjs.org/docs/thinking-in-react.html

## how it makes you think about apps as you build them

[Building a] searchable product

# Start with a mock

JSON API available

Mock from designer

json api structure: 

## {category, price, stocked, name}

# Step 1: Break The UI 
## Into A Component Hierarchy

draw boxes around every component ... with names

a component should ideally only do one thing. [Otherwise create] smaller subcomponents.

Since you’re often displaying a JSON data model to a user, your UI ... will map nicely

## Five components in our simple app

FilterableProductTable 

 SearchBar : user input
 
 ProductTable : data collection
 
  ProductCategoryRow : Create a category heading
  
  ProductRow : Display name and price. Color name based on stocked property
 
Components that appear within another component in the mock should appear as a child in the hierarchy


# Step 2: Build A Static Version in React

ProductCategoryRow : const category = this.props.category; // My input is a category name.

ProductRow: const product = this.props.product; // My input is a product obj.

ProductTable: display each {category, price, stocked, name}

## takes your data model and renders the UI but has no interactivity

building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. 

props are a way of passing data from parent to child.

State is reserved only for interactivity, that is, data that changes over time.

On larger projects, it’s easier to go [build] bottom-up and write tests as you build.

The components will only have render() methods since this is a static version of your app. [Basically no private methods or other methods yet.]

one-way data flow (also called one-way binding)

# Step 3: Identify The Minimal (but complete) Representation Of UI State

UI interactive : trigger changes

minimal set of mutable state

minimal representation of state : compute everything else 

ex keep a todo list copy, then compute length and use as count

## Data

* products
* search text - state
* checkbox value - state
* filtered list

The search text and the checkbox seem to be state since they change over time and can’t be computed from anything.

## Find State

1. parent via props?
2. remain unchanged?
3. can you compute it?

# Step 4: Identify Where Your State Should Live
which component should own what state

* renders based on state
* common owner component
* component higher up to own state
* otw create new component to only own state

ProductTable needs to filter the product list based on state and SearchBar needs to display the search text and checked state.

## It conceptually makes sense for the filter text and checked value to live in FilterableProductTable

this.state = {filterText: '', inStockOnly: false} // init state

pass filterText and inStockOnly to ProductTable and SearchBar as a prop. 

Step 5: Add Inverse Data Flow

# Step 5: Add Inverse Data Flow
The form components deep in the hierarchy need to update the state in FilterableProductTable.

FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated.
