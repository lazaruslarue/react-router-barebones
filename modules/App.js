import React from 'react'
import Router from 'react-router/BrowserRouter'
import { Link, Match, Miss } from 'react-router'

import NoMatch from './NoMatch'
import About from './About'
import Home from './Home'
import NavLink from './NavLink'

const App = () => (
  <Router>
    <div>
      <NavLink />
      <hr/>
      <Match exactly pattern='/' component={Home}/>
      <Match pattern='/about' component={About}/>
      <Miss component={NoMatch}/>
    </div>
  </Router>
)

export default App
