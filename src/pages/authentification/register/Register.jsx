import React from 'react'
import { NavLink } from 'react-router-dom'
import "../authentification.css"
import "../../../components/footer/Footer.css"

const Register = () => {
  return (
    <div className="container">
      <div className='container-card'>
        <div className="card-content">
            <div className='block'>
                <h1>Instagram</h1>
                <p>Inscrivez-vous pour voir les photos 
                  et vidéos de vos amis.
                </p>
            </div>
            <div className="field btn">
                <NavLink to="#">
                  <input className="btn-layer" type="submit" value="Se connecter avec Facebook" />
                </NavLink>   
            </div>
            <hr />
            <form action="#" className="signup">
                    <div className="field">
                      <input type="text" placeholder="Numéro de mobile ou e-mail" required />
                    </div>
                    <div className="field">
                      <input type="text" placeholder="Nom complet" required />
                    </div>
                    <div className="field">
                      <input type="text" placeholder="Nom d'utilisateur" required />
                    </div>
                    <div className="field">
                      <input type="text" placeholder="Mot de passe" required />
                    </div>
              </form>
         
              <div className="space-btn">
                    <p>Les personnes qui utilisent notre service ont pu importer vos 
                      coordonnées sur Instagram. En savoir plus
                    </p>
                  <br />
                    <p>En vous inscrivant, vous acceptez nos Conditions générales. 
                      Découvrez comment nous recueillons, utilisons et partageons 
                      vos données en lisant notre Politique de confidentialité et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies.
                    </p>
                <div className="field btn">
                    <NavLink to="#">
                      <input className="btn-layer" type="submit" value="Suivant" />
                    </NavLink>
                          
                </div>
            </div>
        </div>
      </div>

      <div className='container-card-child'>
        <div className="card-content"> 
        <p>Vous n'avez pas de compte ? <NavLink className="sp-color" to="/">Connectez-vous</NavLink> </p>
        </div>
      </div>  
    </div>
  )
}

export default Register