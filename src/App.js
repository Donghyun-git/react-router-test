import './App.css';
import Homepage from './page/Hompage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<Productpage/>} />
        <Route path="/products/:id" element={<ProductDetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
