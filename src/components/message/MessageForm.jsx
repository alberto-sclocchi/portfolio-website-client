import React, { useContext, useState } from 'react'
import coolEffect from '../../images/cool-effect.gif'
import MessageContext from './context/MessageContext.context'

export default function MessageForm() {
  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  })

  const { sendMessage, result } = useContext(MessageContext)

  const handleChange = (event) => {
    setFormData((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    console.log(formData);
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    sendMessage(formData);

    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        subject: "",
        message: ""
      })
    }, 200)
  }

  return (
    <div className="section" id="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="important-info">
            <div>
              <label>First Name</label>
              <input  className="name" type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>

            <div>
              <label>Last Name</label>
              <input className="name" type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>
          </div>

          <div className="important-info">
            <div>
              <label>Email</label>
              <input className="email" type="text" name="email" value={formData.email} onChange={handleChange}/>
            </div>

            <div>
              <label>Phone Number</label>
              <input type="text" name="number" value={formData.number} onChange={handleChange}/>
            </div>
          </div>

          <div className="form-div">
              <label>Message Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange}/>
          </div>

          <div className="form-div">
              <label>Message</label>
              <textarea type="text" name="message" value={formData.message} onChange={handleChange}/>
          </div>

          <div className='button-div'>
            <button className='website-link'>Send</button>
            {!!result && <p className='result'>{result}</p>}
          </div>
        </form>
        <div>
          <img src={coolEffect} alt="effect-message-page"/>
        </div>
      </div>
    </div>
  )
}
