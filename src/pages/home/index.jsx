import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Hero from "../../components/hero";
import Brends from "../../components/brends";
import WeekPerfume from "../../components/week";
const Home = () => {
  return (
    <div className={styles.background}>
        <Hero />
      <Wrapper>
        <Brends/>
        <WeekPerfume/>
      </Wrapper>
    </div>
  );
};

export default Home;
