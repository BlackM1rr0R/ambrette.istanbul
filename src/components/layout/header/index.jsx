import React, { useState } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../icons";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [brends, setBrends] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
        bname:"By Redo Pulp",
        link:"/dior"
      },
      {
        bname:"By Redo Bal Dafrique",
        link:"/dior"
      },
      {
        bname:"By Redo Bibliotheque",
        link:"/dior"
      },
      {
        bname:"By Redo La Tulipe",
        link:"/dior"
      },
      {
        bname:"By Redo Marijuanna",
        link:"/dior"
      },
      {
        bname:"By Redo Mojave Ghost",
        link:"/dior"
      },

      
    ]
  ])
  const [dataC,setDataC]=useState([
    [
      {
          cname:"C.Amour Pour Homme",
          link:"/dior"
      },
      {
          cname:"C.Dior Miss Dior",
          link:"/dior"
      },
      {
          cname:"C.Dior Savuage",
          link:"/dior"
      },
      {
          cname:"C.Herera 212 Men",
          link:"/dior"
      },
      {
          cname:"C.Herera 212 On Ice",
          link:"/dior"
      },
      {
          cname:"C.A.H.Sport Extreme",
          link:"/dior"
      },
      {
          cname:"Calvin Klein Euphoria",
          link:"/dior"
      },
      {
          cname:"Captan Black",
          link:"/dior"
      },
      {
          cname:"Cartier Declaration",
          link:"/dior"
      },
      {
          cname:"Cartier La Panthere",
          link:"/dior"
      },
      {
          cname:"C.Dior Adict 2",
          link:"/dior"
      },
      {
          cname:"C.Dior Eau Savuage Delux",
          link:"/dior"
      },
      {
          cname:"C.Duir Fahrenheit Le Parfum",
          link:"/dior"
      },
      {
          cname:"C.Dior Home Sport",
          link:"/dior"
      },
      {
          cname:"C.Dior Home Intense",
          link:"/dior"
      },
      {
          cname:"C.Dior Jadore",
          link:"/dior"
      },
      {
          cname:"C.Dior Miss Cherie",
          link:"/dior"
      },
      {
          cname:"C.Dior Rouge Trafalger",
          link:"/dior"
      },
      {
          cname:"C.Dior Savuage",
          link:"/dior"
      },
      {
          cname:"C.Dior Savuage Delux",
          link:"/dior"
      },
      {
          cname:"C.Dior Blooming",
          link:"/dior"
      },
      {
          cname:"Cerutti 1881 M",
          link:"/dior"
      },
      {
          cname:"Cerutti 1881 Pour",
          link:"/dior"
      },
      {
          cname:"C.H 212 On Ice Men",
          link:"/dior"
      },
      {
          cname:"Chanel Allure Home Sport",
          link:"/dior"
      },
      {
          cname:"Chanel Chanel 19",
          link:"/dior"
      },
      {
          cname:"Chanel Coco Chanel",
          link:"/dior"
      },
      {
          cname:"Chanel Coco Mademoiselle",
          link:"/dior"
      },
      {
          cname:"Chanel Coramandel",
          link:"/dior"
      },
      {
          cname:"Chanel De Blue",
          link:"/dior"
      },
      {
          cname:"Chanel Eau fraiche",
          link:"/dior"
      },
      {
          cname:"Chanel Egoist",
          link:"/dior"
      },
      {
          cname:"Chanel Tendre",
          link:"/dior"
      },
      {
          cname:"Chanel 5",
          link:"/dior"
      },
      {
          cname:"Chanel Chic For Men",
          link:"/dior"
      },
      {
          cname:"Chanel 212 Sexy",
          link:"/dior"
      },
      {
          cname:"Chanel 212 VIP",
          link:"/dior"
      },
      {
          cname:"C.Herera 212 W",
          link:"/dior"
      },
      {
          cname:"C.Herera Good Girl",
          link:"/dior"
      },
      {
          cname:"C.Herera 212 Sexy",
          link:"/dior"
      },
      {
          cname:"C.Herera 212 VIP",
          link:"/dior"
      },
      {
          cname:"Chloe",
          link:"/dior"
      },
      {
          cname:"Chloe Love Chloe",
          link:"/dior"
      },
      {
          cname:"Chloe Nomade",
          link:"/dior"
      },
      {
          cname:"Chrome Azzaro Sport",
          link:"/dior"
      },
      {
          cname:"C.H 212 VIP Black",
          link:"/dior"
      },
      {
          cname:"C.H 212 VIP For Men",
          link:"/dior"
      },
      {
          cname:"Clinique Happy",
          link:"/dior"
      },
      {
          cname:"Cocoine",
          link:"/dior"
      },
      {
          cname:"Creed Aventus Black Delux",
          link:"/dior"
      },
      {
          cname:"Creed Aventus Black S",
          link:"/dior"
      },
      {
          cname:"Creed Aventus Black T",
          link:"/dior"
      },
      {
          cname:"Creed Aventus Delux",
          link:"/dior"
      },
      {
          cname:"Creed Aventus S",
          link:"/dior"
      },
      {
          cname:"Creed Love In White",
          link:"/dior"
      },
      {
          cname:"Creed Silver Mountain Water",
          link:"/dior"
      },
      {
          cname:"Creed Viking",
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
                {dataC.map((innerArrayC, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>B</h2>
                    <ul>
                      {innerArrayC.map((item, innerIndex) => (
                        <li key={innerIndex}>
                          <Link to={item.link}>{item.cname}</Link>
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
