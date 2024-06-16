import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Antonio from "../../assets/images/dior.svg";
import DiorLogo from "../../assets/images/dior1.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Brands from "../../brends.json";
const DiorPerfume = () => {
  const { brendId } = useParams();
  console.log(brendId);
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.images}>
            <h2>{Brands[brendId].title}</h2>
            <img src={Brands[brendId].imageurl} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.modalclass}>
              <p>
             {Brands[brendId].description}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.allperfumes}>
          <div className={styles.allheaders}>
            <h2>All Fragrances</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
          <div className={styles.dior}>
            <img src={DiorLogo} alt="" />
            <h2>Chris 1947</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DiorPerfume;
