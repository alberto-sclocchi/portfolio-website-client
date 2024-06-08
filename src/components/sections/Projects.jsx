import React from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <div className="section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-div">
        <div className="projects-img-div">
          <img className="proj-img" src={soccerImg} alt="soccer-img"/>
          <div>
            <Link className="github-img" to="https://github.com/alberto-sclocchi/project-soccer-app-api" target='_blank'><img src={github} alt="git-hub"/></Link>
            <Link className="website-link" to="https://project-soccer.onrender.com"  target='_blank'>Website</Link>
          </div>
        </div>
        <div className="projects-info">
          <h2 className='section-title'>KickShop</h2>
          <p>KickShop is a full-stack soccer e-commerce app that offers a seamless experience for users to set up their own stores, manage inventory, make purchases, and ensure secure authentication. KickShop is a MERN application that utilizes modern technologies, including Mongo DB, Express, React.js, Node.js, Javascript, CSS, etc. The application also incorporates the use of RESTful APIs, Google Maps APIs, and extra technologies such as Nodemailer, Cloudinary, and Express Session.</p>
          <div>
            <img className="tech-proj" src={nodeJS}  alt="node-icon"/>
            <img className="tech-proj" src={javaScript}  alt="javascript-icon"/>
            <img className="tech-proj"src={react} alt="react-icon"/>
            <img className="ex-proj"src={express}  alt="express-icon"/>
            <img className="tech-proj" src={mongoDB}  alt="mongoDB-icon" />
            <img className="tech-proj" src={html}  alt="html-icon"/>
            <img className="tech-proj" src={css}  alt="css-icon"/>
          </div>
        </div>
      </div>

      <div className="projects-div">
        <div className="projects-img-div">
          <img className="proj-img" src={gymImg} alt="gym-img"/>
          <div>
            <Link className="github-img" to="https://github.com/alberto-sclocchi/project-gym-app" target='_blank'><img src={github} alt="git-hub"/></Link>
            <Link className="website-link" to="https://project-gym-app-patient-wildflower-2606.fly.dev" target='_blank'>Website</Link>
          </div>
        </div>
        <div className="projects-info">
          <h2 className='section-title'>FitHub</h2>
          <p>FitHub allows user for easily authentication, to create custom workout routines, and to track progress with an intuitive interface. User can also craft personalized calendars for specific weeks effortlessly. FitHub is built with JavaScript, Express.js, MongoDB, and Mongoose, alongside tools like Cloudinary, Nodemailer, Express Session, and Axios for seamless functionality.</p>
          <div>
            <img className="tech-proj" src={nodeJS}  alt="node-icon"/>
            <img className="tech-proj" src={javaScript}  alt="javascript-icon"/>
            <img className="ex-proj"src={express}  alt="express-icon"/>
            <img className="tech-proj" src={mongoDB}  alt="mongoDB-icon" />
            <img className="tech-proj" src={html}  alt="html-icon"/>
            <img className="tech-proj" src={css}  alt="css-icon"/>
            <img className="tech-proj" src={handlebars}  alt="handlebars-icon"/>
          </div>
        </div>
      </div>

      <div className="projects-div">
        <div className="projects-img-div">
          <img className="proj-img" src={marioImg} alt="mario-img"/>
          <div>
            <Link className="github-img" to="https://github.com/alberto-sclocchi/project-mario-game" target='_blank'><img src={github} alt="git-hub"/></Link>
            <Link className="website-link" to="https://alberto-sclocchi.github.io/project-mario-game/" target='_blank'>Website</Link>
          </div>
        </div>
        <div className="projects-info">
          <h2 className='section-title'>Super Mario Bros</h2>
          <p>The player embarks on an adventure where you control Mario's jumps to evade the speeding mushroom and advance levels. The user jumps his way through increasing levels of difficulty as the mushroom picks up speed with each stage. The game is a DOM based application built using JavaScript, HTML, and CSS.</p>
          <div>
            <img className="tech-proj" src={javaScript}  alt="javascript-icon"/>
            <img className="tech-proj" src={html}  alt="html-icon"/>
            <img className="tech-proj" src={css}  alt="css-icon"/>
          </div>
        </div>
      </div>

    </div>
  )
}
