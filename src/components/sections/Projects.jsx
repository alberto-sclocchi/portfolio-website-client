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
import flipIcon from '../../images/flip-icon.png'
import { HashLink as Link } from 'react-router-hash-link'

export default function Projects() {
  const [ flip, setFlip ] = useState(null)

  useEffect(() => {
    const projects = document.querySelectorAll(".flip-button");

    projects.forEach((project, i) => {
      console.log("here clicking", i)
      project.addEventListener("click", () => {
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
      {/* <h2 className='section-title'>{flip}</h2> */}
      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 0 ? "flipped" : flip === 1 ? "" : ""}`}>
          <div className="flip-card-front" style={{background:`url(${soccerImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <div>
              <Link to="#contact-me" className='button-link website-link'>website</Link>
              <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            </div>
            <Link to="https://github.com/alberto-sclocchi/project-soccer-app-api" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
          </div>

          <div className="flip-card-back">
            <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            <h2 className='section-title'>Super Mario Bros</h2>
          </div>
       </div>
      </div>

      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 2 ? "flipped" : flip === 3 ? "" : ""}`}>
          <div className="flip-card-front" style={{background:`url(${marioImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <div>
              <Link to="#contact-me" className='button-link website-link'>website</Link>
              <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            </div>
            <Link to="https://github.com/alberto-sclocchi/project-mario-game" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
          </div>

          <div className="flip-card-back">
            <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            <h2 className='section-title'>Super Mario Bros</h2>
          </div>
       </div>
      </div>

      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 4 ? "flipped" : flip === 5 ? "" : ""}`}>
          <div className="flip-card-front" style={{background:`url(${gymImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <div>
              <Link to="#contact-me" className='button-link website-link'>website</Link>
              <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            </div>
            <Link to="https://github.com/alberto-sclocchi/project-gym-app" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
          </div>

          <div className="flip-card-back">
            <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            <h2 className='section-title'>FitHub</h2>
          </div>
       </div>
      </div>

      <div className="flip-card">
        <div className={`flip-card-inner ${flip === 6 ? "flipped" : flip === 7 ? "" : ""}`}>
          <div className="flip-card-front" style={{background:`url(${gymImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <div>
              <Link to="#contact-me" className='button-link website-link'>website</Link>
              <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            </div>
            <Link to="#contact-me"><img src={github} alt="github-icon" className='github-icon'/></Link>
          </div>

          <div className="flip-card-back">
            <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
            <h2 className='section-title'>Super Mario Bros</h2>
          </div>
       </div>
      </div>
    </div>
  )
}
