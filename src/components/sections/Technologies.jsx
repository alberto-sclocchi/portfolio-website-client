import React from 'react'
import nodeJS from '../../images/node-icon.png'
import javaScript from '../../images/javascript-icon.png'
import react from '../../images/react-icon.png'
import express from '../../images/express-icon.png'
import mongoDB from '../../images/mongodb-icon.png'
import html from '../../images/html-icon.png'
import css from '../../images/css-icon.png'
import java from '../../images/java-icon.png'
import c from '../../images/c-icon.png'

export default function Technologies() {
  return (
    <div className="section" id="skills">
      <h2 className="section-title">Tech Skills</h2>
      
      <div className="cards">
        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={nodeJS}  alt="node-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>NodeJS</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={javaScript}  alt="javascript-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>JavaScript</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={react} alt="react-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>ReactJS</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="express-img" src={express}  alt="express-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>ExpressJS</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={mongoDB}  alt="mongoDB-icon" />
            </div>
            <div className="flip-card-back">
              <h4>MongoDB</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={html}  alt="html-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>HTML</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={css}  alt="css-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>CSS</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="java-img" src={java}  alt="java-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>Java</h4>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="inner-card">
            <div className="flip-card-front">
              <img className="tech-img" src={c}  alt="c-icon"/>
            </div>
            <div className="flip-card-back">
              <h4>C</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
