import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Link, useParams } from "react-router-dom";
import Brands from "../../brends.json";
import useIntersectionObserver from "../home/useIntersectionObserver";
import DB from '../../db.json';

const DiorPerfume = () => {
  const { brendId } = useParams();
  const [relatedPerfumes, setRelatedPerfumes] = useState([]);
  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });

  const sections = useRef([]);

  useEffect(() => {
    const related = DB.filter((item) => item.brands === parseInt(brendId, 10));
    setRelatedPerfumes(related);
  }, [brendId]);

  useEffect(() => {
    sections.current.forEach((section) => {
      if (section) observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) unobserve(section);
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
            <h2>{Brands[brendId]?.title}</h2>
            <img src={Brands[brendId]?.imageurl} alt={Brands[brendId]?.title} />
          </div>
          <div
            ref={(el) => (sections.current[1] = el)}
            className={`${styles.description} ${styles.hidden} ${entries[1]?.isIntersecting ? styles.visible : ""}`}
          >
            <div className={styles.modalclass}>
              <p>{Brands[brendId]?.description}</p>
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  );
};

export default DiorPerfume;
