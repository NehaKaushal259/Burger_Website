import { useState, useEffect } from "react";
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import f1 from '../images/f1.png';
import f2 from '../images/f2.png';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import f5 from '../images/f5.png';
import f6 from '../images/f6.png';
import f7 from '../images/f7.png';


const Fries = () => {
  const [cartItems, setCartItems] = useState([]);
  const items = [
    { id: "fries1", img: f1, title: "Fries (King)", price: "$6.50" },
    { id: "fries2", img: f2, title: "Fries (Medium)", price: "$5.60" },
    { id: "fries3", img: f3, title: "Peri Peri Fries (Medium)", price: "$7.20" },
    { id: "fries4", img: f4, title: "Peri Peri Fries (King)", price: "$9.50" },
    { id: "fries5", img: f5, title: "Saucy Fries", price: "$6.50" },
    { id: "fries6", img: f6, title: "Normal Fries", price: "$4.30" },
    { id: "fries7", img: f7, title: "Crispy Fries", price: "$5.20" },
    { id: "fries8", img: f5, title: "Saucy Fries", price: "$5.20" },
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
    <section className="mt-[40px] px-6 font-serif mx-20 md:mx-8" id="fries">

    {/* Heading */}
      <h1 className="text-4xl text-center border-b-2 border-yellow-400 inline-block w-[100%] pb-2 mb-8
      [text-shadow:1px_1px_1px_black] font-[cursive]">
        Fries
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
        <Link to='/fries-page' className='text-blue-800 font-semibold underline xl:ml-[83rem] lg:ml-[44rem] md:ml-[36rem]' >See More</Link>
      </div>

    </section>
  );
};

export default Fries;