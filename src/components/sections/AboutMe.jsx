import React from 'react'
import profileImg from '../../images/alberto-sclocchi.jpeg'
import verified from '../../images/verified.png'
import DownloadResume from './DownloadResume'
import locationIcon from './../../images/location.png'

export default function AboutMe() {
  return (
    <div id="about-me">
      <div className="description-div">
        <div className='about-me-title'>
          <h2 className="section-title">About Me</h2>
          <span className='span'><img src={locationIcon} alt="location-icon" />MIAMI, FL</span>
          <span>FULL-STACK DEVELOPER</span>
          <span><span id="hello-emoji">👋</span></span>
        </div>
        <p> I am a third-year university student 🏫, passionate about programming and web development. I moved to the USA, specifically Miami, approximately 5 years ago from Italy <span>🇮🇹</span>. After graduating from high school last year, I decided to embark on a part-time 24-week web development bootcamp through <span className="phrases">Ironhack</span> <span>👨🏻‍💻</span>, while pursuing my studies in Computer Engineering <span>🖥️</span> at <span className="phrases">Miami Dade Honors</span>. This bootcamp has been instrumental in developing my skills, equipping me with the ability to build full-stack applications from scratch.</p>
        <p>Along the past year, I privately tutored C++ to middle school students <span>📗</span>, volunteered as a web developer and designer at <span className='phrases'>Urban Paradise Guild</span>, a local non-profit organization 🌱, and worked as a Tool Web Developer at <span className="phrases">John Bean Technologies</span> <span>🦾</span>.</p>
      </div>
      <div className="profile-img">
        <img src={profileImg} alt="alberto-sclocchi-img"/>
        <div>
          <h3>Alberto Sclocchi <img src={verified} alt="verified"/></h3>
          <DownloadResume />
        </div>
      </div>
    </div>
  )
}
