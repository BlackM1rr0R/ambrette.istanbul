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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const { t } = useTranslation();
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
            <h2>{t("perfumes")}</h2>
            <ul>
              <Link target="_blank" to="/gender/men">
                {t("men")}
              </Link>
              <Link target="_blank" to="/gender/women">
                {t("women")}
              </Link>
              <Link target="_blank" to="/gender/unisex">
                {t("unisex")}
              </Link>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>{t("welcome")}</h2>
            <ul>
              <Link target="_blank" to="/genderselected">
                {t("perfumes")}
              </Link>
              <Link target="_blank" to="/brends">
                {t("brends")}
              </Link>
              <Link target="_blank" to="/about">
                {t("about_us")}
              </Link>
              <Link target="_blank" to="/magazins">
                {t("magazin")}
              </Link>
              <Link target="_blank" to="/contact">
                {t("contact_us")}
              </Link>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>{t("magazin")}</h2>
            <ul>
              <Link to="/magazins" target="_blank">
                {t("moskowbranch")}
              </Link>
              <Link to="/magazins" target="_blank">
                {t("moskowbranch")}
              </Link>
              <Link to="/magazins" target="_blank">
                {t("kgbranch")}
              </Link>
              <Link to="/magazins" target="_blank">
                {t("kzbranch")}
              </Link>
              <Link to="/magazins" target="_blank">
                {t("uzbranch")}
              </Link>
              <Link to="/magazins" target="_blank">
                {t("azbranch")}
              </Link>
            </ul>
          </div>
          <div className={styles.list2}>
            <h2>{t("contact_us")}</h2>
            <ul>
              <a target="_blank" href="https://wa.me/79682694534">
                +7 968 269 45 34
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ambrette_parfume/"
              >
                {t("instagram")}
              </a>
              <li>09:00-22:00</li>
            </ul>
          </div>
        </div>
        <div className={styles.iconscontrol}>
          <div className={styles.textp}>
            <p>{t("contact_us")}:</p>
          </div>
          <div className={styles.list1}>
            <form>
              <input placeholder={t("email")} type="email" name="email" />
              <button type="submit">{t("submit")}</button>
            </form>
            <div className={styles.icons}>
            <Link 
            to={"https://www.tiktok.com/@ambrette_kz"} target="_blank">
              <TikTokIcon />
            </Link>
              <Link
                to={"https://www.instagram.com/ambrette.ru/"}
                target="_blank"
              >
                <InstagramIcon />
              </Link>
              <Link
                to={"https://www.youtube.com/@Ambretteofficial"}
                target="_blank"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
