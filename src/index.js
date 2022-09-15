import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import Home from "./pages/home/home";
import Restaurants from "./pages/restaurant/restaurant";
import Friends from "./pages/friends/friends";
import Contact from "./pages/contact/contact";
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="friends" element={<Friends />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

