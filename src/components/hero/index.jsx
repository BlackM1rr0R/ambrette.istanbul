import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Logo from "../../assets/images/parfumlogo.png";
import Banner from '../../assets/images/banner.webp'
import { Navigation} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ArrowIcon } from "../../icons";
import { Link } from "react-router-dom";
const Hero = () => {
  const[data,setData]=useState([
    {
      image:`${Banner}`
    },
    {
      image:`${Banner}`
    },
    {
      image:`${Banner}`
    },
  ])
  return (
    <div className={styles.background}>
      <div className={styles.headers}>
        <hr />
      </div>
      <Wrapper>

      <ul>
        <li className={styles.li}>
            Category <ArrowIcon />
            <div className={styles.dropdown}>
              <ul>
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 3</li>
                <li>Category 3</li>
                <li>Category 3</li>
                <li>Category 3</li>

       
              </ul>
            </div>
          </li>
        <li>All</li>
        <li>Man</li>
        <li>Women</li>
        <li>Unisex</li>
      </ul>
      </Wrapper>
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
