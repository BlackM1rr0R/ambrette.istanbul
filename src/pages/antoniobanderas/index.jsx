import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Antonio from "../../assets/images/antoniobanderas1.webp";
const AntonioBanderas = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState(false);
  const handleClick = () => {
    setModal((prevModal) => !prevModal);
  };
  const handleClick1 = () => {
    setNotes((prevNotes) => !prevNotes);
  };
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.images}>
            <h2>Antonio Banderas Golden Secret M</h2>
            <img src={Antonio} alt="" />
            <h2>4097582</h2>
          </div>
          <div className={styles.description}>
            <div onClick={() => handleClick()} className={styles.info}>
              <h2>Description</h2>
              <h2>+</h2>
            </div>
            <div>
              <hr />
            </div>
            {modal ? (
              <div className={styles.modalclass}>
                <p>
                  The Golden Secret men's fragrance by Banderas is an
                  unmistakable distillation of seduction, thanks to the perfect
                  blend of spicy red peppercorn and nutmeg accords and the
                  warmth of cedar wood and leather. A spicy, woody fragrance
                  with a leather scent, presented in a luxurious gold bottle
                  made for special moments.
                </p>
              </div>
            ) : (
              ""
            )}
            <div onClick={() => handleClick1()} className={styles.info}>
              <h2>FRAGRANCE NOTES</h2>
              <h2>+</h2>
            </div>
            <div>
              <hr />
            </div>
            {notes ? (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <h2>Fragrance Family</h2>
                  <h3>Floral,Amber</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Top Notes</h2>
                  <h3>Mandarin</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Mid Notes</h2>
                  <h3>Rose,Jasmine</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Base Notes</h2>
                  <h3>Patchouli</h3>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AntonioBanderas;
