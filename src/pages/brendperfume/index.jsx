import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import PerfumePhotos from "../../assets/images/parmaphoto.jpg";
import { Link } from "react-router-dom";
import DB from '../../db.json'
const BrendPerfume = () => {
  const [data, setData] = useState([
    {
      image: `${PerfumePhotos}`,
      name:"Aquda Di Cio"
    },
    {
      image: `${PerfumePhotos}`,
      name:"Aquda Di Cio"
    },
    {
      image: `${PerfumePhotos}`,
      name:"Aquda Di Cio"
    },
    {
      image: `${PerfumePhotos}`,
      name:"Aquda Di Cio"
    },
    {
      image: `${PerfumePhotos}`,
      name:"Aquda Di Cio"
    },
  ]);
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          {DB.map((item) => (
            <Link to={"/parfum-details/" + item.id} className={styles.flexborder}>
            <div className={styles.border}>
              <img src={item.imageurl} alt="" />
            </div>
            <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BrendPerfume;
