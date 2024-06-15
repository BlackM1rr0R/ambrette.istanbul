import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { ClockIcon, InstagramIcon, LocationIcon, PhoneIcon } from "../../icons";

const MagazinsLocation = () => {
  const [azadliq, setAzadliq] = useState(true);
  const [moskow, setMoskow] = useState(false);
  const [genclik, setGenclik] = useState(false);
  const [nerimanov, setNerimanov] = useState(false);

  const clickAzadliq = () => {
    setGenclik(false);
    setMoskow(false);
    setNerimanov(false);
    setAzadliq((prevAzadliq) => !prevAzadliq);
  };

  const clickGenclik = () => {
    setAzadliq(false);
    setMoskow(false);
    setNerimanov(false);
    setGenclik((prevGenclik) => !prevGenclik);
  };

  const clickNerimanov = () => {
    setGenclik(false);
    setAzadliq(false);
    setMoskow(false);
    setNerimanov((prevNerimanov) => !prevNerimanov);
  };
  const clickMoskow = () => {
    setGenclik(false);
    setAzadliq(false);
    setNerimanov(false);
    setMoskow((prevNerimanov) => !prevNerimanov);
  };
  return (
    <Wrapper>
      <div className={styles.background}>
        <h1>STORES</h1>
        <div className={styles.control}>
          <div className={styles.leftside}>
            <div
              onClick={() => clickAzadliq()}
              className={`${styles.azadlig} ${azadliq ? styles.active : ""}`} // Apply active class if azadliq is true
            >
              <h2>1.Moskow branch</h2>
            </div>

            {azadliq && (
              <div className={styles.modalclass}>
                <div className={styles.iconsclass}>
                  <LocationIcon />
                  <h2>
                    МОСКВА Тк Садовод, корпус Б, этаж 1, линия 1, место 07-13
                  </h2>
                </div>
                <div className={styles.iconsclass}>
                  <PhoneIcon />
                  <h2>+996 501 662 222</h2>
                </div>
                <div className={styles.iconsclass}>
                  <ClockIcon />
                  <h2>09:00-22:00</h2>
                </div>
                <div className={styles.iconsclass}>
                  <InstagramIcon/>
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
            <div className={styles.hr}>
              <hr />
            </div>
            <div
              onClick={() => clickMoskow()}
              className={`${styles.moskow} ${moskow ? styles.active : ""}`} // Apply active class if azadliq is true
            >
              <h2>2.Moskow branch</h2>
            </div>

            {moskow && (
              <div className={styles.modalclass}>
                <div className={styles.iconsclass}>
                  <LocationIcon />
                  <h2> Москва Люблино вход 13 линия д место 117 1 этаж </h2>
                </div>
                <div className={styles.iconsclass}>
                  <PhoneIcon />
                  <h2>+996 501 662 222</h2>
                </div>
                <div className={styles.iconsclass}>
                  <ClockIcon />
                  <h2>09:00-22:00</h2>
                </div>
                <div className={styles.iconsclass}>
                  <InstagramIcon/>
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
            <div className={styles.hr}>
              <hr />
            </div>
            <div
              onClick={() => clickGenclik()}
              className={`${styles.genclik} ${genclik ? styles.active : ""}`}
            >
              <h2>3.Kyrgyzstan branch</h2>
            </div>
            {genclik && (
              <div className={styles.modalclass}>
                <div className={styles.iconsclass}>
                  <ClockIcon />
                  <h2>Ambrette Parfum Kyrgyzstan 🇰🇬</h2>
                </div>
                <div className={styles.iconsclass}>
                  <LocationIcon />
                  <h2>
                    Бишкек, Рынок Дордой / Восточные ворота 15-й ряд бутик 50
                  </h2>
                </div>
                <div className={styles.iconsclass}>
                  <PhoneIcon />
                  <h2>+996 501 662 222</h2>
                </div>
                <div className={styles.iconsclass}>
                  <InstagramIcon/>
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
            <div className={styles.hr}>
              <hr />
            </div>
            <div
              onClick={() => clickNerimanov()}
              className={`${styles.nerimanov} ${
                nerimanov ? styles.active : ""
              }`}
            >
              <h2>4.Kazakhstan branch</h2>
            </div>

            {nerimanov && (
              <div className={styles.modalclass}>
                <div className={styles.iconsclass}>
                  <LocationIcon />
                  <h2>
                    Алматы,ТЦ Адем 1 чёрный 2 этаж 🥏Синий Сектор 23 магазин
                  </h2>
                </div>
                <div className={styles.iconsclass}>
                  <PhoneIcon />
                  <h2>+994507487048</h2>
                </div>
                <div className={styles.iconsclass}>
                  <ClockIcon />
                  <h2>09:00-22:00</h2>
                </div>
                <div className={styles.iconsclass}>
                  <InstagramIcon/>
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
            <div className={styles.hr}>
              <hr />
            </div>
          </div>
          <div className={styles.rightside}>
            <iframe
              className={styles.frame1}
              width="1000"
              height="355"
              src="https://www.youtube.com/embed/Vo5YEWBSKmU?si=iF3x-oGIRqR9O3v7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {azadliq ? (
              <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36039.24113655372!2d37.754901193154964!3d55.62894055411103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6f25a8fc615%3A0x4002efd7d787ef83!2sRynok%20Sadovod!5e0!3m2!1str!2saz!4v1718458378532!5m2!1str!2saz"
                width="1000"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              ""
            )}
            {moskow ? (
              <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1556858815893!2d37.95659709414908!3d55.85996521444058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acd42291920d5%3A0x786a43c4924083c!2s13%20Liniya%2C%20Zabota%2C%20Moskovskaya%20oblast&#39;%2C%20Rusya%2C%20141143!5e0!3m2!1str!2saz!4v1718458485688!5m2!1str!2saz"
                width="1000"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              ""
            )}
            {genclik ? (
              <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078735.82869839!2d71.50639727073073!3d41.93299919258743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb85f5aa63e5f%3A0x659a7367b793882c!2sDordoi%20Bazaar!5e0!3m2!1str!2saz!4v1718458570665!5m2!1str!2saz"
                width="1000"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              ""
            )}
            {nerimanov ? (
              <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.6484540776232!2d76.88639777651541!3d43.279740176504475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836bc6c96e2e81%3A0xf14f0854bdaac884!2sAdem%202%2C3!5e0!3m2!1str!2saz!4v1718458646332!5m2!1str!2saz"
                width="1000"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MagazinsLocation;
