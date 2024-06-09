import React, { useState } from "react";
import styles from "./index.module.css";
import Lak from "../../assets/images/lak.png";
import Raiting from "../../assets/images/raiting.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const WeekPerfume = () => {
  const [activeButton, setActiveButton] = useState("all");

  const handleClick = (button) => {
    setActiveButton(button);
  };
  const [data, setData] = useState([
    {
      buttonname: "EXCLUSIVE",
      image: `${Lak}`,
      raiting: `${Raiting}`,
      raitingnumber: "(974)",
      name: "MAJOR FADE SOLUTION SYSTEM",
      price: "$165",
    },
    {
      buttonname: "EXCLUSIVE",
      image: `${Lak}`,
      raiting: `${Raiting}`,
      raitingnumber: "(974)",
      name: "MAJOR FADE SOLUTION SYSTEM",
      price: "$165",
    },
  ]);
  return (
    <div className={styles.background}>
      <div className={styles.headers}>
        <div className={styles.weekfeatured}>
          <h1>This week's featured</h1>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => handleClick("all")}
            className={activeButton === "all" ? styles.active : styles.passive}
          >
            All
          </button>
          <button
            onClick={() => handleClick("women")}
            className={
              activeButton === "women" ? styles.active : styles.passive
            }
          >
            Women
          </button>
          <button
            onClick={() => handleClick("men")}
            className={activeButton === "men" ? styles.active : styles.passive}
          >
            Men
          </button>
          <button
            onClick={() => handleClick("discounted")}
            className={
              activeButton === "discounted" ? styles.active : styles.passive
            }
          >
            Discounted products
          </button>
          <button
            onClick={() => handleClick("bestsellers")}
            className={
              activeButton === "bestsellers" ? styles.active : styles.passive
            }
          >
            Best Sellers
          </button>
        </div>
      </div>
      <div className={styles.slider}>
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
              slidesPerView: 3.5,
            },
          }}
        >
          <div className={styles.swiperprice}>
            {data.map((item) => (
              <SwiperSlide>
                <div className={styles.swiperscontrol}>
                  <div className={styles.swiperheaders}>
                    <button>{item.buttonname}</button>
                  </div>
                  <div className={styles.swiperimages}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={styles.swiperraiting}>
                    <div className={styles.swipericons}>
                      <img src={item.raiting} alt="" />
                      <img src={item.raiting} alt="" />
                      <img src={item.raiting} alt="" />
                      <img src={item.raiting} alt="" />
                      <img src={item.raiting} alt="" />
                    </div>
                    <div className={styles.raitingnumber}>
                      <h2>{item.raitingnumber}</h2>
                    </div>
                  </div>
                  <div className={styles.swipername}>
                    <h2>{item.name}</h2>
                  </div>
                  <div className={styles.swiperprice}>
                    <button>{item.price}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default WeekPerfume;
