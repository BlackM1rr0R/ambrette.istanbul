import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import BannerBackground from '../../assets/images/banner5.png'
import Banner from '../../assets/images/imagephoto4.png'
import Banner2 from '../../assets/images/banner.webp'
import { Autoplay, Navigation} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Link } from "react-router-dom";
const Hero = () => {
  const[data,setData]=useState([
    {
      image:`${BannerBackground}`
    },
    {
      image:`${Banner}`
    },
    {
      image:`${Banner2}`
    },
  ])
 
  return (
    <div className={styles.background}>
     
      <div className={styles.boxs}>
              <Swiper
                modules={[Autoplay]}
                className={styles.price}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  0:{
                    spaceBetween:24,
                    slidesPerView:1,
                  },
                  768:{
                    spaceBetween:24,
                    slidesPerView:1,
                  },
                  992:{
                    spaceBetween:50,
                    slidesPerView:1,
                  },
                }}
                >
                {data.map((item) => (
                <SwiperSlide>
                  <Link className={styles.border}>
                    <img src={item.image} alt="" />
                  </Link>
                </SwiperSlide>
            ))}
              </Swiper>
          </div>
    </div>
  );
};

export default Hero;
