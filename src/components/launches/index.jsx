import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
const LaunchesPerfume = () => {
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers1}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.h2}>
            <h2>The Most Popular Perfumes</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.perfumelist1}>
          <div className={styles.firstside1}>
            <ul>
              <li>1. Khamrah Lattafa Perfumes</li>
              <li>2. Khamrah Lattafa Perfumes</li>
              <li>3. Khamrah Lattafa Perfumes</li>
              <li>4. Khamrah Lattafa Perfumes</li>
              <li>5. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>6. Khamrah Lattafa Perfumes</li>
              <li>7. Khamrah Lattafa Perfumes</li>
              <li>8. Khamrah Lattafa Perfumes</li>
              <li>9. Khamrah Lattafa Perfumes</li>
              <li>10. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>11. Khamrah Lattafa Perfumes</li>
              <li>12. Khamrah Lattafa Perfumes</li>
              <li>13. Khamrah Lattafa Perfumes</li>
              <li>14. Khamrah Lattafa Perfumes</li>
              <li>15. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>16. Khamrah Lattafa Perfumes</li>
              <li>17. Khamrah Lattafa Perfumes</li>
              <li>18. Khamrah Lattafa Perfumes</li>
              <li>19. Khamrah Lattafa Perfumes</li>
              <li>20. Khamrah Lattafa Perfumes</li>
            </ul>
            <ul>
              <li>21. Khamrah Lattafa Perfumes</li>
              <li>22. Khamrah Lattafa Perfumes</li>
              <li>23. Khamrah Lattafa Perfumes</li>
              <li>24. Khamrah Lattafa Perfumes</li>
            </ul>
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

export default LaunchesPerfume;
