import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavBar() {
  return (
    <nav>
        <Link to="#section-1">About me</Link>
        <Link to="#section-2">Socials</Link>
        <Link to="#section-3">Skills</Link>
        <Link to="#section-4">Projects</Link>
        <Link to="#section-5">Contact me</Link>
    </nav>
  )
}
