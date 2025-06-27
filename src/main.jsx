import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';        // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';   // Bootstrap JS (including Popper)
import 'remixicon/fonts/remixicon.css';  // Remix Icon font
import App from './App.jsx';     // Your main app component



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './styles/style.css';    // global styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
