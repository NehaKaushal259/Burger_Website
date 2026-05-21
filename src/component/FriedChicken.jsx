import { useState, useEffect } from "react";
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import fc1 from "../images/fc1.jpg";
import fc2 from "../images/fc2.jpg";
import fc3 from "../images/fc3.jpg";
import fc4 from "../images/fc4.jpg";
import fc5 from "../images/fc5.jpg";
import fc6 from "../images/fc6.jpg";
import fc7 from "../images/fc7.jpg";
import fc8 from "../images/fc8.jpg";


const FriedChicken = () => {
  const [cartItems, setCartItems] = useState([]);
  const items = [
    { id: "fried-chicken-1", img: fc1, title: "Korean Spicy Chicken Wings 4 pcs", price: "$8.50" },
    { id: "fried-chicken-2", img: fc2, title: "Korean Spicy Chicken 4 pcs", price: "$8.30" },
    { id: "fried-chicken-3", img: fc3, title: "Crunchy Chicken Nuggets", price: "$5.20" },
    { id: "fried-chicken-4", img: fc4, title: "Chicken Wings - Grilled 2 pcs", price: "$4.20" },
    { id: "fried-chicken-5", img: fc5, title: "Boneless Wings- Regular", price: "$6.50" },
    { id: "fried-chicken-6", img: fc6, title: "Boneless Wings- Large", price: "$10.30" },
    { id: "fried-chicken-7", img: fc7, title: "Chicken Wings- Fries 8 pcs", price: "$15.20" },
    { id: "fried-chicken-8", img: fc8, title: "Chicken Wings (Fried + Grilled)", price: "$17.20" },
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
    <section className="mt-[40px] px-6 font-serif mx-20 md:mx-8" id="fried-chicken">

    {/* Heading */}
      <h1 className="text-4xl text-center border-b-2 border-yellow-400 inline-block w-[100%] pb-2 mb-8
      [text-shadow:1px_1px_1px_black] font-[cursive]">
        Fried Chicken
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => { 
          const isInCart = cartItems.some(
            (cartItem) => cartItem.id === item.id
          )
          
          return (
          <SwiperSlide key={item.id}>
            <div className="p-3 transition duration-500 cursor-pointer hover:bg-yellow-400 rounded-lg border-2 border-gray-200">

              <img src={item.img} alt="" className="w-full h-[20em] md:h-[12rem]" />

              <div className="mt-2">
                <h3 className="font-bold [text-shadow:0px_0px_1px_black]">
                  {item.title}
                </h3>

                <p className="text-sm">
                  Lorem ipsum dolor sit amet.
                </p>

                <h5 className="mt-2 font-semibold flex justify-between items-center">
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
          </SwiperSlide>
        )})}
      </Swiper>

      <div className='mt-5'>
        <Link to='/friedchicken-page' className='text-blue-800 font-semibold underline xl:ml-[83rem] lg:ml-[44rem] md:ml-[36rem]' >
          See More
        </Link>
      </div>

    </section>
  );
};

export default FriedChicken;