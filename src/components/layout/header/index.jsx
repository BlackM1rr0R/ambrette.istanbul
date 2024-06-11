import React, { useState } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../icons";
import DB from "../../../db.json";
const Header = () => {
  const [data, setData] = useState([
    [
      {
        aname: "Antonio Banderas",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        aname: "Armani Basi",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        aname: "A Cologne",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        aname: "A.Dunhil",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        aname: "Ajmal",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        aname: "Alexandra",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        aname: "Alfred Dunhill",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        aname: "Amor",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        aname: "Amouage",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        aname: "Attar",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        aname: "Avon Today",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        aname: "Azzaro",
        link: `${"/parfum-details/" + 4097582}`,
      },
    ],
  ]);
  const [dataB, setDataB] = useState([
    [
      {
        bname: "Baccarat Rouge",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        bname: "Black Afgano",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "Boadicea Knight",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "Bois Imperial",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "B.Omnia Crystalline",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "Bond N9",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "Brioni",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "Burberry",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        bname: "Bvlgari",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        bname: "By Killian White Cristal",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        bname: "By Redo",
        link: `${"/parfum-details/" + 4097582}`,
      },
    ],
  ]);
  const [dataC, setDataC] = useState([
    [
      {
        cname: "C.Amour",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        cname: "Christian parfum-details",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        cname: "C.Herera 212",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        cname: "Calvin Klein Euphoria",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        cname: "Captan Black",
        link: `${"/parfum-details/" + 4097582}`,
      },
      {
        cname: "Cartier Declaration",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        cname: "Cerutti 1881",
        link: `${"/parfum-details/" + 4097582}`,
      },

      {
        cname: "Chanel ",
        link: "/dior",
      },

      {
        cname: "Chloe",
        link: "/dior",
      },

      {
        cname: "Clinique Happy",
        link: "/dior",
      },
      {
        cname: "Cocoine",
        link: "/dior",
      },
      {
        cname: "Creed Aventus Black Delux",
        link: "/dior",
      },
    ],
  ]);
  const [dataD, setDataD] = useState([
    [
      {
        dname: "Dalal",
      },
      {
        dname: "Davidov",
      },
      {
        dname: "D.Cool",
      },
      {
        dname: "D & G",
      },
      {
        dname: "Dior",
      },
      {
        dname: "DIP",
      },
      {
        dname: "Donna Karan",
      },
    ],
  ]);
  const [dataE, setDataE] = useState([
    [
      {
        ename: "E.Molecules 02",
      },
      {
        ename: "Eclat Sport",
      },
      {
        ename: "Escada",
      },
      {
        ename: "Escentric Molecule",
      },
      {
        ename: "EX Fleur Narcotique",
      },
      {
        ename: "Explore",
      },
    ],
  ]);
  const [dataF, setDataF] = useState([
    [
      {
        fname: "Fendi",
      },
      {
        fname: "Firdaus",
      },
      {
        fname: "F.K Baccarat",
      },
      {
        fname: "Fleur Narcotique",
      },
    ],
  ]);
  const [dataG, setDataG] = useState([
    [
      {
        gname: "G.Angel & Demon",
      },
      {
        gname: "Gall Mandarin",
      },
      {
        gname: "Givenchy",
      },
      {
        gname: "G.M.Bloom",
      },
      {
        gname: "Gucci",
      },
    ],
  ]);
  const [dataH, setDataH] = useState([
    [
      {
        hname: "Huge Boss",
      },
      {
        hname: "Huge Boss",
      },
      {
        hname: "Hunca Caldion",
      },
    ],
  ]);
  const [dataI, setDataI] = useState([
    [
      {
        iname: "Initio",
      },
    ],
  ]);
  const [dataJ, setDataJ] = useState([
    [
      {
        jname: "Ja Malone",
      },
      {
        jname: "Juliette",
      },
    ],
  ]);
  const [dataK, setDataK] = useState([
    [
      {
        kname: "Kajal",
      },
      {
        kname: "Kayali",
      },
      {
        kname: "Kenzo",
      },
      {
        kname: "Killian",
      },
      {
        kname: "Kokain",
      },
      {
        kname: "K.Playing",
      },
    ],
  ]);
  const [dataL, setDataL] = useState([
    [
      {
        lname: "Lacoste",
      },
      {
        lname: "Lancome",
      },
      {
        lname: "Lanvin",
      },
      {
        lname: "L.Eclat",
      },
      {
        lname: "Louis Vuitton",
      },
    ],
  ]);
  const [dataM, setDataM] = useState([
    [
      {
        mname: "Mancera",
      },
      {
        mname: "Mango",
      },
      {
        mname: "Memo African",
      },
      {
        mname: "Molecule",
      },
      {
        mname: "Mono",
      },
      {
        mname: "Montale",
      },
      {
        mname: "Montblanc",
      },
      {
        mname: "Moschino",
      },
      {
        mname: "My Burberry",
      },
    ],
  ]);
  const [dataN,setDataN]=useState([
    [
      {
        nname:"Narciso"
      },
      {
        nname:"Narcos'is"
      },
      {
        nname:"N.Black"
      },
      {
        nname:"Nina Ricci"
      },
      {
        nname:"N.Rodriguez"
      },
    ]
  ])
  const [dataO,setDataO]=useState([
    [
      {
        oname:"Orto Paris"
      },
      {
        oname:"Orto P.Megamare"
      }
    ]
  ])
  const [dataP,setDataP]=useState([
    [
      {
        pname:"Paco Rabanne"
      },
      {
        pname:"Parfums De Marley"
      },
      {
        pname:"Prada Candy"
      },
      {
        pname:"P.R.Invictus"
      },
    ]
  ])
  const [dataR,setDataR]=useState([
    [
      {
        rname:"Ralph Lauren"
      },
      {
        rname:"Rassasi Timsah"
      },
      {
        rname:"Ricardo Veron"
      },
      {
        rname:"Roja"
      },
      {
        rname:"R.Reckless"
      },
    ]
  ])
  const [dataS,setDataS]=useState([
    [
      {
        sname:"Sah Parfum"
      },
      {
        sname:"Salvatore Ferragamo"
      },
      {
        sname:"Sospiro"
      },
      {
        sname:"Shaik"
      },
      {
        sname:"Sisley"
      },
      {
        sname:"Stefano Ricci"
      },
    ]
  ])
  const [dataT,setDataT]=useState([
    [
      {
        tname:"Tom Ford"
      },
      {
        tname:"Tiziana Trenzi"
      },
      {
        tname:"Thamen Green"
      },
      {
        tname:"Trussardi Donna"
      },

    ]
  ])
  const [dataV,setDataV]=useState([
    [
      {
        vname:"Victoria Secret"
      },
      {
        vname:"Versace"
      },
      {
        vname:"Valentina"
      },
      {
        vname:"Vertus"
      },

    ]
  ])
  const [dataW,setDataW]=useState([
    [
      {
        wname:"White Musk"
      }
    ]
  ])
  const [dataX,setDataX]=useState([
    [
      {
        xname:"Xerjoff"
      }
    ]
  ])
  const [dataY,setDataY]=useState([
    [
      {
        yname:"Y.S.L"
      }
    ]
  ])
  const [dataZ,setDataZ]=useState([
    [
      {
        zname:"Zadig Voltaire"
      },
      {
        zname:"Zemzem"
      },
      {
        zname:"Zielenski"
      }
    ]
  ])
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
          <div className={styles.menu}>
            <div className={styles.dropdown}>
              Category <ArrowIcon />
              <ul className={styles.dropdowncontent}>
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

            <div className={styles.dropdownbrends}>
              Brends <ArrowIcon />
              <div className={styles.dropdowncontrol}>
                {data.map((innerArray, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>A</h2>

                    {innerArray.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.aname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataB.map((innerArrayB, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>B</h2>

                    {innerArrayB.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.bname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataC.map((innerArrayC, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>C</h2>

                    {innerArrayC.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.cname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataD.map((innerArrayD, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>D</h2>

                    {innerArrayD.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.dname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataE.map((innerArrayE, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>E</h2>

                    {innerArrayE.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.ename}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataF.map((innerArrayF, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>F</h2>

                    {innerArrayF.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.fname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataG.map((innerArrayG, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>G</h2>

                    {innerArrayG.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.gname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataH.map((innerArrayH, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>H</h2>

                    {innerArrayH.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.hname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataI.map((innerArrayI, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>I</h2>

                    {innerArrayI.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.iname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataJ.map((innerArrayJ, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>J</h2>

                    {innerArrayJ.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.jname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataK.map((innerArrayK, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>K</h2>

                    {innerArrayK.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.kname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataL.map((innerArrayL, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>L</h2>

                    {innerArrayL.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.lname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataM.map((innerArrayM, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>M</h2>

                    {innerArrayM.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.mname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataN.map((innerArrayN, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>N</h2>

                    {innerArrayN.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.nname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataO.map((innerArrayO, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>O</h2>

                    {innerArrayO.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.oname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataP.map((innerArrayP, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>P</h2>

                    {innerArrayP.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.pname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataR.map((innerArrayR, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>R</h2>

                    {innerArrayR.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.rname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataS.map((innerArrayS, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>S</h2>

                    {innerArrayS.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.sname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataT.map((innerArrayT, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>T</h2>

                    {innerArrayT.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.tname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataV.map((innerArrayV, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>V</h2>

                    {innerArrayV.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.vname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataW.map((innerArrayW, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>W</h2>

                    {innerArrayW.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.wname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataX.map((innerArrayX, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>X</h2>

                    {innerArrayX.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.xname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataY.map((innerArrayY, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>Y</h2>

                    {innerArrayY.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.yname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
                {dataZ.map((innerArrayZ, index) => (
                  <div key={index} className={styles.aclass}>
                    <h2>Z</h2>

                    {innerArrayZ.map((item, innerIndex) => (
                      <li key={innerIndex}>
                        <Link to={item.link}>{item.zname}</Link>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <li>About us</li>
            <Link to={"/magazins"}>Magazins</Link>
            <li>Contact us</li>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
