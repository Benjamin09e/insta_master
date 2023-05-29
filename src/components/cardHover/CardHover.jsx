import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./CardHover.css";
import user2 from "../../assets/images/profil2.jpg";


const CardHover = () => {
  return (
    <div className="card">
      <img src={user2} alt="" className="card_img" />
      <div className="card_hover">
        <AiFillHeart />
        <p>10</p>
        <AiFillHeart />
        <p>10</p>
      </div>
    </div>
  );
};

export default CardHover;
