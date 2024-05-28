import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavBar() {

  return (
    <nav>
      <Link className="nav-link" to="#section-1">About Me</Link>
      <Link className="nav-link" to="#section-2">Socials</Link>
      <Link className="nav-link" to="#section-3">Skills</Link>
      <Link className="nav-link" to="#section-4">Projects</Link>
      <Link className="nav-link" to="#section-5">Contact Me</Link>
    </nav>
  )
}
