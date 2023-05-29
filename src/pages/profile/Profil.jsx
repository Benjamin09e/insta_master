import React, { useState } from "react";
import "./profil.css";
import user from "../../assets/images/profil.jpg";
import user2 from "../../assets/images/profil2.jpg";

import CardHover from "../../components/cardHover/CardHover";

const Profil = () => {
  const [show, setShow] = useState("publication");

  return (
    <div className="profile_containte">
      <div className="profile_content">
        <div className="profile_user">
          <img src={user} alt="" className="profile_img" />
        </div>
        <div className="profile_text">
          <div className="profile_element">
            <p>@useur</p>
            <button>Suivre en retout</button>
            <button>Contact</button>
            <button>+</button>
            <button>...</button>
          </div>
          <div className="profile_notif">
            <p>23 Publication</p>
            <p>750 Followers</p>
            <p>934 Suivi(e)s</p>
          </div>
          <div className="profile_plus">
            <p>Maud</p>
            <p>Blog personnel</p>
            <p>Entrepreneur</p>
            <p>Maudmajorieo@gmail.com</p>
            <p>La vie selon Jeremie 29:11</p>
          </div>
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
        <div
          onClick={() => setShow("publication")}
          className={`profile_publication ${show === "publication" && "show"}`}
        >
          PUBLICATIONS
        </div>
        <div
          onClick={() => setShow("reels")}
          className={`profile_reel ${show === "reels" && "show"}`}
        >
          REELS
        </div>
        <div
          onClick={() => setShow("identifie")}
          className={`profile_identifie ${show === "identifie" && "show"}`}
        >
          IDENTIFIE(E)
        </div>
      </div>

      {show === "publication" && (
        <div className="profile_card">
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
        </div>
      )}
      {show === "reels" && (
        <div className="profile_card">
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
        </div>
      )}
      {show === "identifie" && (
        <div className="profile_card">
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
        </div>
      )}

      <div className="profile_footer">
        <div className="containt_footer">
          <span>Meta</span> <span>A propos</span> <span>Blog</span>
          <span>Emplois</span> <span>Aide</span> <span>API</span>
          <span> Confidentialité</span> <span>Condition</span>
          <p>Francais ®2023 INSTAGRAM BY Benjamin</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
