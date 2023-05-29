import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Home.css";
import user from "../../assets/images/profil.jpg";
import User from "../../components/user/User";
import { story, follow } from "../../assets/data/data";
import Post from "../../components/post/Post";

const Home = () => {
  return (
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
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        

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
  );
};

export default Home;
