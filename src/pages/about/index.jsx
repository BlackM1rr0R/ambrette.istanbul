import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import CertificateImage from '../../assets/images/sertifikat.png'

const About = () => {
  const principleRef = useRef(null);
  const futureRef = useRef(null);
  const certificatesRef = useRef(null);

  const handleScroll = () => {
    const principlePosition = principleRef.current.getBoundingClientRect().top;
    const futurePosition = futureRef.current.getBoundingClientRect().top;
    const certificatesPosition = certificatesRef.current.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (principlePosition < screenHeight) {
      principleRef.current.classList.add(styles.visible);
    } else {
      principleRef.current.classList.remove(styles.visible);
    }

    if (futurePosition < screenHeight) {
      futureRef.current.classList.add(styles.visible);
    } else {
      futureRef.current.classList.remove(styles.visible);
    }

    if (certificatesPosition < screenHeight) {
      certificatesRef.current.classList.add(styles.visible);
    } else {
      certificatesRef.current.classList.remove(styles.visible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.background}>
      <Wrapper>
        <div ref={principleRef} className={`${styles.principle} ${styles.hidden}`}>
          <h2>Who are we?</h2>
          <p>
            Since 2016, we started our activities in the world of Azerbaijan's
            fragrance industry and continued to expand with our main base
            warehouses located in Pyatigorsk by stepping into the Russian market
            in 2019. As the most widely recognized perfume company in the CIS
            countries, we continue to maintain our position in the field with
            over 1500 products accurately produced in standard, premium, and
            deluxe categories and in accordance with quality standards.
          </p>
        </div>
        <div ref={futureRef} className={`${styles.future} ${styles.hidden}`}>
          <div className={styles.futuretext}>
            <h2>Vision of The Future</h2>
            <p>
              Currently, we operate large area warehouses and stores in Moscow's
              Sodovoy and Lubna markets, Kazakhstan, Kyrgyzstan, and Uzbekistan.
              In the near future, our company is preparing to open the doors of
              its new office in Uzbekistan.
            </p>
          </div>
          <div className={styles.futuretext}>
            <h2>Our Purpose</h2>
            <p>
              Currently, we operate large area warehouses and stores in Moscow's
              Sodovoy and Lubna markets, Kazakhstan, Kyrgyzstan, and Uzbekistan.
              In the near future, our company is preparing to open the doors of
              its new office in Uzbekistan.
            </p>
          </div>
          <div className={styles.futuretext}>
            <h2>Fragrances</h2>
            <p>
              Our fragrances are formulated at Sweden's Firmenich plant and
              produced by Turkey's MG Gürcüsay company. Each year, we gather to
              review new products and renew our contracts with the factories
              where our products are manufactured.
            </p>
          </div>
        </div>
        <div ref={principleRef} className={`${styles.principle} ${styles.hidden}`}>
          <h2>Main Principle</h2>
          <p>
            As the most widely recognized perfume company in the CIS countries,
            we continue to maintain our position in the field with over 1500
            products accurately produced in standard, premium, and deluxe
            categories and in accordance with quality standards. Our main
            principle is very simple - "from the factory to the customer" logic
            labeled at factory prices. This honesty and reliability are the main
            reasons for our development, as we currently serve nearly 10,000
            customers in a total of 10 countries.
          </p>
        </div>
        <div ref={futureRef} className={`${styles.principle} ${styles.hidden}`}>
          <h2>Participating </h2>
          <p>
            By participating in the major fragrance exhibitions held in Dubai
            once a year, we confirm that we are part of the global fragrance
            market. As a company engaged in wholesale fragrance sales, we always
            prioritize trust and quality.
          </p>
        </div>
        <div ref={certificatesRef} className={`${styles.certificates} ${styles.hidden}`}>
          <div className={styles.certificatesheaders}>
            <h2>Our Certificates</h2>
          </div>
          <div className={styles.images}>
            <img src={CertificateImage} alt="" />
            <img src={CertificateImage} alt="" />
            <img src={CertificateImage} alt="" />
            <img src={CertificateImage} alt="" />
            <img src={CertificateImage} alt="" />
            <img src={CertificateImage} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
