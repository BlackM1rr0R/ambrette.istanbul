import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Antonio from "../../assets/images/dior.svg";
import DiorLogo from "../../assets/images/dior1.jpg";
import { Link, useParams } from "react-router-dom";
import Brands from "../../brends.json";
import useIntersectionObserver from "../home/useIntersectionObserver";

const DiorPerfume = () => {
  const { brendId } = useParams();
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
  }, [observe, unobserve]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div
            ref={(el) => (sections.current[0] = el)}
            className={`${styles.images} ${styles.hidden} ${entries[0]?.isIntersecting ? styles.visible : ""}`}
          >
            <h2>{Brands[brendId].title}</h2>
            <img src={Brands[brendId].imageurl} alt="" />
          </div>
          <div
            ref={(el) => (sections.current[1] = el)}
            className={`${styles.description} ${styles.hidden} ${entries[1]?.isIntersecting ? styles.visible : ""}`}
          >
            <div className={styles.modalclass}>
              <p>{Brands[brendId].description}</p>
            </div>
          </div>
        </div>
        <div className={styles.allperfumes}>
          <div
            ref={(el) => (sections.current[2] = el)}
            className={`${styles.allheaders} ${styles.hidden} ${entries[2]?.isIntersecting ? styles.visible : ""}`}
          >
            <h2>All Fragrances</h2>
          </div>
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (sections.current[3 + index] = el)}
              className={`${styles.dior} ${styles.hidden} ${entries[3 + index]?.isIntersecting ? styles.visible : ""}`}
            >
              <img src={DiorLogo} alt="" />
              <h2>Chris 1947</h2>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DiorPerfume;
