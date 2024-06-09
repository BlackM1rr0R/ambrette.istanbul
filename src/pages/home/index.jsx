import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Hero from "../../components/hero";
import Brends from "../../components/brends";
import WeekPerfume from "../../components/week";
import CollectionsPerfume from "../../components/collections";
import LaunchesPerfume from "../../components/launches";
const Home = () => {
  return (
    <div className={styles.background}>
     <Hero/>
     <Brends/>
     <WeekPerfume/>
     <CollectionsPerfume/>
     <LaunchesPerfume/>
    </div>
  );
};

export default Home;
