The way I think about properties, propTypes and default properties is:

* You have a component that's the parent and you have a child component. To pass read only data between the two is by using attributes in components (JSX). 
* The children can access this data using this.props in classes and props in functions.
* The data can be checked, restricted to the correct types by using propTypes
 - Ex. <Hello name=1> you can user propTypes to check that name attribute should be String and nothing else
 - Same for default props, if you make something required and user doesn't provide an attribute then you can assign it a value by default
