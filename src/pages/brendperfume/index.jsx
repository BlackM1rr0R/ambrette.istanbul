import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Link, useParams } from "react-router-dom";
import DB from "../../db.json";
import useIntersectionObserver from "../home/useIntersectionObserver"; // Import the custom hook

const BrendPerfume = () => {
  const { brendId } = useParams();

  function filterByBrand(data, brand) {
    const normalizedBrand = brand.replace(/\s+/g, "").toLowerCase();
    return data.filter(
      (item) => item.brands.replace(/\s+/g, "").toLowerCase() === normalizedBrand
    );
  }

  const filteredResult = filterByBrand(DB, brendId);

  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });

  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section) => {
      observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        unobserve(section);
      });
    };
  }, [observe, unobserve, filteredResult]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          {filteredResult.map((item, index) => (
            <Link
              to={"/parfum-details/" + item.id}
              className={`${styles.flexborder} ${styles.hidden} ${entries[index]?.isIntersecting ? styles.visible : ''}`}
              ref={(el) => (sections.current[index] = el)}
              key={item.id}
            >
              <div className={styles.border}>
                <img src={item.imageurl} alt={item.title} />
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
