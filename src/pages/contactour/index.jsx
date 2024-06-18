import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { ContactLocationIcon, ContactMailIcon } from "../../icons";
const ContactOur = () => {
  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <h2>Contact with Our</h2>
          <p>Our working hours: from 09:00 to 22:00</p>
        </div>
        <div className={styles.control}>
          <div className={styles.leftside}>
            <div className={styles.border}>
              <div className={styles.contact}>
                <ContactLocationIcon />
              </div>
              <div className={styles.contactadress}>
                <h2>Our location</h2>
                <p>МОСКВА Тк Садовод, корпус Б, этаж 1, линия 1, место 07-13</p>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.contact}>
                <ContactMailIcon />
              </div>
              <div className={styles.contactadress}>
                <h2>Email Us</h2>
                <p>hello@gmail.com</p>
                <p>fax@gmail.com</p>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.contact}>
                <ContactMailIcon />
              </div>
              <div className={styles.contactadress}>
                <h2>Phone</h2>
                <p>+996 501 662 222</p>
              </div>
            </div>
          </div>

          <div className={styles.rightside}>
            <iframe
            className={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d72032.50768923576!2d37.835549!3d55.653933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6f25a8fc615%3A0x4002efd7d787ef83!2sRynok%20Sadovod!5e0!3m2!1str!2saz!4v1718706271950!5m2!1str!2saz"
          
             
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactOur;
