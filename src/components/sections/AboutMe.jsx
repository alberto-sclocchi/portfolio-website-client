import profileImg from '../../images/alberto-sclocchi.jpeg'
// import verified from '../../images/verified.png'
import DownloadResume from './DownloadResume'
import locationIcon from './../../images/location.png'
import { motion } from "motion/react"

export default function AboutMe({ isDarkMode}) {
  return (
    <div id="about-me">
      <div className={`description-div ${isDarkMode ? "dark-mode-section-1" : "light-mode-section-1"}`}>
        <div className='about-me-title'>
          <motion.h2 
          initial={{y: -20, opacity: 0}} 
          whileInView={{y:0 , opacity: 1}} 
          transition={{duration: 0.6, delay: 0.2}} 
          className="section-title">
            About Me
          </motion.h2>
          <motion.span 
          className={`${isDarkMode ? "dark-mode-section-2" : "light-mode-section-2"}`}
          initial={{scale: 0, opacity: 0}} 
          whileInView={{scale: 1, opacity: 1}} 
          transition={{duration: 0.6, delay: 0.4}}
          >
            <img src={locationIcon} alt="location-icon" />
              MIAMI, FL
          </motion.span>
          <motion.span
          className={`${isDarkMode ? "dark-mode-section-2" : "light-mode-section-2"}`}
          initial={{scale: 0, opacity: 0}} 
          whileInView={{scale: 1, opacity: 1}} 
          transition={{duration: 0.8, delay: 0.6}}
          >
            FULL-STACK DEVELOPER
          </motion.span>
          <motion.span
          className={`${isDarkMode ? "dark-mode-section-2" : "light-mode-section-2"}`}
          initial={{scale: 0, opacity: 0}} 
          whileInView={{scale: 1, opacity: 1}} 
          transition={{duration: 0.6, delay: 0.8}}
          >
            <span id="hello-emoji">👋</span>
          </motion.span>
        </div>
        <p> I am a third-year university student 🏫, passionate about programming and web development. I moved to the USA, specifically Miami, approximately 5 years ago from Italy <span>🇮🇹</span>. After graduating from high school last year, I decided to embark on a part-time 24-week web development bootcamp through <span className="phrases">Ironhack</span> <span>👨🏻‍💻</span>, while pursuing my studies in Computer Engineering <span>🖥️</span> at <span className="phrases">Miami Dade Honors</span>. This bootcamp has been instrumental in developing my skills, equipping me with the ability to build full-stack applications from scratch.</p>
        <p>Along the past year, I privately tutored C++ to middle school students <span>📗</span>, volunteered as a web developer and designer at <span className='phrases'>Urban Paradise Guild</span>, a local non-profit organization 🌱, and worked as a Tool Web Developer at <span className="phrases">John Bean Technologies</span> <span>🦾</span>.</p>
      </div>
      <div className="profile-img">
        <motion.img 
        src={profileImg} 
        alt="alberto-sclocchi-img"
        initial={{scale: 0, opacity: 0}} 
        whileInView={{scale: 1, opacity: 1}} 
        transition={{duration: 0.8, type: 'spring', stiffness: 100}} 
        />
        <div>
          <motion.h3
          initial={{y: -20, opacity: 0}} 
          whileInView={{y:0 , opacity: 1}} 
          transition={{duration: 0.8, delay: 0.2}} 
          className="section-title">
            Alberto Sclocchi 
            {/* <img src={verified} alt="verified"/> */}
          </motion.h3>
          <DownloadResume />
        </div>
      </div>
    </div>
  )
}
