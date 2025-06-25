import React, { useEffect, useState } from 'react'
import github from '../../images/git-hub-proj.png'
import soccerImg from '../../images/soccer-img.jpeg'
import nodeJS from '../../images/node-icon.png'
import javaScript from '../../images/javascript-icon.png'
import react from '../../images/react-icon.png'
import express from '../../images/express-icon.png'
import mongoDB from '../../images/mongodb-icon.png'
import handlebars from '../../images/handlebars-icon.png'
import html from '../../images/html-icon.png'
import css from '../../images/css-icon.png'
import gymImg from '../../images/gym-img.jpeg'
import marioImg from '../../images/mario-bros.png'

export default function Projects() {
  const [ flip, setFlip ] = useState(null)

  useEffect(() => {
    const projects = document.querySelectorAll(".flip-card");

    projects.forEach((project, i) => {
      project.addEventListener("click", () => {
        console.log("here", i);
        projects.forEach((otherProject, index) => {
          if(project === otherProject){
            setFlip(index);
          }
        })
      })
    
      return () => {
        projects.forEach((project) => {
          project.removeEventListener("click", () => {});    
        })
      }
    
    })


  }, [setFlip])
  return (
    <div id="projects">    
      <h2 className="section-title">Projects</h2>  
      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 0 ? "flipped" : ""}`}>
          <img className="flip-card-front" src={soccerImg} alt="soccer-img"/>

          <div className="flip-card-back">
            <h2 className='section-title'>KickShop</h2>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 1 ? "flipped" : ""}`}>
          <img className="flip-card-front" src={gymImg} alt="gym-img"/>

          <div className="flip-card-back">
            <h2 className='section-title'>FitHub</h2>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 2 ? "flipped" : ""}`}>
          <img className="flip-card-front" src={soccerImg} alt="soccer-img"/>

          <div className="flip-card-back">
            <h2 className='section-title'>WordleLookAlike</h2>
          </div>      
        </div>
      </div>

      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 3 ? "flipped" : ""}`}>
          <img className="flip-card-front" src={marioImg} alt="mario-img"/>

          <div className="flip-card-back">
            <h2 className='section-title'>Super Mario Bros</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
