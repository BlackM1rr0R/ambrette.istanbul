import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DB from "../../db.json";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../home/useIntersectionObserver";
import { useTranslation } from "react-i18next";

const Gender = () => {
  const { genderType } = useParams();
  const [formattedTitles, setFormattedTitles] = useState([]);
  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });
  const { t } = useTranslation();
  const sections = useRef([]);

  useEffect(() => {
    console.log("Gender Type:", genderType); // Değeri kontrol et
    const formatted = DB.filter(
      (item) => item.gender.toLowerCase() === genderType.toLowerCase()
    ).map((item) => ({
      id: item.id,
      formattedTitle: formatTitle(item.title),
      innerImageUrl: item.innerimageurl,
    }));
    setFormattedTitles(formatted);
  }, [genderType]);

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

  const formatTitle = (title) => {
    return title
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Wrapper>
      <div className={styles.background}>
        <div
          ref={(el) => (sections.current[0] = el)}
          className={`${styles.headers} ${styles.hidden} ${
            entries[0]?.isIntersecting ? styles.visible : ""
          }`}
        >
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>{t(genderType.toLowerCase())}</h2> {/* Küçük harf ile çeviri */}
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.box}>
          {formattedTitles.map((item, index) => (
            <Link
              key={item.id}
              to={"/parfum-details/" + item.id}
              className={`${styles.controlbox} ${styles.hidden} ${
                entries[index + 1]?.isIntersecting ? styles.visible : ""
              }`}
              ref={(el) => (sections.current[index + 1] = el)}
            >
              <div className={styles.border}>
                <img src={item.innerImageUrl} alt="" loading="lazy" />
              </div>
              <h2>{item.formattedTitle}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(Gender);
