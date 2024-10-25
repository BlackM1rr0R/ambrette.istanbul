import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Dillerin çevrilmiş içerikleri
const resources = {
  en: {
    translation: {
      welcome: "Title Pages",
      perfumes: "Perfumes",
      brends: "Brends",
      about_us: "About us",
      contact_us: "Contact us",
      magazin: "Magazin",
      explore: "Explore Our Best Sellers",
      discover: "Discover Our Collections",
      client: "Unveil Our Customer Favorites",
      notes: "Notes",
      fragment: "Fragman Photos",
      popularperfume: "Most Popular Perfumes",
      popularbrands: "Most Popular Brands",
      men: "Man",
      women: "Women",
      unisex: "Unisex",
      allperfume: "All Perfumes",
      whowe: "Who are we?",
      vision: "Vision of The Future",
      purpose: "Our Purpose",
      fragrances: "Fragrances",
      main: "Main Principle",
      particip: "Participating",
      sertifikat: "Our Certificates",
      aboutwho:
        "Since 2016, we started our activities in the world of Azerbaijan's fragrance industry and continued to expand with our main base warehouses located in Pyatigorsk by stepping into the Russian market in 2019. As the most widely recognized perfume company in the CIS countries, we continue to maintain our position in the field with over 1500 products accurately produced in standard, premium, and deluxe categories and in accordance with quality standards.",
      aboutvision:
        "Currently, we operate large area warehouses and stores in Moscow's Sodovoy and Lubna markets, Kazakhstan, Kyrgyzstan, and Uzbekistan. In the near future, our company is preparing to open the doors of its new office in Uzbekistan.",
      aboutpurpose:
        "Currently, we operate large area warehouses and stores in Moscow's Sodovoy and Lubna markets, Kazakhstan, Kyrgyzstan, and Uzbekistan. In the near future, our company is preparing to open the doors of its new office in Uzbekistan.",
      aboutfrag:
        "Our fragrances are formulated at Sweden's Firmenich plant and produced by Turkey's MG Gürcüsay company. Each year, we gather to review new products and renew our contracts with the factories where our products are manufactured.",
      aboutprinciple:
        "As the most widely recognized perfume company in the CIS countries, we continue to maintain our position in the field with over 1500 products accurately produced in standard, premium, and deluxe categories and in accordance with quality standards. Our main principle is very simple - from the factory to the customer logic labeled at factory prices. This honesty and reliability are the main reasons for our development, as we currently serve nearly 10,000 customers in a total of 10 countries.",
      aboutpartic:
        "By participating in the major fragrance exhibitions held in Dubai once a year, we confirm that we are part of the global fragrance market. As a company engaged in wholesale fragrance sales, we always prioritize trust and quality.",
      inputplace: "Search by title...",
      seemore: "See more",
      seeless: "See less",
      moskowbranch: "Moskow branch",
      kgbranch: "Kyrgyzstan branch",
      kzbranch: "Kazakhstan branch",
      uzbranch: "Uzbekistan branch",
      azbranch: "Azerbaijan branch",
      worktime: "Our working hours: from 09:00 to 22:00",
      ourlocation: "Our location",
      email: "Email Us",
      phone: "Phone",
      submit: "Submit",
      instagram: "Instagram Address",
      allbrends: "All Brends",
      description: "Description",
      fragnot: "Fragrance Notes",
      fragfamily: "Fragrance Family",
      topnotes: "Top Notes",
      midnotes: "Mid Notes",
      basenotes: "Base Notes",
    },
  },
  ru: {
    translation: {
      welcome: "Страницы заголовков",
      perfumes: "Парфюмы",
      brends: "Бренды",
      about_us: "О нас",
      contact_us: "Связаться с нами",
      magazin: "Магазины",
      explore: "Исследуйте наши бестселлеры",
      discover: "Наши коллекции",
      client: "Наши любимые товары клиентов",
      notes: "Ноты",
      fragment: "Фото фрагментов",
      popularperfume: "Самые популярные ароматы",
      popularbrands: "Самые популярные бренды",
      men: "Мужской",
      women: "Женский",
      unisex: "Универсальный",
      allperfume: "Все ароматы",
      whowe: "Кто мы?",
      vision: "Видение будущего",
      purpose: "Наша цель",
      fragrances: "Ароматы",
      main: "Основной принцип",
      particip: "Участие",
      sertifikat: "Наши сертификаты",
      aboutwho:
        "2016 года мы начали свою деятельность в мире парфюмерной индустрии Азербайджана и продолжили расширение с нашими основными базовыми складами, расположенными в Пятигорске, сделав шаг на российский рынок в 2019 году. Будучи самой известной парфюмерной компанией в странах СНГ, мы продолжаем удерживать свою позицию в этой области с более чем 1500 продуктами, точно произведенными в стандартной, премиум и делюксовых категориях и в соответствии с качественными стандартами.",
      aboutvision:
        "В настоящее время мы управляем крупными складами и магазинами на рынках Содового и Лубны в Москве, а также в Казахстане, Кыргызстане и Узбекистане. В ближайшем будущем наша компания готовится открыть двери своего нового офиса в Узбекистане.",
      aboutpurpose:
        "В настоящее время мы управляем крупными складами и магазинами на рынках Содового и Лубны в Москве, а также в Казахстане, Кыргызстане и Узбекистане. В ближайшем будущем наша компания готовится открыть двери своего нового офиса в Узбекистане.",
      aboutfrag:
        "Наши ароматы разрабатываются на заводе Firmenich в Швеции и производятся компанией MG Gürcüsay в Турции. Каждый год мы собираемся, чтобы обсудить новые продукты и обновить наши контракты с фабриками, на которых производятся наши изделия.",
      aboutprinciple:
        "Будучи самой известной парфюмерной компанией в странах СНГ, мы продолжаем удерживать свою позицию в этой области с более чем 1500 продуктами, точно произведенными в стандартной, премиум и делюксовых категориях и в соответствии с качественными стандартами. Наше главное принцип очень прост: логика от завода до клиента по заводским ценам. Эта честность и надежность являются основными причинами нашего развития, так как в настоящее время мы обслуживаем почти 10,000 клиентов в 10 странах.",
      aboutpartic:
        "Участвуя в крупных парфюмерных выставках, проводимых в Дубае раз в год, мы подтверждаем, что являемся частью глобального парфюмерного рынка. Как компания, занимающаяся оптовыми продажами парфюмерии, мы всегда придаем первостепенное значение доверию и качеству.",
      inputplace: "Поиск по названию...",
      seemore: "Смотреть больше",
      seeless: "Смотреть меньше",
      moskowbranch: "Фил. в Москве",
      kgbranch: "Фил. в Кыргыз.",
      kzbranch: "Фил. в Казахст.",
      uzbranch: "Фил. в Узбекис.",
      azbranch: "Фил. в Азербайд.",
      worktime: "Наши рабочие часы: с 09:00 до 22:00",
      ourlocation: "Наше местоположение",
      email: "Электронную почту",
      phone: "Телефон",
      submit: "Отправить",
      instagram: "Адрес в Instagram",
      allbrends: "Все бренды",
      description: "Описание",
      fragnot: "Ноты аромата",
      fragfamily: "Семья ароматов",
      topnotes: "Верхние ноты",
      midnotes: "Средние ноты",
      basenotes: "Базовые ноты",
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
