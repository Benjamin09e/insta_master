import React from "react";
import "./user.css";
import user from "../../assets/images/profil.jpg";
import {  follow } from "../../assets/data/data";

const User = ({users}) => {
  return (
    <div className="user">
        <div className="user_profil">
          <img src={users.img} className="img_profil" />
        </div>
        <div className="user_name">
          <p className="p_name">{users.name}</p>
          <p className="p_name">Suivi par {users.suivre} personne(s)</p>
        </div>
        <div className="user_follow">
          <p>Suivre</p>
        </div>
    </div>
  );
};

export default User;
