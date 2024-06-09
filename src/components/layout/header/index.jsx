import React from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo1.avif";
import Wrapper from "../../UI/wrapper";
const Header = () => {
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.images}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.selected}>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Russian</option>
            </select>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
