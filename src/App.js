import './App.css';
import Recomended from "./Recomended/Recomended";
import { Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";
import Cart from "../src/Cart/Cart";
import Home from "./Home";
import ProductFilter from "./components/ProductFilter";
import Register from './auth/Register';
import Login from './auth/Login';
import MasterLayout from './components/layouts/admin/MasterLayout';
import Dashboard from './assets/admin/Dashboard';
import Profile from './assets/admin/Profile';
import ProductView from './components/ProductView';
import Checkout from './components/Checkout';



function App() {
  return (
    <div>
      
      <ShopContextProvider>
    
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="Recomended" element={<Recomended />} />
        <Route path="/productFilter" element={<ProductFilter />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/admin" element={<MasterLayout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/Product/:id" element={<ProductView />} />
        <Route path="/Checkout" element={<Checkout />} />




        



      </Routes>
  
      </ShopContextProvider>

    </div>
   
  
  )
}

export default App;
