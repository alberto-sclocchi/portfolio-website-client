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
    <div className="section" id="message-me">
      <h2 className="section-title">Contact Me</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="important-info">
            <div>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First Name'/>
            </div>

            <div>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name'/>
            </div>
          </div>

          <div className="important-info">
            <div>
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
            </div>

            <div>
              <input type="text" name="number" value={formData.number} onChange={handleChange}  placeholder='Phone Number'/>
            </div>
          </div>

          <div className="form-div">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange}  placeholder='Message Subject'/>
          </div>

          <div className="form-div">
              <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here... (e.g. Let's connect, collaborate, or just say hi!)"/>
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
