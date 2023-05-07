import React from "react";
import "./profil.css";
import user from "../../assets/images/profil.jpg";
import user2 from "../../assets/images/profil2.jpg";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Profil = () => {
  return (
    <div className="profile_containte">
      <div className="profile_user">
        <div className="profile_img">
          <img src={user} alt="" className="profile_user" />
        </div>
        <div className="profile_text">
          <div>
            <p>@useur</p>
          </div>
          <div>
            <p>23 Publication</p>
          </div>
          <div>
            <p>Maud</p>
          </div>
          <div>
            <p>Blog personnel</p>
          </div>
          <div>
            <p>Entrepreneur</p>
          </div>
          <div>
            <p>Maudmajorieo@gmail.com</p>
          </div>
          <div>
            <p>La vie selon Jeremie 29:11</p>
          </div>
        </div>
        <div className="profile_text">
          <button>Suivre en retout</button>
          <div>
            <p>750 Followers</p>
          </div>
        </div>
        <div className="profile_text">
          <button>Contact</button>
          <div>
            <p>934 Suivi(e)s</p>
          </div>
        </div>
        <div className="profile_text">
          <button>+</button>
        </div>
        <div className="profile_text">
          <button>...</button>
        </div>
      </div>
      <div className="profile_story">
        <div className="img_story">
          <img src={user} alt="" />
          <p>@name</p>
        </div>
        <div className="img_story">
          <img src={user2} alt="" />
          <p>@name</p>
        </div>
      </div>
      <div className="profile_status">
        <div className="profile_publication">
          <NavLink to="">PUBLICATIONS</NavLink>
        </div>
        <div className="profile_identifie">
          <NavLink to="">IDENTIFIE(E)</NavLink>
        </div>
      </div>
      <div className="profile_card">
        <div className="card">
          <img src={user2} alt="" className="card_img" />
          <div className="card_hover">
            <AiFillHeart />
          </div>
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
        <div className="card">
          <img src={user2} alt="" className="card_img" />
        </div>
      </div>
      <div className="profile_footer">
        <div className="containt_footer">
          <span>Meta</span> <span>A propos</span> <span>Blog</span>{" "}
          <span>Emplois</span> <span>Aide</span> <span>API</span>
          <span> Confidentialité</span> <span>Condition</span>
          <p>Francais ®2023 INSTAGRAM BY Benjamin</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
