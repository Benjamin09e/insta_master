import React from 'react'
import './editProfil.css'
import { Link, NavLink } from "react-router-dom";
import user from "../../assets/images/profil.jpg";

const EditProfil = () => {
  return (
    <div className="container_profil">
      <div className="aside">
        <h3>Paramètres</h3>
        <NavLink to="/" className="parametre_links">
          Modifier le profil
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Préférences linguistiques
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Changer de mot de passe
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Application et sites web
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Notifications par e-mail
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Gérer les contacts
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Sécurité et confidentialité
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Publicités
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Supervision
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Activité de connexion
        </NavLink>
        <NavLink to="/" className="parametre_links">
          E-mail d'instagram
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Aide
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Abonnements
        </NavLink>
        <NavLink to="/" className="parametre_links">
          Passer à un compte professionnel
        </NavLink>
      </div>
      <div className="info_profil">
        <div className="info_title">
          <div className="photos_perso">
            <div className="img_perso">
              <img src={user} alt=""  />
            </div>
            <div className="perso_name" >
              <p>Benjamin89</p>
              <Link to="/">Modifier la photo de profil</Link>
            </div>
          </div>
          <div className="nom">
            <div className="name_compl">
              <p>Nom</p>
            </div>
            <div className="names_input">
              <input type="text" className='width_input' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempora maiores.</p>
            </div>
          </div>
          <div className="user_name">
            <div className="usercomplet_name">
              <p>Nom d'utilisateur</p>
            </div>
            <div className="usercomplet_input">
              <input type="text" className='width_input'  />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempora maiores.</p>
            </div>
          </div>
          <div className="site">
            <div className="site_name" >
              <p>Site web</p>
            </div>
            <div className="site_input">
              <input type="text" className='width_input'  />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempora maiores.</p>
            </div>
          </div>
          <div className="bio">
            <div className="bio_name">
              <p>Bio</p>
            </div>
            <div className="bio_input">
              <input type="text" className='width_input'  />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempora maiores.</p>
            </div>
          </div>
          <div className="adresses">
            <div className="adresses_name">
              <p>Adresse e-mail</p>
            </div>
            <div className="adresses_input">
              <input type="text"  className='width_input' />
            </div>
          </div>
          <div className="numberphone">
            <div className="numberphone_tel">
              <p>Numéro de téléphone</p>
            </div>
            <div className="numberphone_input">
              <input type="text" className='width_input'  />
            </div>
          </div>
          <div className="genre">
            <div className="genre_name">
              <p>Genre</p>
            </div>
            <div className="genre_input">
              <input type="text" className='width_input' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfil