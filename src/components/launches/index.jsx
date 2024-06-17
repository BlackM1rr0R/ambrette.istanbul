import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
import DB from "../../db.json";
const LaunchesPerfume = () => {
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
  const shuffledDB = shuffleArray([...DB]);
  const randomBrands = shuffledDB.slice(0, 25);
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers1}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>Most Popular Perfumes</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist1}>
          <div className={styles.firstside1}>
          <ul>
              {randomBrands.slice(0, 25).map((brand, index) => (
                <li key={index}>
                  <Link
                    to={`/parfum-details/${brand.id}`}
                  >
                    {capitalizeWords(brand.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>Most Popular Brends</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist}>
          <div className={styles.firstside}>
            <ul>
              {uniqueBrands.slice(0, 48).map((brand, index) => (
                <li key={index}>
                  <Link
                    to={`/brend/${brand.replace(/\s+/g, "").toLowerCase()}`}
                  >
                    {capitalizeWords(brand)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LaunchesPerfume;
