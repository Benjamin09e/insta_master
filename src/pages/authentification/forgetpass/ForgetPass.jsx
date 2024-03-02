import React from 'react'
import { NavLink } from 'react-router-dom'
import { TfiLock } from "react-icons/tfi";
import "../authentification.css"
import "../../../components/footer/Footer.css"

const ForgetPass = () => {
  return (

    <div className="container">
      <div className='container-card'>
        <div className="card-content">
            <div className='block'>
              <TfiLock className='tf-height'/>
                <p>Problèmes de connexion</p>
                <br />
                <p>Entrez votre adresse e-mail, votre numéro de téléphone 
                    ou votre nom d’utilisateur, et nous vous enverrons un 
                    lien pour récupérer votre compte.
                </p>    
            </div>

            <form action="#" className="signup">
                  <div className="field">
                     <input type="text" placeholder="E-mail, telephone ou nom d'ulitisateur" required />
                  </div>
                  <div className="field btn">
                    <NavLink to="/forgetpass">
                      <input className="btn-layer" type="submit" value="Envoyer un lien ou nom d'utilisateur" />
                    </NavLink>      
                  </div>
            </form>
          
            <div className="space-btn">
              <NavLink  className='nav-link' to="/forgetpass"><p className='style-link'>Vous ne parvenez pas à reintiliser votre mot de passe ?</p></NavLink>
            </div>
            <div className="space-btn">
            <hr />
            <NavLink  className='nav-link' to="/register"><p className='style-link'>Créer un compte ?</p></NavLink>
          </div>
        </div>
      </div>
      <div id='container-card-child'>
        <div className="card-content">
          <p>Vous n'avez pas de compte ? <NavLink className="sp-color" to="/">Connecter-Vous</NavLink> </p>
        </div>
      </div>  
    </div>
  )
}

export default ForgetPass