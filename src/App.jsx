import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/main/Homepage';
import JoinUsePage from './pages/main/JoinUs';
import ProductPage from './pages/main/ProductPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path='/joinus' element={<JoinUsePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
