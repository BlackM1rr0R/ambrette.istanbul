import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Link, useParams } from "react-router-dom";
import DB from '../../db.json';
import useIntersectionObserver from "../home/useIntersectionObserver";

const ParfumDetails = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState(false);
  const [brends, setBrends] = useState(false);
  const [foundObject, setFoundObject] = useState(null);

  const handleClick = () => {
    setModal((prevModal) => !prevModal);
  };

  const handleClick1 = () => {
    setNotes((prevNotes) => !prevNotes);
  };

  const handleClick2 = () => {
    setBrends((prevBrends) => !prevBrends);
  };

  const { id } = useParams();

  useEffect(() => {
    const obj = DB.find((item) => item.id === parseInt(id, 10));
    setFoundObject(obj);
  }, [id]);

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
        <div
          ref={(el) => (sections.current[0] = el)}
          className={`${styles.control} ${styles.hidden} ${entries[0]?.isIntersecting ? styles.visible : ''}`}
        >
          <div className={styles.images}>
            <h2>{foundObject?.title}</h2>
            <img src={foundObject?.innerimageurl} alt="" />
          </div>
          <div className={styles.description}>
            <div onClick={handleClick} className={styles.info}>
              <h2>Description</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {modal && (
              <div className={styles.modalclass}>
                <p>{foundObject?.description}</p>
              </div>
            )}
            <div onClick={handleClick1} className={styles.info}>
              <h2>Fragrance notes</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {notes && (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <h2>Fragrance Family:</h2>
                  <h3>{foundObject?.fragrance.family}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Top Notes:</h2>
                  <h3>{foundObject?.fragrance.topnotes}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Mid Notes:</h2>
                  <h3>{foundObject?.fragrance.midnotes}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Base Notes:</h2>
                  <h3>{foundObject?.fragrance.basenotes}</h3>
                </div>
              </div>
            )}
            <div onClick={handleClick2} className={styles.info}>
              <h2>Brends</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {brends && (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <h3>{foundObject?.brands}</h3>
                </div>
              </div>
            )}
            <div className={styles.info}>
              <h2>#{foundObject?.id}</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ParfumDetails;
