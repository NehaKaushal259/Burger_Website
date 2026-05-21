import React from 'react'

function CheckoutSuccessPage() {

    const data = JSON.parse(
        localStorage.getItem("checkoutData")
    );
  return (
    <>
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-14">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">
                {/* Success Icon */}
                <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-800 mt-6">
                Order Placed Successfully 🎉
                </h1>

                {/* Message */}
                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Thank you for your order. Your delicious food is being prepared and
                will arrive shortly.
                </p>

                {/* Order Info */}
                <div className="bg-gray-50 rounded-2xl p-5 mt-6 text-left border border-gray-200">
                <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-700">Order ID</span>
                    <span className="text-gray-600">#ORD12345</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-700">Phone No. </span>
                    <span className="text-gray-600">{data?.phone}</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-700">Address</span>
                    <span className="text-gray-600">{data?.address}</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-700">Estimated Time</span>
                    <span className="text-gray-600">25 - 30 mins</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-700">Payment</span>
                    <span className="text-gray-600">{data?.payment}</span>
                </div>

                
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                        href="/"
                        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition duration-300"
                    >
                        Back To Home
                    </a>

                    <a
                        href="/cart"
                        className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl transition duration-300"
                    >
                        View Cart
                    </a>
                    </div>
                </div>
                </div>
      
        </div>
    </>
  )


}

export default CheckoutSuccessPage
