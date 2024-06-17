import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import BackgroundImage1 from "../../assets/images/box1.jpg";
import BackgroundImage2 from "../../assets/images/box2.jpg";
import BackgroundImage3 from "../../assets/images/box3.jpg";
import BackgroundImage4 from "../../assets/images/box4.jpg";
const NewComponent = () => {
  const [data, setData] = useState([
    {
      images: `${BackgroundImage1}`,
      title:
        "BEST SCENTS OF SUMMER 2024: Last Season by Meo Fusciuni and Água de Sândalo by Phebo",
    },
    {
      images: `${ BackgroundImage2 }`,
      title:
        "BEST SCENTS OF SUMMER 2024: Last Season by Meo Fusciuni and Água de Sândalo by Phebo",
    },
    {
      images: `${BackgroundImage3}`,
      title:
        "BEST SCENTS OF SUMMER 2024: Last Season by Meo Fusciuni and Água de Sândalo by Phebo",
    },
    {
      images: `${BackgroundImage4}`,
      title:
        "BEST SCENTS OF SUMMER 2024: Last Season by Meo Fusciuni and Água de Sândalo by Phebo",
    },
  ]);
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          {data.map((item) => (
            <div className={styles.border}>
              <img src={item.images} alt="" />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default NewComponent;
