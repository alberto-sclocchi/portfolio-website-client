import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../images/instagram-icon.png'
import linkedIn from '../../images/linkedin-icon.png'
import gitHub from '../../images/github-icon.png'
import gmail from '../../images/gmail-icon.png'
import phone from '../../images/phone-icon.png'

export default function ContactMe() {
  return (
    <div className="section" id="socials">
      <div className="social-icon-div">
        <Link className="social-icon" to="https://www.instagram.com/_albe.s_/" target="_blank"><img src={instagram} alt="instagram"/></Link>
        <Link className="social-icon" to="https://www.linkedin.com/in/alberto-sclocchi/" target="_blank"><img src={linkedIn} alt="linkedIn"/></Link>
        <Link className="social-icon" to="https://github.com/alberto-sclocchi" target="_blank"><img src={gitHub} alt="github"/></Link>
        <Link className="social-icon" to="mailto:albe.sclocchi@gmail.com"><img src={gmail} alt="gmail"/></Link>
      </div>
      <div>
        <img className="phone-img" src={phone} alt="phone-icon"/>
        <p>+1 (786) 538-1963</p>
      </div>
    </div>
  )
}
