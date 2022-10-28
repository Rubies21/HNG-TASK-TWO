import React, { useState } from 'react'
import "./Link.css"

const Link = (props) => {
  return (
    <div className = "button-container">
        <div className="a-button">
          <a href={props.link} id= {props.id} target="_blank">{ props.field }</a>
        </div>
        
      
    </div>
  )
}

export default Link
