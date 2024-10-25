import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DB from "../../db.json"; // Türkçe veriler
import RUD from "../../rudb.json"; // Rusça veriler
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllPerfume = () => {
  const [perfumes, setPerfumes] = useState([]);
  const { t, i18n } = useTranslation(); // Dil kontrolü için useTranslation kullanıldı

  useEffect(() => {
    const currentDB = i18n.language === "ru" ? RUD : DB; // Dil kontrolü yapılıyor
    setPerfumes(currentDB);
  }, [i18n.language]); // Dil değiştiğinde yeniden yükleniyor

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>{t("allperfume")}</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.box}>
          {perfumes.map((item) => (
            <Link key={item.id} to={`/parfum-details/${item.id}`} className={styles.controlbox}>
              <div className={styles.border}>
                <img src={item.innerimageurl} alt={item.title} loading="lazy" />
              </div>
              <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(AllPerfume);
