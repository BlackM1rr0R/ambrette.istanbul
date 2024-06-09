import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Hero from "../../components/hero";
import Brends from "../../components/brends";
const Home = () => {
  return (
    <div className={styles.background}>
     <Hero/>
     <Brends/>
    </div>
  );
};

export default Home;
