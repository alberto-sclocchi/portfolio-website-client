import React from 'react'
import { motion } from "motion/react"   
import instagram from '../../images/instagram-icon.png'
import linkedIn from '../../images/linkedin-icon.png'
import gitHub from '../../images/github-icon.png'
import gmail from '../../images/gmail-icon.png'
import { Link } from 'react-router-dom'

export default function ContactInfo({ isDarkMode }) {
  return (
    <div id="contact-info" className={`${isDarkMode ? "dark-mode-section-3 dark-mode-background" : "light-mode-section-3 light-mode-background"}`}>
        <motion.h2 
        initial={{x: -50, opacity: 0}}
        whileInView={{x:0 , opacity: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        className='section-title' 
        >
            Contact Information
        </motion.h2>
        <motion.p
        initial={{x: 50, opacity: 0}}
        whileInView={{x:0 , opacity: 1}}
        transition={{duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100}}
        >
            Want to <span style={{color:"#157add", fontWeight:"900"}}>collaborate, network, or share ideas</span>? I’d love to hear from you!
        </motion.p>
        <motion.ul
        initial={{y: 30, opacity: 0}}
        whileInView={{y:0 , opacity: 1}}
        transition={{duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100}} 
        >
            <li className={`${isDarkMode ? "dark-mode-section-3" : "light-mode-section-3"}`}><span style={{color:"#157add", fontWeight:"900"}}>Phone: </span> +1 (786) 538-1963</li>
            <li className={`${isDarkMode ? "dark-mode-section-3" : "light-mode-section-3"}`}><span style={{color:"#157add", fontWeight:"900"}}>Email: </span> <a dark-mode={`${isDarkMode}`} href="mailto:albe.sclocchi@gmail.com">albe.sclocchi@gmail.com</a></li>
        </motion.ul>
    </div>
  )
}
