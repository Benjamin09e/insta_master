import React from 'react'
import "./user.css";
import user from "../../assets/images/profil.jpg";

const User = () => {
  return (
    
    <div className='user'>
      <div className='user_profil'>
        <img src={user} className="img_profil" />

      </div>
      <div className='user_name'>
        <p className='p_name'>Idrissa_TOURE</p>
        <p className='p_name'>Vous suit</p>
      </div>
      <div className='user_follow'>
        <p>Suivez-Moi</p>
      </div>
    </div>
  
  
  )
}

export default User