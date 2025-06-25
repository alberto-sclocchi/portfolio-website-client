import React from 'react'
import AboutMe from '../sections/AboutMe'
import Technologies from '../sections/Technologies'
import Projects from '../sections/Projects'
import MessageForm from '../message/MessageForm'

export default function PortfolioPage() {
  return (
    <div className="portfolio">
      <AboutMe />
      <Technologies />
      <Projects />
      <MessageForm />
    </div>
  )
}
