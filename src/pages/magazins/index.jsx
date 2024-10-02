import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import {
  ClockIcon,
  InstagramIcon,
  KgIcon,
  KzIcon,
  LocationIcon,
  MoskowIcon,
  PhoneIcon,
  UzIcon,
} from "../../icons";
import KazakVideo from "../../assets/images/kazakvideo.mp4";
const MagazinsLocation = () => {
  const [azadliq, setAzadliq] = useState(true);
  const [moskow, setMoskow] = useState(false);
  const [genclik, setGenclik] = useState(false);
  const [nerimanov, setNerimanov] = useState(false);
  const [ozbekistan, setOzbekistan] = useState(false);

  const clickAzadliq = () => {
    setGenclik(false);
    setMoskow(false);
    setNerimanov(false);
    setOzbekistan(false);
    setAzadliq((prevAzadliq) => !prevAzadliq);
  };

  const clickGenclik = () => {
    setAzadliq(false);
    setMoskow(false);
    setNerimanov(false);
    setOzbekistan(false);
    setGenclik((prevGenclik) => !prevGenclik);
  };

  const clickNerimanov = () => {
    setGenclik(false);
    setAzadliq(false);
    setMoskow(false);
    setOzbekistan(false);
    setNerimanov((prevNerimanov) => !prevNerimanov);
  };
  const clickMoskow = () => {
    setGenclik(false);
    setAzadliq(false);
    setNerimanov(false);
    setOzbekistan(false);
    setMoskow((prevNerimanov) => !prevNerimanov);
  };
  const clickOzbekistan = () => {
    setGenclik(false);
    setAzadliq(false);
    setNerimanov(false);
    setMoskow(false);
    setOzbekistan((prevNerimanov) => !prevNerimanov);
  };
  return (
    <Wrapper>
      <div className={styles.background}>
        <h1>STORES</h1>
        <div className={styles.control}>
          <div className={styles.leftside}>
            <div
              onClick={() => clickAzadliq()}
              className={`${styles.azadlig} ${azadliq ? styles.active : ""}`}
            >
              <h2>
                1.Moskow branch <MoskowIcon />
              </h2>
            </div>

            {azadliq && (
              <div className={styles.modalclass}>
                <div className={styles.iconsclass}>
                  <LocationIcon />
                  <h2>
                    МОСКВА Тк Садовод, Корпус Б, этаж 1, линия 1, место 07-13
                  </h2>
                </div>
                <div className={styles.iconsclass}>
                  <PhoneIcon />
                  <h2>+79627428866 WhatsApp</h2>
                </div>
                <div className={styles.iconsclass}>
                  <ClockIcon />
                  <h2>09:00-22:00</h2>
                </div>
                <div className={styles.iconsclass}>
                  <InstagramIcon />
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
            <div className={styles.hr}>
              <hr />
            </div>
            <div
              onClick={() => clickMoskow()}
              className={`${styles.moskow} ${moskow ? styles.active : ""}`} 
            >
              <h2>
                2.Moskow branch <MoskowIcon />
              </h2>
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
                  <InstagramIcon />
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
              <h2>
                3.Kyrgyzstan branch <KgIcon />
              </h2>
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
                  <InstagramIcon />
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
              <h2>
                4.Kazakhstan branch <KzIcon />
              </h2>
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
                  <InstagramIcon />
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
            <div className={styles.hr}>
              <hr />
            </div>
            <div
              onClick={() => clickOzbekistan()}
              className={`${styles.ozbekistan} ${
                ozbekistan ? styles.active : ""
              }`}
            >
              <h2>
                5.Uzbekistan branch <UzIcon />
              </h2>
            </div>

            {ozbekistan && (
              <div className={styles.modalclass}>
                <div className={styles.iconsclass}>
                  <LocationIcon />
                  <h2>Город Ташкент Яккасарайский район Массив Башлык 5</h2>
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
                  <InstagramIcon />
                  <h2>Instagram Adress</h2>
                </div>
              </div>
            )}
          </div>
          <div className={styles.rightside}>
            {azadliq ? (
              <>
                 <iframe
                  className={styles.frame1}
                  width="1000"
                  height="250"
                  src="https://www.youtube.com/embed/gq9gKWCa7Nc?si=E5FMUWTU-10CSgno"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className={styles.frame1}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36039.24113655372!2d37.754901193154964!3d55.62894055411103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6f25a8fc615%3A0x4002efd7d787ef83!2sRynok%20Sadovod!5e0!3m2!1str!2saz!4v1718458378532!5m2!1str!2saz"
                  width="1000"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </>
            ) : (
              ""
            )}
            {moskow ? (
              <>
                      <iframe  className={styles.frame1}
                  width="1000"
                  height="250"
                  src="https://www.youtube.com/embed/gq9gKWCa7Nc?si=E5FMUWTU-10CSgno"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>  
                   <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1556858815893!2d37.95659709414908!3d55.85996521444058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acd42291920d5%3A0x786a43c4924083c!2s13%20Liniya%2C%20Zabota%2C%20Moskovskaya%20oblast&#39;%2C%20Rusya%2C%20141143!5e0!3m2!1str!2saz!4v1718458485688!5m2!1str!2saz"
                width="1000"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </>
         
            ) : (
              ""
            )}
            {genclik ? (
              <>
                <iframe  className={styles.frame1}
                  width="1000"
                  height="250"
                  src="https://www.youtube.com/embed/gq9gKWCa7Nc?si=E5FMUWTU-10CSgno"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className={styles.frame1}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078735.82869839!2d71.50639727073073!3d41.93299919258743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb85f5aa63e5f%3A0x659a7367b793882c!2sDordoi%20Bazaar!5e0!3m2!1str!2saz!4v1718458570665!5m2!1str!2saz"
                  width="1000"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </>
            ) : (
              ""
            )}
            {nerimanov ? (<>
              <iframe  className={styles.frame1}
                  width="1000"
                  height="250"
                  src="https://www.youtube.com/embed/gq9gKWCa7Nc?si=E5FMUWTU-10CSgno"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.6484540776232!2d76.88639777651541!3d43.279740176504475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836bc6c96e2e81%3A0xf14f0854bdaac884!2sAdem%202%2C3!5e0!3m2!1str!2saz!4v1718458646332!5m2!1str!2saz"
                width="1000"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </>

            ) : (
              ""
            )}
            {ozbekistan ? (
              <>
                     <iframe  className={styles.frame1}
                  width="1000"
                  height="250"
                  src="https://www.youtube.com/embed/gq9gKWCa7Nc?si=E5FMUWTU-10CSgno"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                 <iframe
                className={styles.frame1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5997.708519121998!2d69.24787219705037!3d41.26850904935911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a9b5941f68d%3A0xebec127243e4f2aa!2zQmFzaGx5aywgMTAwMDIyLCBUYcWfa2VudCwgw5Z6YmVraXN0YW4!5e0!3m2!1str!2saz!4v1718920939370!5m2!1str!2saz"
                height="250"
                width="1000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </>
             
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(MagazinsLocation);
