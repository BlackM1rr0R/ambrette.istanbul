import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Link } from "react-router-dom";
import DB from "../../db.json";
import { useParams } from "react-router-dom";
const BrendPerfume = () => {
  const { brendId } = useParams();
  function filterByBrand(data, brand) {
    const normalizedBrand = brand.replace(/\s+/g, "").toLowerCase();
    return data.filter(
      (item) =>
        item.brands.replace(/\s+/g, "").toLowerCase() === normalizedBrand
    );
  }
  const filteredResult = filterByBrand(DB, brendId);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          {filteredResult.map((item) => (
            <Link
              to={"/parfum-details/" + item.id}
              className={styles.flexborder}
            >
              <div className={styles.border}>
                <img src={item.imageurl} alt="" />
              </div>
              <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BrendPerfume;
