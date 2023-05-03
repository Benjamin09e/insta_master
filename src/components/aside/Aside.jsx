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
import "./Aside.css";

const Aside = () => {
  return (
    <div className="aside-bar">
      <h1>Instagram</h1>
      <NavLink to="/" className="aside-links">
        <TfiHome className="icon" /> Accueil
      </NavLink>
      <NavLink to="/recherche" className="aside-links">
        <TfiSearch className="icon" /> Recherche
      </NavLink>
      <NavLink to="/" className="aside-links">
        <TfiLocationArrow className="icon" /> Découvrir
      </NavLink>
      <NavLink to="/" className="aside-links">
        <TfiControlPlay className="icon" /> Reels
      </NavLink>
      <NavLink to="/" className="aside-links">
        <TfiLock className="icon" /> Messages
      </NavLink>
      <NavLink to="/" className="aside-links">
        <TfiBell className="icon" /> Notifications
      </NavLink>
      <NavLink to="/" className="aside-links">
        <TfiPlus className="icon" /> Créer
      </NavLink>
      <NavLink to="/profile" className="aside-links">
        <TfiMenu className="icon" /> Profil
      </NavLink>
    </div>
  );
};

export default Aside;
