import React from 'react'
import { Form } from "react-router-dom";
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1>Contact Me</h1>
        <p id="hello">Hi there, contact me to ask me about anything you have in mind.</p>

        <form>
          <div className="names">
          <div className="fname">
            <label>
            First Name
            <input type="text" name='firstName' id='first_name' placeholder='First Name'/>
            </label>
            </div>


            <div className="lname">
            <label>
            Last Name
            <input type="text" name='lastName' id='last_name' placeholder='Last Name' />
            </label>
          </div>
          </div>
          
         </form>
        </div>


      

    </div>
  )
}

export default Contact
