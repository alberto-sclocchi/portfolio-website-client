import React from 'react'

export default function TechInfoBox({imgUrl, techName, small, large}) {
  return (
    <li className="scroller-card">
      <img className={large ? "express-img" : small ? "java-img" : "tech-img"} src={require(`../../images/${imgUrl}`)}  alt="tech-icon"/>
    </li>
  )
}
