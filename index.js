import React from 'react'
import { render } from 'react-dom'
// import {Router,  hashHistory} from 'react-router'
// import App from './modules/App'
// import About from './modules/About'
// import Repos from './modules/Repos'
// import Repo from './modules/Repo'
// import Router from 'react-router/BrowserRouter'

import { BrowserRouter, Link, Match } from 'react-router'
render(  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

    </div>
  </BrowserRouter>, document.getElementById('app'))
