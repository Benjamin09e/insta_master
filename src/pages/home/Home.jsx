
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Home.css";
import user from "../../assets/images/profil.jpg";
import User from "../../components/user/User";
import { story, follow } from "../../assets/data/data";
import Post from "../../components/post/Post";
import userConnect from "../../context/userConnect";
import axios from "axios";
import ShowImage from "../../components/showImage/ShowImage";

const Home = ({ onShowModal, ShowModal, infoModal }) => {
  const { isUser } = useContext(userConnect);

  const token = localStorage.getItem("stringToken")

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/insta-api/posts`,{
            headers: {
              Authorization: `Bearer ${token}`
          }
          });
        setPosts(response.data)
      } catch (err) {
        // alert("Wrong credentials!!!");
        console.log(err)
      }
    };

    handleGet()
  }, [])

  // console.log(isUser)
  // console.log(posts)
  return (
    <>
      <div className="home_containte">
        <div className="home_left">
          <div className="status_users">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={8}
              spaceBetween={30}
              className="mySwiper"
            >
              {story?.map((story) => (
                <SwiperSlide key={story.id}>
                  <img src={story.img} className="img_user" />
                  <p className="p_user">{story.username}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            {
              posts?.map(post => (
                <Post key={post._id} post={post} onShowModal={onShowModal} setPosts={setPosts} />
              ))
            }
          </div>
        </div>

        <div className="home_right">
          <div className="home_profil">
            <div className="home_img">
              <img src={user} alt="" srcset="" />
            </div>
            <div className="home_name">
              <p className="p_name">benjaminekia</p>
              <p className="p_name">Benjamin Ekia</p>
            </div>
            <div className="home_connect">
              <p>Basculer</p>
            </div>
          </div>
          <div className="see_more">
            <div className="part_left">
              <p>suggestion pour vous</p>
            </div>
            <div className="part_right">
              <p>Voir tout</p>
            </div>
          </div>
          {follow?.map((user) => (
            <User users={user} key={user.id} />
          ))}
          <p className="p_links">
            A propos . Aide . Presse . API . Emploi. Confidentialité.
          </p>
          <p className="p_links">
            Condition . Lieux . Langue . API . Meta Verified.
          </p>

          <h4 className="h_author">®2023 INSTAGRAM PAR Benjamin EKIA</h4>
        </div>
      </div>
      {ShowModal && (<ShowImage onShowModal={onShowModal} infoModal= {infoModal}  />)}
      
    </>
  );
};

export default Home;
