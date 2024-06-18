import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper"; // Wrapper bileşeninin doğru yolunu kontrol edin
import DB from "../../db.json";
import { Link } from "react-router-dom";

const Gender = () => {
  const [formattedTitles, setFormattedTitles] = useState([]);

  useEffect(() => {
    const formatted = DB.map((item) => ({
      id: item.id,
      formattedTitle: formatTitle(item.title),
      innerimageurl:item.innerimageurl
    }));
    setFormattedTitles(formatted);
  }, []);

  const formatTitle = (title) => {
    return title
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>Gender</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.box}>
          {formattedTitles.map((item) => (
            <Link to={"/parfum-details/" + item.id} className={styles.controlbox} key={item.id}>
              <div className={styles.border}>
                <img src={item.innerimageurl} alt="" />
              </div>
              <h2>{item.formattedTitle}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Gender;
