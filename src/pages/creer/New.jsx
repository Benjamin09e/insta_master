import React, { useState } from "react";
import "./new.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";



const New = ({ TestCreer, setCreer }) => {
  const [images, setImages] = useState("")
  const [description, setDescription] = useState("")
  // console.table(images, description)

  const handleSubmit = async () => {
    try {
      setImages('');
      setDescription('');
      const res = await axios.post(
        `http://localhost:5000/insta-api/posts/`, {
          User_id: "657dca9708f098adba8448ed",
          images: images,
          description:description
        }
        
      );
    } catch (error) {

    }
  };
  return (
    <>
      {TestCreer ? (
        <div className="content_creer">
          <div className="fa_close">
            <AiOutlineClose onClick={() => setCreer(false)} className="ai_close" />
          </div>
          <div className="container_modal">
            <div className="head_modal">
              <p>Créer une nouvelle publication</p>
            </div>
            <div className="main_modal">
              <div className="form">
                <input
                  value={images}
                  onChange={(e) => {
                    setImages(e.target.value);
                  }}
                  type="text" placeholder="Image" className="input_form" />
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  name="" id="" cols="30" rows="10" placeholder="description" className="textaera_form"></textarea>
              </div>
              <button className="btn_modal" onClick={handleSubmit}>Sélectionner sur l'ordinateur</button>
            </div>
          </div>
        </div>
      ) : (<> </>)}
    </>
  );
};

export default New;
