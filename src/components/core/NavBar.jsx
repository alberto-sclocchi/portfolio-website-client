import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavBar() {

  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        <Link className="nav-link" to="#about-me">About Me</Link>
        <Link className="nav-link" to="#projects">Projects</Link>
        <Link className="nav-link" to="#message-me">Message Me</Link>
        <div className="navbar-opener" onClick={handleClick}>menu</div>
      </nav>
       {isOpen && (
        <div   className={`navbar-overlay ${isOpen && 'opening'}`}>
          <div className="navbar-overlay-content">
            <button className="close-btn" onClick={handleClick}>X</button>
            <div>
              <Link className="nav-overlay-link" to="#about-me" onClick={handleClick}>About Me</Link>
              <Link className="nav-overlay-link" to="#projects" onClick={handleClick}>Projects</Link>
              <Link className="nav-overlay-link" to="#message-me" onClick={handleClick}>Message Me</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
