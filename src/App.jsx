import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/main/Homepage';
import JoinUsePage from './pages/main/JoinUs';
import ProductPage from './pages/main/ProductPage';
import ProductPageColor from './pages/main/ProductPage-Color';
import ProductPageSize from './pages/main/ProductPage-Size';
import ProductPageEgift from './pages/main/ProductPage-Egift';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/joinus' element={<JoinUsePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-color" element={<ProductPageColor />} />
        <Route path="/product-size" element={<ProductPageSize />} />
        <Route path="/product-egift" element={<ProductPageEgift />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
