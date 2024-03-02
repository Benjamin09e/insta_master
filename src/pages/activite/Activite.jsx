import React, { useState } from "react";
import "./activite.css";
import { HiDownload } from "react-icons/hi";
import { WiDirectionLeft } from "react-icons/wi";
import { FaPhotoVideo } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { BsArrowLeftRight } from "react-icons/bs";
import { TbEditCircle } from "react-icons/tb";




const Activite = () => {

  const [show, setShow] = useState("publication");
  const [touch, setTouch] = useState("view");

  return (
    <div className="container_activite">
      <div className="container_aside">
        <div className="container_top">
          <p className="font_p">Votre Activité</p>
        </div>
        <div className="container_bottom">
          <div className="container_link">
            <div 
            onClick={() => setShow("Interactions")}
            className={`content_part1 ${show === "Interactions" && "card1"}`}
            >
              <div>
                <BsArrowLeftRight className="space" />
              </div>
              <div className="links_element">
                <h5 className="no_space">Interactions</h5>
                <p className="no_space">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div
             onClick={() => setShow("Photos")}
             className={`content_part1 ${show === "Photos" && "card1"}`}
            >
              <div>
                <FaPhotoVideo className="space" />
              </div>
              <div className="links_element">
                <h5 className="no_space">Photos et videos</h5>
                <p className="no_space">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div
             onClick={() => setShow("Historique")}
             className={`content_part1 ${show === "Historique" && "card1"}`}
            >
              <div>
                <GoCalendar className="space" />
              </div>
              <div className="links_element">
                <h5 className="no_space">Historique du compte</h5>
                <p className="no_space">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div
             onClick={() => setShow("informations")}
             className={`content_part1 ${show === "informations" && "card1"}`}
            >
              <div>
                <HiDownload className="space" />
              </div>
              <div className="links_element">
                <h5 className="no_space">Télécharger vos informations</h5>
                <p className="no_space">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_main">
        <div className="container_top">
          <div className="content_top">
            <div 
             onClick={() => setTouch("AIME")}
             className={`content_state ${touch === "AIME" && "card2"}`}
            >
              <AiFillHeart className="space_top"/>
              <h4 className="no_spaceh">J'AIME</h4>
            </div>
            <div 
            onClick={() => setTouch("COMMENTAIRES")}
            className={`content_state ${touch === "COMMENTAIRES" && "card2"}`}
             >
              <TbMessageCircle className="space_top" />
              <h4 className="no_spaceh">COMMENTAIRES</h4>
            </div>
            <div 
            onClick={() => setTouch("REPONCES")}
            className={`content_state ${touch === "REPONCES" && "card2"}`}
            >
              <HiArrowUturnLeft className="space_top" />
              <h4 className="no_spaceh">REPONCES AUX STORIES</h4>
            </div>
            <div 
            onClick={() => setTouch("AVIS")}
            className={`content_state ${touch=== "AVIS" && "card2"}`}
            >
              <TbEditCircle  className="space_top"/>
              <h4 className="no_spaceh">AVIS</h4>
            </div>
          </div>
        </div>
        <div className="container_bottom">
          <RiErrorWarningLine className="fa_error" />
          <p className="font_text">Vous n'avez aimé aucun contenu pour l'instant </p>
          <p>Lorsque vous aimez une photo ou une video, elle s'affiche ici. </p>
        </div>
      </div>
    </div>
  );
};

export default Activite;
