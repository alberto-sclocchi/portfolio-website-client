import React from 'react'
import AboutMe from '../sections/AboutMe'
import Technologies from '../sections/Technologies'
import Projects from '../sections/Projects'
import MessageForm from '../message/MessageForm'

export default function PortfolioPage({ isDarkMode }) {
  return (
    <div className={`portfolio ${isDarkMode ? "dark-mode-section-2" : "light-mode-section-2"}`}>
      <AboutMe  isDarkMode={isDarkMode}/>
      <Technologies isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <MessageForm isDarkMode={isDarkMode}/>
    </div>
  )
}
