import fc1 from "../images/fc1.jpg";
import fc2 from "../images/fc2.jpg";
import fc3 from "../images/fc3.jpg";
import fc4 from "../images/fc4.jpg";
import fc5 from "../images/fc5.jpg";
import fc6 from "../images/fc6.jpg";
import fc7 from "../images/fc7.jpg";
import fc8 from "../images/fc8.jpg";

import { useState, useEffect } from 'react'
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const FriedchickenPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const burgers = [
    { id: "fried-chicken-1", img: fc1, title: "Korean Spicy Chicken Wings 4 pcs", price: "$8.50" },
    { id: "fried-chicken-2", img: fc2, title: "Korean Spicy Chicken 4 pcs", price: "$8.30" },
    { id: "fried-chicken-3", img: fc3, title: "Crunchy Chicken Nuggets", price: "$5.20" },
    { id: "fried-chicken-4", img: fc4, title: "Chicken Wings - Grilled 2 pcs", price: "$4.20" },
    { id: "fried-chicken-5", img: fc5, title: "Boneless Wings- Regular", price: "$6.50" },
    { id: "fried-chicken-6", img: fc6, title: "Boneless Wings- Large", price: "$10.30" },
    { id: "fried-chicken-7", img: fc7, title: "Chicken Wings- Fries 8 pcs", price: "$15.20" },
    { id: "fried-chicken-8", img: fc8, title: "Chicken Wings (Fried + Grilled)", price: "$17.20" },
    { id: "fried-chicken-9", img: fc1, title: "Korean Spicy Chicken Wings 4 pcs", price: "$8.50" },
    { id: "fried-chicken-10", img: fc2, title: "Korean Spicy Chicken 4 pcs", price: "$8.30" },
    { id: "fried-chicken-11", img: fc3, title: "Crunchy Chicken Nuggets", price: "$5.20" },
    { id: "fried-chicken-12", img: fc4, title: "Chicken Wings - Grilled 2 pcs", price: "$4.20" },
    { id: "fried-chicken-13", img: fc5, title: "Boneless Wings- Regular", price: "$6.50" },
    { id: "fried-chicken-14", img: fc6, title: "Boneless Wings- Large", price: "$10.30" },
    { id: "fried-chicken-15", img: fc7, title: "Chicken Wings- Fries 8 pcs", price: "$15.20" },
    { id: "fried-chicken-16", img: fc8, title: "Chicken Wings (Fried + Grilled)", price: "$17.20" },
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
          Fried Chicken
        </h1>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 mt-[30px] mx-20 mb-20">

        {burgers.map((item, i) => {
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

export default FriedchickenPage;