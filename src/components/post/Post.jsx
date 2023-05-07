import React from "react";
import "../../pages/home/Home.css";
import user from "../../assets/images/profil.jpg";
import User from "../../components/user/User";
import { story, follow } from "../../assets/data/data";
import {
  AiOutlineEllipsis,
  AiFillWechat,
  AiOutlineHeart,
} from "react-icons/ai";
import { CiSaveDown1, CiFaceSmile } from "react-icons/ci";
import { RiShareForwardFill } from "react-icons/ri";

const Post = () => {
  return (
    <div className="home_posts">
      <div className="post_top">
        <div className="home_img">
          <div>
            <img src={user} />
          </div>
          <div>
            <p className="p_name">benjaminekia . 3j</p>
            <p className="p_name">Audio origine</p>
          </div>
        </div>
        <div>
          <AiOutlineEllipsis className="details_post" />
        </div>
      </div>

      <div className="post_containte"></div>
      <div className="post_icon">
        <div>
          <AiOutlineHeart className="post_awesome" />
          <AiFillWechat className="post_awesome" />
          <RiShareForwardFill className="post_awesome" />
        </div>
        <div>
          <CiSaveDown1 className="post_awesome" />
        </div>
      </div>
      <div className="post_like">
        <h5 className="post_title">4 j'aime</h5>
      </div>
      <div className="post_discription">
        <p>Description du post publié </p>
        <p>...</p>
        <p>plus</p>
      </div>
      <div className="post_input">
        <input type="text" placeholder="Ajouter un commentaire" />
        <CiFaceSmile className="post_smile" />
      </div>
    </div>
  );
};

export default Post;
