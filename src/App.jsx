import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Offers from './component/Offers'
import Cards from './component/Cards'
import BurgerList from './component/BurgerList'
import Banner from './component/Banner'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Pizza from './component/Pizza'
import Fries from './component/Fries'
import FriedChicken from './component/FriedChicken'
import Login from './component/Login'
import Cart from './component/Cart'
import BurgerPage from './component/BurgerPage'
import PizzaPage from './component/PizzaPage'
import FriesPage from './component/FriesPage'
import FriedchickenPage from './component/FriedchickenPage'

import { FaArrowUp } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutSuccessPage from './component/CheckoutSuccessPage'
import Checkout from './component/Checkout'


function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <Cards />
      <BurgerList />
      <Banner />
      <Pizza />
      <Fries />
      <FriedChicken />
      <About />
      <Contact />
    </>
  );
}

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/burger-page' element={<BurgerPage />} />
        <Route path='/pizza-page' element={<PizzaPage />} />
        <Route path='/fries-page' element={<FriesPage />} />
        <Route path='/friedchicken-page' element={<FriedchickenPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkoutPage' element={<CheckoutSuccessPage />} />
      </Routes>

      <Footer />

      {/* Scroll Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-[50px] right-[50px] h-[50px] w-[50px] lg:right-[3rem]
        flex items-center justify-center bg-yellow-400 rounded-full shadow-lg 
        hover:bg-black hover:text-white transition duration-300"
      >
        <FaArrowUp className="text-2xl" />
      </button>

    </Router>      
    </>
  )
}

export default App
