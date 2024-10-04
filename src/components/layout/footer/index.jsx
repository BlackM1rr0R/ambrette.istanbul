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
  WhatsappIcon,
  YouTubeIcon,
} from "../../../icons";
import { Link } from "react-router-dom";

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
              <Link target="_blank" to="/gender/men">
                Men
              </Link>
              <Link target="_blank" to="/gender/women">
                Women
              </Link>
              <Link target="_blank" to="/gender/unisex">
                Unisex
              </Link>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>TITLE PAGES</h2>
            <ul>
              <Link target="_blank" to="/genderselected">
                Perfumes
              </Link>
              <Link target="_blank" to="/brends">
                Brands
              </Link>
              <Link target="_blank" to="/about">
                About us
              </Link>
              <Link target="_blank" to="/magazins">
                Magazens
              </Link>
              <Link target="_blank" to="/contact">
                Contact us
              </Link>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>MAGAZENS</h2>
            <ul>
              <Link to="/magazins" target="_blank">
                Moskow branch
              </Link>
              <Link to="/magazins" target="_blank">
                Moskow branch
              </Link>
              <Link to="/magazins" target="_blank">
                Kyrgyzstan branch
              </Link>
              <Link to="/magazins" target="_blank">
                Kazakhstan branch
              </Link>
              <Link to="/magazins" target="_blank">
                Uzbekistan branch
              </Link>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>CONTACT US</h2>
            <ul>
              <a target="_blank" href="https://wa.me/79682694534">
                +7 968 269 45 34
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ambrette_parfume/"
              >
                Instagram Adress
              </a>
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
              <TikTokIcon />

              <InstagramIcon />
            
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
