import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import styles from "./index.module.css";
import Logo from "../../../logo555.png";
import Wrapper from "../../UI/wrapper";
import { Link } from "react-router-dom";
import {
  ArrowIcon,
  BlackInstagram,
  BlackWhatsApp,
  BlackYoutube,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsappIcon,
  YouTubeIcon,
} from "../../../icons";
import DB from "../../../db.json";
import RUD from '../../../rudb.json';
import { Sling as Hamburger } from "hamburger-react";
import SearchIcon from "../../../assets/images/search.svg";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const [currentDB, setCurrentDB] = useState(DB);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);  // Seçilen dili kaydet
    setCurrentDB(lang === "ru" ? RUD : DB);  // Seçilen dile göre veri tabanını ayarla
  };

  const handleSearchItemClick = () => {
    setShowResults(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInput = () => {
    setOpenInput(!openInput);
  };

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }, []);

  const filteredPerfumes = useMemo(() => {
    if (searchTerm.length > 0) {
      return currentDB.filter(
        (product) =>
          product.title?.toLowerCase().includes(searchTerm) &&
          product.innerimageurl
      );
    }
    return [];
  }, [searchTerm, currentDB]);

  useEffect(() => {
    setShowResults(filteredPerfumes.length > 0);
  }, [filteredPerfumes]);

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

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    setCurrentDB(savedLanguage === "ru" ? RUD : DB);
  }, [i18n]);

  return (
    <Wrapper>
      <div className={styles.iconsControl}>
        <div className={styles.icons}>
          <Link to={"https://www.instagram.com/ambrette.ru/"}>
            <BlackInstagram />
          </Link>
          <Link to="https://wa.me/79682694534" target="_blank">
            <BlackWhatsApp />
          </Link>
          <Link
            to={"https://www.youtube.com/@Ambretteofficial"}
            target="_blank"
          >
            <BlackYoutube />
          </Link>
        </div>
        <div className={styles.iconsLogo}>
          <h2 onClick={() => changeLanguage("en")}>en</h2>
          <hr />
          <h2 onClick={() => changeLanguage("ru")}>ru</h2>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.hamburger}>
            <Hamburger
              size={22}
              distance="lg"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
          <div className={styles.leftSide}>
            <Link to={"/"} className={styles.images}>
              <img src={Logo} alt="Logo" />
     
            </Link>

            <div className={styles.input} ref={searchRef}>
              <input
                type="text"
                placeholder={t("inputplace")}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {showResults && (
                <div className={styles.searchControl}>
                  <div className={styles.searchResults}>
                    {filteredPerfumes.map((item) => (
                      <div className={styles.imageControl} key={item.id}>
                        <Link
                          to={`/parfum-details/${item.id}`}
                          className={styles.searchResultItem}
                          onClick={handleSearchItemClick}
                        >
                          {item.title}
                        </Link>
                        <img src={item.innerimageurl} alt={item.title} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.searchIcon}>
            <img src={SearchIcon} alt="Search" onClick={toggleInput} />
          </div>

          <div className={styles.selected}>
            <BlackWhatsApp />
            <hr />
            <a target="_blank" href="https://wa.me/79682694534">
              +7 968 269 45 34
            </a>
          </div>
        </div>
        <div className={styles.inputControl}>
          {openInput && (
            <div className={styles.input1} ref={searchRef}>
              <input
                type="text"
                placeholder={t("inputplace")}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {showResults && (
                <div className={styles.searchControl}>
                  <div className={styles.searchResults}>
                    {filteredPerfumes.map((item) => (
                      <div className={styles.imageControl} key={item.id}>
                        <Link
                          to={`/parfum-details/${item.id}`}
                          className={styles.searchResultItem}
                          onClick={handleSearchItemClick}
                        >
                          {item.title}
                        </Link>
                        <img src={item.innerimageurl} alt={item.title} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.overlay}>
          <Link to="/allperfumes" onClick={() => setIsMenuOpen(false)}>
            {t("perfumes")}
          </Link>
          <Link to="/brends" onClick={() => setIsMenuOpen(false)}>
          {t("brends")}
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          {t("about_us")}
          </Link>
          <Link to="/magazins" onClick={() => setIsMenuOpen(false)}>
          {t("magazin")}
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          {t("contact_us")}
          </Link>
        </div>
      )}

      <div className={styles.headers}>
        <hr />
      </div>

      <Wrapper>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <div className={styles.dropdown}>
              <Link to={"/allperfumes"}>
                {t("perfumes")} <ArrowIcon />
              </Link>
              <ul className={styles.dropdowncontent}>
                <li>
                  <Link to={"/gender/men"}>{t("men")}</Link>
                </li>
                <li>
                  <Link to={"/gender/women"}>{t("women")}</Link>
                </li>
                <li>
                  <Link to={"/gender/unisex"}>{t("unisex")}</Link>
                </li>
              </ul>
            </div>
            <div className={styles.dropdownbrends}>
              <Link to={"/brends"}>
                {t("brends")} <ArrowIcon />
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
            <Link to={"/about"}>{t("about_us")}</Link>
            <Link to={"/magazins"}>{t("magazin")}</Link>
            <Link to={"/contact"}>{t("contact_us")}</Link>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
