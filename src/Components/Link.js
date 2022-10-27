import React, { useState } from 'react'
import "./Link.css"

const Link = (props) => {
  return (
    <div className = "button-container">
      <button>{ props.field }</button>
    </div>
  )
}

export default Link
