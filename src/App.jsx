import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/main/Homepage';
import ProductPage from './pages/main/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
