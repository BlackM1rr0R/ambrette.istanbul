import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import AdidasLogo from '../../assets/images/adidaslogo.jpg'
const BrendLogo = () => {
const [data,setData]=useState([
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
    {
        image:`${AdidasLogo}`,
        name:"Adidas"
    },
])
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>All Brends</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.box}>
                {data.map((item)=>(
                  
                    <div className={styles.controlbox}>

                    <div className={styles.border}>
                                    <img src={item.image} alt="" />
                    </div>
                    <h2>{item.name}</h2>
                    </div>
                 
                ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BrendLogo;
