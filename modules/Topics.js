import React from 'react'
import {Link, Match} from 'react-router'

const TopicBase = () => {
  return (<h3>Find yourself a topic</h3>)
}

const Topic = ({params}) => {
  return (<h3>{params.topicName}</h3>)
}

const Topics = ({pathname}) => (
  <div className='topics'>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/rendering`}>Rendering</Link></li>
      <li><Link to={`${pathname}/components`}>components</Link></li>
      <li><Link to={`${pathname}/etc`}>etc...</Link></li>
    </ul>
    <Match exactly pattern={pathname} component={TopicBase}></Match>
    <Match exactly pattern={`${pathname}/:topicName`} component={Topic}></Match>

  </div>
)

export default Topics
