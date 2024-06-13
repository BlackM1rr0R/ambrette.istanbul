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
            <h2>SHOP</h2>
            <ul>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>ABOUT</h2>
            <ul>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>SERVICES</h2>
            <ul>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>POLICIES</h2>
            <ul>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
    </Wrapper>
      </div>
  );
};

export default Footer;
