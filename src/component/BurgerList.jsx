import { useState, useEffect } from 'react'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import b4 from '../images/b4.png'
import b5 from '../images/b5.png'
import b6 from '../images/b6.png'
import b7 from '../images/b7.png'
import b8 from '../images/b8.png'

import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BurgerList = () => {

  const [cartItems, setCartItems] = useState([]);

  const burgers = [
    { id: 1, img: b1, title: "Tasty Burger", price: "$10.50" },
    { id: 2, img: b2, title: "Onion Burger", price: "$5.60" },
    { id: 3, img: b3, title: "Classic Burger", price: "$3.20" },
    { id: 4, img: b4, title: "Best Burger", price: "$1.50" },
    { id: 5, img: b5, title: "Cheese Burger", price: "$6.50" },
    { id: 6, img: b6, title: "Crispy Chicken Burger", price: "$2.30" },
    { id: 7, img: b7, title: "Crispy Veg Burger", price: "$1.20" },
    { id: 8, img: b8, title: "Delicious Burger", price: "$10.50" },
  ];

  // ✅ Load cart on page load
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

    // ❗ prevent duplicate
    const alreadyExists = existingCart.find(i => i.id === item.id);
    if (alreadyExists) return;

    const updatedCart = [...existingCart, { ...item, quantity: 1 }];
    localStorage.setItem(key, JSON.stringify(updatedCart));
    setCartItems(updatedCart); // ✅ update UI instantly
  };

  return (
    <section className="mt-[100px] px-6" id='burger'>

      <h1 className="text-4xl text-center border-b-2 border-yellow-400 inline-block md:mx-[3rem] mx-20 w-[90%] lg:w-[85%] pb-2 
      [text-shadow:1px_1px_1px_black] font-[cursive]">
        Delicious Burger
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mt-[30px] mx-20 md:mx-8">

        {burgers.map((item) => {
          const isInCart = cartItems.some(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <div
              key={item.id}
              className="transition duration-500 cursor-pointer p-3 hover:bg-yellow-400 rounded-lg border-[1px] border-gray-300 hover:border-yellow-400"
            >
              <img src={item.img} alt="" className="w-full" />

              <div className="mt-2">
                <h3 className="font-semibold [text-shadow:0px_0px_1px_black] text-2xl mb-3 font-serif md:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm mb-3 font-serif">
                  Lorem ipsum dolor sit amet.
                </p>

                <h5 className="mt-2 font-medium text-lg flex justify-between items-center">
                  {item.price}

                  <span
                    className="cursor-pointer"
                    onClick={() => !isInCart && addToCart(item)}
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
          );
        })}

      </div>

      <div className='mt-5'>
        <Link to='/burger-page' className='text-blue-800 font-semibold underline xl:ml-[85rem] lg:ml-[51rem] md:ml-[38rem]'>
          See More
        </Link>
      </div>
    </section>
  );
};

export default BurgerList;