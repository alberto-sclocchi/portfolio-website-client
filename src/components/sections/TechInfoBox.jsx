import React from 'react'

export default function TechInfoBox({imgUrl, techName, small, large}) {
  return (
    <div className="flip-card">
        <div className="inner-card">
            <div className="flip-card-front">
                <img className={large ? "express-img" : small ? "java-img" : "tech-img"} src={require(`../../images/${imgUrl}`)}  alt="node-icon"/>
            </div>
            <div className="flip-card-back">
                <h4>{techName}</h4>
            </div>
        </div>
    </div>
  )
}
