import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Wrapper from '../../components/UI/wrapper'
import ManLogo from '../../assets/images/manlogo2.png'
import WomanLogo from '../../assets/images/womanlogo.png'
import UnisexLogo from '../../assets/images/unisexlogo.png'
const GenderComponenten = () => {
  return (
    <Wrapper>

    <div className={styles.background}>
        <div className={styles.gender}>
                <h2>Gender:</h2>
        </div>
      <ul className={styles.control}>
        <li>
          <Link to={"/gender/men"}>
            <img src={ManLogo} alt="" />
          </Link>
        </li>
        <li>
          <Link to={"/gender/women"}>
          <img src={WomanLogo} alt="" />
          </Link>
        </li>
        <li>
          <Link to={"/gender/unisex"}>
          <img src={UnisexLogo} alt="" />
          </Link>
        </li>
      </ul>
    </div>
    </Wrapper>
  );
};

export default GenderComponenten;
