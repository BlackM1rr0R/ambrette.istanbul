import React, { useState } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../icons";
import DB from "../../../db.json";

const uniqueBrands = [...new Set(DB.map((product) => product.brands))].sort();

const groupedBrands = uniqueBrands.reduce((acc, brand) => {
  const firstLetter = brand.charAt(0).toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(brand);
  return acc;
}, {});
const Header = () => {
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <Link to={"/"} className={styles.images}>
            <img src={Logo} alt="" />
          </Link>
          <div className={styles.input}>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.selected}>
            <h2>en</h2>
            <hr />
            <h2>ru</h2>
          </div>
        </div>
      </div>
      <div className={styles.headers}>
        <hr />
      </div>
      <Wrapper>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <div className={styles.dropdown}>
              <Link to={"/genderselected"}>
                Category <ArrowIcon />
              </Link>
              <ul className={styles.dropdowncontent}>
                <li>
                  <Link to={"/gender/men"}>Man</Link>
                </li>
                <li>
                  <Link to={"/gender/women"}>Women</Link>
                </li>
                <li>
                  <Link to={"/gender/unisex"}>Unisex</Link>
                </li>
              </ul>
            </div>

            <div className={styles.dropdownbrends}>
              <Link to={"/brends"}>
                Brends <ArrowIcon />
              </Link>
              <div className={styles.dropdowncontrol}>
                {Object.keys(groupedBrands).map((letter, index) => (
                  <div className={styles.control5} key={index}>
                    <div className={styles.brendheaders}>
                     
                      <h2>{letter}</h2>
                    
                    </div>

                    {groupedBrands[letter].map((brand, brandIndex) => {
                      const brandKey = brand.replace(/\s+/g, "").toLowerCase();
                      const brandData = brand[brandKey];

                      return (
                        <Link
                          to={`/brend-perfume/${brandKey}`}
                          key={brandIndex}
                          className={styles.controlclass}
                        >
                          <h2>{brand}</h2>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <Link to={"/about"}>About us</Link>
            <Link to={"/magazins"}>Magazins</Link>
            <Link to={"/contact"}>Contact us</Link>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
