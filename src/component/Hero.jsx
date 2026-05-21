import burger from '../images/burger.png'

const Hero = () => {
  return (
    <section className="flex px-5 py-12 bg-[linear-gradient(110deg,white_68%,#ffc800_32%)] -mt-[5%] lg:-mt-[6%] md:-mt-[9%]">
      <div className='ml-6 mt-[14rem]'>
        <h1 className="text-7xl font-bold font-serif max-[426px]:text-lg">
          Super Delicious <br />
        </h1>
        <span className="text-yellow-500 text-shadow-lg/40 text-7xl font-bold font-serif">Burger</span>

        <p className="mt-4 text-black font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* <div className="mt-6 flex items-center gap-4">
          <button className="bg-black text-white px-8 py-1.5 rounded-lg font-serif">
            Order Now
          </button>
          <span className="font-semibold text-lg">$100.50</span>
        </div> */}
      </div>

        <div className="flex-1 basis-[300px] mt-5">
            <img src={burger} alt="" className="w-[72%] mt-6 md:mt-[8rem] md:ml-[1rem] ml-36 lg:ml-20 lg:mt-20 animate-floatY" />
        </div>
    </section>
  );
};

export default Hero;