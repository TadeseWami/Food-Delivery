import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import LoginPopup from "./component/LoginPopup/LoginPopup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./component/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import MyOrders from "./pages/myOrders/MyOrders";
import Placeholder from "./pages/Placeholder/Placeholder";
import Verify from "./pages/verify/Verify";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeholder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myOrders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
