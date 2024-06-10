import React, { useState } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../icons";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [brends, setBrends] = useState(false);
  const [data, setData] = useState([
    [
      {
        aname: "Antonio Banderas Golden S M",
        link:"/antonio"
      },
      {
        aname: "Armani Basi In Blue",
        link:"/dior"
      },
      {
        aname: "A Cologne Rose Cuirre",
        link:"/dior"
      },
      {
        aname: "A.Dunhil Desire",
        link:"/dior"
      },
      {
        aname: "Ajmal Amber Wood",
        link:"/dior"
      },
      {
        aname: "Ajmal Aristocrat",
        link:"/dior"
      },
      {
        aname: "Alexandra Black Musk",
        link:"/dior"
      },
      {
        aname: "Alexandra Argentic",
        link:"/dior"
      },
      {
        aname: "Alfred Dunhill Desire",
        link:"/dior"
      },
      {
        aname: "Alfred Dunhill Black",
        link:"/dior"
      },
      {
        aname: "Amor Egzotik",
        link:"/dior"
      },
      {
        aname: "Amouage Sunshine",
        link:"/dior"
      },
      {
        aname: "Antonio Banderas Blue",
        link:"/dior"
      },
      {
        aname: "Antonio Banderas Blue W",
        link:"/dior"
      },
      {
        aname: "Armand Basi Homme",
        link:"/dior"
      },
      {
        aname: "Armani Code",
        link:"/dior"
      },
      {
        aname: "Armani My Way Intense",
        link:"/dior"
      },
      {
        aname: "Armani My Way",
        link:"/dior"
      },
      {
        aname: "Armani Si Passione",
        link:"/dior"
      },
      {
        aname: "Armani Stronger With You",
        link:"/dior"
      },
      {
        aname: "Attar Musk Kashmir",
        link:"/dior"
      },
      {
        aname: "Attar The Queen of Sheba",
        link:"/dior"
      },
      {
        aname: "Avon Today",
        link:"/dior"
      },
      {
        aname: "Azzaro Chrome",
        link:"/dior"
      },
      {
        aname: "Azzaro Mademoiselle",
        link:"/dior"
      },
    ],
  ]);
  const [dataB,setDataB]=useState([
    [
      {
        bname:"Baccarat Rouge 540",
        link:"/dior"
      },
      {
        bname:"Baccarat 540 Delux",
        link:"/dior"
      },
      {
        bname:"Black Afgano Delux",
        link:"/dior"
      },
      {
        bname:"Black Afgano Pour Homme",
        link:"/dior"
      },
      {
        bname:"Boadicea Knight of Love",
        link:"/dior"
      },
      {
        bname:"Bois Imperial",
        link:"/dior"
      },
      {
        bname:"B.Omnia Crystalline",
        link:"/dior"
      },
      {
        bname:"Bond West Side",
        link:"/dior"
      },
      {
        bname:"Brioni",
        link:"/dior"
      },
      {
        bname:"Burberry Body",
        link:"/dior"
      },
      {
        bname:"Burberry Sport For Men",
        link:"/dior"
      },
      {
        bname:"Burberry Wekend",
        link:"/dior"
      },
      {
        bname:"Bvlgari Aqva Amara",
        link:"/dior"
      },
      {
        bname:"Bvlgari Aqva Marine",
        link:"/dior"
      },
      {
        bname:"Bvlgari Gyan Le Gemme",
        link:"/dior"
      },
      {
        bname:"Bvlgari Omnia Crystalline",
        link:"/dior"
      },
      {
        bname:"Bvlgari Tygar Delux",
        link:"/dior"
      },
      {
        bname:"By Killian White Cristal",
        link:"/dior"
      },
      {
        bname:"By Redo Blanch",
        link:"/dior"
      },
      {
        bname:"By Redo Marixuana",
        link:"/dior"
      },
      {
        bname:"Burberry Body",
        link:"/dior"
      },
      {
        bname:"Burberry Body",
        link:"/dior"
      },
      {
        bname:"Burberry Body",
        link:"/dior"
      },
    ]
  ])

  const handleClick = () => {
    setModal((prevModal) => !prevModal);
    setBrends(false);
  };

  const handleClick1 = () => {
    setBrends((prevBrends) => !prevBrends);
    setModal(false);
  };

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.control}>
          <Link to={"/"} className={styles.images}>
            <img src={Logo} alt="" />
          </Link>
          <div className={styles.input}>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.selected}>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Russian</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.headers}>
        <hr />
      </div>
      <Wrapper>
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li onClick={handleClick} className={styles.li}>
              Category <ArrowIcon />
            </li>

            <li onClick={handleClick1} className={styles.li}>
              Brends <ArrowIcon />
            </li>
            <li>About us</li>
            <Link to={"/magazins"}>Magazins</Link>
            <li>Contact us</li>
          </ul>
          {modal && (
            <div className={styles.dropdown}>
              <ul>
                <li>
                  <Link to={"/man"}>Man</Link>
                </li>
                <li>
                  <Link to={"/women"}>Women</Link>
                </li>
                <li>
                  <Link to={"/unisex"}>Unisex</Link>
                </li>
              </ul>
            </div>
          )}
          {brends && (
            <div className={styles.brends}>
              <ul>
                {data.map((innerArray, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>A</h2>
                    <ul>
                      {innerArray.map((item, innerIndex) => (
                        <li key={innerIndex}>
                          <Link to={item.link}>{item.aname}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {dataB.map((innerArrayB, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>B</h2>
                    <ul>
                      {innerArrayB.map((item, innerIndex) => (
                        <li key={innerIndex}>
                          <Link to={item.link}>{item.bname}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
