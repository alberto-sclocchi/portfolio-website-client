import React from 'react'
import coolEffect from '../../images/cool-effect.gif'

export default function MessageForm() {
  return (
    <div className="section" id="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <div>
        <form>
          <div className="important-info">
            <div>
              <label>Email</label>
              <input className="email" type="text" name="email"/>
            </div>

            <div>
              <label>Phone Number</label>
              <input type="text" name="number"/>
            </div>
          </div>

          <div className="form-div">
              <label>Message Subject</label>
              <input type="text" name="subject"/>
          </div>

          <div className="form-div">
              <label>Message Subject</label>
              <textarea type="text" name="message"/>
          </div>
          <button className='website-link'>Send</button>
        </form>
        <div>
          <img src={coolEffect} alt="effect-message-page"/>
        </div>
      </div>
    </div>
  )
}
