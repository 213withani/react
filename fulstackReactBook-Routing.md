# Routing

it’s the pathname that references a specific resource on that site.

the pathname references a specific location in our application.

We can think of the URL as being an external keeper of state,

storing pieces of app state up at the level of the browser’s location

we want React to generate the page

1. Browser makes a request to the server for this page.
2. Theserverdoesn’tcareaboutthepathname.Instead,itjustreturnsastandardindex.html
that includes the React app and any static assets.
3. The React app mounts.
4. TheReactappextractstheidentifiersfromtheURLandusestheseidentifierstomakeanAPI
call to fetch the data for the artist and the album. It might make this call to the same server.
5. The React app renders the page using data it received from the API call.

Single-page applications (SPAs) are web apps that load once and then dynamically update elements on the page using JavaScript. 

Routing involves two primary pieces of functionality: 
1. Modifying the URL ( Link and Redirect ) and 
1. determining what React components to render at a given location. (Route and Switch)

Route is a component that determines whether or not to render a specified component based on the app’s location. 

Props: the path and component

The supplied path prop is matched against the browser’s location.

window.location is a special object containing the properties of the
browser’s current location.

str.match(regexp)
The match() method retrieves the matches when matching a string against a regular expression.
ex pathname.match(path)
