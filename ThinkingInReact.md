# Thinking in React
https://reactjs.org/docs/thinking-in-react.html

how it makes you think about apps as you build them

[Building a] searchable product

# Start with a mock

JSON API available

Mock from designer

json api structure: 

{category, price, stocked, name}

# Step 1: Break The UI 
Into A Component Hierarchy

draw boxes around every component ... with names

a component should ideally only do one thing. [Otherwise create] smaller subcomponents.

Since you’re often displaying a JSON data model to a user, your UI ... will map nicely

five components in our simple app

FilterableProductTable 
 SearchBar : user input
 
 ProductTable : data collection
 
  ProductCategoryRow : Create a category heading
  
  ProductRow : Display name and price. Color name based on stocked 
 
Components that appear within another component in the mock should appear as a child in the hierarchy


ProductCategoryRow : const category = this.props.category; // My input is a category name.

ProductRow: const product = this.props.product; // My input is a product obj.

ProductTable: display each {category, price, stocked, name}
