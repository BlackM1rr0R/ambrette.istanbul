import React, { useMemo } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper";
import ManLogo from "../../assets/images/manlogo2.png";
import WomanLogo from "../../assets/images/womanlogo.png";
import UnisexLogo from "../../assets/images/unisexlogo.png";
const GenderComponenten = React.memo(() => {
  const genderLinks = useMemo(
    () => [
      { to: "/gender/men", image: ManLogo, alt: "Men" },
      { to: "/gender/women", image: WomanLogo, alt: "Women" },
      { to: "/gender/unisex", image: UnisexLogo, alt: "Unisex" },
    ],
    []
  );

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.gender}>
          <h2>Gender:</h2>
        </div>
        <ul className={styles.control}>
          {genderLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>
                <img src={link.image} alt={link.alt} loading="lazy" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
});

export default GenderComponenten;
