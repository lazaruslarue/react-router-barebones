# Intro to `react-router`

React Router v4 is still fresh off the press. it was released 20 days ago. welcome to the future. this setup will get you set up with a simple app in which to

### the approach

* routes, you say? (concepts overview & slides)
* routing: the ins & outs (these notes)
* recursive routing: becoming routine (code with me)

## install the new hotness:

`npm install --save react-router@next`

we're separating that part of the install instructions, because it's the focus of *this* discussion. `react-router` v4 is the absolute newest hotness. that's why you use the `@next` declaration, during the `npm install` step.

be careful about cutting and pasting code, and be aware that you will need to `npm init` before you `npm install`

but wait, there's more! keep going forward to build yourself a functional place to test out some of this code:

````
/* package.json */

...
"scripts": {
  "thetrap": "webpack-dev-server --inline --content-base ."
},
"dependencies": {
  "react": "^15.3.0",
  "react-dom": "^15.3.0",
  "react-router": "^4.0.0-alpha.3"
},
"devDependencies": {
  "babel-core": "^6.5.1",
  "babel-loader": "^6.2.2",
  "babel-preset-es2015": "^6.5.0",
  "babel-preset-react": "^6.5.0",
  "http-server": "^0.8.5",
  "webpack": "^1.13.1",
  "webpack-dev-server": "^1.14.1"
}

...

````

... you're not done yet, we still need some files.

````
/* webpack.config.js */

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
````

````
<!-- index.html -->
<!doctype html>
<html>
<meta charset=utf-8/>
<title>How's this for a route?</title>
<div id=app></div>
<link rel="stylesheet" href="index.css" />
<script src="bundle.js"></script>
````

````
/* App.js */
import React from 'react'
import Router from 'react-router/BrowserRouter'
import { Link, Match, Miss } from 'react-router'

import Home from './Home'
import Other from './Other'
import NoMatch from './NoMatch'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/miss'>Miss!</Link></li>
      </ul>
      <hr/>
      <Match exactly pattern='/' component={Home}/>
      <Match pattern='/other' component={Other}/>
      <Miss component={NoMatch}/>
    </div>
  </Router>
)

export default App

````

````
/* Home.js */
import React from 'react'
const Home = () => {return (
  <div className='home'>
    <h2>Home</h2>
  </div>
)}

export default Home
````

````
/* Other.js */
import React from 'react'
const Home = () => {return (
  <div className='other'>
    <h2>Other</h2>
  </div>
)}

export default Home
````

````
/* NoMatch.js */
import React from 'react'

const NoMatch = () => (
  <div>
    <h2>NoMatch</h2>
  </div>
)

export default NoMatch
````


#### gotcha alert

look back up there at 'App.js' and notice the distinction between the two `<Match />` components.

>when you're matching a route to the root page (`/`), be sure to use `exactly` flat: `<Match exactly pattern to=”/”>Home</Match>`

## let's doooo!

run it!

`npm install && npm run thatrap`

### Stateless functional components

We're using Stateless Functional Component declaration... React loves it when we do this.



### Make another route

This is your chance to make a simple new component, and match it to a route! So easy!

### Make a route with a nested component (nested route / nested view)

Take a look at `Topics.js` for all your inspirational needs.
