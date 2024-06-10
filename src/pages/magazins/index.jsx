import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
const MagazinsLocation = () => {
  const [azadliq, setAzadliq] = useState(false);
  const [genclik, setGenclik] = useState(false);
  const [nerimanov, setNerimanov] = useState(false);

  const clickAzadliq = () => {
    setGenclik(false);
    setNerimanov(false);
    setAzadliq((prevAzadliq) => !prevAzadliq);
  };
  const clickGenclik = () => {
    setAzadliq(false);
    setNerimanov(false);
    setGenclik((prevGenclik) => !prevGenclik);
  };
  const clickNerimanov = () => {
    setGenclik(false);
    setAzadliq(false);
    setNerimanov((prevNerimanov) => !prevNerimanov);
  };
  return (
    <Wrapper>
      <div className={styles.background}>
        <h1>STORES</h1>
        <div className={styles.control}>
          <div className={styles.leftside}>
            <div onClick={() => clickAzadliq()} className={styles.azadlig}>
              <h2>Moskow branch</h2>
            </div>

            {azadliq ? (
              <div className={styles.modalclass}>
                <h2>Yusif Cemenzeminli 18/2</h2>
                <h2>+994507487048</h2>
                <h2>09:00-22:00</h2>
              </div>
            ) : (
              ""
            )}

            <div onClick={() => clickGenclik()} className={styles.genclik}>
              <h2>Genclik branch</h2>
            </div>
            {genclik ? (
              <div className={styles.modalclass}>
                <h2>Yusif Cemenzeminli 18/2</h2>
                <h2>+994507487048</h2>
                <h2>09:00-22:00</h2>
              </div>
            ) : (
              ""
            )}
            <div onClick={() => clickNerimanov()} className={styles.nerimanov}>
              <h2>Nerimanov branch</h2>
            </div>
            {nerimanov ? (
              <div className={styles.modalclass}>
                <h2>Yusif Cemenzeminli 18/2</h2>
                <h2>+994507487048</h2>
                <h2>09:00-22:00</h2>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.rightside}>
            <iframe
              width="860"
              height="515"
              src="https://www.youtube.com/embed/Vo5YEWBSKmU?si=iF3x-oGIRqR9O3v7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577329.6677428926!2d36.72647335408706!3d55.58123062687081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ac82c9958e7af%3A0xb57a3f488cfc4ca!2sMoskova%2C%20Rusya!5e0!3m2!1str!2saz!4v1718025626995!5m2!1str!2saz"
              width="860"
              height="450"
            
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MagazinsLocation;
