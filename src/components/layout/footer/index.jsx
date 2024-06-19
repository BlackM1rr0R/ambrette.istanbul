import React from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import {  FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon, TikTokIcon, YouTubeIcon, } from "../../../icons";
const Footer = () => {
  return (
    <div className={styles.background}>
        <Wrapper>
        <div className={styles.control}>
          <div className={styles.list1}>
          <h2>AMBRETTE</h2>
            <p>Contact with our:</p>
            <div className={styles.icons}>
              <LinkedinIcon/>
              <TikTokIcon />
              <TelegramIcon />
              <InstagramIcon/>
              <FacebookIcon/>
              <YouTubeIcon/>
            </div>
          </div>
          <div className={styles.list2}>
            <h2>PERFUMES</h2>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Unisex</li>
           
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>LOGO PERFUMES</h2>
            <ul>
              <li>Perfumes</li>
              <li>Brands</li>
              <li>About us</li>
              <li>Magazens</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>MAGAZENS</h2>
            <ul>
              <li>1.Moskow branch</li>
              <li>2.Moskow branch</li>
              <li>3.Kyrgyzstan branch</li>
              <li>4.Kazakhstan branch</li>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>CONTACT US</h2>
            <ul>
              <li>+996 501 662 222</li>
              <li>Instagram Adress</li>
              <li>09:00-22:00</li>
           
            </ul>
          </div>
        </div>
    </Wrapper>
      </div>
  );
};

export default Footer;
