import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper";
import ManLogo from "../../assets/images/manlogo2.png";
import WomanLogo from "../../assets/images/womanlogo.png";
import UnisexLogo from "../../assets/images/unisexlogo.png";
import useIntersectionObserver from "../home/useIntersectionObserver";

const GenderSelected = () => {
  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });

  const logosRef = useRef([]);

  useEffect(() => {
    logosRef.current.forEach((logo) => {
      observe(logo);
    });

    return () => {
      logosRef.current.forEach((logo) => {
        unobserve(logo);
      });
    };
  }, [observe, unobserve]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div
          ref={(el) => (logosRef.current[0] = el)}
          className={`${styles.gender} ${styles.hidden} ${entries[0]?.isIntersecting ? styles.visible : ""}`}
        >
          <h2>Gender:</h2>
        </div>
        <ul className={styles.control}>
          <li
            ref={(el) => (logosRef.current[1] = el)}
            className={`${styles.hidden} ${entries[1]?.isIntersecting ? styles.visible : ""}`}
          >
            <Link to={"/gender/men"}>
              <img src={ManLogo} alt="Men" loading="lazy" />
            </Link>
          </li>
          <li
            ref={(el) => (logosRef.current[2] = el)}
            className={`${styles.hidden} ${entries[2]?.isIntersecting ? styles.visible : ""}`}
          >
            <Link to={"/gender/women"}>
              <img src={WomanLogo} alt="Women" loading="lazy" />
            </Link>
          </li>
          <li
            ref={(el) => (logosRef.current[3] = el)}
            className={`${styles.hidden} ${entries[3]?.isIntersecting ? styles.visible : ""}`}
          >
            <Link to={"/gender/unisex"}>
              <img src={UnisexLogo} alt="Unisex" loading="lazy" />
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default React.memo(GenderSelected);
