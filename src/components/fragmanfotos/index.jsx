import React, { useState } from "react";
import styles from "./index.module.css";
import Collections from "../../assets/images/fragrance1.jpg";
import Collections1 from "../../assets/images/fragrance2.jpg";
import Collections2 from "../../assets/images/fragrance3.jpg";
import Collections3 from "../../assets/images/fragrance4.jpg";
import Collections4 from "../../assets/images/fragrance5.jpg";
import Collections5 from "../../assets/images/fragrance6.jpg";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Wrapper from "../UI/wrapper";
const FragmanFotos = () => {
  const [data, setData] = useState([
    {
      image: `${Collections}`,
    },
    {
      image: `${Collections1}`,
    },
    {
      image: `${Collections2}`,
    },
    {
      image: `${Collections3}`,
    },
    {
      image: `${Collections4}`,
    },
    {
      image: `${Collections5}`,
    },
   
  ]);
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <h2>Fragman Photos</h2>
        </div>
        <div className={styles.boxs}>
          <Swiper
            modules={[Pagination]}
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

export default FragmanFotos;
