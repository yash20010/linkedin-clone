import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import background from './assets/images/background.jpg'

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt="Rainbow coloured Planet" />
        <Avatar className="sidebar__avatar" />
        <h2>Yash Parekh</h2>
        <h4>yash20010@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
