import React from 'react';
import './App.css';  // CSS dosyasını doğru import edin
import { routeArr } from './routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { WhatsappIcon } from './icons';

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
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
          to="https://wa.me/996501662222"
          target="_blank"
          className="whatsappButton" 
 
          rel="noopener noreferrer"
        >
          <div>

          <WhatsappIcon className="svgWhatsapp"/>
          </div>
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
