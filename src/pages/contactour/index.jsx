import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { ContactLocationIcon, ContactMailIcon } from "../../icons";
import useIntersectionObserver from "../home/useIntersectionObserver"; // Import the custom hook
import { useTranslation } from "react-i18next";

const ContactOur = () => {
  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });
  const {t}=useTranslation()
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section) => {
      observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        unobserve(section);
      });
    };
  }, [observe, unobserve]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headerContact}>
          <h2>{t("contact_us")}</h2>
        </div>
        <div
          ref={(el) => (sections.current[0] = el)}
          className={`${styles.headers} ${styles.hidden} ${entries[0]?.isIntersecting ? styles.visible : ''}`}
        >
          <h2>{t("contact_us")}</h2>
          <p>{t("worktime")}</p>
        </div>
        <div className={styles.control}>
          <div className={styles.leftside}>
            <div
              ref={(el) => (sections.current[1] = el)}
              className={`${styles.border} ${styles.hidden} ${entries[1]?.isIntersecting ? styles.visible : ''}`}
            >
              <div className={styles.contact}>
                <ContactLocationIcon />
              </div>
              <div className={styles.contactadress}>
                <h2>{t("ourlocation")}</h2>
                <p>МОСКВА Тк Садовод, корпус Б, этаж 1, линия 1, место 07-13</p>
              </div>
            </div>
            <div
              ref={(el) => (sections.current[2] = el)}
              className={`${styles.border} ${styles.hidden} ${entries[2]?.isIntersecting ? styles.visible : ''}`}
            >
              <div className={styles.contact}>
                <ContactMailIcon />
              </div>
              <div className={styles.contactadress}>
                <h2>{t("email")}</h2>
                <p>hello@gmail.com</p>
                <p>fax@gmail.com</p>
              </div>
            </div>
            <div
              ref={(el) => (sections.current[3] = el)}
              className={`${styles.border} ${styles.hidden} ${entries[3]?.isIntersecting ? styles.visible : ''}`}
            >
              <div className={styles.contact}>
                <ContactMailIcon />
              </div>
              <div className={styles.contactadress}>
                <h2>{t("phone")}</h2>
                <p>+996 501 662 222</p>
              </div>
            </div>
          </div>

          <div
            ref={(el) => (sections.current[4] = el)}
            className={`${styles.rightside} ${styles.hidden} ${entries[4]?.isIntersecting ? styles.visible : ''}`}
          >
            <iframe
              className={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d72032.50768923576!2d37.835549!3d55.653933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6f25a8fc615%3A0x4002efd7d787ef83!2sRynok%20Sadovod!5e0!3m2!1str!2saz!4v1718706271950!5m2!1str!2saz"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(ContactOur);
