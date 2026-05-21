import banner from '../images/banner.png'

const Banner = () => {
  return (
    <section
      className="mt-[100px] w-full h-[60vh] bg-cover bg-center flex flex-col items-center text-center font-serif
      bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/src/images/banner.png')]"
    >

      {/* Content */}
      <h3 className="pt-[132px] text-yellow-400 text-3xl font-bold">
        Other Product
      </h3>

      <p className="text-yellow-400 mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, voluptatibus?
      </p>

      <button className="mt-4 w-[200px] h-[32px] border-2 border-yellow-400 text-yellow-400 transition duration-500 hover:bg-yellow-400 hover:text-white [text-shadow:1px_1px_1px_black]">
        Order Now
      </button>

    </section>
  );
};

export default Banner;