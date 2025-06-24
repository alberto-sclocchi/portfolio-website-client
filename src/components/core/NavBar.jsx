import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavBar() {

  return (
    <nav>
      <Link className="nav-link" to="#about-me">About Me</Link>
      <Link className="nav-link" to="#projects">Projects</Link>
      <Link className="nav-link" to="#contact-me">Contact Me</Link>
      <Link className="nav-link" to="#message-me">Message Me</Link>
    </nav>
  )
}
