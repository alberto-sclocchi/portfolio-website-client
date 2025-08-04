import React, { useContext, useState } from 'react'
import coolEffect from '../../images/cool-effect.gif'
import MessageContext from './context/MessageContext.context'
import { motion } from "motion/react"

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
    <div id="message-me">
      <h2 className="section-title">Contact Me</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <motion.div 
          initial={{y: -20, opacity: 0}} 
          whileInView={{y:0 , opacity: 1}} 
          transition={{duration: 0.6}} 
          className="important-info"
          >
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First Name'/>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name'/>
          </motion.div>

          <motion.div 
          initial={{y: -20, opacity: 0}} 
          whileInView={{y:0 , opacity: 1}} 
          transition={{duration: 0.6, delay: 0.2}} 
          className="important-info email-number"
          >
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
            <input type="text" name="number" value={formData.number} onChange={handleChange}  placeholder='Phone Number'/>
          </motion.div>

          <motion.div 
          className="form-div"
          initial={{y: -20, opacity: 0}} 
          whileInView={{y:0 , opacity: 1}} 
          transition={{duration: 0.6, delay: 0.4}} 
          >
              <input type="text" name="subject" value={formData.subject} onChange={handleChange}  placeholder='Message Subject'/>
          </motion.div>

          <motion.div 
          initial={{y: -20, opacity: 0}} 
          whileInView={{y:0 , opacity: 1}} 
          transition={{duration: 0.6, delay: 0.6}} 
          className="form-div"
          >
              <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here... (e.g. Let's connect, collaborate, or just say hi!)"/>
          </motion.div>

          <div className='button-div'>
            <motion.button 
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}} 
            transition={{duration: 0.6, delay: 0.8}} 
            className='button-link'
            >
              Send
            </motion.button>
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
