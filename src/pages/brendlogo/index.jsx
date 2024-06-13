import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import AntonioLogo from "../../assets/images/antoniologo.jpg";
import ArmaniBasi from "../../assets/images/armanibasi.jpg";
import AtelierLogo from "../../assets/images/atelierlogo.jpg";
import AlfredLogo from "../../assets/images/alfredlogo.jpg";
import AjmalLogo from "../../assets/images/ajmal.jpg";
import AlexandraLogo from "../../assets/images/alexandralogo.jpg";
import AmoreLogo from "../../assets/images/amorelogo.png";
import AmouageLogo from "../../assets/images/amouagelogo.jpg";
import AttarLogo from "../../assets/images/attarlogo.jpg";
import AvonLogo from "../../assets/images/avonlogo.jpg";
import AzzaroLogo from "../../assets/images/azzarologo.jpg";
import BoadiceaLogo from "../../assets/images/boadicealogo.jpg";
import BondLogo from "../../assets/images/bondlogo.jpg";
import BrioniLogo from "../../assets/images/brionilogo.jpg";
import BurberryLogo from "../../assets/images/burberrylogo.jpg";
import BvlgariLogo from "../../assets/images/bvlgarilogo.jpg";
import ByRedoLogo from "../../assets/images/byredologo.jpg";
import ChristianLogo from "../../assets/images/christianlogo.jpg";
import CarolinaLogo from "../../assets/images/carolinalogo.jpg";
import CalvinKleinLogo from "../../assets/images/calvinkleinlogo.jpg";
import CaptainLogo from "../../assets/images/captainlogo.jpg";
import CartierLogo from "../../assets/images/cartierlogo.jpg";
import ChanelLogo from "../../assets/images/chanellogo.jpg";
import ChloeLogo from "../../assets/images/chloelogo.jpg";
import CliniqueLogo from "../../assets/images/cliniquelogo.jpg";
import CreedLogo from "../../assets/images/creedlogo.jpg";
import DavidoffLogo from "../../assets/images/davidofflogo.jpg";
import DolceLogo from "../../assets/images/dolcelogo.jpg";
import DIPLogo from "../../assets/images/diptyquelogo.png";
import DonnaLogo from "../../assets/images/donnakaranlogo.jpg";
import EscentricLogo from "../../assets/images/escentriclogo.jpg";
import EscadaLogo from "../../assets/images/escadalogo.jpg";
import ExNihiloLogo from "../../assets/images/exnihilologo.jpg";
import FendiLogo from "../../assets/images/fendilogo.jpg";
import GivenchyLogo from "../../assets/images/givenchylogo.jpg";
import GucciLogo from "../../assets/images/guccilogo.jpg";
import HugeBossLogo from "../../assets/images/hugobosslogo.jpg";
import HuncaLogo from "../../assets/images/huncalogo.jpg";
import InitioLogo from "../../assets/images/initiologo.jpg";
import JoMalenoLogo from "../../assets/images/jomalonelogo.jpg";
import JulietteLogo from "../../assets/images/juliettelogo.jpg";
import KayaliLogo from "../../assets/images/kayalilogo.jpg";
import KenzoLogo from "../../assets/images/kenzologo.jpg";
import KillianLogo from "../../assets/images/killianlogo.jpg";
import LacosteLogo from "../../assets/images/lacostelogo.jpg";
import LancomeLogo from "../../assets/images/lancomelogo.jpg";
import LanvinLogo from "../../assets/images/lanvinlogo.jpg";
import LouisVuittonLogo from "../../assets/images/louisvuittonlogo.jpg";
import ManceraLogo from "../../assets/images/manceralogo.jpg";
import MemoLogo from "../../assets/images/memologo.jpg";
import MontaleLogo from "../../assets/images/montalelogo.jpg";
import MoschinoLogo from "../../assets/images/moschinologo.jpg";
import Narcisologo from "../../assets/images/narcissologo.jpg";
import NinaRicciLogo from "../../assets/images/ninariccilogo.jpg";
import OrtoParisiLogo from "../../assets/images/ortoparisilogo.jpg";
import PacoLogo from "../../assets/images/pacologo.jpg";
import ParfumsDeMarleyLogo from "../../assets/images/parfumsdemarleylogo.jpg";
import PradaLogo from "../../assets/images/pradalogo.jpg";
import RalphLogo from "../../assets/images/ralphlogo.jpg";
import RasasiLogo from "../../assets/images/rasasilogo.jpg";
import RicardoLogo from "../../assets/images/ricardoveronlogo.jpg";
import RojaLogo from "../../assets/images/rojalogo.jpg";
import SalvadorLogo from "../../assets/images/salvadorlogo.png";
import SospiroLogo from "../../assets/images/sospirologo.jpg";
import ShaikLogo from "../../assets/images/shaiklogo.jpg";
import SisleyLogo from "../../assets/images/sisleylogo.jpg";
import TomFordLogo from "../../assets/images/tomfordlogo.jpg";
import TizianaLogo from "../../assets/images/tizianalogo.jpg";
import TrussardiLogo from "../../assets/images/trussardilogo.jpg";
import VictoriaLogo from "../../assets/images/victorialogo.jpg";
import VersaceLogo from "../../assets/images/versacelogo.jpg";
import ValentinoLogo from "../../assets/images/valentinologo.jpg";
import VertusLogo from "../../assets/images/vertuslogo.jpg";
import XerjoffLogo from "../../assets/images/xerjofflogo.jpg";
import YSLLogo from "../../assets/images/ysllogo.jpg";
import ZadigLogo from "../../assets/images/zadiglogo.jpg";
import { Link } from "react-router-dom";

