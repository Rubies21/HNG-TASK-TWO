import React from 'react'
import "./Contact.css"
import { useState } from 'react'


const Contact = () => {
  const [check, setCheck] = useState(false)

  return (
    <div>
      <div className="container">
        <h1>Contact Me</h1>
        <p id="hello">Hi there, contact me to ask me about anything you have in mind.</p>

        <form>
          <div className="names">

            <div className="fields">
              <label>
              First Name</label>
              <input type="text" name='firstName' id='first_name' placeholder='Enter your first name'/>
            </div>
            <div className="second">
               <div className="fields">
              <label>
              Last Name </label>
              <input type="text" name='lastName' id='last_name' placeholder='Enter your last name' />
            </div>
          </div>
        </div>

          
          <div className="email">
              <label>Email</label>
              <input type="email" name='email' id='email' placeholder='yourname@email.com' />
            </div>

          <div className="textArea">
            <label>Message</label>
            <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>    
            {/* <p id="hint">Please enter text</p>    */}
          </div>

          <div className="checkbox">
            <input type="checkbox" id="checkbox" onChange={() => setCheck(!check)}/>
            <label id="checkbox_text">You agree to providing your data to Jadesola who may contact you</label>
          </div>

          <button id="btn__submit" className={`${!check && "active"}`} >Send message</button>

         </form>
         
        </div>
    </div>
  )
}

export default Contact
