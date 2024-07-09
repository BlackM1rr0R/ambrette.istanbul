import React from "react";
import styles from "./index.module.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import DB from "../../db.json";
import Wrapper from '../UI/wrapper'
const Brends = () => {
  return (
    <Wrapper>

    <div className={styles.background}>
      <div className={styles.headers}>
        <h2>Explore Our Best Sellers</h2>
      </div>
      <div className={styles.boxs}>
        <Swiper
          modules={[Autoplay,Pagination]}
          className={styles.price}
          spaceBetween={50}
          slidesPerView={3}
  
          pagination={{ clickable: true }} 
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
        >
          {DB.slice(0, 15).map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={"/parfum-details/" + item.id} className={styles.border}>
                <img src={item.imageurl} alt="" />
                <h2>{item.title}</h2>
                <h3>{item.gender}</h3>
                <Link
                  to={"/parfum-details/" + item.id}
                  target="_blank"
                  className={styles.button}
                >
                  <button>See More</button>
                </Link>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </Wrapper>

  );
};

export default Brends;
