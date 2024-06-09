import React from "react";
import styles from "./index.module.css";
import NewYork from "../../assets/images/newyork.png";
import Vogue from "../../assets/images/vogue.png";
import Byrdie from "../../assets/images/byrdie.png";
import Allure from "../../assets/images/allure.png";
import Bazaar from "../../assets/images/bazaar.png";
const Brends = () => {
  return (
    <div className={styles.background}>
      <div className={styles.images}>
        <img src={NewYork} alt="" />
        <img src={Vogue} alt="" />
        <img src={Byrdie} alt="" />
        <img src={Allure} alt="" />
        <img src={Bazaar} alt="" />
        <img src={NewYork} alt="" />
      </div>
    </div>
  );
};

export default Brends;
