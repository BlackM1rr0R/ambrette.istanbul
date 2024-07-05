import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/logo2.png";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import {
  ArrowIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsappIcon,
  YouTubeIcon,
} from "../../../icons";
import DB from "../../../db.json";
import ParfumLogo from "../../../assets/images/parfum1.jpg";

const uniqueBrands = [...new Set(DB.map((product) => product.brands))].sort();
const groupedBrands = uniqueBrands.reduce((acc, brand) => {
  const firstLetter = brand.charAt(0).toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(brand);
  return acc;
}, {});

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = DB.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPerfumes(filtered);
      setShowResults(true);
    } else {
      setFilteredPerfumes([]);
      setShowResults(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <Wrapper>
      <div className={styles.background}>
        <div className={styles.icons}>
          <div className={styles.iconscontrol}>
            <div className={styles.iconsflex}>
              <LinkedinIcon />
              <TikTokIcon />
              <TelegramIcon />
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </div>
            <div className={styles.language}>
              <h2>en</h2>
              <hr />
              <h2>ru</h2>
            </div>
          </div>

          <div className={styles.iconshr}>
            <hr />
          </div>
        </div>
        <div className={styles.control}>
          <Link to={"/"} className={styles.images}>
            <img src={Logo} alt="" />
          </Link>
          <div className={styles.input} ref={searchRef}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.input}
            />
            {showResults && (
              <div className={styles.searchControl}>
                <div className={styles.searchResults}>
                  {filteredPerfumes.map((perfume) => (
                    <div className={styles.imageControl} key={perfume.id}>
                      <Link
                        to={`/parfum-details/${perfume.id}`}
                        className={styles.searchResultItem}
                      >
                        {perfume.title}
                      </Link>
                      <img src={ParfumLogo} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.selected}>
            <WhatsappIcon/>
            <hr />
            <a target="_blank" href="https://wa.me/79682694534">+7 968 269 45 34</a>
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
              <Link to={"/genderselected"}>
                Perfumes <ArrowIcon />
              </Link>
              <ul className={styles.dropdowncontent}>
                <li>
                  <Link to={"/gender/men"}>Man</Link>
                </li>
                <li>
                  <Link to={"/gender/women"}>Women</Link>
                </li>
                <li>
                  <Link to={"/gender/unisex"}>Unisex</Link>
                </li>
              </ul>
            </div>

            <div className={styles.dropdownbrends}>
              <Link to={"/brends"}>
                Brends <ArrowIcon />
              </Link>
              <div className={styles.dropdowncontrol}>
                {Object.keys(groupedBrands).map((letter, index) => (
                  <div className={styles.control5} key={index}>
                    <div className={styles.brendheaders}>
                      <h2>{letter}</h2>
                    </div>

                    {groupedBrands[letter].map((brand, brandIndex) => {
                      const brandKey = brand.replace(/\s+/g, "").toLowerCase();
                      return (
                        <Link
                          to={`/brend-perfume/${brandKey}`}
                          key={brandIndex}
                          className={styles.controlclass}
                        >
                          <h2>{brand}</h2>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <Link to={"/about"}>About us</Link>
            <Link to={"/magazins"}>Magazins</Link>
            <Link to={"/contact"}>Contact us</Link>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
