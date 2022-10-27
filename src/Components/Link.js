import React, { useState } from 'react'
import "./Link.css"

const Link = (props) => {
  return (
    <div className = "button-container">
      <button id= {props.id}> 
        <a href={props.link}>{ props.field }</a>
      </button>
    </div>
  )
}

export default Link
