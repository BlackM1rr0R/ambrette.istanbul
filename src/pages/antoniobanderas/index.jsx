import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Link, useParams } from "react-router-dom";
import DB from "../../db.json";
import RUD from "../../rudb.json"; 
import useIntersectionObserver from "../home/useIntersectionObserver";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";

const ParfumDetails = () => {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState(false);
  const [brends, setBrends] = useState(false);
  const [foundObject, setFoundObject] = useState(null);
  const [englishFoundObject, setEnglishFoundObject] = useState(null);
  const [relatedPerfumes, setRelatedPerfumes] = useState([]);
  const certificatesRef = useRef(null);
  const { id } = useParams();

  const handleClick = () => {
    setModal((prevModal) => !prevModal);
  };

  const handleClick1 = () => {
    setNotes((prevNotes) => !prevNotes);
  };

  const handleClick2 = () => {
    setBrends((prevBrends) => !prevBrends);
  };

  useEffect(() => {
    const currentDB = i18n.language === "ru" ? RUD : DB;
    const obj = currentDB.find((item) => item.id === parseInt(id, 10));
    const obj2 = DB.find((item) => item.id === parseInt(id, 10));
    setFoundObject(obj);
    setEnglishFoundObject(obj2)
    if (obj) {
      const related = currentDB.filter(
        (item) => item.brands === obj.brands && item.id !== obj.id
      );
      setRelatedPerfumes(related);
    }

  }, [id, i18n.language]); 

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
          className={`${styles.control} ${styles.hidden} ${
            entries[0]?.isIntersecting ? styles.visible : ""
          }`}
        >
          <div className={styles.images}>
            <img src={foundObject?.innerimageurl} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.nameParfum}>
              <h2>
                {i18n.language === "ru"
                  ? foundObject?.title
                  : foundObject?.title}
              </h2>
            </div>
            <div onClick={handleClick} className={styles.info}>
              <h2>{t("description")}</h2>
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
              <h2>{t("fragnot")}</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {notes && (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <h2>{t("fragfamily")}:</h2>
                  <h3>{foundObject?.fragrance.family}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>{t("topnotes")}:</h2>
                  <h3>{foundObject?.fragrance.topnotes}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>{t("midnotes")}:</h2>
                  <h3>{foundObject?.fragrance.midnotes}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>{t("basenotes")}:</h2>
                  <h3>{foundObject?.fragrance.basenotes}</h3>
                </div>
              </div>
            )}
            <div onClick={handleClick2} className={styles.info}>
              <h2>{t("brends")}</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {brends && (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <Link to={`/brend-perfume/${englishFoundObject?.brands}`}>
                    {foundObject?.brands}
                  </Link>
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
        <div className={styles.boxs}>
          <Swiper
            modules={[Autoplay, Pagination]}
            className={styles.price}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                spaceBetween: 24,
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 24,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 50,
                slidesPerView: 3,
              },
            }}
          >
            {relatedPerfumes.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  target="_blank"
                  to={"/parfum-details/" + item.id}
                  className={styles.border}
                >
                  <img src={item.imageurl} alt="" loading="lazy" />
                  <h2>{item.title}</h2>
                  <h3>{item.gender}</h3>
                  <Link
                    to={"/parfum-details/" + item.id}
                    target="_blank"
                    className={styles.button}
                  >
                    {t("seemore")}
                  </Link>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(ParfumDetails);
