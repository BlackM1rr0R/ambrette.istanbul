import React, { useState } from "react";
import styles from "./index.module.css";
import BackgroundImage from '../../assets/images/backgroundimages.png'
const WeekPerfume = () => {

  return (
    <div className={styles.background}>
      <div className={styles.headers}>
          <img src={BackgroundImage} alt="" />
      </div>
    </div>
  );
};

export default WeekPerfume;
