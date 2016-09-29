import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return <div>
      <h1>Links ,bruh</h1>
      <ul role="nav">
        <li><NavLink to="/about" >About</NavLink></li>
        <li><NavLink to="/repos" >Repos</NavLink></li>

        {/* what is this doing? */}
        {this.props.children}
      </ul>
    </div>
  }
})