const BrendLogo = () => {
  const [brendA, setBrendA] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "Antonio Banderas",
      },
      {
        image: `${ArmaniBasi}`,
        aname: "Armani Basi",
      },
      {
        image: `${AtelierLogo}`,
        aname: "A Cologne",
      },
      {
        image: `${AjmalLogo}`,
        aname: "Ajmal",
      },

      {
        image: `${AlexandraLogo}`,
        aname: "Alexandra",
      },

      {
        image: `${AlfredLogo}`,
        aname: "Alfred Dunhill",
      },

      {
        image: `${AmoreLogo}`,
        aname: "Amor",
      },
      {
        image: `${AmouageLogo}`,
        aname: "Amouage",
      },

      {
        image: `${AttarLogo}`,
        aname: "Attar Collection",
      },

      {
        image: `${AvonLogo}`,
        aname: "Avon Today",
      },
      {
        image: `${AzzaroLogo}`,
        aname: "Azzaro",
      },
    ],
  ]);
  const [brendB, setBrendB] = useState([
    [
      {
        image: `${AzzaroLogo}`,
        aname: "Baccarat Rouge",
      },

      {
        image: `${AntonioLogo}`,
        aname: "Black Afgano",
      },
      {
        image: `${BoadiceaLogo}`,
        aname: "Boadicea Knight",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Bois Imperial",
      },
      {
        image: `${AntonioLogo}`,
        aname: "B.Omnia Crystalline",
      },
      {
        image: `${BondLogo}`,
        aname: "Bond N9",
      },
      {
        image: `${BrioniLogo}`,
        aname: "Brioni",
      },
      {
        image: `${BurberryLogo}`,
        aname: "Burberry",
      },

      {
        image: `${BvlgariLogo}`,
        aname: "Bvlgari",
      },

      {
        image: `${AntonioLogo}`,
        aname: "By Killian White Cristal",
      },
      {
        image: `${ByRedoLogo}`,
        aname: "By Redo",
      },
    ],
  ]);
  const [brendC, setBrendC] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "C.Amour",
      },
      {
        image: `${ChristianLogo}`,
        aname: "Christian Dior",
      },

      {
        image: `${CarolinaLogo}`,
        aname: "Carolina Herrera",
      },

      {
        image: `${CalvinKleinLogo}`,
        aname: "Calvin Klein",
      },
      {
        image: `${CaptainLogo}`,
        aname: "Captain Black",
      },
      {
        image: `${CartierLogo}`,
        aname: "Cartier Declaration",
      },

      {
        image: `${AntonioLogo}`,
        aname: "Cerutti 1881",
      },

      {
        image: `${ChanelLogo}`,
        aname: "Chanel",
        link: "/dior",
      },

      {
        image: `${ChloeLogo}`,
        aname: "Chloe",
        link: "/dior",
      },

      {
        image: `${CliniqueLogo}`,
        aname: "Clinique Happy",
        link: "/dior",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Cocoine",
        link: "/dior",
      },
      {
        image: `${CreedLogo}`,
        aname: "Creed",
        link: "/dior",
      },
    ],
  ]);
  const [brendD, setBrendD] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "Dalal",
      },
      {
        image: `${DavidoffLogo}`,
        aname: "Davidoff",
      },
      {
        image: `${AntonioLogo}`,
        aname: "D.Cool",
      },
      {
        image: `${DolceLogo}`,
        aname: "Dolce&Gabbana",
      },
      {
        image: `${DIPLogo}`,
        aname: "DIP",
      },
      {
        image: `${DonnaLogo}`,
        aname: "Donna Karan",
      },
    ],
  ]);
  const [brendE, setBrendE] = useState([
    [
      {
        image: `${EscentricLogo}`,
        aname: "Escentric Molecules",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Eclat Sport",
      },
      {
        image: `${EscadaLogo}`,
        aname: "Escada",
      },
      {
        image: `${ExNihiloLogo}`,
        aname: "Ex Nihilo",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Explore",
      },
    ],
  ]);
  const [brendF, setBrendF] = useState([
    [
      {
        image: `${FendiLogo}`,
        aname: "Fendi",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Firdaus",
      },
      {
        image: `${AntonioLogo}`,
        aname: "F.K Baccarat",
      },
    ],
  ]);
  const [brendG, setBrendG] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "G.Angel & Demon",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Gall Mandarin",
      },
      {
        image: `${GivenchyLogo}`,
        aname: "Givenchy",
      },
      {
        image: `${AntonioLogo}`,
        aname: "G.M.Bloom",
      },
      {
        image: `${GucciLogo}`,
        aname: "Gucci",
      },
    ],
  ]);
  const [brendH, setBrendH] = useState([
    [
      {
        image: `${HugeBossLogo}`,
        aname: "Huge Boss",
      },
      {
        image: `${HuncaLogo}`,
        aname: "Hunca",
      },
    ],
  ]);
  const [brendI, setBrendI] = useState([
    [
      {
        image: `${InitioLogo}`,
        aname: "Initio",
      },
    ],
  ]);
  const [brendJ, setBrendJ] = useState([
    [
      {
        image: `${JoMalenoLogo}`,
        aname: "Jo Malone",
      },
      {
        image: `${JulietteLogo}`,
        aname: "Juliette",
      },
    ],
  ]);
  const [brendK, setBrendK] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "Kajal",
      },
      {
        image: `${KayaliLogo}`,
        aname: "Kayali",
      },
      {
        image: `${KenzoLogo}`,
        aname: "Kenzo",
      },
      {
        image: `${KillianLogo}`,
        aname: "Killian",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Kokain",
      },
      {
        image: `${AntonioLogo}`,
        aname: "K.Playing",
      },
    ],
  ]);
  const [brendL, setBrendL] = useState([
    [
      {
        image: `${LacosteLogo}`,
        aname: "Lacoste",
      },
      {
        image: `${LancomeLogo}`,
        aname: "Lancome",
      },
      {
        image: `${LanvinLogo}`,
        aname: "Lanvin",
      },
      {
        image: `${LouisVuittonLogo}`,
        aname: "Louis Vuitton",
      },
    ],
  ]);
  const [brendM, setBrendM] = useState([
    [
      {
        image: `${ManceraLogo}`,
        aname: "Mancera",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Mango",
      },
      {
        image: `${MemoLogo}`,
        aname: "Memo African",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Mono",
      },
      {
        image: `${MontaleLogo}`,
        aname: "Montale",
      },

      {
        image: `${MoschinoLogo}`,
        aname: "Moschino",
      },
      {
        image: `${AntonioLogo}`,
        aname: "My Burberry",
      },
    ],
  ]);
  const [brendN, setBrendN] = useState([
    [
      {
        image: `${Narcisologo}`,
        aname: "Narciso Rodriguez",
      },

      {
        image: `${NinaRicciLogo}`,
        aname: "Nina Ricci",
      },
    ],
  ]);
  const [brendO, setBrendO] = useState([
    [
      {
        image: `${OrtoParisiLogo}`,
        aname: "Orto Parisi",
      },
    ],
  ]);
  const [brendP, setBrendP] = useState([
    [
      {
        image: `${PacoLogo}`,
        aname: "Paco Rabanne",
      },
      {
        image: `${ParfumsDeMarleyLogo}`,
        aname: "Parfums De Marley",
      },
      {
        image: `${PradaLogo}`,
        aname: "Prada",
      },
    ],
  ]);
  const [brendR, setBrendR] = useState([
    [
      {
        image: `${RalphLogo}`,
        aname: "Ralph Lauren",
      },
      {
        image: `${RasasiLogo}`,
        aname: "Rasasi",
      },
      {
        image: `${RicardoLogo}`,
        aname: "Ricardo Veron",
      },
      {
        image: `${RojaLogo}`,
        aname: "Roja",
      },
    ],
  ]);
  const [brendS, setBrendS] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "Sah Parfum",
      },
      {
        image: `${SalvadorLogo}`,
        aname: "Salvador Ferragamo",
      },
      {
        image: `${SospiroLogo}`,
        aname: "Sospiro",
      },
      {
        image: `${ShaikLogo}`,
        aname: "Shaik",
      },
      {
        image: `${SisleyLogo}`,
        aname: "Sisley",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Stefano Ricci",
      },
    ],
  ]);
  const [brendT, setBrendT] = useState([
    [
      {
        image: `${TomFordLogo}`,
        aname: "Tom Ford",
      },
      {
        image: `${TizianaLogo}`,
        aname: "Tiziana Trenzi",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Thamen Green",
      },
      {
        image: `${TrussardiLogo}`,
        aname: "Trussardi",
      },
    ],
  ]);
  const [brendV, setBrendV] = useState([
    [
      {
        image: `${VictoriaLogo}`,
        aname: "Victoria Secret",
      },
      {
        image: `${VersaceLogo}`,
        aname: "Versace",
      },
      {
        image: `${ValentinoLogo}`,
        aname: "Valentino",
      },
      {
        image: `${VertusLogo}`,
        aname: "Vertus",
      },
    ],
  ]);
  const [brendW, setBrendW] = useState([
    [
      {
        image: `${AntonioLogo}`,
        aname: "White Musk",
      },
    ],
  ]);
  const [brendX, setBrendX] = useState([
    [
      {
        image: `${XerjoffLogo}`,
        aname: "Xerjoff",
      },
    ],
  ]);
  const [brendY, setBrendY] = useState([
    [
      {
        image: `${YSLLogo}`,
        aname: "Yves Saint Laurent",
      },
    ],
  ]);
  const [brendZ, setBrendZ] = useState([
    [
      {
        image: `${ZadigLogo}`,
        aname: "Zadig & Voltaire",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Zemzem",
      },
      {
        image: `${AntonioLogo}`,
        aname: "Zielenski",
      },
    ],
  ]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.headers}>
          <div className={styles.hr}>
            <hr />
          </div>
          <div className={styles.headersh2}>
            <h2>All Brends</h2>
          </div>
          <div className={styles.hr}>
            <hr />
          </div>
        </div>
        <div className={styles.box}>
          {brendA.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>A</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <Link to={"/brend-perfume"} className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </Link>
                ))}
              </div>
            </>
          ))}
          {brendB.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>B</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendC.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>C</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendD.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>D</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendF.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>F</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendG.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>G</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendH.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>H</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendI.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>I</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendJ.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>J</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendK.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>K</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendL.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>L</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendM.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>M</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendN.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>N</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendO.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>O</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendP.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>P</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendR.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>R</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendS.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>S</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendT.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>T</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendV.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>V</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendW.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>W</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendX.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>X</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendY.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>Y</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
          {brendZ.map((innerArray, index) => (
            <>
              <div className={styles.brendheaders}>
                <hr />
                <h2>Z</h2>
                <hr />
              </div>
              <div key={index} className={styles.controlbox}>
                {innerArray.map((item, innerIndex) => (
                  <div className={styles.controlclass}>
                    <div key={innerIndex} className={styles.border}>
                      <img src={item.image} alt="" />
                    </div>
                    <h2>{item.aname}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BrendLogo;
