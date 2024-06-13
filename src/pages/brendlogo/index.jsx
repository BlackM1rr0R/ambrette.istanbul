import React, { useState } from "react";
import styles from './index.module.css'
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
import ChristianLogo from '../../assets/images/christianlogo.jpg'
import CarolinaLogo from '../../assets/images/carolinalogo.jpg'
import CalvinKleinLogo from '../../assets/images/calvinkleinlogo.jpg'
import CaptainLogo from '../../assets/images/captainlogo.jpg'
import CartierLogo from '../../assets/images/cartierlogo.jpg'
import ChanelLogo from '../../assets/images/chanellogo.jpg'
import ChloeLogo from '../../assets/images/chloelogo.jpg'
import CliniqueLogo from '../../assets/images/cliniquelogo.jpg'
import CreedLogo from '../../assets/images/creedlogo.jpg'
import DavidoffLogo from '../../assets/images/davidofflogo.jpg'
import DolceLogo from '../../assets/images/dolcelogo.jpg'
import DIPLogo from '../../assets/images/diptyquelogo.png'
import DonnaLogo from '../../assets/images/donnakaranlogo.jpg'
import EscentricLogo from '../../assets/images/escentriclogo.jpg'
import EscadaLogo from '../../assets/images/escadalogo.jpg'
import ExNihiloLogo from '../../assets/images/exnihilologo.jpg'
import FendiLogo from '../../assets/images/fendilogo.jpg'
import GivenchyLogo from '../../assets/images/givenchylogo.jpg'
import GucciLogo from '../../assets/images/guccilogo.jpg'
import HugeBossLogo from '../../assets/images/hugobosslogo.jpg'
import HuncaLogo from '../../assets/images/huncalogo.jpg'
import InitioLogo from '../../assets/images/initiologo.jpg'
import JoMalenoLogo from '../../assets/images/jomalonelogo.jpg'
import JulietteLogo from '../../assets/images/juliettelogo.jpg'
import KayaliLogo from '../../assets/images/kayalilogo.jpg'
import KenzoLogo from '../../assets/images/kenzologo.jpg'
import KillianLogo from '../../assets/images/killianlogo.jpg'
import LacosteLogo from '../../assets/images/lacostelogo.jpg'
import LancomeLogo from '../../assets/images/lancomelogo.jpg'
import LanvinLogo from '../../assets/images/lanvinlogo.jpg'
import LouisVuittonLogo from '../../assets/images/louisvuittonlogo.jpg'
import ManceraLogo from '../../assets/images/manceralogo.jpg'
import MemoLogo from '../../assets/images/memologo.jpg'
import MontaleLogo from '../../assets/images/montalelogo.jpg'
import MoschinoLogo from '../../assets/images/moschinologo.jpg'
import Narcisologo from '../../assets/images/narcissologo.jpg'
import NinaRicciLogo from '../../assets/images/ninariccilogo.jpg'
import OrtoParisiLogo from '../../assets/images/ortoparisilogo.jpg'
import PacoLogo from '../../assets/images/pacologo.jpg'
import ParfumsDeMarleyLogo from '../../assets/images/parfumsdemarleylogo.jpg'
import PradaLogo from '../../assets/images/pradalogo.jpg'
import RalphLogo from '../../assets/images/ralphlogo.jpg'
import RasasiLogo from '../../assets/images/rasasilogo.jpg'
import RicardoLogo from '../../assets/images/ricardoveronlogo.jpg'
import RojaLogo from '../../assets/images/rojalogo.jpg'
import SalvadorLogo from '../../assets/images/salvadorlogo.png'
import SospiroLogo from '../../assets/images/sospirologo.jpg'
import ShaikLogo from '../../assets/images/shaiklogo.jpg'
import SisleyLogo from '../../assets/images/sisleylogo.jpg'
import TomFordLogo from '../../assets/images/tomfordlogo.jpg'
import TizianaLogo from '../../assets/images/tizianalogo.jpg'
import TrussardiLogo from '../../assets/images/trussardilogo.jpg'
import VictoriaLogo from '../../assets/images/victorialogo.jpg'
import VersaceLogo from '../../assets/images/versacelogo.jpg'
import ValentinoLogo from '../../assets/images/valentinologo.jpg'
import VertusLogo from '../../assets/images/vertuslogo.jpg'
import XerjoffLogo from '../../assets/images/xerjofflogo.jpg'
import YSLLogo from '../../assets/images/ysllogo.jpg'
import ZadigLogo from '../../assets/images/zadiglogo.jpg'

const BrendLogo = () => {
  const [data, setData] = useState([
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

    {
      image: `${HugeBossLogo}`,
      aname: "Huge Boss",
    },
    {
      image: `${HuncaLogo}`,
      aname: "Hunca",
    },

    {
      image: `${InitioLogo}`,
      aname: "Initio",
    },

    {
      image: `${JoMalenoLogo}`,
      aname: "Jo Malone",
    },
    {
      image: `${JulietteLogo}`,
      aname: "Juliette",
    },

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

    {
      image: `${Narcisologo}`,
      aname: "Narciso Rodriguez",
    },

    {
      image: `${NinaRicciLogo}`,
      aname: "Nina Ricci",
    },
    {
      image: `${OrtoParisiLogo}`,
      aname: "Orto Parisi",
    },

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

    {
      image: `${AntonioLogo}`,
      aname: "White Musk",
    },

    {
      image: `${XerjoffLogo}`,
      aname: "Xerjoff",
    },
    {
      image: `${YSLLogo}`,
      aname: "Yves Saint Laurent",
    },
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
          {data.map((item) => (
            <div className={styles.controlbox}>
              <div className={styles.border}>
                <img src={item.image} alt="" />
              </div>
              <h2>{item.aname}</h2>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BrendLogo;
