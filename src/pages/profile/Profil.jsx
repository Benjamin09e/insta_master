import React, { useContext, useEffect, useState } from "react";
import "./profil.css";
import user from "../../assets/images/profil.jpg";
import user2 from "../../assets/images/profil2.jpg";
import CardHover from "../../components/cardHover/CardHover";
import userConnect from "../../context/userConnect";
import axios from "axios";
import ShowImage from "../../components/showImage/ShowImage";
import { RiSettings4Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Followers from "../../components/followers/Followers";
import Following from "../../components/following/Following";
import Parametres from "../../components/setting/parametres";


const Profil = ({ ShowModal, onShowModal, infoModal}) => {
  const [show, setShow] = useState("publication");
  const { isUser } = useContext(userConnect);
  const [userElement, setUserElement] = useState("");

  const [postPub, setPostPub] = useState([]);

  
  const [FollowModal, setFollowModal] = useState(false);

  const onFollowModal = () => {
    if (FollowModal) {
      setFollowModal(false)
    } else {
      setFollowModal(true)
    }
  }

  const [FollowerModal, setFollowerModal] = useState(false);

  const onFollowerModal = () => {
    if (FollowerModal) {
      setFollowerModal(false)
    } else {
      setFollowerModal(true)
    }
  }

  const [SettingModal, setSettingModal] = useState(false);

  const onSettingModal = () => {
    if (SettingModal) {
      setSettingModal(false)
    } else {
      setSettingModal(true)
    }
  }


/*
  const [FollowModal, setFollowModal] = useState(false);
  const [FollowerModal, setFollowerModal] = useState(false);
  const [SettingModal, setSettingModal] = useState(false);

  const handdleShow =(elemnt) =>{
    if(elemnt ==="onFollowModal"){
      FollowModal ? setFollowModal(false): setFollowModal(true)
    }else if (elemnt ==="onFollowerModal"){
      FollowerModal ? setFollowerModal(false): setFollowerModal(true)
    }else if (elemnt ==="onSettingModal"){
      SettingModal ? setSettingModal(false): setSettingModal(true)
    }
  }

  */

  useEffect(() => {
    const handleSend = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/insta-api/users/${isUser.id}`
        );
        setUserElement(response.data)

        const res = await axios.get(
          `http://localhost:5000/insta-api/posts/users/${isUser.id}`
        );
        setPostPub(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    handleSend()
  }, [])

   console.log(postPub)

  return (
    <>
      <div className="profile_containte">
        <div className="profile_content">
          <div className="profile_user">
            <img src={user} alt="" className="profile_img" />
          </div>
          <div className="profile_text">
            <div className="profile_element">
              <p>{isUser.email}</p>
              <NavLink className="" to="/editprofil">
                <button >Edit profil</button>
              </NavLink>
              <RiSettings4Fill onClick={() => onSettingModal()} />

            </div>
            <div className="profile_notif">
              <p>23 Post</p>
              <Link onClick={() => onFollowModal()}> 750 Followers </Link>
              <Link onClick={() => onFollowerModal()}> 23 Following </Link>
            </div>
            <div className="profile_plus">
              <p>{`${userElement.nom} ${userElement.prenom}`}</p>
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
            {postPub?.map((posts) =>(
              <CardHover onShowModal={onShowModal} posts={posts} />
              
            ))}
          </div>
        )}
        {show === "reels" && (
          <div className="profile_card">
           
          </div>
        )}
        {show === "identifie" && (
          <div className="profile_card">
            
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
      {ShowModal && (<ShowImage onShowModal={onShowModal} infoModal= {infoModal}  />)}
      {FollowModal && (<Followers onFollowModal={onFollowModal} />)}
      {FollowerModal && (<Following onFollowerModal={onFollowerModal} />)}
      {SettingModal && (<Parametres onSettingModal={onSettingModal} />)}
    </>
  );
};

export default Profil;
