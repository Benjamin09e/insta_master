import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../authentification.css"
import "../../../components/footer/Footer.css"
import axios from 'axios'

const Register = () => {
  const [user, setUser] = useState({
   
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/insta-api/users/register",
        user
      );
      console.log(response);
    } catch (err) {
      alert("Wrong credentials!!!");
    }
  };

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
              <input type="text" placeholder="Numéro de mobile ou e-mail" name="email"
                onChange={handleChange} required />
            </div>
            <div className="field">
              <input type="text" placeholder="Votre nom" name="nom"
                onChange={handleChange} required />
            </div>
            <div className="field">
              <input type="text" placeholder="Votre prenom" name="prenom"
                onChange={handleChange} required />
            </div>
            <div className="field">
              <input type="password" placeholder="Mot de passe" name="mot_de_passe"
                onChange={handleChange} required />
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
                <button className="btn-layer" onClick={handleSubmit}>S'inscrire</button>
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