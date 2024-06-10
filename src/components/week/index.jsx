import React, { useState } from "react";
import styles from "./index.module.css";
import Kisi from "../../assets/images/kisi.png";
import Qadin from "../../assets/images/qadin.png";
import Unisex from "../../assets/images/unisex.png";
const WeekPerfume = () => {
  return (
    <div className={styles.background}>
      <div className={styles.headers}>
        <div className={styles.top}>
          <img src={Kisi} alt="" />
          <img src={Qadin} alt="" />
        </div>
        <div className={styles.bottom}>
          <img src={Unisex} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeekPerfume;
