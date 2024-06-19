import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import BackgroundImage1 from "../../assets/images/iyde1.png";
import BackgroundImage2 from "../../assets/images/iyde2.png";
import BackgroundImage3 from "../../assets/images/iyde3.png";
import BackgroundImage4 from "../../assets/images/iyde4.png";
const NewComponent = () => {
  const [data, setData] = useState([
    {
      images: `${BackgroundImage1}`,
     
    },
    {
      images: `${ BackgroundImage2 }`,
     
    },
    {
      images: `${BackgroundImage3}`,
     
    },
    {
      images: `${BackgroundImage4}`,
    
    },
  ]);
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          {data.map((item) => (
            <div className={styles.border}>
              <img src={item.images} alt="" />
            
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default NewComponent;
