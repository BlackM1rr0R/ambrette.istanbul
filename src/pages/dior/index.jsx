import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Antonio from "../../assets/images/dior.svg";
import DiorLogo from '../../assets/images/dior1.jpg'
import { Link } from "react-router-dom";

const DiorPerfume = () => {

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.images}>
            <h2>Dior fragrances</h2>
            <img src={Antonio} alt="" />
          
          </div>
          <div className={styles.description}>
              <div className={styles.modalclass}>
                <p>
                  Dior is represented by 278 fragrances in our encyclopedia.
                  Dior is a brand with history. The earliest fragrance of this
                  brand in our encyclopedia was created in 1947, the last - in
                  2024. Dior has worked with such perfumers as Francis
                  Kurkdjian, Edmond Roudnitska, Beatrice Piquet, Paul Vacher,
                  Pierre Bourdon, Maurice Roger, Max Gavarry, Domitille Michalon
                  Bertier, Jacques Cavallier, Jean Martel, Florence Idier,
                  Nathalie Lorson, François Demachy, Thierry Wasser, Christian
                  Dussoulier, Olivier Polge, Guy Robert, Jean-Louis Sieuzac,
                  Nejla Barbir, Dominique Ropion, Olivier Cresp, Jean-Pierre
                  Bethouart, Michel Almairac, Bertrand Duchaufour, Louise
                  Turner, Olivier Gillotin, Olivier Pescheux, Natalie
                  Gracia-Cetto, Carlos Viñals , Calice Becker, Annick Menardo,
                  Jean Carles, Christine Nagel, Edouard Flechier, Carlos Benaim
                  and Edouard Fléchier.
                </p>
              </div>
          
          </div>
        </div>
        <div className={styles.allperfumes}>
                <div className={styles.allheaders}>
                    <h2>All Fragrances</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
                <div className={styles.dior}>
                        <img src={DiorLogo} alt="" />
                        <h2>Chris 1947</h2>
                </div>
        </div>
       
       
      </div>
    </Wrapper>
  );
};

export default DiorPerfume;
