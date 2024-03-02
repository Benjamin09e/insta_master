import React from 'react'
import "./showImage.css"
import office from "../../assets/images/officejpg.jpg"
import user from "../../assets/images/profil.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { CiSaveDown1, CiFaceSmile } from "react-icons/ci";


const ShowImage = ({ onShowModal, infoModal }) => {
    return (
        <>
            <div className="content_show">
                <button className='btn_close' onClick={onShowModal}>x</button>
                <div className="content_modal">
                    <div className="show_image">
                        <img src={infoModal?.images} alt="office" />
                    </div>
                    <div className="content_comments">
                        <div className="head_comment">
                            <div className="pro_img">
                                <img src={user} alt="" srcset="" />
                                <p className='space_name'>Benjamin EKIA . Official</p>
                                <p className='space_suivre'> - Suivre</p>
                            </div>
                            <div className="dot">
                                ...
                            </div>
                        </div>
                        <div className="profil_comments">
                            <div className="content_comments">
                                <div className="auth_img">
                                    <img src={user} alt="" srcset="" />
                                    <p className='space_name'>Benjamin EKIA . Official</p>
                                </div>
                                <div className="love_icon">
                                    <IoMdHeartEmpty />
                                </div>
                            </div>
                            <div className="content_comments">
                                <div className="auth_img">
                                    <img src={user} alt="" srcset="" />
                                    <p className='space_name'>Benjamin EKIA . Official</p>
                                </div>
                                <div className="love_icon">
                                    <IoMdHeartEmpty />
                                </div>
                            </div>
                            <div className="content_comments">
                                <div className="auth_img">
                                    <img src={user} alt="" srcset="" />
                                    <p className='space_name'>Benjamin EKIA . Official</p>
                                </div>
                                <div className="love_icon">
                                    <IoMdHeartEmpty />
                                </div>
                            </div>
                            <div className="content_comments">
                                <div className="auth_img">
                                    <img src={user} alt="" srcset="" />
                                    <p className='space_name'>Benjamin EKIA . Official</p>
                                </div>
                                <div className="love_icon">
                                    <IoMdHeartEmpty />
                                </div>
                            </div>
                        </div>
                        <div className="like_comments">
                            <div className="like_content">
                                <div className="icon_eob">
                                    <IoMdHeartEmpty className='empty' />
                                    <IoChatbubblesOutline className='outline' />
                                    <BsSend className='send' />
                                </div>
                                <div className="icon_save">
                                    <CiSaveDown1 />
                                </div>
                            </div>
                        </div>
                        <div className="add_comments">
                            <div className="comment_content">
                                <input type="text" placeholder="Ajouter un commentaire" />
                                <CiFaceSmile className="smile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ShowImage;