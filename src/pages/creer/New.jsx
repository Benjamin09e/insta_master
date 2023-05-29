import React from "react";
import "./new.css";
import { AiOutlineClose } from "react-icons/ai";
import { ImFileVideo } from "react-icons/im";



const New = ({TestCreer, setCreer}) => {
  return (
    <>
    {TestCreer? (
    <div className="content_creer">
      <div className="fa_close">
        <AiOutlineClose onClick={()=>setCreer(false)} className="ai_close" />
      </div>
      <div className="container_modal">
        <div className="head_modal">
          <p>Créer une nouvelle publication</p>
        </div>
        <div className="main_modal">
            <ImFileVideo className="im_video" />
          <p>Faire glisser les photos et les vidéos ici</p>
          <button className="btn_modal">Sélectionner sur l'ordinateur</button>
        </div>
      </div>
    </div>
    ):(<> </>)}
    </>
  );
};

export default New;
