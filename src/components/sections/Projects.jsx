import React, { useEffect, useState } from 'react'
import github from '../../images/git-hub-proj.png'
import soccerImg from '../../images/soccer-img.jpeg'
import gymImg from '../../images/gym-img.jpeg'
import marioImg from '../../images/mario-bros.png'
import flipIcon from '../../images/flip-icon.png'
import { HashLink as Link } from 'react-router-hash-link'
import wordleImg from '../../images/wordle-img.png'

export default function Projects() {
  const [ flip, setFlip ] = useState(null)

  useEffect(() => {
    const projects = document.querySelectorAll(".flip-icon");

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
      <div className='projects-div'>
        <div className="flip-card">
          <div className={`flip-card-inner ${flip === 0 ? "flipped" : flip === 1 ? "" : ""}`}>
            <div className="flip-card-front" style={{background:`url(${soccerImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
              <div>
                <Link className='button-link website-link' to="https://project-soccer.onrender.com"  target='_blank'>website</Link>
                <img src={flipIcon} alt="flip-icon" className='flip-icon'/>
              </div>
              <Link to="https://github.com/alberto-sclocchi/project-soccer-app-api" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
            </div>

            <div className="flip-card-back">
              <div>
                <h2 className='section-title'>KickShop</h2>
                <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
              </div>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>CRUD</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Nodemailer</li>
                <li>Axios</li>
                <li>RESTful API</li>
                <li>Cloudinary</li>
              </ul>
            </div>
        </div>
        </div>

        <div className="flip-card">
          <div className={`flip-card-inner ${flip === 2 ? "flipped" : flip === 3 ? "" : ""}`}>
            <div className="flip-card-front" style={{background:`url(${gymImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
              <div>
                <Link className='button-link website-link' to="https://project-gym-app-patient-wildflower-2606.fly.dev" target='_blank'>website</Link>
                <img src={flipIcon} alt="flip-icon" className='flip-icon'/>
              </div>
              <Link to="https://github.com/alberto-sclocchi/project-gym-app" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
            </div>

            <div className="flip-card-back">
              <div>
                <h2 className='section-title'>FitHub</h2>
                <img src={flipIcon} alt="flip-icon" className='flip-icon'/>
              </div>
              <ul>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Express Session</li>
                <li>Axios</li>
                <li>Handlebars</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Nodemailer</li>
                <li>Cloudinary</li>
              </ul>
            </div>
        </div>
        </div>

        <div className="flip-card">
          <div className={`flip-card-inner ${flip === 4 ? "flipped" : flip === 5 ? "" : ""}`}>
            <div className="flip-card-front" style={{background:`url(${marioImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
              <div>
                <Link className='button-link website-link' to="https://alberto-sclocchi.github.io/project-mario-game/" target='_blank'>website</Link>
                <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
              </div>
              <Link to="https://github.com/alberto-sclocchi/project-mario-game" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
            </div>

            <div className="flip-card-back">
              <div>
                <h2 className='section-title'>Super Mario Bros</h2>
                <img src={flipIcon} alt="flip-icon" className='flip-icon'/>
              </div>
              <ul>
                <li>DOM Manipulation</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Object Oriented Programming (OOB)</li>
              </ul>
            </div>
        </div>
        </div>

        <div className="flip-card">
          <div className={`flip-card-inner ${flip === 6 ? "flipped" : flip === 7 ? "" : ""}`}>
              <div className="flip-card-front" style={{background:`url(${wordleImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
              <div>
                <Link className='button-link website-link' to="https://github.com/alberto-sclocchi/wordle-game" target='_blank'>website</Link>
                <span className="flip-button"><img src={flipIcon} alt="flip-icon" className='flip-icon'/></span>
              </div>
              <Link to="https://github.com/alberto-sclocchi/wordle-game" target="_blank"><img src={github} alt="github-icon" className='github-icon'/></Link>
            </div>

            <div className="flip-card-back">
              <div>
                <h2 className='section-title'>WordleLookAlike</h2>
                <img src={flipIcon} alt="flip-icon" className='flip-icon'/>
              </div>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
