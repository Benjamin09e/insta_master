import React from "react";
import "./message.css";
import { CgChevronDown } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const Message = () => {
  return (
    <div className="container_message">
      <div className="content_aside">
        <div className="message_profil">
          <div>
            <p>Benjamin</p>
          </div>
          <div>
            <CgChevronDown />
          </div>
          <div>
            <BiEdit />
          </div>
        </div>
        <div className="message_aside">
          <p>Profil</p>
        </div>
      </div>

      <div className="message_main">
        <FiSend/>
        <p>Vos messages</p>
        <p>Envoyez les messages privés à un(e) ami(e) ou à un groupe </p>
        <button className="btn_color">Envoyer un message</button>
      </div>
    </div>
  );
};

export default Message;
