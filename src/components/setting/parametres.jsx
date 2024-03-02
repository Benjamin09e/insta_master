import React from 'react'
import './parametres.css'
import { FaRegWindowClose } from 'react-icons/fa'
import user from "../../assets/images/profil.jpg";

const Parametres = ({ onSettingModal }) => {

    return (
        <>
            <div className="content_parametre">
                <div className="container_param">
                    <div className="title">
                        <h3>Suivi(e)s</h3>
                        <FaRegWindowClose className='icon' onClick={onSettingModal} />
                    </div>
                    <div className="input_search">
                        <input type="search" placeholder='Recherche' />
                    </div>
                    <div className="follow_list">
                        <div className="followItem">
                            <div className="nom_pict">
                                <div className="pict">
                                    <img src={user} />
                                </div>
                                <div className="nom">
                                    <p >Bengybenjamin</p>
                                    <p >Benjamin Ekia</p>
                                </div>
                            </div>
                            <div>
                                <button>Supprimer</button>
                            </div>
                        </div>
                        <div className="followItem">
                            <div className="nom_pict">
                                <div className="pict">
                                    <img src={user} />
                                </div>
                                <div className="nom">
                                    <p >Bengybenjamin</p>
                                    <p >Benjamin Ekia</p>
                                </div>
                            </div>
                            <div>
                                <button>Supprimer</button>
                            </div>
                        </div>
                        <div className="followItem">
                            <div className="nom_pict">
                                <div className="pict">
                                    <img src={user} />
                                </div>
                                <div className="nom">
                                    <p >Bengybenjamin</p>
                                    <p >Benjamin Ekia</p>
                                </div>
                            </div>
                            <div>
                                <button>Supprimer</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Parametres