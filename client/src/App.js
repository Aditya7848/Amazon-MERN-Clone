import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newNav/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup_signin/SignUp";
import Signin from "./components/signup_signin/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
