import React from 'react';
import './App.css'; 
import { routeArr } from './routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BlackWhatsApp, WhatsappIcon } from './icons';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/scrolltop'; // ScrollToTop'u içe aktar

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <div className="appContainer">
        <Helmet>
          <title>Ambrette Perfume Store - Explore Unique Fragrances</title>
          <meta name="description" content="Find exclusive perfumes and fragrances for every occasion." />
          <meta name="keywords" content="perfume, fragrance, shop perfumes, exclusive perfumes" />
          <meta name="author" content="Perfume Store" />
        </Helmet>
        <Header />
        <Routes>
          {routeArr.map((item) => (
            <Route
              exact
              path={item.path}
              key={item.id}
              element={<item.component />}
            />
          ))}
        </Routes>
        <Footer />
        <Link 
          to="https://wa.me/79682694534"
          target="_blank"
          className="whatsappButton" 
          rel="noopener noreferrer"
        >
          <div>
            <BlackWhatsApp className="svgWhatsapp" />
          </div>
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
