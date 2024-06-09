import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Logo from '../../assets/images/parfumlogo.png'
const Hero = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.headers}>
          <div className={styles.headersbackground}>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PERFUMES</li>
            </ul>
            <div className={styles.parfumlogo}>
                <img src={Logo} alt="" />
            </div>
            <ul>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
