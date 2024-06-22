import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "../../../icons";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const topOffset = footerRef.current.getBoundingClientRect().top;
        const isVisible = topOffset < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={footerRef}
      className={`${styles.background} ${isVisible ? "" : styles.hidden}`}
    >
      <Wrapper>
        <div className={styles.control}>
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
              <li>5.Uzbekistan branch</li>
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
        <div className={styles.iconscontrol}>
          <div className={styles.textp}>
            <p>Contact with our:</p>
          </div>
          <div className={styles.list1}>
            <form>
              <input placeholder="E-mail" type="email" name="email" />
              <button type="submit">Submit</button>
            </form>
            <div className={styles.icons}>
              <LinkedinIcon />
              <TikTokIcon />
              <TelegramIcon />
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
