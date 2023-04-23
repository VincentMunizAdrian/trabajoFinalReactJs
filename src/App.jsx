import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./context/CartContext";
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import CardDetailContainer from "./components/CardDetailContainer";
import Checkout from "./components/Checkout";

function App() {

  return (
    <div>
      <CartProvider>
        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<CardDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/404" element={<h2>404 Not Found</h2>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App