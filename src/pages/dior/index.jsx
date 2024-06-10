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
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>Most Popular Brends</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist}>
          <div className={styles.firstside}>
            <ul>
              <Link to={"/dior"}>1. Dior</Link>
              <li>2. Dior</li>
              <li>3. Dior</li>
              <li>4. Dior</li>
              <li>5. Dior</li>
            </ul>
            <ul>
              <li>6. Dior</li>
              <li>7. Dior</li>
              <li>8. Dior</li>
              <li>9. Dior</li>
              <li>10. Dior</li>
            </ul>
            <ul>
              <li>11. Dior</li>
              <li>12. Dior</li>
              <li>13. Dior</li>
              <li>14. Dior</li>
              <li>15. Dior</li>
            </ul>
            <ul>
              <li>16. Dior</li>
              <li>17. Dior</li>
              <li>18. Dior</li>
              <li>19. Dior</li>
              <li>20. Dior</li>
            </ul>
            <ul>
              <li>21. Dior</li>
              <li>22. Dior</li>
              <li>23. Dior</li>
              <li>24. Dior</li>
              <li>25. Dior</li>
            </ul>
            <ul>
              <li>26. Dior</li>
              <li>27. Dior</li>
              <li>28. Dior</li>
              <li>29. Dior</li>
              <li>30. Dior</li>
            </ul>
          </div>
          <div className={styles.twoside}>
            <ul>
              <li>31. Dior</li>
              <li>32. Dior</li>
              <li>33. Dior</li>
              <li>34. Dior</li>
              <li>35. Dior</li>
            </ul>
            <ul>
              <li>36. Dior</li>
              <li>37. Dior</li>
              <li>38. Dior</li>
              <li>39. Dior</li>
              <li>40. Dior</li>
            </ul>
            <ul>
              <li>41. Dior</li>
              <li>42. Dior</li>
              <li>43. Dior</li>
              <li>44. Dior</li>
              <li>45. Dior</li>
            </ul>
            <ul>
              <li>46. Dior</li>
              <li>47. Dior</li>
              <li>48. Dior</li>
              <li>49. Dior</li>
              <li>50. Dior</li>
            </ul>
            <ul>
              <li>51. Dior</li>
              <li>52. Dior</li>
              <li>53. Dior</li>
              <li>54. Dior</li>
              <li>55. Dior</li>
            </ul>
            <ul>
              <li>56. Dior</li>
              <li>57. Dior</li>
              <li>58. Dior</li>
              <li>59. Dior</li>
              <li>60. Dior</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DiorPerfume;
