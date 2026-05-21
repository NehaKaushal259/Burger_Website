import { useState, useEffect } from "react";
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';


const Pizza = () => {
  const [cartItems, setCartItems] = useState([]);
  const items = [
    { id:"pizza1", img: p1, title: "Italian Pizza", price: "$6.50" },
    { id:"pizza2", img: p2, title: "Cheese n Corn", price: "$20.30" },
    { id:"pizza3", img: p3, title: "Margherita", price: "$1.20" },
    { id:"pizza4", img: p4, title: "Pizza Slice", price: "$3.20" },
    { id:"pizza5", img: p5, title: "Tomato Slice", price: "$6.50" },  
    { id:"pizza6", img: p6, title: "Non Veg Loaded", price: "$20.30" },
    { id:"pizza7", img: p7, title: "Onion Pizza", price: "$1.20" },
    { id:"pizza8", img: p2, title: "Golden Corn", price: "$3.20" },
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
    <section className="mt-[100px] px-6 font-serif mx-20 md:mx-8" id="pizza">

    {/* Heading */}
      <h1 className="text-4xl text-center border-b-2 border-yellow-400 inline-block w-[100%] pb-2 mb-8
      [text-shadow:1px_1px_1px_black] font-[cursive]">
        Pizza
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

              <img src={item.img} alt="" className="w-full" />

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
          </SwiperSlide>
        ) })}
      </Swiper>

      <div className='mt-5'>
        <Link to='/pizza-page' className='text-blue-800 font-semibold underline xl:ml-[83rem] lg:ml-[44rem] md:ml-[36rem]' >
          See More
        </Link>
      </div>
    </section>
  );
};

export default Pizza;