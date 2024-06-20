import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import BannerBackground1 from "../../assets/images/meyve1.png";
import BannerBackground2 from "../../assets/images/meyve2.png";
import BannerBackground3 from "../../assets/images/meyve3.png";
import BannerBackground4 from "../../assets/images/meyve4.png";
import BannerBackground5 from "../../assets/images/meyve5.png";
import BannerBackground6 from "../../assets/images/meyve6.png";
import BannerBackground7 from "../../assets/images/meyve7.png";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Link } from "react-router-dom";
const Notes = () => {
  const [data, setData] = useState([
    {
      image: `${BannerBackground1}`,
    },
    {
      image: `${BannerBackground2}`,
    },
    {
      image: `${BannerBackground3}`,
    },
    {
      image: `${BannerBackground4}`,
    },
    {
      image: `${BannerBackground5}`,
    },
    {
      image: `${BannerBackground6}`,
    },
    {
      image: `${BannerBackground7}`,
    },
  ]);

  return (
    <Wrapper>

    <div className={styles.background}>
    <div className={styles.headers}>
      <h2>Notes</h2>
    </div>
    <div className={styles.boxs}>
      <Swiper
       modules={[ Pagination]}
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
            slidesPerView: 1,
          },
          992: {
            spaceBetween: 50,
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide>
            <div className={styles.border}>
              <img src={item.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  </div>
  </Wrapper>

  );
};

export default Notes;
