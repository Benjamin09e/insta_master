import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook } from "react-icons/ai";
import "../authentification.css"
import "../../../components/footer/Footer.css"

const Login = ({setAuth}) => {
  return (
    
    <div className="container">
      <div className='container-card'>
        <div className="card-content">
            <div className='block'>
                <h1>Instagram</h1>
            </div>

            <form action="#" className="signup">
                  <div className="field">
                     <input type="text" placeholder="Num. téléphone, nom d'utilisateur ou e-mail" required />
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field btn">
                     <input className="btn-layer" type="submit" value="Se Connecter" />
                  </div>
            </form>
            <hr />
            <div className="space-btn">
              <NavLink  className='nav-link' to="#">
                <p className='sp-text'> <AiFillFacebook/> Se connecter avec Facebook</p>
              </NavLink>
              <NavLink  className='nav-link' to="/forgetpass"><p className='style-link'>Mot de passe oublié ?</p></NavLink>
            </div>
        </div>
      </div>
      <div className='container-card-child'>
        <div className="card-content">
          <p>Vous n'avez pas de compte ? <NavLink className="sp-color" to="/register">Inscrivez-vous</NavLink> </p>
        </div>
      </div>  
    </div>
  )
}

export default Login