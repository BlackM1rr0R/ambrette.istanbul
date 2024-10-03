import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Mevcut rotayı yakalamak için useLocation kullanılır.

  useEffect(() => {
    window.scrollTo(0, 0); // Her route değiştiğinde sayfanın başına kaydırılır.
  }, [pathname]); // pathname her değiştiğinde useEffect tetiklenir.

  return null;
};

export default ScrollToTop;
