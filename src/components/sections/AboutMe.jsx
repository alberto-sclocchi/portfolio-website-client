import React from 'react'
import profileImg from '../../images/alberto-sclocchi.jpeg'
import verified from '../../images/verified.png'

export default function AboutMe() {
  return (
    <div className="section" id="section-1">
      <div className="description">
        <h2>About Me</h2>
        <p>Hello, my name is Alberto Sclocchi <span>👋</span>. I am a first-year college student 🏫, passionate about programming and web development. I moved to the USA, specifically Miami, approximately 5 years ago from Italy <span>🇮🇹</span>. After graduating from high school last year, I decided to embark on a part-time 24-week web development bootcamp through <span className="phrases">Ironhack</span> <span>👨🏻‍💻</span>, while pursuing my studies in Computer Engineering <span>🖥️</span> at <span className="phrases">Miami Dade Honors</span>. This bootcamp has been instrumental in developing my skills, equipping me with the ability to build full-stack applications from scratch. From mastering <span className="phrases">React</span>, <span className="phrases">Javascript</span>, <span className="phrases">Express</span>, <span className="phrases">HTML</span>, and <span className="phrases">MongoDB</span>, I have learned the intricacies of both front and back-end development. I have currently mastered 3 coding languages, including Java, Javascript, C, and also a little of Python and C++. Along the past year, I privately tutored C++ to middle school students <span>📗</span> and I also volunteered as a web developer and designer at a local non-profit organization, Urban Paradise Guild 🌱. During this project, I reviewed and corrected minor styling errors across approximately 10 pages of the website, ensuring optimal visual representation and user experience.</p>
      </div>
      <div className="profile-img">
        <img src={profileImg} alt="alberto-sclocchi-img"/>
        <h3>Alberto Sclocchi <img src={verified} alt="verified"/></h3>
      </div>
    </div>
  )
}
