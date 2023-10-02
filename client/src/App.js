import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newNav/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup_signin/SignUp";
import Signin from "./components/signup_signin/Signin";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
