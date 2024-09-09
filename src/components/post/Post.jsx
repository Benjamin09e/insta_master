import React, { useContext, useState } from "react";
import "./post.css";
import user from "../../assets/images/profil.jpg";
import { AiOutlineEllipsis, AiFillWechat, AiOutlineHeart } from "react-icons/ai";
import { CiSaveDown1, CiFaceSmile } from "react-icons/ci";
import { RiShareForwardFill } from "react-icons/ri";
import axios from "axios";
import userConnect from "../../context/userConnect";
// import { createLike, getLikeById, updateLike } from '../../services/likeServices'; // Importez votre service

const Post = ({ post, onShowModal, setPosts }) => {

  const [comments, setComments] = useState('');
  const { isUser } = useContext(userConnect);
  // console.log(isUser)

  const token = localStorage.getItem("stringToken")

  const handleLikeClick = async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/insta-api/likes/`, {post_id: postId}, {
          headers: {
            Authorization: `Bearer ${token}`
        }
        });
      const res = await axios.get(
        `http://localhost:5000/insta-api/posts/` ,{
          headers: {
            Authorization: `Bearer ${token}`
        }
        }
      );
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  };

  const handCommentsSend = async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/insta-api/commentaires/`, {post_id: postId, user_id: isUser.id, description: comments});

      setComments('');
      const res = await axios.get(
        `http://localhost:5000/insta-api/posts/`
      );
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  };

  // console.log(localStorage.getItem("stringToken"))


  return (
    <div className="home_posts">
      <div className="post_top">
        <div className="home_img">
          <div>
            <img src={user} alt="user" />
          </div>
          <div>
            <p className="p_name">{isUser.name}</p>
          </div>
        </div>
        <div>
          <AiOutlineEllipsis className="details_post" />
        </div>
      </div>

      <div className="post_containte">
        <img src={post.images} alt="post" onClick={() => onShowModal(post._id)} />
      </div>
      <div className="post_icon">
        <div>
          <AiOutlineHeart className="post_awesome" onClick={() => handleLikeClick(post._id)} />
          <AiFillWechat className="post_awesome" />
          <RiShareForwardFill className="post_awesome" />
        </div>
        <div>
          <CiSaveDown1 className="post_awesome" />
        </div>
      </div>
      <div className="post_like">
        <h5 className="post_title">{post.likes} j'aime</h5>
      </div>
      <div className="post_discription">
        {
          post.commentsList?.map(comments => (
            <p>{comments.description.slice(0, 100)}... </p>
          ))
        }
      </div>
      <div className="post_input">
        <input type="text"
          value={comments}
          onChange={(e) => {
            setComments(e.target.value)
          }}
          placeholder="Ajouter un commentaire" />
        <CiFaceSmile className="post_smile" onClick={() => handCommentsSend(post._id)} />
      </div>
    </div>
  );
};

export default Post;
