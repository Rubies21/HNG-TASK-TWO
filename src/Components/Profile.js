import React from 'react'
import profileImg from "./profile__img.svg"
import "./Profile.css"

const Profile = () => {
  return (

      <div id="container">
        <div className="profile__img">
          <img src={profileImg} alt="" />
        </div>
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
