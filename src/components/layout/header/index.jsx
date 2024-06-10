import React, { useState } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo1.avif";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../icons";
const Header = () => {
  const [modal, setModal] = useState(false);
  const [brends, setBrends] = useState(false);
  const handleClick = () => {
    setModal((prevModal) => !prevModal);
    setBrends(false)
  };
  const handleClick1 = () => {
    setBrends((prevBrends) => !prevBrends);
    setModal(false)
  };
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
      <div className={styles.headers}>
        <hr />
      </div>
      <Wrapper>
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li onClick={handleClick} className={styles.li}>
              Category <ArrowIcon />
            </li>

            <li onClick={handleClick1} className={styles.li}>
              Brends <ArrowIcon/>
            </li>
            <li>About us</li>
            <li>Magazins</li>
            <li>Contact us</li>
          </ul>
          {modal && (
            <div className={styles.dropdown}>
              <ul>
                <Link>Man</Link>
                <Link>Women</Link>
                <Link>Unisex</Link>
              </ul>
            </div>
          )}
          {brends && (
            <div className={styles.brends}>
              <ul>
                <div className={styles.aclass}>

                <h2>A</h2>
                <ul>
                  <Link to={"/antonio"}>Antonio Banderas Golden Secret M</Link>
                
                </ul>
                </div>
                <div className={styles.bclass}>
                <Link>B</Link>
                <ul>
                  <Link to={"/antonio"}>Bacarat</Link>
                </ul>
                </div>
                <h2>C</h2>
                <h2>D</h2>
                <h2>E</h2>
                <h2>F</h2>
                <h2>G</h2>
                <h2>H</h2>
                <h2>I</h2>
                <h2>J</h2>
                <h2>K</h2>
                <h2>L</h2>
                <h2>M</h2>
                <h2>N</h2>
                <h2>O</h2>
                <h2>P</h2>
                <h2>R</h2>
                <h2>S</h2>
                <h2>T</h2>
                <h2>V</h2>
                <h2>W</h2>
                <h2>X</h2>
                <h2>Y</h2>
                <h2>Z</h2>
              </ul>
            </div>
          )}
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
