import offers1 from '../images/offer1.png'
import offers2 from '../images/offer2.png'
import offers3 from '../images/offer3.png'
import offers4 from '../images/offer4.png'

const Offers = () => {
  const data = [
    "Burger 50% off",
    "Free Delivery",
    "Free Fries",
    "Free Cold Drink",
  ];

  return (
    <section className="px-6 py-10 text-center font-serif mt-8 ">
        {/* <h1 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 mx-20">OFFERS</h1> */}

        <h1 className="text-4xl text-center border-b-2 border-yellow-400 inline-block md:mx-[3rem] mx-20 w-[90%] lg:w-[85%] pb-2 
        [text-shadow:1px_1px_1px_black] font-[cursive]">
            Offers
        </h1>

        <div className="grid grid-cols-4 md:grid-cols-4">
  
            <div className="py-3 text-center">
                {/* <a href="#burger"> */}
                    <img src={offers1} alt="" className="mx-auto h-28 cursor-pointer" />
                    <h3 className="mt-2 text-lg cursor-pointer"> Burger 50% off </h3> 
                {/* </a> */}
            </div>

            <div className="py-3 text-center">
                <img src={offers2} alt="" className="mx-auto h-28 cursor-pointer" />
                <h3 className="mt-2 text-lg cursor-pointer">Free Delivery</h3>
            </div>

            <div className="py-3 text-center">
                {/* <a href="#fries"> */}
                    <img src={offers3} alt="" className="mx-auto h-28 cursor-pointer" />
                    <h3 className="mt-2 text-lg cursor-pointer">Burger free fries</h3>
                {/* </a> */}
            </div>

            <div className="py-3 text-center">
                <img src={offers4} alt="" className="mx-auto h-28 cursor-pointer" />
                <h3 className="mt-2 text-lg  cursor-pointer">Burger with free cold drink</h3>   
            </div>

        </div>
    </section>
  );
};

export default Offers;