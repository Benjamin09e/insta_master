import React from 'react'
import "./plus.css"
import { AiOutlineSetting, AiFillWarning } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { CiSaveDown1 } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Plus = ({plus}) => {
  return (
    <div className={plus? 'content_plus': 'close_plus'}>
        <div className='contenaire_plus'>
        <NavLink className='parametre'>
            <AiOutlineSetting className='fa_space' />
            <p>Paramétres</p>
        </NavLink>
        <NavLink className='activite' to="/activite">
            <IoIosTimer className='fa_space' />
            <p>Votre activité</p>
        </NavLink>
        <NavLink className='enregistre'>
            <CiSaveDown1 className='fa_space' />
            <p>Enregistrements</p>
        </NavLink>
        <NavLink className='change'>
            <FaMoon className='fa_space' />
            <p>Changer l'apparence</p>
        </NavLink>
        <NavLink className='signale'>
            <AiFillWarning className='fa_space' />
            <p>Signaler un problème</p>
        </NavLink>
        <NavLink className='ch_compte'>
            <p>Changer de compte</p>
        </NavLink>
        <NavLink className='deconnexion'>
            <p>Déconnexion</p>
        </NavLink>
        </div>
        
    </div>
  )
}

export default Plus