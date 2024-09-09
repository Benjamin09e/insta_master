import React, { useState, useContext } from "react";
import "./new.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userConnect from "../../context/userConnect";

const New = ({ TestCreer, setCreer }) => {
  const [images, setImages] = useState("")
  const { isUser } = useContext(userConnect);
  const [description, setDescription] = useState("")
  // console.table(images, description)

  
  const navigate = useNavigate();

  const token = localStorage.getItem("stringToken")


  const handleSubmit = async () => {
    try {
      setImages('');
      setDescription('');
      const res = await axios.post(
        `http://localhost:5000/insta-api/posts/`, {
        User_id: isUser.id,
        images: images,
        description: description
      },{
        headers: {
          Authorization: `Bearer ${token}`
      }
      }
      );
      navigate("/profile");
    } catch (error) {
      console.log(error)
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
              <button className="btn_modal" onClick={handleSubmit}>Envoyer votre publication</button>
            </div>
          </div>
        </div>
      ) : (<> </>)}
    </>
  );
};

export default New;
