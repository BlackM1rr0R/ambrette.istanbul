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
const Brends = () => {
  const [data, setData] = useState([
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    {
      image: `${Parfum}`,
      name:"PRIVATE MUSK"
    },
    
  ]);
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
          {data.map((item) => (
            <SwiperSlide>
              <div className={styles.border}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brends;
