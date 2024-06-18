import React from "react";
import styles from "./index.module.css";

import Hero from "../../components/hero";
import Brends from "../../components/brends";

import CollectionsPerfume from "../../components/collections";
import LaunchesPerfume from "../../components/launches";
import NewComponent from "../../components/newcomponent";
import FragmanFotos from "../../components/fragmanfotos";
import Notes from "../../components/notes";

const Home = () => {
  return (
    <div className={styles.background}>
     <Hero/>
     <Brends/>
     <Notes/>

     <CollectionsPerfume/>
    <NewComponent/>
     <FragmanFotos/>
     <LaunchesPerfume/>
    </div>
  );
};

export default Home;
