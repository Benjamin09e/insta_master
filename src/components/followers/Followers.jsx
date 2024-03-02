import React from 'react'
import './followers.css'
import { Link } from 'react-router-dom'

const Followers = ({ onFollowModal }) => {
  return (
    <>
      <div className="content_followers">
        <div className="container_followers">
          <Link to="/">Changer de mot de passe</Link>
          <Link to="/">Code QR</Link>
          <Link to="/">Application et sites webs</Link>
          <Link to="/">Modifications</Link>
          <Link to="/">Confidentidentialité et sécurité</Link>
          <button className='' onClick={onFollowModal}>Annuler</button>
        </div>
      </div>

    </>
  )
}

export default Followers