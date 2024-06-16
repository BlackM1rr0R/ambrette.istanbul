import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
import DB from "../../db.json";
const LaunchesPerfume = () => {
  const uniqueBrands = [...new Set(DB.map((product) => product.brands))];

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers1}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>Most Popular Perfumes</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist1}>
          <div className={styles.firstside1}>
            <ul>
              <li>1. Khamrah Lattafa Perfumes</li>
              <li>2. Khamrah Lattafa Perfumes</li>
              <li>3. Khamrah Lattafa Perfumes</li>
              <li>4. Khamrah Lattafa Perfumes</li>
              <li>5. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>6. Khamrah Lattafa Perfumes</li>
              <li>7. Khamrah Lattafa Perfumes</li>
              <li>8. Khamrah Lattafa Perfumes</li>
              <li>9. Khamrah Lattafa Perfumes</li>
              <li>10. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>11. Khamrah Lattafa Perfumes</li>
              <li>12. Khamrah Lattafa Perfumes</li>
              <li>13. Khamrah Lattafa Perfumes</li>
              <li>14. Khamrah Lattafa Perfumes</li>
              <li>15. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>16. Khamrah Lattafa Perfumes</li>
              <li>17. Khamrah Lattafa Perfumes</li>
              <li>18. Khamrah Lattafa Perfumes</li>
              <li>19. Khamrah Lattafa Perfumes</li>
              <li>20. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>21. Khamrah Lattafa Perfumes</li>
              <li>22. Khamrah Lattafa Perfumes</li>
              <li>23. Khamrah Lattafa Perfumes</li>
              <li>24. Khamrah Lattafa Perfumes</li>
            </ul>
          </div>
        </div>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>Most Popular Brends</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist}>
          <div className={styles.firstside}>
            <ul>
              {uniqueBrands.slice(0, 48).map((brand) => (
                <li>
                  <Link
                    to={`/brend/${brand.replace(/\s+/g, "").toLowerCase()}`}
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LaunchesPerfume;
