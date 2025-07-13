import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';        // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';   // Bootstrap JS (including Popper)
import 'remixicon/fonts/remixicon.css';  // Remix Icon font
import App from './App.jsx';     // Your main app component

import '@fontsource/poppins'; /* Font Family */
import '@fontsource/roboto';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';


// ROBOTO
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/600.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';


// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Style

import './styles/style.css'; 


import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);
