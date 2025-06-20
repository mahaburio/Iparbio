import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';        // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';   // Bootstrap JS (including Popper)
import 'remixicon/fonts/remixicon.css';  // Remix Icon font
import App from './App.jsx';     // Your main app component
import './styles/style.css';    // global styles
import './styles/footer.css';  // footer styles used globally

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
