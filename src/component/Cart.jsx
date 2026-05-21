import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("cart")) || [];

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const key = `cart_${user.email}`;
      const data = JSON.parse(localStorage.getItem(key)) || [];
      const updatedData = data.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));

      setCartItems(updatedData);
    } else {
      setCartItems([]);
    }
  }, []);

  const updateStorage = (items) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) return;
    
    const key = `cart_${user.email}`;
    setCartItems(items);
    localStorage.setItem(key, JSON.stringify(items))
  }

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].quantity +=1;
    updateStorage(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if(updated[index].quantity > 1){
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    updateStorage(updated);
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (parseFloat(item.price.replace("$", "")) * item.quantity);
  }, 0);

  return (
    <div className="mt-[50px] px-6">
      <h1 className="text-4xl font-bold mb-6 text-center font-serif">🛒 Your Cart</h1>

      <div className="flex">
        <div>
          {cartItems.length === 0 ? (
            <p className="text-2xl font-bold text-center mt-20 mx-80 mb-[20rem]">No items in cart 🛒</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 mx-32 my-20">
              {cartItems.map((item, i) => (
                <div key={i} className="border p-4 rounded-lg shadow w-72 pl-10 pb-10">
                  <img src={item.img} alt="" className="w-full h-52 w-52" />
                  <h3 className="font-bold mt-2 text-2xl font-serif">{item.title}</h3>
                  <p className="text-xl font-semibold">{item.price}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-yellow-400 hover:text-white w-16"
                      onClick={() => decreaseQty(i)}>
                        -
                      </button>
                      <span className="font-bold text-lg w-12 text-center">{item.quantity}</span>
                      <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-yellow-400 hover:text-white w-16"
                      onClick={() => increaseQty(i)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* RIGHT SIDE - SUMMARY */}
          <div className="bg-yellow-400 p-6 rounded-xl shadow-lg h-fit w-[32rem] mr-32 pt-6 mt-12">

            <h2 className="text-2xl font-bold mb-6 text-center">Order Summary</h2>

            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between mb-3 text-sm">
                <span className="font-semibold mt-2 text-xl font-serif">{item.title} x {item.quantity}</span>
                <span className="text-xl font-semibold ml-20 mt-2">
                  ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

              <hr className="mt-12 mb-4 border-black "/>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <button className="w-full mt-10 bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black transition">
                  Checkout
                </button>
              </Link>
            </div>


      </div>

      


    </div>
  );
};

export default Cart;

