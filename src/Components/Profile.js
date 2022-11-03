import React from 'react'
import profileImg from "../assets/profile__img.svg"
import "./Profile.css"
import imgHover from "../assets/hover.svg"
import imgFocus from "../assets/focused.svg" 

const Profile = () => {
  return (

      <div id="container">
        <div className="profile__img">
          <img src={profileImg} alt="" />
          
        </div>
        <img src={imgFocus} className ="imageFocus"/>
        <img src={imgHover} className ="imageHover"/>
        


        <div id="twitter">
          <p>AdeagboJadesola</p>
        </div>
        <div className="slack">
          Rubies
        </div>

      </div>
      

  )
}

export default Profile
