import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import DB from "../../db.json";
import brands from "../../brends.json";
import { Link } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper";
import Azzaro from "../../assets/images/ajmal.jpg";
import useIntersectionObserver from "../home/useIntersectionObserver";
import { useTranslation } from "react-i18next";

const BrendLogo = () => {
  const uniqueBrands = [...new Set(DB.map((product) => product.brands))].sort();
  const { t } = useTranslation();
  const groupedBrands = uniqueBrands.reduce((acc, brand) => {
    const firstLetter = brand.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);
    return acc;
  }, {});

  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });

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
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>{t("allbrends")}</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        {Object.keys(groupedBrands).map((letter, index) => (
          <div
            ref={(el) => (sections.current[index] = el)}
            className={`${styles.control} ${styles.hidden} ${
              entries[index]?.isIntersecting ? styles.visible : ""
            }`}
            key={index}
          >
            <div className={styles.brendheaders}>
              <hr />
              <h2>{letter}</h2>
              <hr />
            </div>
            <div className={styles.controlbox}>
              {groupedBrands[letter].map((brand, brandIndex) => {
                const brandKey = brand.replace(/\s+/g, "").toLowerCase();
                const brandData = brands[brandKey];

                return (
                  <Link
                    to={
                      brandData && brandData.imageurl
                        ? `/brend-perfume/${brandKey}`
                        : "#"
                    }
                    key={brandIndex}
                    className={styles.controlclass}
                  >
                    <div className={styles.border}>
                      {brandData && brandData.imageurl ? (
                        <img
                          src={brandData.imageurl}
                          alt={brand}
                          loading="lazy"
                        />
                      ) : (
                        <img src={Azzaro} alt="Default" />
                      )}
                    </div>
                    <h2>{brand}</h2>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default React.memo(BrendLogo);
