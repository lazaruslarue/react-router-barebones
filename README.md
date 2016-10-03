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

import NoMatch from './NoMatch'
import NavLink from './NavLink'
import Topics from './Topics'
import Nav from './Nav'
import About from './About'
import Home from './Home'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/miss'>Miss!</Link></li>
      </ul>
      <hr/>
      <Match exactly pattern='/' component={Home}/>
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
/* NoMatch.js */
import React from 'react'

const NoMatch = () => (
  <div>
    <h2>NoMatch</h2>
  </div>
)

export default NoMatch
````


run it!

`npm install && npm run thatrap`

### gotchas

>when you're setting a link to the `index.html` page, besure to use `exactly` flat: `<Link exactly pattern to=”/”>Home</Link>`

###
