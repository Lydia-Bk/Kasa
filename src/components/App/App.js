import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "../../pages/About";
import ApartmentPage from '../../pages/ApartmentPage';
import Home from "../../pages/Home";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import Error from '../Error/Error'

const App = () => {
  // tout ce qui est en dehors de `BrowserRouter` est affiché sur toutes les pages
  return (
    <div id="app">
      <BrowserRouter>
        <div className='app_main'>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error />} />
              {/* TODO dynamic route */}
              <Route path="/logement/:id" element={<ApartmentPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;