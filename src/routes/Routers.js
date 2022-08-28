import React from "react";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import FoodDetails from "../pages/FoodDetails";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import AllFoods from "../pages/AllFoods";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="foods" element={<AllFoods />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="foods/:id" element={<FoodDetails />} />
    </Routes>
  );
};

export default Routers;
