import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Link, useParams } from "react-router-dom";
import DB from "../../db.json";
import useIntersectionObserver from "../home/useIntersectionObserver"; // Import the custom hook
import { useTranslation } from "react-i18next";
import RUD from '../../rudb.json'
const BrendPerfume = () => {
  const { brendId } = useParams();
  const [perfumes, setPerfumes] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });

  const sections = useRef([]);
  const { t, i18n } = useTranslation(); // Dil kontrolü için useTranslation kullanıldı

  useEffect(() => {
    const currentDB = i18n.language === "ru" ? RUD : DB; // Dil kontrolü yapılıyor
    setPerfumes(currentDB);
  }, [i18n.language]); // Dil değiştiğinde yeniden yükleniyor
  function filterByBrand(data, brand) {
    const normalizedBrand = brand.replace(/\s+/g, "").toLowerCase();
    return data.filter(
      (item) => item.brands.replace(/\s+/g, "").toLowerCase() === normalizedBrand
    );
  }

  useEffect(() => {
    const result = filterByBrand(DB, brendId);
    setFilteredResult(result);
  }, [brendId]);

  useEffect(() => {
    sections.current.forEach((section) => {
      observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        unobserve(section);
      });
    };
  }, [observe, unobserve, filteredResult]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          {filteredResult.map((item, index) => (
            <Link
              to={"/parfum-details/" + item.id}
              className={`${styles.flexborder} ${styles.hidden} ${entries[index]?.isIntersecting ? styles.visible : ''}`}
              ref={(el) => (sections.current[index] = el)}
              key={item.id}
            >
              <div className={styles.border}>
                <img src={item.imageurl} alt={item.title} loading="lazy" />
              </div>
              <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(BrendPerfume);
