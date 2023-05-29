import React from "react";
import { NavLink } from "react-router-dom";
import {
  TfiLock,
  TfiHome,
  TfiSearch,
  TfiLocationArrow,
  TfiControlPlay,
  TfiBell,
  TfiPlus,
  TfiMenu,
} from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

import "./Aside.css";

const Aside = ({setCreer, setPlus, plus}) => {
  const Plus = ()=>setPlus((plus)=>!plus)
  return (
    <div className="aside-bar">
      <h1>Instagram</h1>
      <NavLink to="/" className="aside-links">
        <TfiHome className="icon" /> Accueil
      </NavLink>
      <NavLink to="/recherche" className="aside-links">
        <TfiSearch className="icon" /> Recherche
      </NavLink>
      <NavLink to="/decouvrir" className="aside-links">
        <TfiLocationArrow className="icon" /> Découvrir
      </NavLink>
      <NavLink to="/reels" className="aside-links">
        <TfiControlPlay className="icon" /> Reels
      </NavLink>
      <NavLink to="/message" className="aside-links">
        <TfiLock className="icon" /> Messages
      </NavLink>
      <NavLink to="/notification" className="aside-links">
        <TfiBell className="icon" /> Notifications
      </NavLink>
      <button  onClick={()=>setCreer(true)}  className="aside-links">
        <TfiPlus className="icon" /> Créer
      </button>
      <NavLink to="/profile" className="aside-links">
        <CgProfile className="icon" /> Profil
      </NavLink>
      <NavLink to="/plus" onClick={Plus} className="aside-links">
        <TfiMenu className="icon" /> Plus
      </NavLink>
    </div>
  );
};

export default Aside;
