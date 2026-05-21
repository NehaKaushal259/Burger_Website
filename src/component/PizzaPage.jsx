import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png';

import { useState, useEffect } from 'react'
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PizzaPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const burgers = [
    { id: "pizza1", img: p1, title: "Italian Pizza", price: "$6.50" },
    { id: "pizza2", img: p2, title: "Cheese n Corn", price: "$20.30" },
    { id: "pizza3", img: p3, title: "Margherita", price: "$1.20" },
    { id: "pizza4", img: p4, title: "Pizza Slice", price: "$3.20" },
    { id: "pizza5", img: p5, title: "Tomato Slice", price: "$6.50" },
    { id: "pizza6", img: p6, title: "Non Veg Loaded", price: "$20.30" },
    { id: "pizza7", img: p7, title: "Onion Pizza", price: "$1.20" },
    { id: "pizza8", img: p2, title: "Golden Corn", price: "$3.20" },
    { id: "pizza9", img: p1, title: "Italian Pizza", price: "$6.50" },
    { id: "pizza10", img: p2, title: "Cheese n Corn", price: "$20.30" },
    { id: "pizza11", img: p3, title: "Margherita", price: "$1.20" },
    { id: "pizza12", img: p4, title: "Pizza Slice", price: "$3.20" },
    { id: "pizza13", img: p5, title: "Tomato Slice", price: "$6.50" },
    { id: "pizza14", img: p6, title: "Non Veg Loaded", price: "$20.30" },
    { id: "pizza15", img: p7, title: "Onion Pizza", price: "$1.20" },
    { id: "pizza16", img: p2, title: "Golden Corn", price: "$3.20" },
  ];

  // ✅ Load cart
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        const key = `cart_${user.email}`;
        const data = JSON.parse(localStorage.getItem(key)) || [];
        setCartItems(data);
      }
    }, []);

  const addToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login first ❌");
      return;
    }
    const key = `cart_${user.email}`;
    const existingCart = JSON.parse(localStorage.getItem(key)) || [];
    const alreadyExists = existingCart.find(i => i.id === item.id);
    if (alreadyExists) {
      alreadyExists.quantity += 1;
      localStorage.setItem(key, JSON.stringify(existingCart));
      setCartItems([...existingCart]);
      return;
    }

    const updatedCart = [...existingCart, { ...item, quantity: 1 }];
    localStorage.setItem(key, JSON.stringify(updatedCart));
    setCartItems(updatedCart); // ✅ update UI
  };

  return (
    <section className="mt-[60px] px-6" id='burger'>

      {/* Heading */}
      <div className='flex'>
        <Link to="/">
          <span className='text-blue-600 font-semibold underline flex text-lg'>
            <FaArrowLeft className='mr-2 mt-1' />
            Back
          </span>
        </Link>

        <h1 className="text-4xl text-center inline-block mx-20 w-[90%] pb-2 
        [text-shadow:1px_1px_1px_black] font-[cursive]">
          Pizza
        </h1>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 mt-[30px] mx-20 mb-20">

        {burgers.map((item) => {
            const isInCart = cartItems.some(
                (cartItem) => cartItem.id === item.id
            )
            
            return (
          <div
            key={item.id}
            className="transition duration-500 cursor-pointer p-3 hover:bg-yellow-400 rounded-lg border-[1px] border-gray-300 hover:border-yellow-400"
          >
            <img src={item.img} alt="" className="w-full" />

            <div className="mt-2">
              <h3 className="font-semibold [text-shadow:0px_0px_1px_black] text-2xl mb-3 font-serif">
                {item.title}
              </h3>

              <p className="text-sm mb-3 font-serif">
                Lorem ipsum dolor sit amet.
              </p>

              {/* Price + Icon */}
              <h5 className="mt-2 font-medium text-lg flex justify-between items-center">
                {item.price}
                <span
                    className="cursor-pointer"
                    onClick={() => addToCart(item)}
                >
                    {isInCart ? (
                    <FaCheck className="text-2xl mr-4 text-green-500" />
                    ) : (
                    <FaBasketShopping className="text-2xl mr-4 text-black" />
                    )}
                </span>
              </h5>
            </div>
          </div>
        )})}

        

      </div>
      {/* <div className='mt-5 mb-20'>
        <a href='#' className='text-blue-800 font-semibold underline ml-[82rem]' >See More</a>
      </div> */}
    </section>
  );
};

export default PizzaPage;