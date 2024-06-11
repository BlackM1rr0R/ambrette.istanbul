import React, { useState } from "react";
import styles from "./index.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Parfum from "../../assets/images/parfuim1webp.webp";
import DB from "../../db.json";
const Brends = () => {
  return (
    <div className={styles.background}>
      <div className={styles.headers}>
        <h2>EXPLORE OUR BEST SELLERS</h2>
      </div>
      <div className={styles.boxs}>
        <Swiper
          modules={[Navigation]}
          className={styles.price}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 1,
            },
            992: {
              spaceBetween: 50,
              slidesPerView: 5,
            },
          }}
        >
          {DB.map((item) => (
            <SwiperSlide>
              <Link to={"/parfum-details/" + item.id} className={styles.border}>
                <img src={item.imageurl} alt="" />
                <h2>{item.title}</h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brends;
