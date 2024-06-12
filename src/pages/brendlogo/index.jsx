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
      image: `${AntonioLogo}`,
      aname: "Christian parfum-details",
    },

    {
      image: `${AntonioLogo}`,
      aname: "C.Herera 212",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Calvin Klein Euphoria",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Captan Black",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Cartier Declaration",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Cerutti 1881",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Chanel ",
      link: "/dior",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Chloe",
      link: "/dior",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Clinique Happy",
      link: "/dior",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Cocoine",
      link: "/dior",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Creed Aventus Black Delux",
      link: "/dior",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Dalal",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Davidov",
    },
    {
      image: `${AntonioLogo}`,
      aname: "D.Cool",
    },
    {
      image: `${AntonioLogo}`,
      aname: "D & G",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Dior",
    },
    {
      image: `${AntonioLogo}`,
      aname: "DIP",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Donna Karan",
    },

    {
      image: `${AntonioLogo}`,
      aname: "E.Molecules 02",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Eclat Sport",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Escada",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Escentric Molecule",
    },
    {
      image: `${AntonioLogo}`,
      aname: "EX Fleur Narcotique",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Explore",
    },

    {
      image: `${AntonioLogo}`,
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
      aname: "Fleur Narcotique",
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
      image: `${AntonioLogo}`,
      aname: "Givenchy",
    },
    {
      image: `${AntonioLogo}`,
      aname: "G.M.Bloom",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Gucci",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Huge Boss",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Huge Boss",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Hunca Caldion",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Initio",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Ja Malone",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Juliette",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Kajal",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Kayali",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Kenzo",
    },
    {
      image: `${AntonioLogo}`,
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
      image: `${AntonioLogo}`,
      aname: "Lacoste",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Lancome",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Lanvin",
    },
    {
      image: `${AntonioLogo}`,
      aname: "L.Eclat",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Louis Vuitton",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Mancera",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Mango",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Memo African",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Molecule",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Mono",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Montale",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Montblanc",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Moschino",
    },
    {
      image: `${AntonioLogo}`,
      aname: "My Burberry",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Narciso",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Narcos'is",
    },
    {
      image: `${AntonioLogo}`,
      aname: "N.Black",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Nina Ricci",
    },
    {
      image: `${AntonioLogo}`,
      aname: "N.Rodriguez",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Orto Paris",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Orto P.Megamare",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Paco Rabanne",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Parfums De Marley",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Prada Candy",
    },
    {
      image: `${AntonioLogo}`,
      aname: "P.R.Invictus",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Ralph Lauren",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Rassasi Timsah",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Ricardo Veron",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Roja",
    },
    {
      image: `${AntonioLogo}`,
      aname: "R.Reckless",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Sah Parfum",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Salvatore Ferragamo",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Sospiro",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Shaik",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Sisley",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Stefano Ricci",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Tom Ford",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Tiziana Trenzi",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Thamen Green",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Trussardi Donna",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Victoria Secret",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Versace",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Valentina",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Vertus",
    },

    {
      image: `${AntonioLogo}`,
      aname: "White Musk",
    },

    {
      image: `${AntonioLogo}`,
      aname: "Xerjoff",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Y.S.L",
    },
    {
      image: `${AntonioLogo}`,
      aname: "Zadig Voltaire",
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
