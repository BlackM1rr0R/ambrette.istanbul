import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import CertificateImage1 from "../../assets/images/sertifikat1.jpg";
import CertificateImage2 from "../../assets/images/sertifikat2.jpg";
import CertificateImage3 from "../../assets/images/sertifikat3.png";
import CertificateImage4 from "../../assets/images/sertifikat4.jpg";

import CertificateImage6 from "../../assets/images/sertifikat6.jpg";
import CertificateImage7 from "../../assets/images/sertifikat7.png";
import CertificateImage8 from "../../assets/images/sertifikat8.png";

import CertificateImage10 from "../../assets/images/sertifikat10.png";
import futurePhoto from "../../assets/images/gelecek.png";
import taskPhoto from "../../assets/images/misya.png";
import taskPhoto1 from "../../assets/images/misya1.jpg";
import { useTranslation } from "react-i18next";
const About = () => {
  const principleRef = useRef(null);
  const futureRef = useRef(null);
  const certificatesRef = useRef(null);
  const {t}=useTranslation()
  const handleScroll = () => {
    const principlePosition = principleRef.current.getBoundingClientRect().top;
    const futurePosition = futureRef.current.getBoundingClientRect().top;
    const certificatesPosition =
      certificatesRef.current.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (principlePosition < screenHeight) {
      principleRef.current.classList.add(styles.visible);
    } else {
      principleRef.current.classList.remove(styles.visible);
    }

    if (futurePosition < screenHeight) {
      futureRef.current.classList.add(styles.visible);
    } else {
      futureRef.current.classList.remove(styles.visible);
    }

    if (certificatesPosition < screenHeight) {
      certificatesRef.current.classList.add(styles.visible);
    } else {
      certificatesRef.current.classList.remove(styles.visible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={certificatesRef}
      className={`${styles.background} ${styles.hidden}`}
    >
      <Wrapper>
        <div
          ref={principleRef}
          className={`${styles.principle} ${styles.hidden}`}
        >
          <h2>    {t("whowe")}</h2>
          <p>
          {t("aboutwho")}
          </p>
        </div>

        <div className={`${styles.futureControl} ${styles.hidden}`}>
          <div className={styles.futuretext}>
        <h2>  {t("vision")}</h2>
            <p>
           {t("aboutvision")}
            </p>
          </div>
          <div className={styles.futureImage}>
            <img src={futurePhoto} alt="" />
          </div>
        </div>

        <div className={`${styles.ourPurpose} ${styles.hidden}`}>
       <h2> {t("purpose")}</h2>
          <p>
    {t("aboutpurpose")}
          </p>
        </div>

        <div className={`${styles.futureControl} ${styles.hidden}`}>
          <div className={styles.futureImage}>
            <img src={taskPhoto} alt="" />
          </div>
          <div className={styles.futuretext}>
          <h2>{t("fragrances")}</h2>
            <p>
            {t("aboutfrag")}
            </p>
          </div>
        </div>

        <div
          ref={principleRef}
          className={`${styles.principle} ${styles.hidden}`}
        >
          <h2>{t("main")}</h2>
          <p>
          {t("aboutprinciple")}
          </p>
        </div>
        <div className={styles.futureControl}>
          <div
            ref={futureRef}
            className={`${styles.futuretext} ${styles.hidden}`}
          >
            <h2>{t("particip")} </h2>
            <p>
            {t("aboutpartic")}
            </p>
          </div>
          <div className={styles.futureImage}>
            <img src={taskPhoto1} alt="" />
          </div>
        </div>

        <div className={`${styles.certificates} ${styles.hidden}`}>
          <div className={styles.certificatesheaders}>
            <h2>{t("sertifikat")}</h2>
          </div>
          <div className={styles.images}>
            <img src={CertificateImage1} alt="" loading="lazy" />
            <img src={CertificateImage2} alt="" loading="lazy" />
            <img src={CertificateImage3} alt="" loading="lazy" />
            <img src={CertificateImage4} alt="" loading="lazy" />

            <img src={CertificateImage6} alt="" loading="lazy" />
            <img src={CertificateImage7} alt="" loading="lazy" />
            <img src={CertificateImage8} alt="" loading="lazy" />

            <img src={CertificateImage10} alt="" loading="lazy" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(About);
