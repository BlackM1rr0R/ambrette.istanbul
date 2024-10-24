import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Dillerin çevrilmiş içerikleri
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our site",
      perfumes: "Perfumes",
      brends: "Brends",
      about_us: "About us",
      contact_us: "Contact us",
      magazin:"Magazin",
      explore:"Explore Our Best Sellers"
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт",
      perfumes: "Парфюмы",
      brends: "Бренды",
      about_us: "О нас",
      contact_us: "Связаться с нами",
      magazin:"Магазины",
      explore:"Исследуйте наши бестселлеры"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Varsayılan dil
  fallbackLng: "en", // Dil bulunamazsa kullanılacak dil
  interpolation: {
    escapeValue: false, // React zaten XSS koruması yapıyor
  },
});

export default i18n;
