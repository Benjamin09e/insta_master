import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Home.css";
import user from "../../assets/images/profil.jpg";
import Aside from "../../components/aside/Aside";
import User from "../../components/user/User";
import { story } from "../../assets/data/data";

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
              <SwiperSlide>
                <img src={story.img} className="img_user" />
                <p className="p_user">{story.username}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="home_posts"></div>
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
        <User />
        <User />
        <User />
        <User />
        <p className="p_links">A propos . Aide . Presse . API . Emploi. Confidentialité.</p>
        <p className="p_links">Condition . Lieux . Langue . API . Meta Verified.</p>

        <h4 className="h_author">®2023 INSTAGRAM PAR Benjamin EKIA</h4>
      </div>
    </div>
  );
};

export default Home;
