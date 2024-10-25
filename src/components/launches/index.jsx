import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
import DB from "../../db.json";
import { useTranslation } from "react-i18next";

const LaunchesPerfume = () => {
  const [more, setMore] = useState(false);
  const [moreRandom, setMoreRandom] = useState(false);
  const shuffleCounter = useRef(0);
  const {t}=useTranslation()
  const uniqueBrands = [...new Set(DB.map((product) => product.brands))];
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
 
  useEffect(() => {
    shuffleCounter.current += 1;

    if (shuffleCounter.current % 5 === 0) {
      setShuffledDB(shuffleArray([...DB]));
    }
  }, []);

  const [shuffledDB, setShuffledDB] = useState(shuffleArray([...DB]));
  const randomBrands = shuffledDB.slice(0, 25);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers1}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>{t("popularperfume")}</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist1}>
          <div className={styles.firstside1}>
            <ul>
              {randomBrands.slice(0, moreRandom ? randomBrands.length : 16).map((brand, index) => (
                <li key={index}>
                  <Link to={`/parfum-details/${brand.id}`}>
                    {capitalizeWords(brand.title)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.button}>
              <button onClick={() => setMoreRandom(!moreRandom)} className={styles.seeMore}>
                {moreRandom ? t("seeless") : t("seemore")}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>{t("popularbrands")}</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist}>
          <div className={styles.firstside}>
            <ul>
              {uniqueBrands.slice(0, more ? 48 : 24).map((brand, index) => (
                <li key={index}>
                  <Link to={`/brend/${brand.replace(/\s+/g, "").toLowerCase()}`}>
                    {capitalizeWords(brand)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.button}>
              <button onClick={() => setMore(!more)} className={styles.seeMore}>
                {more ? t("seeless") : t("seemore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LaunchesPerfume;
