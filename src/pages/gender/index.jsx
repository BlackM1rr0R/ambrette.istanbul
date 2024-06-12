import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import PerfumePhoto from '../../assets/images/antonio.jpeg'
const Gender = () => {
const [data,setData]=useState([
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
 },
 {
    image:`${PerfumePhoto}`,
    name:"Antonio Banderas"
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
            <h2>Gender</h2>
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

export default Gender;
