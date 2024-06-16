import React from "react";
import styles from "./index.module.css";
import DB from "../../db.json";
import brands from "../../brends.json";
import { Link } from "react-router-dom";
import Wrapper from '../../components/UI/wrapper';

const BrendLogo = () => {
  const uniqueBrands = [...new Set(DB.map((product) => product.brands))].sort();

  const groupedBrands = uniqueBrands.reduce((acc, brand) => {
    const firstLetter = brand.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);
    return acc;
  }, {});

  return (
    <Wrapper>
      <div className={styles.background}>
        {Object.keys(groupedBrands).map((letter, index) => (
          <div className={styles.control} key={index}>
            <div className={styles.brendheaders}>
              <hr />
              <h2>{letter}</h2>
              <hr />
            </div>
            <div className={styles.controlbox}>
              {groupedBrands[letter].map((brand, brandIndex) => {
                const brandKey = brand.replace(/\s+/g, "").toLowerCase();
                const brandData = brands[brandKey];

                return (
                  <Link
                    to={brandData ? `/brend-perfume/${brandKey}` : "#"}
                    key={brandIndex}
                    className={styles.controlclass}
                  >
                    <div className={styles.border}>
                      {brandData ? (
                        <img
                          src={brandData.imageurl}
                          alt={brand}
                        />
                      ) : (
                        <div>No image available</div>
                      )}
                    </div>
                    <h2>{brand}</h2>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default BrendLogo;
