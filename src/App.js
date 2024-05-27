import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/login/LoginPage";
import HelpPage from "./pages/help/HelpPage";
import OrderandreturnsPage from "./pages/orderandreturns/OrderandreturnsPage";
import ProductDetail from "./content/Product/ProductDetail";
import CartDetail from "./content/Cart/CartPop";
import CartIndex from "./content/Cart/CartIndex";
import ProductPage from "./content/Product/ProductPage";
import Navbar from "./layouts/Navbar";
import Footbar from "./layouts/footbar";
import SignupPage from "./pages/auth/signup/SignupPage";
import { useState } from "react";
import ResetPasswordOtpPage from "./pages/auth/resetpassword/ResetPasswordOtpPage";
import ResetPasswordPage from "./pages/auth/resetpassword/ResetPasswordPage";

import MePage from "./pages/accountdetail/me/MePage";

import WishlistPage from "./pages/WishlistPage";

import NavbarProvider from "./utils/NavbarProvider";

import CheckOutPage from "./content/Checkout/CheckOut";
import BillingPage from "./components/Checkout/billing";
import OrderPage from "./pages/orderandreturns/orderPage";
import OrderDetailPage from "./pages/orderandreturns/orderDetails";

const App = () => {
  const [name, setName] = useState("john");

  return (
    <div>
      <NavbarProvider>
        <Navbar name={name} />
      </NavbarProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/order-tracker" element={<OrderandreturnsPage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/card-detail" element={<CartDetail />} />
        <Route path="/cart-index" element={<CartIndex />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/reset-pageotp" element={<ResetPasswordOtpPage />} />
        <Route path="/reset-page" element={<ResetPasswordPage />} />

        <Route path="/me" element={<MePage />} />
        <Route path="/order-page" element={<OrderPage />} />
        <Route path="/order-detail/:id" element={<OrderDetailPage />} />

        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/billing" element={<BillingPage />} />
      </Routes>
      <NavbarProvider>
        <Footbar />
      </NavbarProvider>
    </div>
  );
};

export default App;


// git add .
// git commit -m "commit"
// git push 
