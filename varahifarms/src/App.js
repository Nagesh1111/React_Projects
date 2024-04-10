import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Faq from './Components/Faq';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Track />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
