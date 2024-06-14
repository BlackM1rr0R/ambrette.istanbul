import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";

import { Link, useParams } from "react-router-dom";
import DB from '../../db.json'
const ParfumDetails = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState(false);
  const [brends, setBrends] = useState(false);
  const [foundObject, setFoundObject] = useState(null);

 
  const handleClick = () => {
    setModal((prevModal) => !prevModal);
  };
  const handleClick1 = () => {
    setNotes((prevNotes) => !prevNotes);
  };
  const handleClick2 = () => {
    setBrends((prevBrends) => !prevBrends);
  };
  const { id } = useParams();
  useEffect(() => {
    const obj = DB.find((item) => item.id === parseInt(id, 10));
    setFoundObject(obj);
  }, [id]);
console.log(foundObject)
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.images}>
            <h2>{foundObject?.title}</h2>
           <img src={foundObject?.innerimageurl} alt="" /> 
          </div>
          <div className={styles.description}>
            <div onClick={() => handleClick()} className={styles.info}>
              <h2>Description</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {modal ? (
              <div className={styles.modalclass}>
                <p>
                  {foundObject?.description}
                </p>
              </div>
            ) : (
              ""
            )}
            <div onClick={() => handleClick1()} className={styles.info}>
              <h2>Fragrance notes</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {notes ? (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <h2>Fragrance Family:</h2>
                  <h3>{foundObject?.fragrance.family}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Top Notes:</h2>
                  <h3>{foundObject?.fragrance.topnotes}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Mid Notes:</h2>
                  <h3>{foundObject?.fragrance.midnotes}</h3>
                </div>
                <div className={styles.fragments}>
                  <h2>Base Notes:</h2>
                  <h3>{foundObject?.fragrance.basenotes}</h3>
                </div>
              </div>
            ) : (
              ""
            )}
            <div onClick={() => handleClick2()} className={styles.info}>
              <h2>Brends</h2>
              <h2>+</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            {brends ? (
              <div className={styles.notesclass}>
                <div className={styles.fragments}>
                  <h3>{foundObject?.brands}</h3>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={styles.info}>
              <h2>#{foundObject?.id}</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
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

export default ParfumDetails;
