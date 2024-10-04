import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import useIntersectionObserver from "./useIntersectionObserver"

import Hero from "../../components/hero";
import Brends from "../../components/brends";
import CollectionsPerfume from "../../components/collections";
import LaunchesPerfume from "../../components/launches";
import NewComponent from "../../components/newcomponent";
import FragmanFotos from "../../components/fragmanfotos";
import Notes from "../../components/notes";
import GenderComponenten from "../../components/gendercomponenten";

const Home = () => {
  const [observe, unobserve, entries] = useIntersectionObserver({
    threshold: 0.1,
  });

  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section) => {
      observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        unobserve(section);
      });
    };
  }, [observe, unobserve]);

  return (
    <div className={styles.background}>
      <div ref={(el) => (sections.current[0] = el)} className={`${styles.hidden} ${entries[0]?.isIntersecting ? styles.visible : ''}`}><Hero /></div>
      <div ref={(el) => (sections.current[1] = el)} className={`${styles.hidden} ${entries[1]?.isIntersecting ? styles.visible : ''}`}><Brends /></div>
      <div ref={(el) => (sections.current[2] = el)} className={`${styles.hidden} ${entries[2]?.isIntersecting ? styles.visible : ''}`}><GenderComponenten /></div>
      <div ref={(el) => (sections.current[4] = el)} className={`${styles.hidden} ${entries[4]?.isIntersecting ? styles.visible : ''}`}><CollectionsPerfume /></div>
      <div ref={(el) => (sections.current[5] = el)} className={`${styles.hidden} ${entries[5]?.isIntersecting ? styles.visible : ''}`}><Notes /></div>
      <div ref={(el) => (sections.current[6] = el)} className={`${styles.hidden} ${entries[6]?.isIntersecting ? styles.visible : ''}`}><FragmanFotos /></div>
      <div ref={(el) => (sections.current[7] = el)} className={`${styles.hidden} ${entries[7]?.isIntersecting ? styles.visible : ''}`}><LaunchesPerfume /></div>
    </div>
    //      <div ref={(el) => (sections.current[3] = el)} className={`${styles.hidden} ${entries[3]?.isIntersecting ? styles.visible : ''}`}><NewComponent /></div>
  );
};

export default React.memo(Home);
