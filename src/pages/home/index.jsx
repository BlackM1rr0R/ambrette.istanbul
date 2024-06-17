import React from "react";
import styles from "./index.module.css";

import Hero from "../../components/hero";
import Brends from "../../components/brends";
import WeekPerfume from "../../components/week";
import CollectionsPerfume from "../../components/collections";
import LaunchesPerfume from "../../components/launches";
import NewComponent from "../../components/newcomponent";
import FragmanFotos from "../../components/fragmanfotos";

const Home = () => {
  return (
    <div className={styles.background}>
     <Hero/>
     <Brends/>
     <WeekPerfume/>
     <CollectionsPerfume/>
    <NewComponent/>
     <FragmanFotos/>
     <LaunchesPerfume/>
    </div>
  );
};

export default Home;
