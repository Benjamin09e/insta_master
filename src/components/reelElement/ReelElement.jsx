import React from "react";
import "./reelElement.css";
import { GiSoundOff, GiPositionMarker } from "react-icons/gi";
import { FiMusic, FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BiMessageRounded,
  BiDotsHorizontalRounded,
  BiSave,
} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import video from "../../assets/videos/Lauren.mp4"


const ReelElement = () => {
  return (
    <div className="element_parent">
      <div className="element_content">
        <div className="element_sound">
          <GiSoundOff />
        </div>

        <div className="element_video">
            <video src={video} controls></video>
        </div>

        <div className="element_profil">
          <CgProfile  className="fa_profil" />
          <p>profil</p>
        </div>

        <div className="element_desciption">
          <p>lorem element .... </p>
        </div>

        <div className="element_music">
          <div className="element_plus">
            <FiMusic className="fa_music" />
            <p>plus</p>
          </div>
          <div className="element_plus">
            <GiPositionMarker />
          </div>
        </div>
      </div>
      <div className="element_side">
        <div>
          <AiOutlineHeart />
          <p>13 k</p>
        </div>
        <div>
          <BiMessageRounded />
          <p>13</p>
        </div>
        <div>
          <FiSend />
          
        </div>
        <div>
          <BiSave />
        </div>
        <div>
          <BiDotsHorizontalRounded />
        </div>
        <div>
          <CgProfile className="fa_cgprofil" />
        </div>
      </div>
    </div>
  );
};

export default ReelElement;
