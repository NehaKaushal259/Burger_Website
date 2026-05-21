import cards1 from '../images/cards1.png'
import cards2 from '../images/cards2.png'
import cards3 from '../images/cards3.png'
import cards4 from '../images/cards4.png'
import cards5 from '../images/cards5.png'

const Cards = () => {
  return (
    <section className="mt-[60px] px-16 font-serif mx-20 md:mx-0">

      {/* First Row (2 cards) */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {[{img: cards1, title: "HamBurger"},
          {img: cards2, title: "Pizza"}].map((item, i) => (
          
          <div key={i} className="relative">
            <img src={item.img} alt="" className="w-full" />

            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
              <h3 className="text-yellow-400 font-bold text-2xl -mt-40 md:text-2xl md:-mt-14">
                {item.title}
              </h3>
              <p className="text-yellow-400 font-bold md:text-md">
                Lorem ipsum dolor sit amet.
              </p>

              <button className="mt-3 w-[150px] h-[32px] border-2 border-yellow-400 text-yellow-400 font-bold transition duration-500 hover:bg-yellow-400 hover:text-white">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row (3 cards) */}
      <div className="grid md:grid-cols-3 md:gap-3 gap-6 mt-[30px]">
        
        {[{img: cards3, title: "Italian Pizza"},
          {img: cards4, title: "Fried Chicken"},
          {img: cards5, title: "Cheese Burger"}].map((item, i) => (
          
          <div key={i} className="relative">
            <img src={item.img} alt="" className="w-full" />

            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
              <h3 className="text-yellow-400 font-bold text-xl md:text-md">
                {item.title}
              </h3>
              <p className="text-yellow-400 font-bold md:text-sm">
                Lorem ipsum dolor sit amet.
              </p>

              <button className="mt-3 w-[150px] md:w-[8rem] h-[32px] border-2 border-yellow-400 text-yellow-400 font-bold transition duration-500 hover:bg-yellow-400 hover:text-white">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Cards;