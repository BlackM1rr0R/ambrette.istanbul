import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DB from "../../db.json";
import { Link } from "react-router-dom";

const AllPerfume = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    setPerfumes(DB);
  }, []);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>All Perfumes</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.box}>
          {perfumes.map((item) => (
            <Link key={item.id} to={`/parfum-details/${item.id}`} className={styles.controlbox}>
              <div className={styles.border}>
                <img src={item.innerimageurl} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllPerfume;
