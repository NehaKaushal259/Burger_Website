import f1 from '../images/f1.png';
import f2 from '../images/f2.png';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import f5 from '../images/f5.png';
import f6 from '../images/f6.png';
import f7 from '../images/f7.png';

import { useState, useEffect } from 'react'
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const FriesPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const burgers = [
    { id: "fries1", img: f1, title: "Fries (King)", price: "$6.50" },
    { id: "fries2", img: f2, title: "Fries (Medium)", price: "$5.60" },
    { id: "fries3", img: f3, title: "Peri Peri Fries (Medium)", price: "$7.20" },
    { id: "fries4", img: f4, title: "Peri Peri Fries (King)", price: "$9.50" },
    { id: "fries5", img: f5, title: "Saucy Fries", price: "$6.50" },
    { id: "fries6", img: f6, title: "Normal Fries", price: "$4.30" },
    { id: "fries7", img: f7, title: "Crispy Fries", price: "$5.20" },
    { id: "fries8", img: f5, title: "Saucy Fries", price: "$5.50" },
    { id: "fries9", img: f1, title: "Fries (King)", price: "$6.50" },
    { id: "fries10", img: f2, title: "Fries (Medium)", price: "$5.60" },
    { id: "fries11", img: f3, title: "Peri Peri Fries (Medium)", price: "$7.20" },
    { id: "fries12", img: f4, title: "Peri Peri Fries (King)", price: "$9.50" },
    { id: "fries13", img: f5, title: "Saucy Fries", price: "$6.50" },
    { id: "fries14", img: f6, title: "Normal Fries", price: "$4.30" },
    { id: "fries15", img: f7, title: "Crispy Fries", price: "$5.20" },
    { id: "fries16", img: f5, title: "Saucy Fries", price: "$5.50" },
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
          Fries
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
            <img src={item.img} alt="" className="w-full h-[20em]" />

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
      
    </section>
  );
};

export default FriesPage;