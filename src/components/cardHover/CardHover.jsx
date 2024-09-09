import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./CardHover.css";
import user2 from "../../assets/images/profil2.jpg";


const CardHover = ({onShowModal, posts }) => {

  return (
    <div className="card" onClick={() => onShowModal(posts._id)}>
      
        <img src={posts.images} alt="" className="card_img" />
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
